<template>
    <div>
        <button class="btn btn-primary" @click="getIGV()">get IGV</button>
        <div id="igvArea"></div>
    </div>
</template>

<script>
// import igv from '../assets/js/igv.min.js'

const igv = require('igv')

export default {
    data() {
        return {
            
        }
    },
    methods: {
        getIGV() {
            var genome = "hg19"
            var chr_start = "chr1:86350092-86350992"
            /**if (genome == 'hg19') {
                var gtfurl = 'http://matk.renlab.org/annotation/Homo_sapiens.GRCh37.sorted.gtf.gz'
                var annotation_name = 'Homo_sapiens.GRCh37(gtf)'
                var fastaurl = 'http://matk.renlab.org/genome_fasta/Homo_sapiens.GRCh37.chr.fa'
                var fastaurl_index = 'http://matk.renlab.org/genome_fasta/Homo_sapiens.GRCh37.chr.fa.fai'
                var cytoband_url = 'http://matk.renlab.org/genome_fasta/hg19_cytoBandIdeo.txt'
            } else if (genome == 'hg38') {
                var gtfurl = '/api/annotation/Homo_sapiens.GRCh38.chr.sorted.gtf.gz'
                var annotation_name = 'Homo_sapiens.GRCh38(gtf)'
                var fastaurl = '/api/genome_fasta/Homo_sapiens.GRCh38.fa'
                var fastaurl_index = '/api/genome_fasta/Homo_sapiens.GRCh38.fa.fai'
                var cytoband_url = '/api/genome_fasta/hg38_cytoBandIdeo.txt.gz'
            } else if (genome == 'mm10') {
                var gtfurl = 'http://matk.renlab.org/annotation/Mus_musculus.GRCm38.chr.sorted.gtf.gz'
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
            var index_gtf_url = gtfurl + '.tbi'*/

            var fastaurl = "https://s3.amazonaws.com/igv.broadinstitute.org/genomes/seq/hg19/hg19.fasta"
            var fastaurl_index = "https://s3.amazonaws.com/igv.broadinstitute.org/genomes/seq/hg19/hg19.fasta.fai"
            var cytoband_url = "https://s3.amazonaws.com/igv.broadinstitute.org/genomes/seq/hg19/cytoBand.txt"

            var annotation_name = 'Homo_sapiens.GRCh37(gtf)'

            var gtfurl = "https://s3.amazonaws.com/igv.broadinstitute.org/annotations/hg19/genes/gencode.v24lift37.annotation.sorted.gtf.gz"
            var index_gtf_url = "https://s3.amazonaws.com/igv.broadinstitute.org/annotations/hg19/genes/gencode.v24lift37.annotation.sorted.gtf.gz.tbi"

            var igvDiv = document.getElementById("igvArea");
            var options = {
                genome: {
                    "id": genome,
                    "name": genome,
                    "fastaURL": fastaurl,
                    "indexURL": fastaurl_index,
                    "cytobandURL": cytoband_url
                },
                locus: chr_start,
                // minimumBases: 1000,
                flanking: 2000,
                tracks:[
                    /** 
                    {
                    type: 'annotation',
                    format: 'gtf',
                    url: gtfurl,
                    indexURL: index_gtf_url,
                    order: 1000000,
                    displayMode: 'EXPANDED',
                    visibilityWindow: 10000000,
                    name: annotation_name,
                },
                {
                    name: "peaks",
                    type: "annotation",
                    format: "bed",
                    sourceType: "file",
                    url: "//igv.broadinstitute.org/annotations/hg19/genes/gencode.v18.collapsed.bed",
                    // url: "C:\\VUE\\MATK_Server\\test\\gencode.v18.collapsed.bed",
                    indexURL: "//igv.broadinstitute.org/annotations/hg19/genes/gencode.v18.collapsed.bed.idx",
                    // inexURL: "C:\\VUE\\MATK_Server\\test\\gencode.v18.collapsed.bed.idx",
                    displayMode: "EXPANDED",
                    visibilityWindow: 10000000
                },*/
                /*
                {
                    name: "Peaks_submit",
                    type: "annotation",
                    format: "bed",
                    sourceType: "file",
                    url: "//newnewmatk.renlab.org/annotation/user.sorted.bed",
                    indexURL: "//newnewmatk.renlab.org/annotation/user.sorted.bed.idx",
                    displayMode: "EXPANDED"
                },*/
                 {
                    name: "Peaks_auto",
                    type: "annotation",
                    format: "bed",
                    sourceType: "file",
                    url: "//igv.broadinstitute.org/annotations/hg19/genes/gencode.v18.collapsed.bed",
                    indexURL: "//igv.broadinstitute.org/annotations/hg19/genes/gencode.v18.collapsed.bed.idx",
                    displayMode: "EXPANDED",
                    showAllChromosomes: true
                },/*
                {
                    name: "Sites",
                    type: "annotation",
                    format: "bed",
                    sourceType: "file",
                    url: "//newnewmatk.renlab.org/annotation/usertest.bed",
                    // indexURL: "//newnewmatk.renlab.org/annotation/user.sorted.bed.idx",
                    displayMode: "EXPANDED"
                }*/
                ]
            }
            igv.createBrowser(igvDiv, options).then(function (browser){
                // console.log(browser)
            })
        }
    },
    
}
</script>

<style lang="scss" scoped>

</style>>