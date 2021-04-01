<template>
    <div id="contact">
        <div>
            <v-header></v-header>
        </div>
        <div id="container" class="container" style="margin-top:10%;">
            <div class="col-xs-12">
                <div class="row">
                    <div class="col-xs-12">
                        <h1 id="h1" class="page-header" style=""><b>※ Person to Contact</b></h1>
                        <p style="font-size:18px;margin-bottom:50px;">If you have any questions or comments, please contact us.</p>
                        <div class="contact" style="border-left:7px solid #009944;padding-left:3%">
                            <p><span class="name"><a href="https://www.researchgate.net/profile/Jian_Ren2/publications" target="_blank"><h2>Jian Ren</h2></a> </span><a href="mailto:renjian@sysucc.org.cn" style="font-size:18px;">renjian@sysucc.org.cn</a></p>
                            <i style="font-weight:bold;font-size:18px;">Professor of Bioinformatics</i>
                            <p style="font-size:18px;">School of Life Sciences, Cancer Center, Sun Yat-sen University, Guangzhou 510060, China</p>
                            <br>
                            <p><span class="name"><a href="https://www.researchgate.net/profile/Zhixiang_Zuo/publications" target="_blank"><h2>Zhixiang Zuo</h2></a> </span><a href="mailto:zuozhx@sysucc.org.cn" style="font-size:18px;">zuozhx@sysucc.org.cn</a></p>
                            <i style="font-weight:bold;font-size:18px;">Associate Professor of Cancer Genomics</i>
                            <p style="font-size:18px;">Cancer Center, Sun Yat-sen University, Guangzhou 510060, China</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        <div class="footer">
            <v-footer></v-footer>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
export default {
    components: {
        'v-header': Header,
        'v-footer': Footer
    }
}
</script>

<style lang="scss" scoped>
#contact {
    height: 100%;
};
#container {
    min-height: 100%;
};
.footer {
    position: absolute;
    bottom: 0;
    width:100%;
}
.page-header {
    color:#0082c9;
    font-size:35px;
}
</style>
