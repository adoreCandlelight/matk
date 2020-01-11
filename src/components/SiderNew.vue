<template>
    <div class="siderBar" @mouseover="linkmark=true" @mouseleave="linkmark=false">
        <div class="sider" v-show="linkmark"> 	        
            <div id='m6a' class="btn" @click="showLink('m6aLink')"
                style="width:220px;height:40px;color:#ffffff;background:#000000;text-align:center;border-radius:40px;margin-top:20px;">
                <h4 style="padding-top:0px;margin-top:5px;"><span class="caret"></span>&nbsp;<b>m6A&nbsp;Predictor</b></h4>	          	
            </div>
            <!-- <div> -->
                <ul id='link4' style="padding-top:5px;" v-show="m6aLink">
                    <li class="btn" onclick='window.location.href="http://m6a.renlab.org/"' title='Prediction of m6A sites' style="font-family:Arial!important;margin-left:10px;font-size:12px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">m6AFinder</b>(<span>N6-methyladenosine</span>)</li>
                    <li class="btn" onclick='window.location.href="http://m6asnp.renlab.org/"' title='Annotation of genetic variant by m6A function' style="font-family:Arial!important;margin-left:10px;font-size:12px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">m6ASNP</b>(<span>Genetic variant</span>)</li>	
                    <li class="btn" onclick='window.location.href="http://deeprip.renlab.org/"' title='Identification of m6A peaks by deep learning algorithm' style="font-family:Arial!important;margin-left:10px;font-size:12px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">DeepRIP</b>(<span>Peak calling</span>)</li>       	
                </ul>
            <!-- </div>  -->
            <div id='PTM' class="btn" @click="showLink('PTMLink')"
                style="width:220px;height:40px;color:#ffffff;background:#000000;text-align:center;border-radius:40px;margin-top:5px;">
                <h4 style="padding-top:0px;margin-top:5px;"><span class="caret"></span>&nbsp;<b>PTM Predictor</b></h4>	          
            </div>
            <!-- <div> -->
                <ul id='link1' style="padding-top:5px;display:none;" v-show="PTMLink">
                    <li class="btn" onclick='window.location.href="http://gps.biocuckoo.org"' title='Kinase-specific Phosphorylation Site Prediction' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">GPS</b>(<span>Phosphorylation</span>)</li>
                    <li class="btn" onclick='window.location.href="http://igps.biocuckoo.org"' title='GPS algorithm with PPI filter' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">iGPS</b>(<span>Phosphorylation</span>)</li>
                    <li class="btn" onclick='window.location.href="http://csspalm.biocuckoo.org"' title='Palmitoylation Site Prediction' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">CSS-Palm</b>(<span>Palmitoylation</span>)</li>
                    <li class="btn" onclick='window.location.href="http://lipid.biocuckoo.org"' title='Prediction of Lipid Modification Sites' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">GPS-Lipid</b>(<span>Lipid modifications</span>)</li>
                    <li class="btn" onclick='window.location.href="http://sumosp.biocuckoo.org"' title='Prediction of SUMO Modification' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">GPS-SUMO</b>(<span>Sumoylation</span>)</li>
                    <li class="btn" onclick='window.location.href="http://sno.biocuckoo.org"' title='S-nitrosylation Site Prediction' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">GPS-SNO</b>(<span>S-nitrosylation</span>)</li>
                    <li class="btn" onclick='window.location.href="http://yno2.biocuckoo.org"' title='Tyrosine Nitration Site Prediction' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">GPS-YNO2</b>(<span>Tyrosine Nitration</span>)</li>
                    <li class="btn" onclick='window.location.href="http://ccd.biocuckoo.org"' title='Calpain Cleavage Site Prediction' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">GPS-CCD</b>(<span>Calpain Cleavage</span>)</li>
                    <li class="btn" onclick='window.location.href="http://polo.biocuckoo.org"' title='Prediction for Polo-like Kinases' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">GPS-Polo</b>(<span>Polo-like Kinases</span>)</li>
                    <li class="btn" onclick='window.location.href="http://pup.biocuckoo.org"' title='Pupylation Sites Prediction' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">GPS-PUP</b>(<span>Pupylation</span>)</li>
                    <li class="btn" onclick='window.location.href="http://mba.biocuckoo.org"' title='MHC-binding Site Prediction' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">GPS-MBA</b>(<span>MHC-binding</span>)</li>
                    <!--li class="btn" onclick='window.location.href="http://arm.biocuckoo.org"' title='APC/C Recognition Motif Prediction' style="margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b>GPS-ARM</b>(<span>APC/C</span>)</li>
                    <li class="btn" onclick='window.location.href="http://tsp.biocuckoo.org"' title='Prediction of Tyrosine Sulfation Sites' style="margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b>GPS-TSP</b>(<span>Tyrosine sulfation</span>)</li-->
                    <li class="btn" onclick='window.location.href="http://msp.biocuckoo.org"' title='Calpain Cleavage Site Prediction' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">GPS-MSP</b>(<span>Protein Methylation</span>)</li>
                    <!--li class="btn" onclick='window.location.href="http://pps.biocuckoo.org"' title='PTMs Peptide Scanner' style="margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b>PPS</b>(<span>PTMs Peptide Scanner</span>)</li-->
                </ul>   
            <!-- </div> -->
            <div id='database' class="btn" @click="showLink('DatebaseLink')"
                style="width:220px;height:40px;color:#ffffff;background:#000000;text-align:center;border-radius:40px;margin-top:10px;">
                <h4 style="padding-top:0px;margin-top:5px;"><span class="caret"></span>&nbsp;<b>Database</b></h4>	          	
            </div>
            <!-- <div> -->
                <ul id='link2' style="padding-top:5px;display:none;" v-show="DatebaseLink">
                    <li class="btn" onclick='window.location.href="http://m6avar.renlab.org/"' title='Database of functional variants involved in m6A modification' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">m6AVar</b>(<span> m6A &amp; Variation </span>) <strong style="color: red"> &nbsp;new! </strong></li>
                    <li class="btn" onclick='window.location.href="http://phossnp.biocuckoo.org"' title='Influence of protein phosphorylation by nsSNP' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">PhosSNP</b>(<span> PTM &amp; Variation </span>)</li>
                    <li class="btn" onclick='window.location.href="http://microkit.biocuckoo.org"' title='An Integrated Database of Midbody,Centrosome and Kinetochore' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">MiCroKit</b>(<span> Cell Cycle </span>)</li>
                    <li class="btn" onclick='window.location.href="http://cgdb.biocuckoo.org"' title='An Integrated Database of Midbody, Centrosome, Kinetochore, Telomere and Spindle' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">CGDB</b>(<span>Circadian</span>)</li>
                    <li class="btn" onclick='window.location.href="http://cplm.biocuckoo.org"' title='Compendium of Protein Lysine Modification' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">CPLM</b>(<span>Lysine Modification</span>)</li>
                    <li class="btn" onclick='window.location.href="http://uucd.biocuckoo.org"' title='Compendium of Enzymes for Ubiquitin and Ubiquitin-like Conjugation' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">UUCD</b>(<span>Ubiquitin Regulators</span>)</li>
                    <li class="btn" onclick='window.location.href="http://ekpd.biocuckoo.org"' title='Eukaryotic Kinase and Phosphatase Database' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">EKPD</b>(<span>Kinase &amp; Phosphatase</span>)</li>
                    <li class="btn" onclick='window.location.href="http://weram.biocuckoo.org"' title='Eukaryotic Kinase and Phosphatase Database' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">WERAM</b>(<span>Met.&amp;Ace. Regulators</span>)</li>
                    <li class="btn" onclick='window.location.href="http://rpfdb.org"' title='Ribosome Profiling' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">RPFdb</b>(<span>Ribosome Profiling</span>)</li>
                    <li class="btn" onclick='window.location.href="http://dbppt.biocuckoo.org"' title='Eukaryotic Kinase and Phosphatase Database' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">dbPPT</b>(<span>Plant Phospho</span>)</li>
                    <li class="btn" onclick='window.location.href="http://dbpsp.biocuckoo.org"' title='Eukaryotic Kinase and Phosphatase Database' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">dbPSP</b>(<span>Prokaryotic Phospho</span>)</li>
                    <li class="btn" onclick='window.location.href="http://dbpaf.biocuckoo.org"' title='Eukaryotic Kinase and Phosphatase Database' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">dbPAF</b>(<span>Animal Phospho</span>)</li>
                    <li class="btn" onclick='window.location.href="http://ptestis.biocuckoo.org"' title='Database of phosphorylation sites in testis' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">pTestis</b>(<span>Testis Phospho</span>)</li>
                </ul>   
            <!-- </div> -->
             <div id='tools' class="btn" @click="showLink('toolsLink')"
                style="width:220px;height:40px;color:#ffffff;background:#000000;text-align:center;border-radius:40px;margin-top:10px;">
                <h4 style="padding-top:0px;margin-top:5px;"><span class="caret"></span>&nbsp;<b>Tool</b></h4>	          	
            </div>
            <!-- <div> -->
                <ul id='link3' style="padding-top:5px;display:none;" v-show="toolsLink">
                    <li class="btn" onclick='window.location.href="http://dog.biocuckoo.org"' title='Protein Domain Structure Visualization' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">DOG</b>(<span>Domain Illustrator</span>)</li>
                    <li class="btn" onclick='window.location.href="http://ibs.biocuckoo.org"' title='Illustrator for Biological Sequences' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">IBS</b>(<span>Illustrator for BioSequence</span>)</li>
                    <li class="btn" onclick='window.location.href="http://hemi.biocuckoo.org"' title='Heatmap Illustrator' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">HemI</b>(<span>Heatmap Illustrator</span>)</li>
                    <li class="btn" onclick='window.location.href="http://csz.biocuckoo.org"' title='Characterization of Small RNAome for Zebrafish' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">CSZ</b>(<span>sRNAome for NGS</span>)</li>
                </ul>
            <!-- </div>	                -->
            
        </div>
        <div class="linkOut" v-show="linkmark">
            <img src="../assets/logo/LinkOut.png" alt="">
        </div>
        <div class="linkIn" v-show="!linkmark">
            <img src="../assets/logo/LinkIn.png" alt="">
        </div>
    </div>
</template>

<script>
// import jQuery from 'jquery';
export default {
    data() {
        return {
            linkmark: false,
            m6aLink: true,
            PTMLink: false,
            DatebaseLink: false,
            toolsLink: false
        }
    },
    methods: {
        showLink(linkID) {
           if (linkID == "m6aLink") {
                this.m6aLink = true
                this.PTMLink = false
                this.DatebaseLink = false
                this.toolsLink = false
           } else if (linkID == "PTMLink") {
                this.m6aLink = false
                this.PTMLink = true
                this.DatebaseLink = false
                this.toolsLink = false   
           } else if (linkID == "DatebaseLink") {
                this.m6aLink = false
                this.PTMLink = false
                this.DatebaseLink = true
                this.toolsLink = false  
           } else {
                this.m6aLink = false
                this.PTMLink = false
                this.DatebaseLink = false
                this.toolsLink = true  
           }
        }
    },
}
/*
jQuery(function(){
    jQuery(document).ready(function(){
        jQuery("#PTM").click(function(){          	
            jQuery("#link2").slideUp("slow");
            jQuery("#link3").slideUp("slow");
            jQuery("#link4").slideUp("slow");
            jQuery("#link1").slideDown("slow");
            // console.log("slide done!");
        });
        jQuery("#database").click(function(){
            jQuery("#link1").slideUp("slow");
            jQuery("#link3").slideUp("slow");
            jQuery("#link4").slideUp("slow");
            jQuery("#link2").slideDown("slow");
        });  
        jQuery("#tools").click(function(){
            jQuery("#link1").slideUp("slow");
            jQuery("#link2").slideUp("slow");
            jQuery("#link4").slideUp("slow");
            jQuery("#link3").slideDown("slow");
        });  
        jQuery("#m6a").click(function(){
            jQuery("#link1").slideUp("slow");
            jQuery("#link2").slideUp("slow");
            jQuery("#link3").slideUp("slow");
            jQuery("#link4").slideDown("slow");
        });           
    });
});
*/
</script>

<style lang="scss" scoped>
.siderBar {
    position: fixed;
    margin-top: 80px;
}
.sider {
    width: 235px;
    height: 660px;
    border: 3px solid #696969;
    float: left;
}
.linkOut {
    position: absolute;
    left : 249px;
}

</style>
