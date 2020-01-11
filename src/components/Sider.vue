<template>
    <div>
        <div class="main" id="window">
	        <a href="javascript:" class="bar" style="margin-left:1px;"></a>
            <div class="main2">
            <!--div id='PTM'-->
                <div id='m6a' class="btn" style="width:220px;height:40px;color:#ffffff;background:#000000;text-align:center;border-radius:40px;margin-top:20px;">
                    <h4 style="padding-top:0px;margin-top:5px;"><span class="caret"></span>&nbsp;<b>m6A&nbsp;Predictor</b></h4>	          	
                </div>
                <ul id='link4' style="padding-top:5px;">
                    <li class="btn" onclick='window.location.href="http://m6a.renlab.org/"' title='Prediction of m6A sites' style="font-family:Arial!important;margin-left:10px;font-size:12px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">m6AFinder</b>(<span>N6-methyladenosine</span>)</li>
                    <li class="btn" onclick='window.location.href="http://m6asnp.renlab.org/"' title='Annotation of genetic variant by m6A function' style="font-family:Arial!important;margin-left:10px;font-size:12px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">m6ASNP</b>(<span>Genetic variant</span>)</li>	
                    <li class="btn" onclick='window.location.href="http://deeprip.renlab.org/"' title='Identification of m6A peaks by deep learning algorithm' style="font-family:Arial!important;margin-left:10px;font-size:12px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">DeepRIP</b>(<span>Peak calling</span>)</li>       	
                </ul>
                <div id='PTM' class="btn" style="width:220px;height:40px;color:#ffffff;background:#000000;text-align:center;border-radius:40px;margin-top:5px;">
                    <h4 style="padding-top:0px;margin-top:5px;"><span class="caret"></span>&nbsp;<b>PTM Predictor</b></h4>	          
                </div>
                <ul id='link1' style="padding-top:5px;display:none;">
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
                <!--div id="slidedown1" class="btn" style="margin-left:60px;margin-top:10px;">
                    <img src="./graph/arrow1.png"></img>
                </div-->
            <!--/div-->
            <!--div id="database" style="height:613px;display:none;"-->
                <!--div id="slideup1" class="btn" style="margin-left:60px;">
                    <img src="./graph/arrow2.png"></img>
                </div-->
                <div id='database' class="btn" style="width:220px;height:40px;color:#ffffff;background:#000000;text-align:center;border-radius:40px;margin-top:10px;">
                    <h4 style="padding-top:0px;margin-top:5px;"><span class="caret"></span>&nbsp;<b>Database</b></h4>	          	
                </div>
                <ul id='link2' style="padding-top:5px;display:none;">
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
                <!--div id="slidedown2" class="btn" style="margin-left:60px;margin-top:30px;">
                    <img src="./graph/arrow1.png"></img>
                </div-->
            <!--/div-->
            <!--div id="tools" style="height:613px;display:none;">
                <div id="slideup2" class="btn" style="margin-left:60px;">
                    <img src="./graph/arrow2.png"></img>
                </div-->
                <div id='tools' class="btn" style="width:220px;height:40px;color:#ffffff;background:#000000;text-align:center;border-radius:40px;margin-top:10px;">
                    <h4 style="padding-top:0px;margin-top:5px;"><span class="caret"></span>&nbsp;<b>Tool</b></h4>	          	
                </div>
                <ul id='link3' style="padding-top:5px;display:none;">
                    <li class="btn" onclick='window.location.href="http://dog.biocuckoo.org"' title='Protein Domain Structure Visualization' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">DOG</b>(<span>Domain Illustrator</span>)</li>
                    <li class="btn" onclick='window.location.href="http://ibs.biocuckoo.org"' title='Illustrator for Biological Sequences' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">IBS</b>(<span>Illustrator for BioSequence</span>)</li>
                    <li class="btn" onclick='window.location.href="http://hemi.biocuckoo.org"' title='Heatmap Illustrator' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">HemI</b>(<span>Heatmap Illustrator</span>)</li>
                    <li class="btn" onclick='window.location.href="http://csz.biocuckoo.org"' title='Characterization of Small RNAome for Zebrafish' style="font-family:Arial!important;margin-left:10px;font-size:13px;background:#B6B6B7;color:#000000;margin-top:3px!important;height:30px!important;width:200px!important;"><b style="float:left;">CSZ</b>(<span>sRNAome for NGS</span>)</li>
                </ul>	        	        
            <!--/div-->                   
            </div>
        </div>
    </div>
</template>

<script>
jQuery(function(){
	
	jQuery('.main').css('left','-252px');
	
	var expanded = true;
	
	jQuery('#window').hover(function(){
		if(expanded){
			jQuery('.main').animate({left:'0'},500);
			jQuery('.bar').css('background-position','-32px 0px');
		}else{
			jQuery('.main').animate({left:'-252px'},500);
			jQuery('.bar').css('background-position','-0px 0px');
		}
		expanded = !expanded;
	});
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
export default {
    
}
</script>

<style lang="scss" scoped>
.main{width:250px;height:660px;position:fixed;top:70px;border:3px solid #4D4D4D;z-index:9998; }
*html .main{position:absolute;top:expression(eval(document.documentElement.scrollTop));margin-top:200px;}
.main2{width:250px;height:660px;position:relative;padding:0 10px 10px 10px;}
.bar{
    width:29px;
    height:275px;
    position:absolute;
    right:-32px;
    top:-4px;
    background-image: url('../assets/logo/sider12.png');
    background-repeat: no-repeat;
    display:block;
    z-index:9999;
}
</style>
