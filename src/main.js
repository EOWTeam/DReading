// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
Vue.config.productionTip = false


import Header from '@/components/Header'
Vue.component('eo-header',Header)

import SitePlugin from '@/components/SitePlugin'
Vue.component('eo-siteplugin', SitePlugin)

import Wallet from '@/components/Wallet'
Vue.component('eo-wallet', Wallet)

//

//
//import Mock from '@/mock/mock'
//Mock.start();




// 判断是否可以登录 

router.beforeEach((to, from, next) => {
  //NProgress.start();
  if (to.path == '/login') {
     sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
