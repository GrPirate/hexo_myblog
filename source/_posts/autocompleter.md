---
title: jQuery联想查询Autocompleter的使用详解
date: 2017-12-14 15:24:38
tags:
    - jQuery
    - 插件
categories: 技术分享
---

![](1.png)

<!-- more -->

# 介绍
> 这是一个实现类似于百度联想查询的jQuery插件

# 使用

## 前提

1. 已经安装了[nodejs](https://nodejs.org/en/)环境
2. 安装了[git](https://git-scm.com/)环境（在该插件项目github仓库地址下载）

## 下载

使用npm安装:下载到当前目录下的node_modules目录下
```sh
npm install jquery-autocompleter
```
## 例子

首先手动将`jquery.autocompleter.css` 和 `jquery.autocompleter.min.js`两个文件拿出来放到项目中

### Scripts:

```html
<script src="js/jquery.js" type="text/javascript"></script> <!-- 插件使用前提 -->
<script src="js/jquery.autocompleter.min.js" type="text/javascript"></script>
```

### Styles:

```html
<link rel="stylesheet" href="css/jquery.autocompleter.css"> <!-- 可根据具体项目情况进行修改-->
```
### Html:

```html
<div class="field">
    <div class="icon"></div>
        <input type="text" name="nope" id="input" placeholder="Crayola colors" maxlength="40" />
</div>
```

### 初始化定义

```javascript

$(function () {
    $('#input').autocompleter({ source: 'path/to/get_data_request' });
});

```

**OR for local JSON source**

```javascript

var data = [
    { "value": "1", "label": "one" },
    { "value": "2", "label": "two" },
    { "value": "3", "label": "three" }
];
 
$(function () {
    $('#input').autocompleter({ source: data });
});

```



# 配置(Options):

| name | type | description	             | deafult|
|:---- |:----:| ------------------------:|-------:|
| source      | str, obj | 异步请求URL或者本地数据对象 | null  |
| asLocal     | bool |  将远程响应解析为本地资源 | false  |
| empty       | bool |  是否显示为空的数据源 | true  |
| limit       | int | 显示结果条数 | 10  |
| minLength   | int | 最小搜索长度 | 0  |
| delay       | int |  延迟请求的毫秒数 | 0  |
| customClass | array | 自定义样式类 | []  |
| cache       | bool |  保存数据到本地存储来避免重复请求 | true  |
| focusOpen   | bool |  `input`获得焦点时运行 | true  |
| hint        | bool | 添加输入与第一个匹配标签提示 | false  |
| selectFirst | bool | 如果设置为`true`，并且`changeWhenSelect`为`false`列表的第一个元素将被自动选择 | false  |
| changeWhenSelect | bool | 可以使用箭头键导航的自动完成列表中输入变化值 | true  |
| highlightMatches | bool |  匹配值高亮 | false  |
| ignoredKeyCode | array |  Array with ignorable keycodes, by default: 9, 13, 17, 19, 20, 27, 33, 34, 35, 36, 37, 39, 44, 92, 113, 114, 115, 118, 119, 120, 122, 123, 144, 145 | [] |
| customLabel | str | 将用作标签的对象属性的名称 | false  |
| customValue | str | 将用作值的对象属性的名称 | false  |
| template   | str |  添加模板 | false  |
| offset   | str |  Source response offset, for example: response.items.posts		 | false  |
| combine   | function |  Returns an object which extends ajax data. Useful if you want to pass some additional server options		 | $.noop  |
| callback  | function |  选择值回调函数，参数：值、索引 | $.noop  |


# 公共方法（publics）

* 插件定以后修改配置项:option

```javascript

$('#input').autocompleter('option', data);

```

* 修改默认配置项:defaults

```javascript

$.autocompleter('defaults', {
    customClass: 'myClassForAutocompleter'
});

```

* 展开:open

```javascript

$('#input').autocompleter('open');

```

* 关闭:close

```javascript

$('#input').autocompleter('close');

```

* 销毁插件:destroy

```javascript

$('#input').autocompleter('destroy');

```

* 清除缓存:clearCache

```javascript

$.autocompleter('clearCache');

```

**效果预览：[https://grpirate.github.io/Personality/autocompleter](https://grpirate.github.io/Personality/autocompleter)**



