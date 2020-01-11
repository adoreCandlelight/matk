<template>
    <div>
        <div>
            <v-header></v-header>
        </div>
         <div>
            <v-back-to-top></v-back-to-top>
        </div>
        <div class="row" style="padding-left:0px;">
            <div class="col-md-2 col-sm-3 col-xs-4 sticky" id="sidebar">
                <nav>
                    <ul class="navList">
                        <h2 class="navigation"><b>Navigation</b></h2>
                        <li class="nav-item">
                            <a href='#bigpart1' class="nav-link"><b>Introduction</b></a>
                        </li>
                        <li class="nav-item">
                            <a href='#bigpart2' class="nav-link"><b>Usage of MATK</b></a>
                        </li>
                        <li class="nav-item">
                            <a href='#bigpart3' class="nav-link"><b>Example</b></a>
                        </li>
                        <li class="nav-item">
                            <a href='#bigpart4' class="nav-link"><b>Note</b></a>
                        </li>                   
                    </ul>
                </nav>
            </div>
            <div id="content" class="col-md-10 col-sm-9 col-xs-8" style="padding-left:6%;padding-right:8%;height:auto;">
                <div class="row">
                    <div>
                        <h1 id="bigpart1" class="page-header">Introduction</h1>
                        <p style='font-size:18px!important'>N6-methyladenosine (m6A) is the most prevalent RNA modification in eukaryotic cell. Similar to the well-studied DNA methylation, m6A is also a reversible modification that orchestrates important functionalities of transcriptome. Over the past 10 years, m6A can only be identified by some conventional low-throughput methods, such as 2D-thin layer chromatography (2D-TLC), mass-spectrography and SCARLET. Until 2012, the development of methylated RNA immunoprecipitation sequencing (MeRIP-seq, also known as 'm6A-seq') technology has done away with this restriction, allowing the profile of transcriptome-wide m6A landscape in a more high-throughput manner. The interpretation of m6A signal from MeRIP-seq data highly relies on computational methods. Recently, several algorithms were designed to meet the computational need for MeRIP-seq-based m6A peak detection. Although this set of newly developed tools have achieved a fairly robust performance, limitations and deficiencies still existed. Therefore, the development of methodologies that enabling the identification of single-nucleotide-resolution m6A sites are of particularly important and necessary.</p>
                        <br>
                        <p style='font-size:18px!important'>Here, we present a novel software, MATK, for the identification of single-nucleotide-resolution m6A sites from MeRIP-seq experiment. MATK deploys the Variational Autoencoder (VAE), a newly proposed generative neural network algorithm, to model the genome-wide distribution of reads enrichment. The VAE model can learn a probability distribution over its set of input using the unsupervised learning scheme, which avoiding the assumption of a predefined distribution and achieving high accuracy in peak detection. Based on the identified peaks, a convolutional neural network (CNN) is applied to derive single-nucleotide-resolution m6A sites from the peak regions. Combining these two deep learning-based frameworks, MATK can perform peak detection over the MeRIP-seq data at a single nucleotide level with high accuracy. Also, to provide a robust algorithm for quantitative analysis, we introduced a Bayesian hierarchical model in our tool, and developed a novel approach to estimate methylation level from MeRIP-seq data with no or small number of replicates. Evaluations on simulated or real dataset together with qPCR validation showed that MATK can achieve an accurate detection of precise m6A sites from MeRIP-seq experiments, and is able to help singling out differential methylated events when dealing with comparable samples.</p>
                    </div>
                    <br>
                    <div>
                        <h1 id="bigpart2" class="page-header">Usage of MATK</h1>    
                        <p class="tagTip">Basic command</p>
                        <pre style='font-size:16px'><b>java -jar MATK-1.0.jar [command] [options]</b></pre>
                        <br> 
                        <p style='font-size:18px!important'>There are five commands available in MATK.</p>
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th>Command</th>
                              <th>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>-h</td>
                              <td>Show the help page of MATK </td>
                            </tr>
                            <tr>
                              <td>-peakCalling</td>
                              <td>Perform peak calling for MeRIP-seq data</td>
                            </tr>
                            <tr>
                              <td>-singleNucleotide</td>
                              <td>Predict single-nucleotide-resolution m6A sites from MeRIP-seq data</td>
                            </tr>
                            <tr>
                              <td>-quantification</td>
                              <td>Quantify true m6A level from MeRIP-seq data</td>
                            </tr>
                            <tr>
                              <td>-diff</td>
                              <td>Identify differential m6A level by comparing between two given conditions</td>
                            </tr>
                          </tbody>
                        </table>
                        <br>

                        <p class="tagTip">Peak calling</p>
                        <p style="font-size: 16px;">This is the main function in MATK. Peak calling will perform on a pair of IP/Input sample.</p>
                        <br>
                        <ul class="liTitle">
                            <li><strong>Mandatory parameters</strong></li>
                        </ul>
                        <pre style='font-size:16px'><b>-ip</b></pre>
                        <p style='font-size:18px!important'>This option will set the IP samples for peak calling. Only BAM format is supported. Multiple replicates should be separated by semicolon.</p>
                        <br>                        
                        <pre style='font-size:16px'><b>-input</b></pre>
                        <p style='font-size:18px!important'>This option will set the Input samples for peak calling. Only BAM format is supported. Multiple replicates should be separated by semicolon.</p>
                        <br>                  
                        <pre style='font-size:16px'><b>-out</b></pre>
                        <p style='font-size:18px!important'>Indicate the location of result file. MATK will save the peak calling results in this file.</p>
                        <br> 
                        <ul class="liTitle">
                            <li><strong>Optional parameters</strong></li>
                        </ul>
                                          
                        <pre style='font-size:16px'><b>-q</b></pre>
                        <p style='font-size:18px!important'>The identification threshold for peak calling. MATK use a generalized Pareto distribution (GPD) to filter out peaks that are significantly enriched in the IP sample. This parameter indicate a screening criterion. The default value is set to 0.05. Usually, this parameter can be set from 0.05 to 0.01.</p>
                        <br>                        
                        <pre style='font-size:16px'><b>-c</b></pre>
                        <p style='font-size:18px!important'>This parameter is only valid under multiple replicates. It indicate a minimum number of samples that support a given region to be a true m6A peak. Default is 2. The value should be set between 1 and J. Where J is the number of replicates applied in the experiment.</p>
                        <br>                        
                        <pre style='font-size:16px'><b>-technicalRep</b></pre>
                        <p style='font-size:18px!important'>Whether the experiment is technical replicates or biological replicates. Sets as true for technical replicates, and false for biological replicates. Default is false. If technical replicate is chosen, MATK will use a more stringent strategy to combine peaks from different replicate samples.</p>
                        <br>                        
                        <pre style='font-size:16px'><b>-gtf</b></pre>
                        <p style='font-size:18px!important'>
                            Sets the gene set annotation for peak calling. If the gtf file is provided, MATK will perform annotation on the identified peaks. GTF file can be download in our 
                            <a href="http://matk.renlab.org/">website</a> or in <a href="http://asia.ensembl.org/info/data/ftp/index.html">ENSEMBL</a>.
                        </p>
                        <br />
                        <p class="tagTip">Single-nucleotide-resolution prediction</p>
                        <p>This option use a CNN model to predict single-nucleotide-resolution sites from the provided peak regions.</p>
                        <ul class="liTitle">
                            <li><strong>Mandatory parameters</strong></li>
                        </ul>
                        <pre style='font-size:16px'><b>-ip</b></pre>
                        <p style='font-size:18px!important'>Sets the IP samples. The same as in peak calling options. Only valid in "MeRIP" mode.</p>
                        <br>                        
                        <pre style='font-size:16px'><b>-input</b></pre>
                        <p style='font-size:18px!important'>Sets the input samples. The same as in peak calling options. Only valid in "MeRIP" mode.</p>
                        <br>                  
                        <pre style='font-size:16px'><b>-bed</b></pre>
                        <p style='font-size:18px!important'>
                            Sets the m6A peaks obtained from MeRIP-seq experiment. Use the peak calling command in MATK can produce this file. The m6A peaks should be stored in 
                            <a href="http://www.genome.ucsc.edu/FAQ/FAQformat.html#format1">BED</a> format.
                        </p>
                        <br /> 
                        <pre style='font-size:16px'><b>-fasta</b></pre>
                        <p style='font-size:18px!important'>
                            Sets the input file in 
                            <a href="https://en.wikipedia.org/wiki/FASTA_format">FASTA</a> format. Only valid in "Fasta" mode.
                        </p>
                        <br />
                        <pre style='font-size:16px'><b>-out</b></pre>
                        <p style='font-size:18px!important'>Sets the output path. The predicted single-nucleotide-resolution sites will be saved in 
                            <a href="http://www.genome.ucsc.edu/FAQ/FAQformat.html#format1">BED</a> format.</p>
                        <br>
                        <pre style='font-size:16px'><b>-2bit</b></pre>
                        <p style='font-size:18px!important'>Sets the genomic sequence in 2bit format. The 2bit file for human and mouse genome can be downloaded in our
                            <a href="http://matk.renlab.org/">website</a>, or generated by faToTwoBit program in 
                            <a href="http://hgdownload.soe.ucsc.edu/admin/exe/">UCSC toolkit</a>.
                        </p>
                        <br>
                        <ul class="liTitle">
                            <li><strong>Optional parameters</strong></li>
                        </ul>   
                        <pre style='font-size:16px'><b>-sp</b></pre>
                        <p style='font-size:18px!important'>Sets the species. Currently, only human and mouse are provided. Should be "Human" or "Mouse". Default is "Human".</p>
                        <br>                        
                        <pre style='font-size:16px'><b>-t</b></pre>
                        <p style='font-size:18px!important'>Sets the prediction threshold. Should be "High", "Medium" or "Low". Default is "High".</p>
                        <br>
                        <pre style='font-size:16px'><b>-mode</b></pre>
                        <p style='font-size:18px!important'>Prediction mode. "MeRIP" or "Sequence" mode. Default is "MeRIP". MATK can use primary sequence feature or MeRIP-seq coverage information to predict precise m6A sites. Use only primary sequence feature may introduce false positives in the prediction, but it will be much faster in computation. The “MeRIP” mode use both the primary sequence and MeRIP-seq coverage to predict m6A sites. Generally, this mode will be more accurate than the “Sequence” mode, but will cost more computational resources.</p>
                        <br>                        
                        <pre style='font-size:16px'><b>-gtf</b></pre>
                        <p style='font-size:18px!important'>Sets the gene set annotation for m6A site prediction. If the gtf file is provided, MATK will perform annotation on the predicted sites. This option can help users to filter out low-confident sites that are located outside known transcripts. Gtf file can be download in our website or in Ensembl.</p>
                        <br>    
                        
                          <p class="tagTip">Quantification of m6A level</p>
                        <p>This option use a Bayesian hierarchical model to quantify true m6A level from MeRIP-seq data. The basal expression level for a given transcript is estimated by MCMC process, and eliminate from the methylation level.</p>
                        <ul class="liTitle">
                            <li><strong>Mandatory parameters</strong></li>
                        </ul>
                        <pre style='font-size:16px'><b>-ip</b></pre>
                        <p style='font-size:18px!important'>Sets the IP samples. The same as in peak calling options.</p>
                        <br>                        
                        <pre style='font-size:16px'><b>-input</b></pre>
                        <p style='font-size:18px!important'>Sets the input samples. The same as in peak calling options.</p>
                        <br>                  
                        <pre style='font-size:16px'><b>-bed</b></pre>
                        <p style='font-size:18px!important'>Sets the m6A peaks obtained from MeRIP-seq experiment. Should be stored in 
                            <a href="http://www.genome.ucsc.edu/FAQ/FAQformat.html#format1">BED</a> format.
                        </p>
                        <br> 
                        <pre style='font-size:16px'><b>-out</b></pre>
                        <p style='font-size:18px!important'>Sets the output path. The quantification result will be saved in 
                            <a href="http://www.genome.ucsc.edu/FAQ/FAQformat.html#format1">BED</a> format.
                        </p>
                        <br>
                        <pre style='font-size:16px'><b>-gtf</b></pre>
                        <p style='font-size:18px!important'>Sets the gene set annotation for quantification analysis.</p>
                        <br>
                        <ul class="liTitle">
                            <li><strong>Optional parameters</strong></li>
                        </ul>                    
                        <pre style='font-size:16px'><b>-iteration</b></pre>
                        <p style='font-size:18px!important'>Sets the iteration time for MCMC algorithm. Default is 10000.</p>
                        <br>                        
                        <pre style='font-size:16px'><b>-burn_in</b></pre>
                        <p style='font-size:18px!important'>Sets the burn in time for MCMC algorithm. Should be smaller than the iteration time. Default is 9000.</p>
                        <br> 

                        <p class="tagTip">Differential m6A sites dectection</p>
                        <p>This option compares the m6A level between two given experimental conditions. An empirical test is performed based on the quantification results.</p>
                        <ul class="liTitle">
                            <li><strong>Mandatory parameters</strong></li>
                        </ul>
                        <pre style='font-size:16px'><b>-control_ip</b></pre>
                        <p style='font-size:18px!important'>
                            Sets the IP samples of control condition.
                        </p>
                        <br />
                        <pre style='font-size:16px'><b>-control_input</b></pre>
                        <p style='font-size:18px!important'>
                            Sets the input samples of control condition.
                        </p>
                        <br />
                        <pre style='font-size:16px'><b>-control_bed</b></pre>
                        <p style='font-size:18px!important'>
                            Sets the m6A peaks obtained from control MeRIP-seq experiment. Should be stored in 
                            <a href="http://www.genome.ucsc.edu/FAQ/FAQformat.html#format1">BED</a> format.
                        </p>
                        <br />
                        <pre style='font-size:16px'><b>-treated_ip</b></pre>
                        <p style='font-size:18px!important'>
                            Sets the IP samples of treated condition.
                        </p>
                        <br />
                        <pre style='font-size:16px'><b>-treated_input</b></pre>
                        <p style='font-size:18px!important'>
                            Sets the input samples of treated condition.
                        </p>
                        <br />
                        <pre style='font-size:16px'><b>treated_bed</b></pre>
                        <p style='font-size:18px!important'>
                            Sets the m6A peaks obtained from treated MeRIP-seq experiment. Should be stored in 
                            <a href="http://www.genome.ucsc.edu/FAQ/FAQformat.html#format1">BED</a> format.
                        </p>
                        <br />
                        <pre style='font-size:16px'><b>-out</b></pre>
                        <p style='font-size:18px!important'>
                            Sets the output path. The differential m6A events will be saved in tsv format.
                        </p>
                        <br />
                        <pre style='font-size:16px'><b>-gtf</b></pre>
                        <p style='font-size:18px!important'>
                            Sets the gene set annotation for differential analysis. Should be in GTF format.
                        </p>
                        <br />

                        <ul class="liTitle">
                            <li><strong>Optional parameters</strong></li>
                        </ul>
                        <pre style='font-size:16px'><b>-iteration</b></pre>
                        <p style='font-size:18px!important'>
                            Sets the iteration time for MCMC algorithm. Default is 10000.
                        </p>
                        <br />
                        <pre style='font-size:16px'><b>-burn_in</b></pre>
                        <p style='font-size:18px!important'>
                            Sets the burn in time. Should be smaller than iteration time. Default is 9000.
                        </p>
                        <br />
                        <div id="bigpart3">
                            <h1 class="page-header">Example</h1>
                            <br>
                            <p class="tagTip">For peak calling</p>
                            <pre style='font-size:16px'><b>java -jar MATK-1.0.jar -peakCalling -ip "ip1.bam;ip2.bam;ip3.bam" -input "input1.bam;input2.bam;input3.bam"  -out peak.bed</b></pre>
                            <br>    
                            <p class="tagTip">For single-nucleotide-resolution prediction</p>
                            <pre style='font-size:16px'><b>java -jar MATK-1.0.jar -singleNucleotide -ip "ip1.bam;ip2.bam;ip3.bam" -input "input1.bam;input2.bam;input3.bam" -bed peak.bed -2bit hg19.2bit -out m6A_sites.bed</b></pre>         
                            <br>
                            <p class="tagTip">For quantification</p>
                            <pre style='font-size:16px'><b>java -jar MATK-1.0.jar -quantification -ip "ip1.bam;ip2.bam;ip3.bam" -input "input1.bam;input2.bam;input3.bam" -bed peak.bed -gtf hg19.gtf -out m6A_quantification.bed</b></pre>
                            <br>
                            <p class="tagTip">For differentiation</p>
                            <pre style='font-size:16px'><b>java -jar MATK-1.0.jar -diff  -control_ip "control_ip1.bam;control_ip2.bam;control_ip3.bam" -control_input "control_input1.bam;control_input2.bam;control_input3.bam" -treated_ip "treated_ip1.bam;treated_ip2.bam;treated_ip3.bam" -treated_input "treated_input1.bam;treated_input2.bam;treated_input3.bam" -control_bed control_peak.bed -treated_bed treated_peak.bed -gtf hg19.gtf -out m6A_differentiation.txt</b></pre>         
                            <br>
                        </div>

                        <div id="bigpart4">
                            <h1 class="page-header" style="color:red;">Note</h1>
                            <ol class="note">
                                <li>The physical memory should be larger than 4g. JVM memory should set larger than 4g. Example: java –Xms4g</li>
                                <li>By default, MATK will occupy all threads when running. You can restrict your job to specified number of threads by setting the OMP_NUM_THREADS environment variable before starting your job.Example: export OMP_NUM_THREADS=8</li>
                            </ol>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <v-footer></v-footer>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import BackToTop from './BackToTop.vue';
export default {
    components: {
        'v-header': Header,
        'v-footer': Footer,
        'v-back-to-top': BackToTop   
    }
}
</script>

<style lang="scss" scoped>
.sticky {
    position: sticky;
    top: 80px;
    // background-color: aqua;
};
#sidebar {
    background-color:dimgrey;
    // height: 100%;
    padding: 50px 2px 650PX 2PX;
    // width: auto;
}
#content {
    text-align: justify;
}
.navigation {
    color: #0b51a1;
    font-size: 30px;
}
.navList {
    padding-left: 22%;
    list-style-type: none;
    min-width: 184px;
};
.nav-item {
    // padding-left: 10%;
    font-size: 1.9rem;
    margin: 10px 0;
    
};
.nav-link {
    // color:grey;
    color: cornsilk;
}
#bigpart1 {
    margin-top: -10px;
    padding-top: 120px;
}
#bigpart2, #bigpart3, #bigpart4 {
    margin-top: -130px;
    padding-top: 130px;
}
.tagTip {
    font-size: 22px;
    font-weight: bold;
};
.liTitle {
    font-size: 19px;
    padding-left: 25px;
};
.page-header {
    font-size: 3rem;
    font-weight: 600;
}
// #bigpart1:target {
//     position: relative;
//     padding-top: 100px;
// }
th {
    font-size: 18px;
}
td {
    font-size: 16px;
}
.note {
    font-size: 16px;
}
</style>
