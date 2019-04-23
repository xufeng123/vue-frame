import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import CONFIG from '../config';
import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
    // mode: 'hash', // 设置路由模式 可选值: "hash" | "history" | "abstract"，默认"hash"
    mode: 'history', // 设置路由模式 可选值: "hash" | "history" | "abstract"，默认"hash"
    // linkActiveClass: 'u-link--Active', // 这是链接激活时的class
    // base: '/vuex-demo/', // 这个是设置根目录路径，默认'/'
    base: '/', // 根目录路径，配合./config/index.js中的设置，目的在build后，能顺利部署到服务端，与后台文件不冲突。。。
    // scrollBehavior, // 还原滚动条位置 // 使用v-scroll-postion记录、还原滚动位置，此方式不用了。
    routes // 挂载路由集合
});

router.beforeEach((to, from, next) => {
    store.commit('OPEN_LOADING');
    next();
});

// 设置页面title
router.setTitle = function (title) {
    document.title = title;
    try {
        setTitle(title);    //eslint-disable-line
    } catch (e) {  }    //eslint-disable-line
};

router.afterEach(route => {
    /** set title */
    if (route.meta && route.meta.title) {
        router.setTitle(route.meta.title);
    } else {
        router.setTitle(CONFIG.title);
    }
    try { // 路由跳转，隐藏菊花~
        if (store && store.state) {
            store.dispatch('CLOSE_LOADING');
        }
    } catch (e) {
        console.error('router.afterEach: ', e);
    }
});

router.direct = (to, from) => {
    if (from && to) {
        if (from.path === '/' && !from.name) return 0;
        if (from.query && !from.query.timestamp) return 1;
        if (to.query && !to.query.timestamp) return -1;
        if (from.query && to.query && to.query.timestamp < from.query.timestamp) return -1;
        else return 1;
    }
    if (store.getters.position.hasOwnProperty(router.currentRoute.query.timestamp)) {
        return 0; // 回退
    }
    return 1; // 进入
};

let p = router.push,
    r = router.replace;
router.push = function (params) {
    let tag = Date.now();
    if (params.query) {
        params.query.timestamp = tag;
    } else {
        params.query = {timestamp: tag};
    }
    p.call(router, params);
};
router.replace = function (params) {
    let tag = Date.now();
    if (params.query) {
        params.query.timestamp = tag;
    } else {
        params.query = {timestamp: tag};
    }
    r.call(router, params);
};

export default router;
