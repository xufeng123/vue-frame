module.exports = {
    // 输出文件目录
    outputDir: 'dist',
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        }
    },
    devServer: {
        port: 8080,     // 端口
        // host: '',    // 不配置默认为本地的ip
        open: true,     // 配置自动打开浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        // 配置多个代理
        // proxy: {
        //     '/api': {
        //         target: '',
        //         ws: true,
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // }
    }
};
