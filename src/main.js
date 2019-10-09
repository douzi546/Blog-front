import Vue from 'vue'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import vueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import $ from 'jquery'

import hljs from 'highlight.js' //导入代码高亮文件
import 'highlight.js/styles/atelier-savanna-light.css'  //导入代码高亮样式

import App from './App.vue'
import router from './router'

Vue.directive('highlightB', {
  componentUpdated: function (el) {
    let blocks = el.querySelectorAll('pre');
    for (let i = 0; i < blocks.length; i++) {
      const item = blocks[i];
      hljs.highlightBlock(item);
    };
  }
});


import axios from 'axios'
Vue.prototype.$http = axios

import moment from 'moment'
Vue.prototype.$moment = moment
Vue.filter('dateFormat', function (dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dateStr).format(pattern)
})

Vue.use(vueAwesomeSwiper)
Vue.config.productionTip = false



Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
