var path = require('path');
// var vueLoaderConfig = require('./vue-loader.conf');

function resolve (dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    publicPath: '/',
    // 输出文件目录
    outputDir: 'dist',
    configureWebpack: config => {
        config.resolve = {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': resolve('src'),
                'assets': path.resolve(__dirname, '../src/assets')
            }
        };
        config.module = {
            rules: [
                {
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    enforce: 'pre',
                    include: [resolve('src'), resolve('test')],
                    options: {
                        formatter: require('eslint-friendly-formatter')
                    }
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    include: [resolve('src'), resolve('test')]
                },
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    loader: 'url-loader',
                    query: {
                        limit: 10000,
                        // name: utils.assetsPath('img/[name].[hash:7].[ext]')
                    }
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: 'url-loader',
                    query: {
                        limit: 10000,
                        // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                    }
                },
                {
                    test: /\.(css|scss)$/,
                    loader: 'style-loader!css-loader!postcss-loader!sass-loader'
                }
            ]
        };
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
