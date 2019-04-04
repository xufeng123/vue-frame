import * as ajax from '../ajax/index';
/**
 * 业务要用的post和get方法
 * */
/**
 *  请求七牛云的接口，获取token
 */
export function QngetToken (params, opts) {
    let uri = 'http://qiniu.systoon.com/getToken.php',
        param = params || {};
    return ajax.get(uri, param, opts);
};
/**
 * 图片上传七牛云
 */
export function QngetImage (params, opts) {
    let uri = 'http://upload.qiniu.com',
        param = params || {};
    return ajax.post(uri, param, opts);
};
/**
 * post方法
 * 如果每个接口都需要身份的话，可以统一在这配置
 * */
export function publicPost (url, params, opts) {
    let uri = url,
        param = params || {};
    return ajax.post(uri, param, opts);
}
/**
 * get方法
 */

export function publicGet (url, params, opts) {
    let uri = url,
        param = params || {};
    return ajax.get(uri, param, opts);
}
