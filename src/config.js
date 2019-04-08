// 全局变量

const config = {
    title: 'frame',
    url: '',
};

if (process.env.NODE_ENV === 'development') {   // 开发环境
    config.url = 'http://172.28.43.107:8080/piper';
} else if (process.env.NODE_ENV === 'production') { // 如果是线上环境，修改对应的参数.
    config.url = '';
}

export default config;
