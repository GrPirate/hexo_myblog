---
title: 前端面试知识点
date: 2018-01-15 18:14:25
tags:
    - 面试
categories: 前端
---



# 解释一下事件委托机制：

通俗的讲，事件就是onclick，onmouseover，onmouseout，等就是事件，委托呢，就是让别人来做，

这个事件本来是加在某些元素上的，然而你却加到别人身上来做，完成这个事件。

也就是：利用冒泡的原理，把事件加到父级上，触发执行效果。

<!-- more -->

# 原型链：

原型链是针对构造函数的，假设我们先创建一个函数
```javascript
function foo(){
	this.o;
}
foo.prototype.name = '大海贼';
```

使用new创建一个实例

```javascript
var a = new foo();
```
这时候a就继承继承了函数foo的属性，当我们要访问这个函数中的某个属性时，首先会在该函数定义

的属性中查找，如果没找到，它就会向上（原型对象中）查找，这个查找过程就叫做原型链；

```javascript
a.name // '大海贼'
```

chrome控制台中查看：prototype.png


# 作用域链:

作用域是针对变量的，当访问变量的时候，如果在当前作用域找不到，就会沿着作用域一直往上查找

，当找到了变量就不会继续查找了，否则会一直找到全局作用域为止，这个查找的过程就叫作用域链


# 6.this的指向：

## 三种情况：

- 在函数内：this指向全局作用域

- 构造函数中：this指向new创建的对象实例

- 使用call和apply绑定：this指向其第一个参数




# CSS相关问题

## 元素居中的解决方案

**水平居中**

- 行内元素：在块级父容器中让行内元素居中，使用text-align: center

- 块级元素：设置margin，{margin: 0 auto}

- 多个块级元素：使用flexbox布局方式

**垂直居中**


- 行内元素：使用line-height: center

- 块级元素：设置margin，{margin: 0 auto}

- 多个块级元素：使用flexbox布局方式



# 适配不同终端的解决方案和切入点（图片大小？字体大小？）?

#vpx、em、rem的区别?




# 怎么理解‘优雅降级’和‘渐进增强’

**渐进增强（Progressive Enhancement）：**一开始就针对低版本浏览器进行构建页面，完成基本

的功能，然后再针对高级浏览器进行效果、交互、追加功能达到更好的体验---向上兼容

**优雅降级（Graceful Degradation）：**一开始就构建站点的完整功能，然后针对浏览器测试和修

复。---向下兼容

## 经典案例

```css
.transition { /*渐进增强写法*/

  -webkit-transition: all .5s;

     -moz-transition: all .5s;

       -o-transition: all .5s;

          transition: all .5s;

}

.transition { /*优雅降级写法*/

          transition: all .5s;

       -o-transition: all .5s;

     -moz-transition: all .5s;

  -webkit-transition: all .5s;

}


```

**前缀CSS3（-webkit-* / -moz-* / -o-*）和正常CSS3在浏览器中的支持情况是这样的：**

- 很久以前：浏览器前缀CSS3和正常CSS3都不支持；

- 不久之前：浏览器只支持前缀CSS3，不支持正常CSS3；
- 
现在：浏览器既支持前缀CSS3，又支持正常CSS3；

- 未来：浏览器不支持前缀CSS3，仅支持正常CSS3.


### 参考

_[https://www.jianshu.com/p/d313f1108862](https://www.jianshu.com/p/d313f1108862)_