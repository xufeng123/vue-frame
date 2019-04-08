/**
 * 获取指定名称的api接口地址
 * apiUrlList 接口相对地址列表
 * getApiUrl 获取接口实际地址
 * @param apiName 接口名称
 * @return string api地址
 */
import config from '../../config';

let serveUrl = config.url;

// 接口列表统一入口
const apiUrlList = {
    getContentList: '/content/list'
};
function getApiUrl (apiName) {
    return serveUrl + apiUrlList[apiName];
}
export default getApiUrl;
