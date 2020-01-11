<template>
    <div>
        <div>
            <v-header></v-header>
        </div>
        <div>
            <v-back-to-top></v-back-to-top>
        </div>
        <div class="container-fluid" style="margin-bottom:50px;padding-bottom:20px;padding-left:0px;padding-right:0px;">
            <div class="col-md-1 siderArea">
                
                <v-sider></v-sider>
            </div>
            <div class="col-md-10" style="padding-left:6%;padding-right:6%;">                            
                <div class="col-md-12 titleBackground" style="position:relative;margin-top:78px;height:780px;">
                    	<h1 style="text-align:center;font-size:100px;font-family:Arial;margin-top:19%;opacity:1;"><b>MATK</b></h1>
                        <h1 style="text-align:center;font-size:35px;font-family:Arial;margin-top:2%;opacity:1;">A deep learning-based MeRIP-seq analysis toolkit <br>at single-nucleotide resolution</h1>
                        <button onclick='window.location.href="#download"' style="text-align:center;margin-left:40%;margin-top:4%;background-color:#161616;width:210px;height:60px;border-radius:60px ;font-size:35px;color:#ffffff;opacity:1;border-width:0px;"><b>Download</b></button>             
                </div>
                <!--hr style="color:#000000;border:1px solid;margin-top:250px;"-->             
                <!--div style="position:absolute;width:1667px;height:1080px;background:#ADADAD;"></div-->
                <div class="col-md-12" style="margin-top:40px;">                
                   <hr style="color:#000000;border:1px solid;margin-top:20px;margin-bottom:0px;">
                </div>                            
                <div class="col-md-12" id="introduction" style="height:auto;">                                
                    <button onclick='window.location.href="#introduction"' style="position:relative;width:150px;height:120px;background:#000;border-width:0px;margin-top:-50px;">
                        <p style="text-align:center;color:#fff;padding-top:35px;font-size:22px;"><span class="glyphicon glyphicon-book"></span><br><b>Introduction</b></p>
                    </button>
                    <div class="col-md-12" style="margin-top:50px;padding-left:0px;padding-right:0px;">
                        <div class="col-md-4" style="padding-left:0px;padding-right:0px;">
                            <h2 style="margin-top:0px;"><b>Identify m6A peak at single-nucleotide-resolution</b></h2><br>
                            <p style="font-size:17px;font-weight:normal;">MATK is specifically designed for the detection of m6A peaks from MeRIP-seq experiment at single-nucleotide-resolution. The application of Variational Autoencoder achieved a far more accurate derivation of m6A peaks comparing to the state-of-art methods. Additionally, MATK also deploys a convolutional neural network model to identify m6A sites from the detected peaks, enabling a single-nucleotide-resolution peak calling.</p>
                        </div>
                        <div class="col-md-8" style="padding-left:0px;padding-right:0px;vertical-align:middle;">
                            <img src="../assets/logo/Introduction_1.png" style="padding-left:50px;float:right;width:100%;vertical-align:middle;">
                        </div>                        
                    </div>

                    <div class="col-md-12" style="margin-top:50px;padding-left:0px;padding-right:0px;">
                        <hr style="border:1px dashed;margin-top:10px;">
                    </div>                    
                    <div class="col-md-12" style="margin-top:60px;margin-bottom:20px;padding-left:0px;padding-right:0px;">
                        <div class="col-md-4" style="padding-left:0px;padding-right:0px;">
                            <h2 style="margin-top:0px;"><b>Variational Autoencoder for peak calling</b></h2><br>
                            <p style="font-size:17px;font-weight:normal;">In order to identify regions that contain m6As, the algorithm first divides the entire genome into a set of mutually connected bins. According to Audic’s model, the chromosomal bins are then parameterized into a set of vectors. For m6A peak calling, the VAE model is built and trained to fit the probability distribution of the input vectors.</p>
                        </div>  
                        <div class="col-md-8" style="padding-left:0px;padding-right:0px;vertical-align:middle;">
                            <img src="../assets/logo/Introduction_2.2.png" style="padding-left:50px;float:right;width:100%;vertical-align:middle;">
                        </div>                                                                      
                    </div>


                    <div class="col-md-12" style="margin-top:50px;padding-left:0px;padding-right:0px;">
                        <hr style="border:1px dashed;margin-top:10px;">
                    </div>
                    <div class="col-md-12" style="margin-top:60px;margin-bottom:20px;padding-left:0px;padding-right:0px;">
                        <div class="col-md-4" style="padding-left:0px;padding-right:0px;">
                            <h2 style="margin-top:0px;"><b>Convolutional neural network for m6A sites prediction</b></h2><br>
                            <p style="font-size:17px;font-weight:normal;">To improve the resolution for m6A peak calling, we constructed a convolutional neural network model to predict precise m6A sites from peak regions. Combining the primary sequence feature and the MeRIP-seq coverage information, a robust prediction model was built. After evaluation by real dataset and qPCR experiment, the model is proved to be accurate in MeRIP-seq analysis.</p>
                        </div> 
                        <div class="col-md-8" style="padding-left:0px;padding-right:0px;vertical-align:middle;">
                            <img src="../assets/logo/Introduction_3.2.png" style="padding-left:50px;float:right;width:100%;vertical-align:middle;">
                        </div>                                                                       
                    </div> 


                    <div class="col-md-12" style="margin-top:50px;padding-left:0px;padding-right:0px;">
                        <hr style="border:1px dashed;margin-top:10px;">
                    </div>
                    <div class="col-md-12" style="margin-top:60px;margin-bottom:20px;padding-left:0px;padding-right:0px;">
                        <div class="col-md-4" style="padding-left:0px;padding-right:0px;">
                            <h2 style="margin-top:0px;"><b>A Bayesian hierarchical model for quantifying m6A level</b></h2><br>
                            <p style="font-size:17px;font-weight:normal;">Unlike DNA methylation, the quantification of epigenetic modification on RNA molecules may be significantly influenced by the expression level of RNA transcripts. As such, when designing quantification model for m6A events, certain cautions must be paid to the basal expression of the tested transcript. To address this issue, we developed a Bayesian hierarchical model to eliminate the effect of basal expression and quantify the true m6A level by Markov Chain Monte Carlo sampling.</p>
                        </div> 
                        <div class="col-md-8" style="padding-left:0px;padding-right:0px;vertical-align:middle;">
                            <img src="../assets/logo/Introduction_4.png" style="padding-left:50px;float:right;width:100%;vertical-align:middle;">
                        </div>                                                                       
                    </div> 

                    <div class="col-md-12" style="margin-top:40px;padding-left:0px;padding-right:0px;">
                        <br><br>
                        <hr style="color:#000000;border:1px solid;margin-top:20px;margin-bottom:0px;">
                    </div>                                
                </div>                         
                <div class="col-md-12" style="height:550px;" id="download">
                    <button onclick='window.location.href="#download"' style="position:relative;width:150px;height:120px;background:#000;border-width:0px;margin-top:-60px;">
                        <p style="text-align:center;color:#fff;padding-top:40px;font-size:22px;"><span class="glyphicon glyphicon-download-alt"></span><br><b>Download</b></p>
                    </button> 
                    <h2 style="margin-top:45px;"><b>Software Access</b></h2>
                    <!--hr style="color:#000000;border:1px dashed;margin-top:70px;"-->
                    <div class="row" style="font-family:Arial;margin-top:120px;">
                        <div class="col-md-4 col-sm-4" style="text-align:center;">
                            <div class="col-center-block" style="margin-top:-50px;margin-left:auto;margin-right:auto;border-radius:50%;width:60px;height:60px;color:white;background:#000000;text-align:center;font-size:30px;padding-top:12px;">
                                <i class="glyphicon glyphicon-save"></i>
                            </div>
                            <div style="padding-top:15px;"><h3><b>Get the MATK</b></h3></div>                        
                                <!--div class="col-md-6" style="margin-left:0px;width:180px;height:70px;border-radius:70px 0px 0px 70px;background:#0082c9;color:#ffffff;padding-top:1px;padding-bottom:1px;" onclick="window.location.href:;"><h3><b><i class="glyphicon glyphicon-download-alt"></i>&nbspDownload</b></h3></div-->  
                                <div class="col-md-6-off-3" style="margin-top:70px;">
                                    <div class="dropdown" style="margin-top:10px;">
                                        <button class="btn" type="button" id="dropdownMenu1" style="background:#0082c9;color:#ffffff;min-width:250px;height:70px;border-radius:80px;padding-top:0!important;padding-bottom:10px;">
                                            <h3><b><i class="glyphicon glyphicon-download-alt"></i>&nbsp;Download</b></h3> 
                                            <span class="caret"></span>
                                        </button>
                                        <div style="width:100%;height:100px;padding-top:2px;">                                       
                                            <ul id="menu1" style="margin:0 auto;width:200px;display:none;border:2px solid #0082c9;">
                                                <li><a href="http://matk.renlab.org/download/MATK-1.0.jar" download="MATK-1.0.jar" style="font-size:17px!important;font-weight:bold">Package</a></li>
                                            </ul>
                                        </div>                                        
                                    </div>
                                </div>                      
                                <!--div style="margin-left:0px;width:180px;height:70px;border-radius:0px 70px 70px 0px;background:#0082c9;color:#ffffff;padding-top:1px;padding-bottom:1px;" onclick="window.location.href:;"><h3><b><i class="glyphicon glyphicon-download-alt"></i>&nbspDownload</b></h3></div-->
                        </div>
                        <div class="col-md-4 col-sm-4 col-center-block" style="text-align:center;">
                            <div class="col-center-block" style="margin-top:-50px;margin-left:auto;margin-right:auto;border-radius:50%;width:60px;height:60px;color:white;background:#000000;text-align:center;font-size:30px;padding-top:12px;">
                                <i class="glyphicon glyphicon-file"></i>
                            </div>
                            <div style="padding-top:15px;"><h3><b>Get the genomes</b></h3></div>
                            <div class="col-md-6-off-3" style="margin-top:70px;">
                                <div class="dropdown" style="margin-top:10px;">
                                    <button class="btn" type="button" id="dropdownMenu2" style="background:#0082c9;color:#ffffff;min-width:250px;height:70px;border-radius:80px;padding-top:0!important;padding-bottom:10px;">
                                        <h3><b><i class="glyphicon glyphicon-download-alt"></i>&nbsp;Download</b></h3> 
                                        <span class="caret"></span>
                                    </button>
                                    <div style="width:100%;height:100px;padding-top:2px;">                                    
                                        <ul id="menu2" style="margin:0 auto;width:200px;display:none;border:2px solid #0082c9;">
                                            <li><a href="http://matk.renlab.org/download/Homo_sapiens.GRCh37.2bit" download="Homo_sapiens.GRCh37.2bit" style="font-size:17px!important;font-weight:bold">human-hg19.2bit</a></li>
                                            <li><a href="http://matk.renlab.org/download/Homo_sapiens.GRCh38.2bit" download="Homo_sapiens.GRCh38.2bit" style="font-size:17px!important;font-weight:bold">human-hg38.2bit</a></li>
                                            <li><a href="http://matk.renlab.org/download/Mus_musculus.NCBIM37.61.2bit" download="Mus_musculus.NCBIM37.61.2bit" style="font-size:17px!important;font-weight:bold">mouse-mm9.2bit</a></li>
                                            <li><a href="http://matk.renlab.org/download/Mus_musculus.GRCm38.2bit" download="Mus_musculus.GRCm38.2bit" style="font-size:17px!important;font-weight:bold">mouse-mm10.2bit</a></li>
                                        </ul>                                    
                                    </div>                                        
                                </div>
                            </div>                              
                        </div>   
                        <div class="col-md-4 col-sm-4 col-center-block" style="text-align:center;">
                          <div class="col-center-block" style="margin-top:-50px;margin-left:auto;margin-right:auto;border-radius:50%;width:60px;height:60px;color:white;background:#000000;text-align:center;font-size:30px;padding-top:12px;">
                              <i class="glyphicon glyphicon-file"></i>
                          </div>
                          <div style="padding-top:15px;"><h3><b>Get annotations (GTF)</b></h3></div>
                          <div class="col-md-6-off-3" style="margin-top:70px;">
                              <div class="dropdown" style="margin-top:10px;">
                                  <button class="btn" type="button" id="dropdownMenu3" style="background:#0082c9;color:#ffffff;min-width:250px;height:70px;border-radius:80px;padding-top:0!important;padding-bottom:10px;">
                                      <h3><b><i class="glyphicon glyphicon-download-alt"></i>&nbsp;Download</b></h3> 
                                      <span class="caret"></span>
                                  </button>
                                  <div style="width:100%;height:100px;padding-top:2px;">                                    
                                      <ul id="menu3" style="margin:0 auto;width:260px;display:none;border:2px solid #0082c9;">
                                          <li><a href="http://matk.renlab.org/annotation/Homo_sapiens.GRCh37.gtf" download="Homo_sapiens.GRCh37.gtf" style="font-size:17px!important;font-weight:bold">Homo sapiens: GRCh37/hg19</a></li>
                                          <li><a href="http://matk.renlab.org/annotation/Homo_sapiens.GRCh38.gtf" download="Homo_sapiens.GRCh38.gtf" style="font-size:17px!important;font-weight:bold">Homo sapiens: GRCh38/hg38</a></li>
                                          <li><a href="http://matk.renlab.org/annotation/Mus_musculus.NCBIM37.gtf" download="Mus_musculus.NCBIM37.gtf" style="font-size:17px!important;font-weight:bold">Mus musculus: NCBIM37/mm9</a></li>
                                          <li><a href="http://matk.renlab.org/annotation/Mus_musculus.GRCm38.gtf" download="Mus_musculus.GRCm38.gtf" style="font-size:17px!important;font-weight:bold">Mus musculus: GRCm38/mm10</a></li>
                                      </ul>                                    
                                  </div>                                        
                              </div>
                          </div>                              
                      </div>                  
                    </div>
                </div>
            </div>
            <div class="col-md-1"></div>                                
		</div>        
        <br><br>
        <div>
           <v-footer></v-footer> 
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
// import Sider from './Sider.vue';
import BackToTop from './BackToTop.vue';
import Sider from './SiderNew.vue';
export default {
    components: {
        'v-header': Header,
        'v-footer': Footer,
        'v-sider': Sider,
        'v-back-to-top': BackToTop      
    }
    
}
jQuery(document).ready(function(){
    var clicktimes = 0;
    var clicktimes2 = 0;
    var clicktimes3 = 0;
    jQuery('#dropdownMenu1').click(function(){
        if (clicktimes == 0) {
            document.getElementById('menu1').style.display="inline-block";
            clicktimes = 1
        } else {
            document.getElementById('menu1').style.display="none";
            clicktimes = 0
        }
    });
    jQuery('#dropdownMenu2').click(function(){
        if (clicktimes2 == 0) {
            document.getElementById('menu2').style.display="inline-block";
            clicktimes2 = 1
        } else {
            document.getElementById('menu2').style.display="none";
            clicktimes2 = 0
        }
    });
    jQuery('#dropdownMenu3').click(function(){
        if(clicktimes3==0){
            document.getElementById('menu3').style.display="inline-block";
            clicktimes3=1;
        }
        else {
            document.getElementById('menu3').style.display="none";
            clicktimes3=0;
        }
    });
})
</script>

<style lang="scss" scoped>

.titleBackground {
    background-image: url('../assets/logo/peakcalling17.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size:contain;
    // background-size: 100% 100%;
}
.siderArea {
    margin-left: -15px; 
    z-index: 999;
}
</style>
