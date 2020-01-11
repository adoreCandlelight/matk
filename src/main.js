// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import jQuery from 'jquery'
// Vue.use(jQuery)

import igv from 'igv'


import qs from 'qs';
Vue.use(qs)

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

import 'iview/dist/styles/iview.css';
// 按需引入iView
import { Upload } from 'iview'
Vue.component('Upload', Upload)
// Vue.component('Message', Message)
/*
引入element-ui需要*webpack.config.js  配置file_loader
*/

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);

//按需引入element-ui
// import { Icon, Button, ButtonGroup, Input, Progress, Message } from 'element-ui';
// Vue.use(Icon);
// Vue.use(Button);
// Vue.use(ButtonGroup);
// // Vue.use(Upload);
// Vue.use(Input);
// Vue.use(Progress);
// Vue.use(Message)
// Vue.use(Row);
// Vue.use(Col);
// Vue.use(Form);
// Vue.use(FormItem)

// 引入echarts
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
