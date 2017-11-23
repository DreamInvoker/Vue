
https://github.com/varHarrie/YmxvZw/issues/7

本教程涉及技术栈和相关工具为：webpack@1，vue@1，vue-router@0.7，vuex@1，eslint

对于webpack@2和vue@2，请参考官方文档作改动

如果项目本身并没有特别需求，还是推荐使用vue-cli构建项目，方便快捷


推荐vue项目目录结构：

— config 全局变量
— dist 编译后的项目代码
— src 项目源码
— — apis api封装
— — components Vue组件
— — libs js工具类
— — router 路由
— — — — index.js 路由对象
— — — — routes.js 路由配置
— — store Vuex的store
— — — — modules vuex模块
— — — — types.js type管理
— — styles css样式
— — views 页面组件
— — main.js vue入口文件
— webpack.config Webpack各种环境的配置文件
— package.json

第一步：初始化项目

1.所有项目的第一步当然是：创建项目文件夹，然后使用npm init -y创建package.json

2.项目根目录下建立src和dist文件夹，分别用来存放项目源码和webpack编译后的代码

第二步：入口文件
1.在根目录下直接建立一个index.html，作为页面的入口文件
2.在src下建立一个main.js，作为Vue的入口文件
3.安装模块
安装Vue：npm install vue@1 --save
安装Webpack： npm install webpack --save-dev
4.使用webpack编译打包
除非在全局安装webpack，使用本地安装需要在package.json的script加入运行脚本，添加之后
package.json如下：
{
  "name": "step2",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack src/main.js dist/main.js"  // <---添加这句
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "vue": "^1.0.28"
  },
  "devDependencies": {
    "webpack": "^1.14.0"
  }
}
运行npm run dev，再用浏览器打开index.html就能看到效果了

