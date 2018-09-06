---
title: 从零开始发布npm包
date: 2018-09-06 16:37:10
tags:
    - npm
    - javascript
    - babel
categories: JavaScript
---

# 注册npm账号

- 邮箱必填（**注册成功后一定要激活**）

# 使用代码托管平台创建一个仓库（这里使用GitHub）

<!-- more -->

# npm初始化项目

```
npm init
```

- **name**: 包名（最好先去npm上找找有没有同名的package）
- **version**: 版本，默认是1.0.0（发布更新的时候需要更改）
- **description**: 描述
- **entry point**: 入口文件名，默认为index.js（可以更改）
- **git repository**: 仓库地址
- **keyword**: 关键字（关系到别人是否搜索得到你）

其他一路回车就好，完成后会生成一个`package.json`文件

# 开发

`src`文件夹下开发，发布前将文件打包之`lib`文件夹下，最后在根目录下的`index.js`文件中引入

```js
/** index.js **/
module.exports = require('./lib');
```

# 发布

1. 登录
```
npm login
```

2. 发布
```
npm publish
```

# 参考链接

- _[https://www.jianshu.com/p/36d3e0e00157](https://www.jianshu.com/p/36d3e0e00157)_
- _[babel转码报错问题](http://www.itgo.me/a/7148937757812589706/babel-install-does-not-work-through-npm)_
- _[https://www.javascriptcn.com/read-35186.html](https://www.javascriptcn.com/read-35186.html)_