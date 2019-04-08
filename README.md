# vue-frame vue3.0框架


### 框架介绍

1.本框架采用vue，vue-router, axios, webpack


### 目录结构描述
```js
├── README.md           // help
├── babel.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── Load.gif
│   │   ├── iconfont
│   │   └── logo.png
│   ├── components
│   ├── config.js       // 全局变量
│   ├── js
│   │   ├── ajax    // ajax请求（axios）
│   │   ├── api     // 接口列表
│   │   ├── cookie  // cookie存储的方法
│   │   ├── regexp  // 简单的正则
│   │   ├── static
│   │   └── utils
│   ├── main.js // 入口
│   ├── router  // vue-router 配置
│   │   ├── index.js
│   │   └── routes.js
│   ├── scss
│   │   ├── app.scss
│   │   ├── common.scss
│   │   ├── icon.scss
│   │   ├── mixins.scss
│   │   ├── toast.scss
│   │   └── variables.scss  // 转化rem的
│   ├── store   // vuex
│   │   ├── index.js
│   │   ├── modules
│   │   └── types.js
│   ├── vendor  // 组件
│   │   └── v-toast.js
│   └── views   // 页面
│       ├── 404.vue
│       ├── index.vue
│       └── toast.vue
└── vue.config.js   // webpack配置
```

### 启动命令
```js
1.npm install       // 安装node环境
2.npm run serve     // 启动项目
3.npm run dist      // 项目打包
```


