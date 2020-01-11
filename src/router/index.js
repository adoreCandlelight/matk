import Vue from 'vue'
import Router from 'vue-router'

import WebServer from '../components/Server.vue'
import TEST from '../components/test.vue'
import Home from '../components/Home.vue'
import Download from '../components/Download.vue'
import Contact from '../components/Contact.vue'
import Help from '../components/Help.vue'
import Result from '../components/Result.vue'
import Igv from '../components/IGV.vue'
import IGVtest from '../components/IGVtest.vue'
import Canvas from '../components/CanvasTest.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'testing',
      component: TEST
    },
    {
      path: '/igvtest',
      name: 'igvtesting',
      component: IGVtest
    },
    {
      path: '/canvastest',
      name: 'canvas',
      component: Canvas
    },
    {
      path: '/server',
      name: 'server',
      component: WebServer
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/download',
      name: 'download',
      component: Download
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    },
    {
      path: '/result/:aid',
      name: 'result',
      component: Result
    },
    {
      path: '/igv/:aid',
      name: 'igv',
      component: Igv
    },
    {
      path: '*',
      redirect: '/home'  // 默认跳转路由
    }

  ]
})
