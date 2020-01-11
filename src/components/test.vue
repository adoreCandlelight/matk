<template>
    <div>
        <div class="iconTest">
            <!-- <i class="el-icon-edit"></i> -->
            <i class="el-icon-error"></i>
        </div>
        
        <span class="box">
            <div class="leftArea">
                <el-button @click="showContract()">
                    show contract
                </el-button>
                left
            </div>
            <div class="rightArea" v-show="isShow">
                <el-select v-model="selectedAdvanced" style="width:100%;">
                                    <el-option
                                        v-for="item in advancedOptions"
                                        :key="item.value"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
            </div>
        </span>
      
         
       <div>
        <h2 id="scrollTest">test scroll</h2>
        <button @click="getScroll()">scroll</button>
        <div style="height: 500px;"></div>

        <transition name="fade">
            <div v-show="backTopShow" id="backToTop" @click="scroll_to(0)">
                <i class="el-icon-caret-top"></i>
            </div>
        </transition>
       </div>
        
    </div>  
</template>

<script>
import { log } from 'util';
import Seqlogo from '../assets/js/jseqlogo.js'
import Enrichment from '../assets/js/Enrichment.js'
const axios = require('axios');
// import jQuery from 'jquery'

// jQuery(function(){
//     jQuery(document).ready(function(){
//         jQuery("#testJQ").click(function(){
//             jQuery("#hideThing").slideDown("slow");
//         });
//     });
// });

export default {
    data() {
        return {
            isShow: false,
            backTopShow: false,
            genome: "hg19",
            upload_time: "",
            scrollTrigger: 100,
            
            // offset_top: 0,
            // offset_Top: document.getElementById('scrollTest').offsetTop,
            offset_Top: 0,
            loadingExample: true,
            hide: false,
            pieLoading: true,
            show: true,
            format:'',
            loadingSeen: true,
            resultLoading: true,

            pieTitle: 'the distribution of m6A sites in exonic',
            legendList: ["stop codon", "3'-UTR", "CDS", "5'-UTR"],
            exonLegend: ["coding exonic", "coding intronic", "noncoding exonic", "noncoding intronic", "intergenic"],
            xAXisList: ["5'-UTR",  "CDS", "stop codon", "3'-UTR"],
            barTitle: 'the enrichment ratio of m6A sites',
            exonDistributionTitle: 'the distribution of m6A sites in chromosome',

            ratio:[0.552, 1.112, 4.584, 0.673],
            pval:{"5'-UTR": 0.9989,
                "CDS": 9.9939e-06,
                "stop codon": 0.0000e+00,
                 "3'-UTR": 1.0000},
            distribution: {"stop_codon": 1649, "3'-UTR": 1193, "CDS": 2727, "5'-UTR": 272},
            distributionArr: [],
            pieData:[
                {value: 1649, name: "stop codon"},
                {value: 3660, name: "3'-UTR"},
                {value: 5374, name: "CDS"},
                {value: 410, name: "5'-UTR"}
            ],

            peak_density_data:[
                ['0', '0.002'], ['1', '0.004'], ['2', '0.006'], ['3', '0.003'], ['4', '0.001'], ['5', '0.0008'], ['6', '0.0005']
            ],
            pre_density_data: [
                 ['0', '0.005'], ['1', '0.01'], ['2', '0.03'], ['3', '0.02'], ['4', '0.012'], ['5', '0.008'], ['6', '0.003']
            ],
            // sites_link: "../assets/logo/newsite3.png"
            sites_link: "#"
            // sites_link: "https://img.zcool.cn/community/01a65658b7895ca801219c776f79ba.jpg"
        }
    },
    methods:{
        showContract() {
            this.isShow = !this.isShow
        },
        showScroll(){
            let scrollTop = document.documentElement.scrollTop
            if (scrollTop > 100) {
                this.backTopShow = true
            } else {
                this.backTopShow = false
            }
            console.log(scrollTop)
        },
        scroll_to(targetY) {
            // var currentY = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset 
            // console.log(currentY)
            // let distTotal = currentY - targetY
            // let dist = Math.ceil(distTotal/10)
            var mytimer = setTimeout(() => {
                var currentY = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset 
                const step = 40 //步长系数 即剩余的距离除以40 每1ms 移动一段距离
                console.log(currentY)
                let distTotal = currentY - targetY
                let dist = Math.ceil(distTotal / step)
                var nextY = currentY - dist
                window.scrollTo(0, nextY)
                // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
                if (distTotal < 10) {
                    console.log(distTotal)
                    console.log(dist)
                    console.log("go to top")
                    window.scrollTo(0, targetY)
                } else {
                    this.scroll_to(targetY)
                    
                }
            }, 1);
        },
        backTop() {
            var scrollTrigger = 100
            // var scrollHere = document.documentElement.scrollTop
            // var scrollHere = document.body.scrollTop
            var scrollHere = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
            // if (scrollHere > scrollTrigger) {
            //     window.scrollTo(0,100)
            // }
            // var scrollHere = window.scrollTo(0)
            console.log(scrollHere)
        },
        getEnrichChart() {
            // Enrichment.testPie("testpie")
            // console.log("piechart")
            // this.format = 'bed'
            // if (this.format == "bed") {
            //     document.getElementById('isbed').style.display="block"
            // }
            /*
            this.distributionArr.push({value: this.distribution["stop_codon"], name: "stop codon"});
            this.distributionArr.push({value: this.distribution["3'-UTR"], name: "3'-UTR"});  
            this.distributionArr.push({value: this.distribution["CDS"], name: "CDS"});  
            this.distributionArr.push({value: this.distribution["5'-UTR"], name: "5'-UTR"});

            console.log(this.distributionArr)
            */
            // Enrichment.enrichPieChart("distributionPie", this.pieTitle, this.legendList, this.distributionArr)
          
          // console.log(this.enrichRatioArr)
            Enrichment.enrichBar("distributionBar", this.barTitle, this.xAXisList, this.ratio, this.pval)
          // console.log("enrich bar")
            // Enrichment.enrichPieChart("exonDistribution", this.exonDistributionTitle, this.legendList, this.distributionArr)

            // Enrichment.enrichPieChart("test", "m6a sites distribution", this.legendList, this.distributionArr)
            // console.log("pie pie")
            // Enrichment.enrichBar("distributionBar", "enrinch ratio", this.xAXisList, this.ratio, this.pval)
            // console.log("bar bar")
            // Enrichment.enrichPieChart("exonDistribution", "m6a sites distribution", this.legendList, this.distributionArr)
            // console.log("pie2 pie2")
            // this.pieLoading = false
        },
        strtest() {



            /*var gtfurl ='http://newnewmatk.renlab.org/annotation/Homo_sapiens.GRCh37.sorted.gtf.gz'
            var index_gtfurl = gtfurl + '.tbi'
            console.log(index_gtfurl)*/
            /*axios.get("/static/php/get_cname.php").then(
			(res)=>{
				uid = res.data.cname 
				console.log(uid);
				// setCookie("cname", uid, 7);
			}) .catch(function(err) {
				console.log(err)
			}
		);*/
        },
        dosomething() {
            console.log('111')
        },
        showRemove() {
            console.log('222')
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
                        fontWeight: 'bold'
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
                            { xAxis: 2 },
                            { xAxis: 4 },
                        ]
                    }
                    //  label: {
                    //   show: true,
                    //   position: ['50%', '50%']

            
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
        getigv() {
            var igvDiv = document.getElementById("igv-div");
            var options = {
                // genome: "hg19",
                genome: {
                            "id": "hg19",
                            "name": "Human (CRCh37/hg19)",
                            "fastaURL": "https://s3.amazonaws.com/igv.broadinstitute.org/genomes/seq/hg19/hg19.fasta",
                            "indexURL": "https://s3.amazonaws.com/igv.broadinstitute.org/genomes/seq/hg19/hg19.fasta.fai",
                            "cytobandURL": "https://s3.amazonaws.com/igv.broadinstitute.org/genomes/seq/hg19/cytoBand.txt",
                            /*"tracks": [
                            {
                                "name": "Refseq Genes",
                                "format": "refgene",
                                "url": "https://s3.amazonaws.com/igv.org.genomes/hg19/refGene.sorted.txt.gz",
                                "indexURL": "https://s3.amazonaws.com/igv.org.genomes/hg19/refGene.sorted.txt.gz.tbi",
                                "visibilityWindow": -1,
                                "removable": false,
                                "order": 1000000
                            }
                            ]*/
                        },
                // name: 'ensembl gene',
                locus: '22:16052542',
                tracks:[
                    /*
                    {                                          
                        type: "annotation",
                        format: "gtf",
                        url: "/api/annotation/Homo_sapiens.GRCh38.sorted.gtf.gz",
                        indexURL: "/api/annotation/Homo_sapiens.GRCh38.sorted.gtf.gz.tbi",
                        displayMode: "EXPANDED",
                        name: "hg38",
                        visibilityWindow: 10000000
                    },*/
                   {
                    type: 'annotation',
                    format: 'gtf',
                    
                    url: 'https://s3.amazonaws.com/igv.broadinstitute.org/annotations/hg19/genes/gencode.v24lift37.annotation.sorted.gtf.gz',
                    indexURL: "https://s3.amazonaws.com/igv.broadinstitute.org/annotations/hg19/genes/gencode.v24lift37.annotation.sorted.gtf.gz.tbi",
                    
                    // indexURL: '../assets/gtf/Homo_sapiens.GRCh38.sorted.gtf.idx',
                    order: 1000000,
                    displayMode: 'EXPANDED',
                    visibilityWindow: 10000000,
                    // indexed: false,
                    // indexURL: "https://s3.amazonaws.com/igv.broadinstitute.org/genomes/seq/hg38/hg38.fa.fai",
                    // name:'chr22',
                    name: "Homo_sapiens.GRCh37(gtf)",
                }

                ]
            }
            igv.createBrowser(igvDiv, options).then(function (browser){
                console.log(browser)
            })
        },
        getigv_test() {
            var genome_info = "hg19_22:16123108"
            var genome_info_arr = genome_info.split("_")
            var genome = genome_info_arr[0]
            console.log(genome)
            var chr_start = genome_info_arr[1]
            console.log(chr_start)
        },
        getseqlogo() {
            var columns = [
                [["A", 0.5], ["C", 0.8],  ["G", 0.01], ["T", 0.2]],
                [["A", 1.0], ["C", 0.05], ["G", 0.0],  ["T", 0.0]],
                [["A", 0.0], ["C", 0.2],  ["G", 0.0],  ["T", 0.45]],
                [["A", 0.1], ["C", 0.0],  ["G", 0.7],  ["T", 0.0]],
                [["A", 0.0], ["C", 0.5],  ["G", 0.0],  ["T", 0.3]],
                [["A", 0.0], ["C", 0.05], ["G", 0.3],  ["T", 0.0]],
                [["A", 0.0], ["C", 0.0],  ["G", 0.84], ["T", 0.2]],
            ];

            var options = {
                "ymax": 1
            };

            Seqlogo.sequence_logo(document.getElementById("logo_canvas"), 600, 200, columns, options);
        },
        getScroll() {
            // var scrolltop = document.getElementById('scrollTest').offsetTop
            // console.log(scrolltop)
            console.log(this.offset_Top)
        },
        noDataTip() {
            this.$message({
                showClose: true,
                message: 'There is no data uploaded!',
                type: 'warning'
            });
        },
        getLocalTime() {
            var localTime = '';
            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth() + 1;
            var date = today.getDate();
            if (month < 10) {
                month = "0" + month
            }
            if (date < 10) {
                date = "0" + date
            }
            var hour = today.getHours();
            var minute = today.getMinutes();
            var seconds = today.getSeconds();
            localTime = year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + seconds;
            // console.log(localTime)
            return localTime
        }, 
        testTime() {
            this.upload_time = this.getLocalTime()
            var subtime = this.upload_time
            var formvalues = {time: this.upload_time}
            console.log("first: ")
            console.log(formvalues)
            this.upload_time = ""
            console.log("second: ")
            console.log("subtime: " + subtime)
            console.log("upload_time: " + this.upload_time)
            formvalues = {time: "nothing"}
            console.log(formvalues)
        }
    },
    computed: {
        // scrollTrigger: function() {
        //     // this.offset_Top = document.getElementById('scrollTest').offsetTop
        //     // console.log(this.offset_Top)
        //     return this.offset_Top
        // }
    },
    watch: {
        
        scrollTrigger: function (val) {
            console.log(val)
            var scrollNow = document.documentElement.scrollTop
            if (scrollNow > val) {
                console.log("it's time to show")
            } else {
                console.log("time is not ready")
            }
        }
    },
    mounted() {
        
        // this.getEnrichChart()
        window.addEventListener("scroll", this.showScroll)
        // console.log(this.pval)
    },
}

</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
}
// .box {
//     display: block;
// }
.leftArea{
    // display: inline;
    float: left;
    // width: 30%;
    margin-top: 27px;
    min-width: 200px;
    width: 30%;
    background-color: yellowgreen;
}
.rightArea{
    // display: inline;
    float:left;
    width:70%;
    margin-top: 27px;
    background-color: blue;
}
.iconTest {
    margin: 10px 20%;
    color: red;
    font-size: 40px;
}
// .fade-enter, .fade-leave-to {
//     opacity: 0;
// }
.textfont {
    font-size: 17px;
    font-family:inherit;
}
.textAlign {
    // text-align: justify;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}
#onscrollTest {
    overflow: scroll;
}
#backToTop {
    position: fixed;
    bottom: 80px;
    right: 50px;
    z-index: 999;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 20px;
    background-color:slategrey;
    color: #000000;
    align-items: center;
    text-align: center;
    // vertical-align: bottom;
    display: flex;
    justify-content: center;
    box-shadow: 0 0 6px rgba(0,0,0,.12);
    cursor: pointer;
    // opacity: 0;
}
.optionTitle {
    font-size: 2rem;
}
.tooltips {
    font-size: 15px;
}

.bgcolor {
    background-color: red;
}
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
.viewLink {
  color:cornsilk;
  font-size: 17px;
  // padding: 8px 12px;
}
.viewButton{
//   padding: 4px;
//   width: 60%;
//   height: 100%;
    padding: 4px 16px;
     
}
.view_icon2 {
    font-size: 25px;
}
.view_icon {
    color: #409EFF;
    font-size: 25px;
}
.error {
    // color: red;
    font-size: 16px;
    padding: 4px;
}
.error2 {
    font-size: 30px;
    color: red;
}
.card {
  margin-top: 20px;
  font-family: Arial, Helvetica, sans-serif;
}
.allLoading {
    height: 800px;
}
#isbed {
    display: none;
}
#density{
    // padding: 15px 25%;
    margin:15px 22% 0 22%;
}
#densityCanvas {
    margin-top: -20px;
    margin-left: 22%;
    // display: block;
}
.download_link {
    color:cornsilk;
}
.test {
    background-color: blue;
    margin-top: -200px;
    height: 100px;
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
    // display: inline;
}
#myCanvas {
    display: block;
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
#logo_png {
    // height: 55%;
    // width: 55%;
    width: 750px;
    height: 450px;
    // min-width: 40%;
    // // min-height: 40%;
    // height: auto;
}
.card {
  margin-top: 20px;
};
.secondTitle {
  color: deepskyblue;
};
#distributionRatio {
    margin: 0 8%;
}
#bar {
    // float: right;
    margin-left: 10%;
    width: 510px;
    
}

.content {
    margin: 5% 8%;
}
.card {
  margin-top: 20px;
  font-family: Arial, Helvetica, sans-serif;
};
.pieChart {
    margin: 20px 18%;
}
.barChart {
    margin: 20px 28%;
}
.testLoading {
    height: 300px;
    background-color: aquamarine;
}
</style>