// import Vue from 'vue';
import axios from 'axios';
import store from '../../store/';
import _promise from 'promise';

// Vue.use(axios);

if (typeof Promise === 'undefined') {
    var Promise = _promise;
}
// 增加接口超时响应
var instance = 10000;

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // config.headers = Object.assign({}, config.headers, {
    //     'Authorization': '22222222222', // header头内传值
    //     'Content-Type': 'application/x-www-form-urlencoded'     // 表单提交
    // })
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export function post (uri, params, opts) {
    if (opts && opts.loading) {
        store.commit('OPEN_LOADING'); // 显示菊花
    }
    let options = opts && opts.options || {}; // options of vue-resource
    options.params = opts && opts.query || {}; // 传入的参数，转换到query方式，具体说明查看API
    return axios.post(uri, params, {
        timeout: instance
    }).then(function (res) {
        if (opts && opts.loading) {
            store.dispatch('CLOSE_LOADING'); // 隐藏菊花
        }
        var result = res.data;
        return Promise.resolve(result);
    }, function (err) {
        if (opts && opts.loading) {
            store.dispatch('CLOSE_LOADING'); // 菊花
        }
        return Promise.reject(err);
    }).catch(function (err) {
        if (opts && opts.loading) {
            store.dispatch('CLOSE_LOADING'); // 菊花
        }
        return Promise.reject(err);
    });
};
export function get (uri, params, opts) {
    if (opts && opts.loading) {
        store.commit('OPEN_LOADING'); // 显示菊花
    }
    return axios.get(uri, {params}, {
        timeout: instance
    }).then(function (res) {
        if (opts && opts.loading) {
            store.dispatch('CLOSE_LOADING'); // 隐藏菊花
        }
        let result = res.data;
        return Promise.resolve(result);
    }, function (err) {
        if (opts && opts.loading) {
            store.dispatch('CLOSE_LOADING'); // 隐藏加载框
        }
        return Promise.reject(err);
    }).catch(function (err) {
        if (opts && opts.loading) {
            store.dispatch('CLOSE_LOADING'); // 隐藏加载框
        }
        return Promise.reject(err);
    });
}
