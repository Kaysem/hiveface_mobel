// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'lib-flexible';
import Echarts from 'echarts';

import axios from 'axios';
import config from '../static/js/config';
import url from '../static/js/url.js';
Vue.config.productionTip = false;

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

Vue.prototype.$axios = axios;
Vue.prototype.$config = config;
Vue.prototype.$url = url;
Vue.prototype.$echarts = Echarts;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
