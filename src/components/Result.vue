<template>
  <div>
    <div>
      <v-header></v-header>
    </div>
     <div>
        <v-back-to-top></v-back-to-top>
     </div>
    <div class="content">
      <el-card class="title card">
        <router-link class="title-link" to="/server">
          <strong><i class="el-icon-back"></i>&nbsp;Back to previous</strong> 
        </router-link>
      </el-card>
      <el-card class="card allLoading" v-if="loadingSeen" v-loading="resultLoading">

      </el-card>
       <!-- fasta分析展示结果 -->
      <div v-if="analysis_format == 'fasta'">
        <el-card class="card">
          <div class="secondTitle">
            <h2><i class="el-icon-date"></i>&nbsp;Summary Table</h2>
          </div>
          <!-- 搜索框和下载功能 -->
          <div class="tableOption">
            <el-input v-model="search" class="searchArea" @change="searchFastaFilter()"
            placeholder="Search Sites' Name">

            </el-input>
            <el-button type="primary" class="downloadTable">
              <a :href="'http://matk.renlab.org/userfiles/' + result_link" download="m6a_sites.bed" class="download_link">
                <i class="el-icon-download"></i>&nbsp;Download
              </a>
            </el-button>
          </div>
          <div class="tableArea" v-loading="fastaLoading">
            <table class="table table-hover sumtable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Sequence</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in filterTable.slice((currpage-1)*pagesize, currpage*pagesize)">
                  <td>{{item.Name}}</td>
                  <td>{{item.Position}}</td>
                  <td>
                    {{item.Seq_left}}<span class="motifArea">{{item.Seq_mid}}</span>{{item.Seq_right}}
                  </td>
                  <td>{{item.Score}}</td>
                </tr>
              </tbody>
            </table>
            <!-- 分页展示表格内容 -->
            <el-pagination
              class="page"
              background
              layout="prev, pager, next"
              :current-page="currpage"
              :page-size="pagesize"
              :total="tableTotal"
              @current-change="handleCurrentChange"
              > 
            </el-pagination>
          </div>
        </el-card>
      </div>
       <!-- fasta分析展示结果 -->

      <!-- <div v-if="analysis_format == 'bed'"> -->
      <!-- v-if和v-show与echarts兼容性存在问题，直接用js控制元素的显示与隐藏 -->
      <div id="bedResult">
        <el-card class="card">
          <div class="secondTitle">
            <h2><i class="el-icon-date"></i>&nbsp;Summary Table</h2>
          </div>
          <!-- 搜索框和下载功能 -->
          <div class="tableOption">
            <el-input v-model="search" class="searchArea" @change="searchFilter()"
            placeholder="Search Chromosome/Gene Name/ID">

            </el-input>
            <el-button type="primary" class="downloadTable">
              <a :href="'http://matk.renlab.org/userfiles/' + result_link" download="m6a_sites.bed" class="download_link">
                <i class="el-icon-download"></i>&nbsp;Download
              </a>
            </el-button>
          </div>
          <div class="tableArea" v-loading="bedTableLoading">
            <table class="table table-hover sumtable">
              <thead>
                <tr>
                  <th>Chr</th>
                  <th>Start Site</th>
                  <th>Stop Site</th>
                  <th>Gene Name</th>
                  <th>ID</th>
                  <th>Score</th>
                  <th>Strand</th>
                  <th>Visualization</th>
                </tr>
              </thead>
              <tbody v-for="item in filterTable.slice((currpage-1)*pagesize, currpage*pagesize)">
                <tr>
                  <td>{{item.chrom}}</td>
                  <td>{{item.start}}</td>
                  <td>{{item.stop}}</td>
                  <td>{{item.gene_name}}</td>
                  <td v-if="item.gene_id != 'Unknown'">
                    <el-link target="_blank" class="gene_link"
                    :href="'http://asia.ensembl.org/' + speice_link + '/Gene/Summary?db=core;g=' + item.gene_id" type="primary">
                      {{item.gene_id}}
                    </el-link>
                  </td>
                  <td v-if="item.gene_id == 'Unknown'">
                    <el-link type="primary" class="gene_link">Unknown</el-link>
                  </td>
                  <td>{{item.score}}</td>
                  <td>{{item.strand}}</td>
                  <td>
                    <el-button class="viewButton">
                     <!-- <router-link target="_blank" :to="'/igv/'+genome+'_'+item.chrom+'_'+item.start+'_'+item.stop+'_'+item.gene_name+'_'+item.gene_id+'_'+item.score+'_'+item.strand+'_'+submittime"> -->
                     <router-link target="_blank" :to="'/igv/'+genome+'_'+item.chrom+'_'+item.start+'_'+submittime">
                      <i class="el-icon-view view_icon"></i>
                     </router-link>
                    </el-button>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- 分页展示表格内容 -->
            <el-pagination
              class="page"
              background
              layout="prev, pager, next"
              :current-page="currpage"
              :page-size="pagesize"
              :total="tableTotal"
              @current-change="handleCurrentChange"
              > 
            </el-pagination>
          </div>
        </el-card>
        <!-- 预测位点密度图 -->
        <el-card class="card">
          <div class="secondTitle">
            <h2><i class="el-icon-picture-outline"></i>&nbsp;Density Diagram</h2>
          </div>
          <div class="densityArea" v-loading="densityLoading">
            <div id="density" style="height: 450px; width: 660px;"></div>
            <canvas id="densityCanvas" style="height: 200px; width: 660px;"></canvas>
            <div class="density_label" v-if="densitySeen">
              <span class="utr5">5'-UTR</span>
              <span class="cds">CDS</span>
              <span class="utr3">3'-UTR</span>
            </div>  
          </div>
        </el-card>
        <!-- m6a 预测位点 sequence logo -->
        <el-card class="card">
          <div class="secondTitle">
            <h2><i class="el-icon-location-outline"></i>&nbsp;Sequence Logo</h2>
          </div>
          <div class="seqlogo" v-loading="seqlogoLoading">
            <img id="logo_png" :src='sites_link' alt="">
          </div>
        </el-card> 

        <el-card class="card">
          <div class="secondTitle">
            <h2><i class="el-icon-pie-chart"></i>&nbsp;Sites Distribution</h2>
          </div>
          
          <div class="enrich" v-loading="enrichLoading">
          <!-- <div> -->
            <div class="pieChart">
              <div id="distributionPie" style="height: 450px;"></div>  
            </div>
            <!-- <div class="barChart">
              <div id="distributionBar" style="height: 450px; width: 510px;"></div> 
            </div> -->
            <div class="pieChart">
              <div id="exonDistribution" style="height: 450px;"></div> 
            </div>
          </div>
            <!-- <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div id="distributionPie" style="height: 450px;"></div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div id="distributionBar" style="height: 450px; width:510px;"></div>
              </div>
            </div>

            <div id="exonDistribution" style="height: 450px;"></div>
            
          </div> -->
        </el-card>
        <el-card class="card">
          <div class="secondTitle">
            <h2><i class="el-icon-s-data"></i>&nbsp;Enrichment Bar</h2>
          </div>
          <div class="barChart">
              <div id="distributionBar" style="height: 450px; width: 510px;"></div> 
            </div>
        </el-card>
      </div>
        
    </div> 
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import BackToTop from './BackToTop.vue';
import Cookie from '../assets/js/Cookie.js';
import Enrichment from '../assets/js/Enrichment.js';

const axios = require('axios');

export default {
  data() {
    return {
      loadingSeen: true,
      resultLoading: true,
      fastaLoading: true,
      bedTableLoading: true,
      densityLoading: true,
      seqlogoLoding: true,
      enrichLoading: true,

      // cname: '',
      submittime: '',

      genome: '',
      speice_link: '',
      search: '',
      m6aData: [],
      filterTable: [],
      analysis_format: '',
      currpage: 1,
      pagesize: 10,
      tableTotal: 0,

      result_link: "",

      pre_density_data: [],
      peak_density_data: [],
      densitySeen: false,

      sites_link: '',

      distributionArr : [],

      enrichRatioArr : [],
      pValueObj : {},
      exonIntroArr : [],
      pieTitle: 'the distribution of m6A sites in exonic',
      legendList: ["stop codon", "3'-UTR", "CDS", "5'-UTR"],
      exonLegend: ["coding exonic", "coding intronic", "noncoding exonic", "noncoding intronic", "intergenic"],
      xAXisList: ["5'-UTR",  "CDS", "stop codon", "3'-UTR"],
      barTitle: 'the enrichment ratio of m6A sites',
      exonDistributionTitle: 'the distribution of m6A sites in chromosome'

    }
  },
  components: {
    'v-header': Header,
    'v-footer': Footer,
    'v-back-to-top': BackToTop     
  },

  methods: {
    get_result() {
      this.submittime = this.$route.params.aid;
      var uid = Cookie.getCookie("cname")
      var config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          };
      var qs = require('qs')
      var userinfo = { username: uid, upload_time: this.submittime }
      var resultdata = qs.stringify(userinfo, {arrayFormat: 'repeat'})
      axios.post('./php/get_result.php', resultdata, config).then((res)=>{
        console.log(res)
        this.loadingSeen = false
        this.result_link = res.data.result_link
        this.analysis_format = res.data.format
        this.m6aData = res.data.analysis_result
        this.filterTable = this.m6aData
        this.tableTotal = this.m6aData.length
        
        this.fastaLoading = false
        this.bedTableLoading = false

        if (res.data.format == 'bed') {
          document.getElementById('bedResult').style.display="block"
          
          this.genome = res.data.genome
          this.speice_link = res.data.speice_link
          this.sites_link = res.data.sites_png_url
          
          this.seqlogoLoding = false

          this.distributionArr.push({"value": res.data.distribution["stop_codon"], "name": "stop codon"});
          this.distributionArr.push({"value": res.data.distribution["3'-UTR"], "name": "3'-UTR"});  
          this.distributionArr.push({"value": res.data.distribution["CDS"], "name": "CDS"});  
          this.distributionArr.push({"value": res.data.distribution["5'-UTR"], "name": "5'-UTR"});

          this.exonIntroArr.push({"value": res.data.exon_intro_count["codingExonCount"], "name": "coding exonic"})
          this.exonIntroArr.push({"value": res.data.exon_intro_count["codingIntroCount"], "name": "coding intronic"})
          this.exonIntroArr.push({"value": res.data.exon_intro_count["noncodingExonCount"], "name": "noncoding exonic"})
          this.exonIntroArr.push({"value": res.data.exon_intro_count["noncodingIntroCount"], "name": "noncoding intronic"})
          this.exonIntroArr.push({"value": res.data.exon_intro_count["intergenicCount"], "name": "intergenic"})
          
          this.pValueObj = res.data.enrichPvalue
          this.enrichRatioArr = res.data.enrichRatio

          Enrichment.enrichPieChart("distributionPie", this.pieTitle, this.legendList, this.distributionArr)
          
          // console.log(this.enrichRatioArr)
          Enrichment.enrichBar("distributionBar", this.barTitle, this.xAXisList, this.enrichRatioArr, this.pValueObj)
          // console.log("enrich bar")
          Enrichment.enrichPieChart("exonDistribution", this.exonDistributionTitle, this.exonLegend, this.exonIntroArr)

          this.enrichLoading = false

          // console.log('it is bed result')
          // 如果为bed格式注释则继续，请求进行绘图分析
          axios.post('./php/get_density.php', resultdata, config).then((res)=>{
            // console.log(res)
            this.pre_density_data = res.data.pre_density_arr
            this.peak_density_data = res.data.peak_density_arr
            this.densityEchart()
            this.densitySeen = true
            this.densityLoading = false
          }) .catch((err)=>{
            console.log(err)
          })
          
        }
      }) .catch((err)=>{
        console.log(err)
      })

    },
    handleCurrentChange(cpage) {
			this.currpage = cpage;
    },
    densityEchart() {
      var getDensity = this.$echarts.init(document.getElementById('density'));
        var option = {
            title: {
              top: 0,
              text: 'Peaks with m6A sites',
              x: 'center',
              textStyle: {
                fontFamily: 'Arial',
                fontSize: 28,
                fontWeight: 'bold'
              }
            },
            tooltip: {
              trigger: 'axis',
              // formatter: "{a} <br/>{b} : {c} ({d}%)",
              axisPointer: {
                type: 'none',
                lineStyle: {
                  type: 'dashed'
                }
              }
            },
            grid: {
              top: 85,
              left: 90
            },
            legend: {
                // orient: 'horizontal',
                orient: 'vertical',
                left: '16%',
                top: 35,
                textStyle: {
                fontSize: 18,
                fontWeight: 'bold',
                fontFamily:'Arial',
              },
                data: ['m6A sites', 'm6A peaks']
            },
            toolbox: {
                show: true,
                x: 'right',
                y: 'top',
                feature: {
                  saveAsImage: {
                    show: true,
                    excludeComponents: ['toolbox'],
                    title: 'save as png',
                    pixelRatio: 2
                  }
                }
            },
            xAxis: {
                type: 'value',
                axisTick: {
                  show: false
                },
                axisLabel: {
                  show: false
                },
                splitLine: {
                  show: false
                }
            },
            yAxis: {
                type: 'value',
                name: 'Density',
                nameLocation: 'middle',
                nameGap: 52,
                nameTextStyle: {
                  fontSize: 23,
                  fontWeight: 'bold',
                  fontFamily:'Arial'
                },
                axisLabel: {
                  fontSize: 16,
                  fontFamily:'Arial'
                  // fontWeight: 'bold'
                },
                splitLine: {
                    show: false
                }
            },
            series: [
                {
                    name: 'm6A sites',
                    data: this.peak_density_data,
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    markLine: {
                        silent: true,
                        lineStyle: {
                            color: '#909399'
                        },
                        label: {
                            show: false
                        },
                        symbol: ['none', 'none'],
                        // precision: 1
                        data: [
                            { xAxis: 100 },
                            { xAxis: 200 },
                        ]
                      }
                },
                {
                    name: 'm6A peaks',
                    data: this.pre_density_data,
                    type: 'line',
                    symbol: 'none',
                    smooth: true,
                    markLine: {
                        silent: true
                    }
                }
            ]
          }
        getDensity.setOption(option);
        this.densityMark()
    },
    densityMark() {
        var mark = document.getElementById("densityCanvas")
        var utrs = mark.getContext("2d")
        utrs.fillRect(40, 4, 79, 8)
            // var utr5_text = mark.getContext("2d")    
        utrs.font="12px Arial bolder"
            // utrs.line-height='20px'
        // utrs.fillText("5'-UTR", 45, 36)

            // var mark2 = document.getElementById("densityCanvas")
        var utrcds = mark.getContext("2d")
        // utrcds.fillText("CDS", 135, 36)
        utrcds.fillStyle="#909399"
        utrcds.fillRect(116, 0, 79, 16)
            
            // utrcds.font="17px Arial"
            // var mark3 = document.getElementById("densityCanvas")
        var utr3 = mark.getContext("2d")
        utr3.fillStyle="#000"
        utr3.fillRect(195, 4, 76, 8)
        // utr3.fillText("3'-UTR", 210, 36)
            // utr3.font="17px Arial"
    },
    searchFastaFilter() {
      if (this.search == '') {
        this.filterTable = this.m6aData
      } else {
        var searchText = this.search.toString().toLowerCase()
        this.filterTable = this.m6aData.filter(function(item){
          let filter1 = item.Name.toLowerCase().indexOf(searchText)
          return filter1 !== -1
        })
      }
      this.tableTotal = this.filterTable.length;
    },
    searchFilter() {
      // var that = this
      if (this.search == '') {
        this.filterTable = this.m6aData
      } else {
        var searchText = this.search.toString().toLowerCase()
        this.filterTable = this.m6aData.filter(function(item){
          var filter1 = 0
          if (item.chrom.toLowerCase() != searchText) {
            filter1 = -1
          }
          let filter2 = item.gene_name.toLowerCase().indexOf(searchText)
          let filter3 = item.gene_id.toLowerCase().indexOf(searchText)
          return filter1 !== -1 || filter2 !== -1 || filter3 !== -1 
        })
      }
      this.tableTotal = this.filterTable.length
    },
  },

  mounted() {
    // this.cname = Cookie.getCookie("cname")
    this.get_result()
   
  }

    
}
</script>

<style lang="scss" scoped>
.content {
  margin: 5% 8%;
};
.title-link {
  font-size: 2.8rem;
  text-decoration: none;
  color:deepskyblue;
};
#bedResult {
  display: none;
}
.card {
  margin-top: 20px;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  // font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
};
.allLoading {
  height: 600px;
}
.secondTitle {
  color: deepskyblue;
};
.tableOption {
  margin: 30px 5.5%;
}
.searchArea {
  width: 40%;
}
.tableArea {
  margin: 15px 5.5%;
};
.sumtable {
  text-align: center;
}
.sumtable thead tr th {
  vertical-align: middle;
  font-size: 2rem;
  // font-weight: bold;
  color:dimgray;
  text-align: center;
}
.sumtable tbody tr td {
  vertical-align: middle;
  // font-weight: 400;
  font-size: 17px;
}
.motifArea {
  color: red;
}
.gene_link {
  font-size: 17px;
}
.viewLink {
  color:cornsilk;
  font-size: 17px;
  // padding: 8px 12px;
}
.download_link {
  color:cornsilk;
  font-size: 16px;
}
.viewButton{
  padding: 4px 16px;
}
.view_icon {
    color: #409EFF;
    font-size: 25px;
}
.downloadTable {
  float: right;
}
.page {
  float: right;
  margin: 10px;
}
#density {
  margin: 15px 22% 0 22%;
}
#densityCanvas {
  margin-left: 22%;
}
.density_label {
    // background-color: blue;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: -185px;
    margin-left: 22%;
    height: 100px;
    font-size: 23px;
    font-weight: bold;
    color: #333;
}
.utr5 {
    padding-left: 130px;
}
.cds {
    padding-left: 105px;
}
.utr3 {
    padding-left: 105px;
}
.seqlogo {
    margin-left: 18%;
}
.pieChart {
    margin: 10px 18% 25px 18%;
}
.barChart {
    margin: 16px 26%;
}
#logo_png {
  width: 750px;
  height: 450px;
}
#distributionRatio {
  margin: 0 8%;
}
#distributionBar {
  margin-left: 10%;
}
#exonDistribution {
  margin-left: 4%; 
}
</style>
