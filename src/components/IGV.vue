<template>
    <div>
        
        <div id="igvArea"></div>
    </div>
</template>

<script>

import Cookie from '../assets/js/Cookie.js';

const igv = require('igv');
const axios = require('axios');

export default {
    data() {
        return {
            genome: "",
            // chrom_start: "",
            // chrStart: "",
            // chrStop: "",
            uid: "",
            timeDir: ""
        }
    },
    methods: {
        getSiteInfo() {
            this.uid = Cookie.getCookie("cname")

            var siteInfo = this.$route.params.aid
            var siteInfoArr = siteInfo.split("_")
            this.genome = siteInfoArr[0]
            // console.log(genome)
            this.chrom = siteInfoArr[1]
            this.chrStart = siteInfoArr[2]
            this.chrStop = siteInfoArr[3]
            var geneName = siteInfoArr[4]
            var geneID = siteInfoArr[5]
            var score = siteInfoArr[6]
            var strand = siteInfoArr[7]
            this.timeDir = siteInfoArr[8].replace(/[:\s]/g,"_")

            var qs = require('qs')
            var siteData = {
                username: this.uid,
                submitTime: this.timeDir,
                chr: this.chrom,
                startSite: this.chrStart,
                stopSite: this.chrStop,
                geneName: geneName,
                geneID: geneID,
                score: score,
                strand: strand
            }

            var submitData = qs.stringify(siteData, { arrayFormat: 'repeat' })
            var config = {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            };
            axios.post("/php/getSingleSite.php", submitData, config).then((res)=>{
                // console.log(res)
                this.getigv()
            }) .catch((err)=>{
                console.log(err)
            })
        },
        getigv(){
            this.uid = Cookie.getCookie("cname")

            var siteInfo = this.$route.params.aid
            var siteInfoArr = siteInfo.split("_")
            console.log(siteInfoArr)
            this.genome = siteInfoArr[0]
            var chrom = siteInfoArr[1]
            var siteStart = Number(siteInfoArr[2]) - 1000
            console.log(siteStart)
            var siteEnd = Number(siteInfoArr[2]) + 1000
            console.log(siteEnd)
            var locusArea = chrom + ":" + siteStart + "-" + siteEnd

            this.timeDir = siteInfo.split("_")[3].replace(/[:\s]/g,"_")

            if (this.genome == 'hg19') {
                var gtfurl = 'http://matk.renlab.org/annotation/Homo_sapiens.GRCh37.sorted.gtf.gz'
                var annotation_name = 'Homo_sapiens.GRCh37(gtf)'
                var fastaurl = 'http://matk.renlab.org/genome_fasta/Homo_sapiens.GRCh37.chr.fa'
                var fastaurl_index = 'http://matk.renlab.org/genome_fasta/Homo_sapiens.GRCh37.chr.fa.fai'
                var cytoband_url = 'http://matk.renlab.org/genome_fasta/hg19_cytoBandIdeo.txt'
            } else if (this.genome == 'hg38') {
                var gtfurl = 'http://newnewmatk.renlab.org/annotation/Homo_sapiens.GRCh38.chr.sorted.gtf.gz'
                 
                var annotation_name = 'Homo_sapiens.GRCh38(gtf)'
                var fastaurl = 'http://newnewmatk.renlab.org/genome_fasta/Homo_sapiens.GRCh38.fa'
                var fastaurl_index = 'http://newnewmatk.renlab.org/genome_fasta/Homo_sapiens.GRCh38.fa.fai'
                var cytoband_url = 'http://newnewmatk.renlab.org/genome_fasta/hg38_cytoBandIdeo.txt.gz'
            } else if (this.genome == 'mm10') {
                var gtfurl = 'http://matk.renlab.org/annotation/Mus_musculus.GRCm38.sorted.gtf.gz'
                var annotation_name = 'Mus_musculus.GRCm38(gtf)'
                var fastaurl = 'http://matk.renlab.org/genome_fasta/Mus_musculus.GRCm38.fa'
                var fastaurl_index = 'http://matk.renlab.org/genome_fasta/Mus_musculus.GRCm38.fa.fai'
                var cytoband_url = 'http://matk.renlab.org/genome_fasta/mm10_cytoBandIdeo.txt.gz'
            } else {
                var gtfurl = 'http://matk.renlab.org/annotation/Mus_musculus.NCBIM37.sorted.gtf.gz'
                var annotation_name = 'Mus_musculus.NCBIM37(gtf)'
                var fastaurl = 'http://matk.renlab.org/genome_fasta/Mus_musculus.NCBIM37.61.fa'
                var fastaurl_index = 'http://matk.renlab.org/genome_fasta/Mus_musculus.NCBIM37.61.fa.fai'
                var cytoband_url = 'http://matk.renlab.org/genome_fasta/mm9_cytoBandIdeo.txt.gz'
            }

            var index_gtf_url = gtfurl + '.tbi'
            var igvDiv = document.getElementById("igvArea");
            // var singleSiteBedFile = "http://newnewmatk.renlab.org/userfiles/" + this.uid + "/" + this.timeDir + "/singleSiteFile/" + this.chrom + "_" + this.chrStart + "_" + this.chrStop + ".bed"
            var baseDir = "http://newnewmatk.renlab.org/userfiles/" + this.uid + "/" + this.timeDir
            var options = {
                genome: {
                    "id": this.genome,
                    "name": this.genome,
                    "fastaURL": fastaurl,
                    "indexURL": fastaurl_index,
                    "cytobandURL": cytoband_url
                },
                locus: locusArea,
                tracks:[   
                    {
                    type: 'annotation',
                    format: 'gtf',
                    url: gtfurl,
                    indexURL: index_gtf_url,
                    order: 1000000,
                    displayMode: 'EXPANDED',
                    visibilityWindow: 10000000,
                    name: annotation_name,
                    order: 1
                },  
                {
                    name: "Peaks",
                    type: "annotation",
                    format: "bed",
                    // sourceType: "file",
                    url: baseDir + "/input.sorted.bed",
                    indexURL: baseDir + "/input.sorted.bed.idx",
                    displayMode: "EXPANDED",
                    order: 2
                },
                {
                    name: "m6A Sites",
                    type: "annotation",
                    format: "bed",
                    // sourceType: "file",
                    url: baseDir + "/result.sorted.bed",
                    indexURL: baseDir + "/result.sorted.bed.idx",
                    displayMode: "EXPANDED",
                    order: 3,
                    color: "#ffcc33"
                }
                /*
                {
                    name: "Peaks_auto",
                    type: "annotation",
                    format: "bed",
                    sourceType: "file",
                    url: "//igv.broadinstitute.org/annotations/hg19/genes/gencode.v18.collapsed.bed",
                    indexURL: "//igv.broadinstitute.org/annotations/hg19/genes/gencode.v18.collapsed.bed.idx",
                    displayMode: "EXPANDED"
                }*/
                ]
            }
            igv.createBrowser(igvDiv, options).then(function (browser){
                // console.log(browser)
            })
        }
    },
    mounted() {
        this.getigv()
        // 需要刚加载页面的时候重新刷新一下解决加载gtf注释文件报错的问题
        // this.getSiteInfo()
    },
}
</script>

<style lang="scss" scoped>
#igvArea {
    margin: 3% 5%;
}
</style>
