<template>
    <div>
        <div>
            <v-header></v-header>
        </div>
             <div class="container-fluid" style="margin-bottom:50px;padding-bottom:20px;padding-left:6%;padding-right:6%;">
                <div class="col-md-12" style="margin-top:100px;padding-left:0px;padding-right:0px;">
                    <br><br>
                    <hr style="color:#000000;border:1px solid;margin-top:20px;margin-bottom:0px;">
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
            <div class="foot">
                    <v-footer></v-footer>
            </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
    data() {
        return {
            
        }
    }, 
    components: {
        'v-header': Header,
        'v-footer': Footer,   
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
        else if(clicktimes3==1){
            document.getElementById('menu3').style.display="none";
            clicktimes3=0;
        }
    });
})
</script>

<style lang="scss" scoped>
.foot {
    position: absolute;
    bottom: 0;
    width:100%;
}
// #download {
//     // margin: 10% 10%;
// }
</style>
