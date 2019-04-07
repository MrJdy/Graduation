// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import 'mint-ui/lib/style.css';
import './assets/styles/common.scss';
import './assets/styles/border.scss';
import './assets/styles/reset.scss';
import './assets/styles/iconfont.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
