import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import { sync } from 'vuex-router-sync';
import store from './store/index';
import Toast from './vendor/v-toast.js';
import axios from 'axios';

// 注册 fastclick
document.addEventListener('DOMContentLoaded', function () {
    if (window.FastClick) window.FastClick.attach(document.body);
}, false);

// 使用axios
Vue.prototype.$http = axios;
// Vue.prototype.HOST='/api';

sync(store, router);

Vue.use(Toast);

// // 增加接口超时响应
// Vue.http.interceptors.push((request, next) => {
//   var timeout;
// // 这里改用 _timeout ，就不会触发原本的
//   if (request._timeout) {
//    // 一样绑定一个定时器，但是这里是只要触发了，就立即返回 response ， 并且这里自定义 status 和 statusText
//       timeout = setTimeout(() => {
//           if (request.onTimeout) request.onTimeout(request);
//           request.abort();
//       }, request._timeout);
//   }
//   next((response) => {
//       clearTimeout(timeout);
//   });
// });

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
