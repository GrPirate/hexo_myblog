---
title: css footer固定在浏览器底部
date: 2019-01-02 16:20:05
tags:
  - css
  - 布局
categories: 前端
---

> 实现页面布局：当页面内容比较少的时候，使footer固定在页面底部，当页面内容超过一屏的时候，footer栏能够随着内容被移动

# Footer自适应内容高度展示在页面最底部的实现方式

公共CSS: 
```css
* {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}
body {
  height: 100%
}
.header, .content, .footer {
  width: 100%;
  text-align: center;
  line-height: 100px
}
.header {
  background-color: darkgoldenrod;
  height: 100px;
}
.content {
  height: 500px; /*高度可由内容撑开*/
  background-color: firebrick;
}
.footer {
  height: 100px;
  background-color: seagreen;
}
```
以下所有解决方案皆用到了此公共css

<!-- more -->

## 1、absolute定位

HTML: 
```html
<body>
  <div class="container">
    <div class="header"></div>
    <div class="content"></div>
    <footer class="footer"></div>
  </div>
</body>
```

注意：使用absolute定位需要将footer元素放到container里面，而不能放到`<body>`下面

CSS: 
```css
.container {
  position: relative;
  min-height: 100%;
}
.footer {
  position: absolute;
  bottom: 0;
}
```

## 2、使用margin

借助margin的实现方式有两种，一种是在 `div.content` 使用 `margin-bottom: -50px;`；另一种则是在 `div.footer` 使用 `margin-top: -50px;`

两种方式都需要使用占位元素，以防止`content`区域的内容被`footer`覆盖。

HTML: 
```html
<body>
  <div class="container">
    <header class="header">header</header>
    <div class="content">
      main
      <div class="ph"></div>
    </div>
  </div>
  <footer class="footer">footer</div>
</body>
```

方式一、CSS(margin-bottom): 
```css
.container {
  position: relative;
  min-height: 100%;
}
.content {
  margin-bottom: -100px;
}
.ph {
  height: 100px; /*占位元素，与footer高度一致*/
}
```

方式二、CSS(margin-bottom): 
```css
.footer {
  margin-top: -100px;
}
.ph {
  height: 100px; /*占位元素，与footer高度一致*/
}
```

## 3、使用padding

使用`padding`实现`footer`置底，需要为 `div.content` 元素增加一个父元素，且需为 `div.footer` 元素设置 `margin-top: -50px` 来抵消使用`padding`产生的高度

HTML: 
```html
<body>
  <div class="container">
    <div class="header">header</div>
    <div class="content">content</div>
  </div>
  <footer class="footer"></div>
</body>
```

CSS: 
```css
.container {
  width: 100%;
  min-height: 100%;
}
.content {
  padding-bottom: 100px;
}
.footer {
  margin-top: -100px; /*用来抵消content使用padding产生的高度*/
}
```

## 4、使用calc计算属性

calc的用法比较简单，但是需要注意 `calc` 与 `(` 之间不要有空格，另外运算符前后应该有空格。如：`min-height: calc(100% - 50px);`

HTML: 

```html
<body>
  <div class="content">content</div>
  <footer class="footer">footer</div>
</body>
```

CSS: 

```css
.content {
  min-height: calc(100% - 50px);
}
.footer {
  height: 100px;
}
```

## 5、使用flex布局

`flex`布局与前面介绍的几种方式相比，`footer`的高度设置更加灵活，不需要设计计算，也不需要占位符。

HTML: 
```html
<body>
  <div class="header">header</div>
  <div class="content"></div>
  <footer class="footer"></div>
</body>
```

CSS: 
```css
body {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
}
```

## 6、使用grid网格布局

HTML: 
```html
<body>
  <div class="content"></div>
  <footer class="footer"></div>
</body>
```

CSS: 
```css
body {
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
}
.footer {
  grid-row-start: 2;
  grid-row-end: 3;
}
```