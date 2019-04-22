// 全局变量
const config = {
    instance: 100000,   // 设置请求超时
    title: 'frame',
    url: '',
    lang: 'zh'    // 获取语言（国际化）
};

if (process.env.NODE_ENV === 'development') {   // 开发环境
    config.url = '';
} else if (process.env.NODE_ENV === 'production') { // 如果是线上环境，修改对应的参数.
    config.url = '';
}

export default config;
