---
title: Next主题下添加giement评论系统
date: 2017-12-05 14:10:38
tags:
    - hexo
    - next
    - 博客
categories: 技术分享
---

# 介绍
gitment是一个基于github issues的评论系统

<!-- more -->

# 注册OAuth Application
![github授权](github授权.png)
如上图所示注册，成功后会得到**Client ID**和**Client Secret**，记下来，在后面我们会用到

# 配置
> 我使用的Next主题是当前的最新版本(5.1.3)，gitment的JavaScript脚本已经写好，我们只需要修改配置项即可


- 开打主题配置文件_**themes/next/_config.yml**_
- 定位到如下图所示位置![gitment配置](2.png)
- 修改以下几点

```
enable: true // 设置为true
github_user: GrPirate // 设置为你的github用户名
github_repo: GrPirate.github.io // 设置为你的博客项目仓库名
client_id: Client ID // 前面授权注册得到的Client ID
client_secret: Client Secret // 前面授权注册得到的Client Secret
```
配置完成后随便打开一篇博客文章，在文章底部出现下图效果就表示成功了
![添加成功](1.png)

# 爬过的坑

看过很多博文和官方的说明都是说**github_user**需要配置成Github ID，可是这样设置，我的评论系统怎么都不能用。
今天在一位好友的帮助下解决了这个问题，将**github_user**设置为自己的**用户名**
即**github_user: yourGithubName**

# 感谢

- 最后感谢帮助我的朋友_**[FEDT](http://note.chenteng.me/)**_
