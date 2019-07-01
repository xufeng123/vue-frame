/** ==================== 浏览器相关 ==================== */
export function getQueryStringByName (name) {
    var result = document.location.search.match(new RegExp('[\?\&]' + name + '=([^\&]+)', 'i'));
    if (result == null || result.length < 1) {
        return '';
    }
    return result[1];
};
/** ==================== 截取URL参数相关 ==================== */
export function getUrlQueryStringByName (url, name) {
    let urlNew = '?' + url.split('?')[1];
    var result = urlNew.match(new RegExp('[\?\&]' + name + '=([^\&]+)', 'i'));
    if (result == null || result.length < 1) {
        return '';
    }
    return result[1];
};
