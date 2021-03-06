import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import { sync } from 'vuex-router-sync';
import store from './store/index';
require('./js/static/fastclick'); // get fastclick
import Toast from './vendor/v-toast.js';
import axios from 'axios';
import i18n from './i18n/index';

Vue.use(i18n);

Vue.config.productionTip = false;

// 注册 fastclick
document.addEventListener('DOMContentLoaded', function () {
    if (window.FastClick) window.FastClick.attach(document.body);
}, false);

// 使用axios
Vue.prototype.$http = axios;

sync(store, router);

Vue.use(Toast);

new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app');
