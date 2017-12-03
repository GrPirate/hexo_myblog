---
title: canvas
date: 2017-12-01 20:35:47
tags:
    - canvas
    - Html5
categories: JavaScript
---

![](1.png)
<!-- more -->

> canvas是基于状态绘制图形

# Canvas学习-基础绘制

初始化

- Html

```
<canvas id="canvas" width="1024" height="768" style="">
	当前浏览器不支持Canvas,请更换浏览器进行查看
</canvas>
```

- JavaScript

```
var canvas = document.getElementById('canvas');

canvas.width = 1024;// 设置画布宽度
canvas.height = 768;// 设置画布高度

var context = canvas.getContext('2d');// 获取canvas上下文进行绘制
```

Draw a line（画一条直线）

```
/*
 * 设置状态
 */
context.beginPath();// 开始路径
context.moveTo(x, y);// 设置起点
context.lineTo(x, y);// 设置终点
context.closePath();// 结束路径

/*
 * 绘制
 */

context.lineWidth = 5;// 设置线条宽度（像素）
context.strokeStyle = "#003366";// 设直线条样式（颜色）
context.stroke();// 划线 

context.fillStyle = "";// 填充样式
context.fill();// 填充
```

Draw an arc（绘制弧线）

```
/*
 * 圆心坐标 (centerx, centery)
 * 半径 radius
 * 起点弧度值 startingAngle
 * 终点弧度值 endingAngle
 * 顺时针or逆时针 anticlockwise(默认值 false 顺时针)
 */
context.arc(
	centerx,centery,radius,
	startingAngle,endingAngle,
	anticlockwise=false
)
```
**`context.closePath()`会使绘制路径自动闭合**

- 应用实例

