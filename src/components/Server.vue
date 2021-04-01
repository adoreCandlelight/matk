<template>
    <div>
        <div>
            <v-header></v-header>
        </div>
        <div class="content">
            <div class="inputArea">
                <div class="dataTip">
                    <span class="dataTitle"><i class="el-icon-document"></i>&nbsp;Data Input</span> 
                    <span class="tips">&nbsp;paste or upload to get started!</span>
                    <hr>
                    <br />   
                    <br />
                </div> 
                <div class="row">
                    <div class="col-md-6 col-sm-6 subarea">
                        <div v-loading="loadingExample" 
                            element-loading-text="Loading..."
                            element-loading-background="rgba(0, 0, 0, 0)">
                            <textarea class="form-control" id="exampleTip" rows="8" v-model="example" @change="removeFile()"
                                placeholder="Please paste your BED and FASTA format data here">
                            </textarea>
                        </div>
                        <br />
                        <label for="inputExample" class="example">Example:</label>
                        <el-button-group id="inputExample">
                            <el-button type="info" class="buttonText" @click="getExample('bed')">BED example</el-button>
                            <el-button type="info" class="buttonText" @click="getExample('fasta')">FASTA example</el-button>
                            <el-button type="info" class="buttonClear" @click="Clear()"><i class="el-icon-delete"></i>&nbsp;Clear</el-button>
                        </el-button-group>
                    </div>
                    <div class="col-md-6 col-sm-6 subarea">
                            <div class="upfile">
                                <label for="fileArea">Or select local files to upload:</label>
                                <el-progress :percentage="curProgress" :stroke-width="18" :color="progressColor"></el-progress>
                                <br />
                                <Upload  id="fileArea" action="#" :before-upload="precheckFile">
                                    <el-button type="primary">
                                        <i class="el-icon-upload"></i>
                                        <span class="uploadText">&nbsp;Upload Local File</span>
                                    </el-button>
                                </Upload>
                                <div>
                                    <span class="fileTip">&nbsp; * Must be BED/FASTA file, and no more than 20M!</span>
                                </div>
                                <br />
                                <div v-if="fileSeen" :class="{fileList: isfileList}" @mouseover="isfileList=true" @mouseout="isfileList=false">
                                    <span><i class="el-icon-document"></i>&nbsp;{{fileName}}</span>
                                    <span class="removePosition"><i class="el-icon-error" @click="removeFile()"></i></span>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div class="optionArea">
                <div class="dataTip">
                    <span class="dataTitle"><i class="el-icon-setting"></i>&nbsp;Options</span> 
                    <hr>
                    <br />
                </div> 
                <div class="row">
                    <div class="col-md-6 col-sm-6 subarea">
                        <label for="genome" class="optionTitle">Genome:</label>
                        <!-- <br /> -->
                        <el-select v-model="selectedGenome" id="genome" style="width:100%;" @change="assemblyVersion">
                            <el-option
                            v-for="item in genomeOptions"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <!-- <br /> -->
                        <!-- <br /> -->
                        <label for="threshold" class="optionTitle">Threshold:</label>
                        <!-- <br /> -->
                        <el-select v-model="selectedThreshold" id="threshold" style="width:100%;">
                            <el-option
                            v-for="item in thresholdOptions"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <br />
                        <br />
                        
                    </div>
                    <div class="col-md-6 col-sm-6 subarea">
                        <el-tooltip class="item" placement="top-start">
                            <div slot="content" class="tooltips">
                                For human, we'll convert genome coordinate 
                                <br /> 
                                to hg38 for anatation. Also, we'll convert
                                <br />
                                genome coordinate to mm10 when you 
                                <br /> 
                                choose the species of Mouse!
                            </div>
                            <label for="assembly" class="optionTitle">Assembly:</label>
                        </el-tooltip>                        
                        <el-select v-model="selectedAssembly" id="assembly" style="width:100%;">
                            <el-option
                            v-for="item in assemblyOptions"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <br /> 
                        
                        <div class="advancedArea">    
                            <div class="advancedMaster">
                                <el-button type="info" @click="getAdvanced()">                       
                                    <el-tooltip class="item" placement="top-start">
                                        <div slot="content" class="tooltips">
                                            When you run with FASTA format, you can 
                                            <br /> 
                                            choose to map the fasta sequence to the 
                                            <br />
                                            genome. (default is not mapping)
                                        </div>
                                        <span class="el-dropdown-link optionTitle">
                                            Advanced<i class="el-icon-arrow-down el-icon--right"></i>
                                        </span>
                                    </el-tooltip>
                                </el-button> 
                            </div>
                            <div v-show="isAdvanced" class="advancedDetail">
                                <el-select v-model="selectedAdvanced" style="width:163px;">
                                    <el-option
                                        v-for="item in advancedOptions"
                                        :key="item.value"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>

                        <div class="submitArea">
                            <el-button type="primary" class="submitButton" @click="submitForm()">Submit</el-button>
                        </div>

                    </div>
                </div>           
            </div>
            <div class="resultArea">
                <div class="dataTip">
                    <span class="dataTitle"><i class="el-icon-success"></i>&nbsp;Running Status</span> 
                    <hr>
                    <br />
                </div> 
                <div class="tableInfo">
                    <table class="table table-hover">
                        <thead class="theadTitle">
                            <th>Submit time</th>
                            <th>Status</th>
                            <th>Result</th>
                            <th>Option</th>
                        </thead>
                        <tbody>
                            <tr v-if="tableSeen">
                                <td class="noData" colspan="4">No Data</td>
                            </tr>
                            <tr v-for="(item, key) in tableData" :key="key">
                                <td class="resultItem">{{item.submittime}}</td>
                                <td class="resultItem">{{item.status}}</td>
                                <td class="resultItem" v-if="item.status == 'Running'"><i class="el-icon-loading"></i></td>
                                <td class="resultItem" v-if="item.status == 'Error'"><i class="el-icon-error error_status"></i></td>
                                <td class="resultItem" v-if="item.status == 'Format Error'"><i class="el-icon-error error_status"></i></td>
                                <td class="resultItem" v-if="item.status == 'Complete'">
                                    <el-button type="primary">
                                        <router-link class="viewLink" :to="'/result/' + item.submittime">View</router-link>
                                    </el-button>
                                </td>
                                <!-- 删除记录 -->
                                <td class="resultItem">
                                    <el-popover placement="top" width="220">
                                        <p class="warningColor"><i class="el-icon-warning">&nbsp;Sure to delete?</i></p>
                                        <div>
                                            <el-button @click="visible = false">Cancel</el-button>
                                            <el-button type="primary" @click="delhistory(key, item.submittime)">OK</el-button>
                                        </div>
                                        <el-button slot="reference" type="text" class="deleteHistory">Delete</el-button>    
                                    </el-popover>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <br>
        <br>
        <!-- 测试按钮 -->
        <!-- <div>
            <button class="btn btn-primary" @click="gotest()">go to test!</button>
        </div> -->
        
        <div>
            <v-footer></v-footer>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

const axios = require('axios');
import Cookie from '../assets/js/Cookie.js';
import { setInterval, clearInterval } from 'timers';

export default {
    data() {
        return {
            cname: '', 
            
            example: '',
            loadingExample: false,
            fileSeen: false,
            uploadfile: [],
            fileName: '',
            isfileList: false,
            curProgress: 0,
            progressColor: '#409EFF',

            selectedGenome: 'Human',
            genomeOptions: [
                {value: 'Human'},
                {value: 'Mouse'}
            ],

            selectedThreshold: 'High',
            thresholdOptions: [
                {value: 'High'},
                {value: 'Medium'},
                {value: 'Low'}
            ],

            selectedAssembly: 'GRCH38/hg38',
            assemblyOptions: [
                {value: 'GRCH37/hg19'},
                {value: 'GRCH38/hg38'},
            ],
            humanAssembly: [
                {value: 'GRCH37/hg19'},
                {value: 'GRCH38/hg38'},
            ],
            mouseAssembly: [
                {value: 'NCBI37/GRCm38/mm10'},
                {value: 'NCBIM37/mm9'},
            ],

            selectedAdvanced: 'Default',
            advancedOptions: [
                {value: 'Default'},
                {value: 'Map to genome'},
            ],
            isAdvanced: false,

            last_upload_time: '',

            tableSeen: true,
            tableData: []
        }
    },
    components: {
        'v-header': Header,
        'v-footer': Footer,
         
    },
    methods: {
        getExample(type) {
            document.getElementById("exampleTip").placeholder=""
            this.loadingExample = true
            this.example = ''
            let qs = require('qs')
            var value = {format: type}
            var formValue = qs.stringify(value, {arrayFormat: 'repeat'})
            let config = {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }
            axios.post('/php/getExample.php', formValue, config).then((res)=>{
                this.loadingExample = false
                this.example = res.data
                this.removeFile()
                // console.log(res) 
            }) .catch((err)=>{
                 console.log(err)
            })
        },
        Clear() {
            this.example = ''
            this.loadingExample = false
            document.getElementById("exampleTip").placeholder="Please paste your BED or FASTA format data here"
        },
        clearFile() {
            this.uploadfile = []
        },
        sizeFalseTip() {
            this.$message({
                showClose: true,
                message: "The uploaded file size can't exceed 20MB!",
                type: 'error'
            })
        },
        formatFalseTip() {
            this.$message({
                showClose: true,
                message: "file valid wrong!!! The uploaded file must be Bed or FASTA format!",
                type: 'error'
            });
        },
        formatSuccessTip() {
            this.$message({
                showClose: true,
                message: "files uploaded succeed",
                type: 'success'
            });
        },
        noDataTip() {
            this.$message({
                showClose: true,
                message: 'There is no data uploaded!',
                type: 'warning',
                customClass: "errTip"
            });
        },
        getAdvanced() {
            this.isAdvanced = !this.isAdvanced
        },

        // 动态更新进度条
        changeprogress() {
            var that = this
            var myProgress = setInterval(function(){

            }, 1000)
        },
        //获取本地时间
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
            if (hour < 10) {
                hour = "0" + hour
            }
            var minute = today.getMinutes();
            if (minute < 10) {
                minute = "0" + minute
            }
            var seconds = today.getSeconds();
            if (seconds < 10) {
                seconds = "0" + seconds
            }
            localTime = year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + seconds;
            // console.log(localTime)
            return localTime
        },    
        precheckFile(file) {
            // 上传文件则清空输入框内容
            this.progressColor = "#409EFF"
            this.example = ''
            const isLt20M = file.size / 1024 / 1024 < 20;
            if (!isLt20M) {
                this.progressColor = "red"
                this.sizeFalseTip()
            } else {
                this.uploadfile = file;
                this.fileName = this.uploadfile.name
                this.fileSeen = true

                this.last_upload_time = this.getLocalTime()

                var formfile = new FormData()
                formfile.append('bed_fasta_file', this.uploadfile)
                formfile.append('username', Cookie.getCookie("cname"))
                formfile.append('upload_time', this.last_upload_time)
                let config = {
                    headers:  { 'Content-Type': 'multipart/form-data' }
                }
                var that = this
                axios({
                    url: "/php/reciveFile.php",
                    method: "post",
                    data: formfile,
                    headers:  { 'Content-Type': 'multipart/form-data' },
                    //原生获取上传进度的事件
                    onUploadProgress:function(progressEvent){ 
                        if(progressEvent.lengthComputable) {
                            that.curProgress = (progressEvent.loaded / progressEvent.total * 100).toFixed(1)
                        } 
		            }
                }).then((res)=>{
                    if (res.data == "Format Error") {
                        this.progressColor = "red"
                        this.formatFalseTip()
                    } else {
                        this.curProgress = 100
                        this.formatSuccessTip()
                    }
                }) .catch((err)=>{
                    console.log(err)
                })            
            }
            return false  
        },
        showRemove() {
            this.removeSeen = true
        },
        removeFile() {
            this.uploadfile = [];
            this.fileSeen = false;
            this.curProgress = 0;
            this.last_upload_time = ""
        },

        // 重置参数
        reset(){
            this.selectedGenome = 'Human'
            this.selectedThreshold ='High'
            this.selectedAssembly = 'GRCH38/hg38'
            this.assemblyOptions = this.humanAssembly
            this.selectedAdvanced = 'Default'
            this.isAdvanced = false
        },

        // 根据选择不同的物种来选择相应的版本
        assemblyVersion(version) {
            if (version === 'Mouse') {
                this.selectedAssembly = 'NCBI37/GRCm38/mm10'
                this.assemblyOptions = this.mouseAssembly
            } else {
                this.selectedAssembly = 'GRCH38/hg38'
                this.assemblyOptions = this.humanAssembly
            }
        },
        submitForm() {
            window.scrollTo(0, 110)
            // var uploadTime = ''
            var uid = Cookie.getCookie("cname")
            // console.log(this.uploadfile)
            // console.log(this.example)
            if (this.uploadfile.length == 0 && this.example.trim() == "") {
                this.noDataTip()
            } else {
                if (this.example.trim() != "") {
                    this.last_upload_time = this.getLocalTime()
                } 
                var formValues = {
                    input_bed_fasta: this.example.trim(),
                    genome: this.selectedGenome,
                    assembly: this.selectedAssembly,
                    threshold: this.selectedThreshold,
                    advanced: this.selectedAdvanced,
                    upload_time: this.last_upload_time,
                    username: uid
                }
                // 更新状态栏列表
                var subtime = this.last_upload_time
                this.tableSeen= false
                this.tableData.push({"submittime": subtime, "status": "Running"})
                // 清空选项, 重置参数
                this.example = ''
                document.getElementById("exampleTip").placeholder="Please paste your BED and FASTA format data here"
                this.uploadfile = []
                this.fileSeen = false
                this.curProgress = 0
                this.reset()
                // this.last_upload_time = ''
                console.log('time: ' + this.last_upload_time)
                var qs = require('qs')
                var formdata = qs.stringify(formValues, {arrayFormat: 'repeat'}) 
                var config = {
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                    }
                
                axios.post('/php/user_upload.php', formdata, config).then((res)=>{
                    // console.log(res)
                    this.checkLog()
                    // 上传成功后请求分析，并且更新响应栏状态
                    if (res.data === "Format Error") {
                        this.formatFalseTip()
                    } else {
                        // this.tableSeen = false
                        // this.last_upload_time = res.data.upload_time
                        // this.checkLog()
                        // this.tableData.push()
                        var analysisValues = {
                            username: uid,
                            upload_time: this.last_upload_time,
                            format: res.data
                        }
                        console.log(analysisValues)
                        var analysidata = qs.stringify(analysisValues, {arrayFormat: 'repeat'})
                        axios.post('/php/run_jar_python.php', analysidata, config).then((res)=>{
                            //console.log(res)
                        }) .catch((err)=>{
                            console.log(err)
                        })
                        // 每隔3s检查一次是否分析完成
                        this.checkLog_time()
                    }
                }) .catch((err)=>{
                    console.log(err)
                })
            }
        },
        checkLog() {
            var uid = Cookie.getCookie("cname")
            let qs = require('qs')
            var user = { username: uid }
            var checkdata = qs.stringify(user, { arrayFormat: 'repeat' })
            let config = {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }
            axios.post('/php/check_log_db.php', checkdata, config).then((res)=>{
                // console.log(res)
                this.tableSeen = false
                // if (this.tableData.length !=0) {
                //     this.tableSeen = false
                // }
                this.tableData = res.data.task_status
            }) .catch((err)=>{
                console.log(err)
            })
        },
        // 每隔3s检查一次是否有未完成分析任务，无则停止检查
        checkLog_time() {
            var that = this
            var uid = Cookie.getCookie("cname")
            var checkCount = 0
            var mycheck = setInterval(function() {
                // 如果超过10分钟还未响应则终止请求，并返回分析错误
                if (checkCount < 200) {
                    checkCount += 1
                    let qs = require('qs')
                    var checkdata = qs.stringify({ username: uid }, {arrayFormat: 'repeat'})
                    let config = {
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                        }
                    axios.post('/php/check_log_db.php',checkdata, config).then((res)=>{
                        // console.log(res)
                        
                        if (res.data.task_status.length != 0) {
                            that.tableSeen = false
                        }
                        that.tableData = res.data.task_status
                        if (res.data.has_unfinished === false) {
                            clearInterval(mycheck)
                        }
                    }) .catch((err)=>{
                        console.log(err)
                    })
                } else {
                    clearInterval(mycheck)
                }
            }, 3000);
        },
        
        // 删除记录并请求后台删除历史记录
        delhistory(key, subtime) {
            this.tableData.splice(key, 1)
            if (this.tableData.length === 0) {
                this.tableSeen = true
            }
            var qs = require('qs')
            var user = { username: Cookie.getCookie("cname"), upload_time: subtime }
            var delData = qs.stringify(user, {arrayFormat: 'repeat'})
            let config = {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }
            axios.post('/php/del_history.php', delData, config).then((res)=>{}).catch((err)=>{
                console.log(err)
            })
        },

    },
    mounted() {
        Cookie.checkCookie()
        // this.cname = Cookie.getCookie("cname")
        // console.log(this.cname)
        this.checkLog_time()
       // console.log(document.cookie)
    }

}
</script>

<style lang="scss" scoped>
.content {
    margin: 105px 7%;
};
.inputArea {
    margin-bottom: 18px;
};
.optionArea {
    margin-bottom: 18px; 
}
.subarea {
    padding: 0 3%;
};
.dataTitle {
    font-size: 2.7rem;
    color:dimgray;
    font-weight: bold;
};
.tips {
    font-size: 16px;
    opacity: 0.7;
}
.fileTip {
    font-size: 14px;
}
.optionTitle {
    font-size: 2rem;
    font-weight: bold;
}
label {
    font-size: 2rem;
}
.tooltips {
    font-size: 15px;
}
.fileList {
    background-color: lightgray;
    // background-color:transparent;
}
.removePosition {
    float: right;
};
// #genome, #threshold {
//     padding-bottom: 50px;
// };
.advancedDetail {
    float: left;
    // width: 70%;
}
.advancedMaster {
    float: left;
    width: 30%;
    min-width: 170px;
}

.advancedArea {
    margin-top: 27px;
}

.submitArea {
    float: right;
    margin: 5px 2% 10px 2%;
};
.submitButton {
    padding: 12px 35px;
    font-size: 20px;
}
.tableInfo {
    margin: 0 3%;
}
.table {
    text-align: center;
}
.noData {
    font-size: 1.8rem;
    opacity: 0.75;
}
.theadTitle th {
    font-size: 2.2rem;
    text-align: center;
    background-color: #e9ecef;
    padding: 9px 0;
    // vertical-align: middle;
}
.viewLink {
    color: cornsilk;
    font-size: 16px;
    text-decoration: none;
};
.resultItem {
    vertical-align: middle;
    font-size: 18px;
}
.errTip {
    font-size: 20px;
}
.warningColor {
    color: #E6A23C;
}
.error_status {
    color: red;
    font-size: 30px;
}
.deleteHistory {
    font-size: 18px;
}
</style>
