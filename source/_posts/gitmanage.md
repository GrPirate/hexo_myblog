---
title: 使用git管理项目的基本流程
date: 2017-12-19 21:48:32
tags:
    - git
categories: 技术分享
---

> 多人一起开发项目都会用到版本管理工具，本文简单的介绍使用`git`来进行项目代买管理的基本流程

# 分支介绍

> 一般来所我们项目仓库最少应该有两个**分支**`master`和`dev`

1. **master**：项目主要分支，这个分支的代码应该是一个稳定的并且已经上线运行的版本。

2. **dev**：开发分支，开发人员在这个分支上进行开发

<!-- more -->

# 开发代码管理流程

假设我们有一个项目1期功能已经上线，现在要进行2期功能的开发。那么：`master`分支应该与已经上线的代码一致

## 提交代码

在进行开发前应该先进行拉取操作，确保本地的代码是最新的（因为别人可能已经提交过代码）。
```s
git pull origin dev
```


**一天的开发任务完成需要提交代码，进行以下四步操作**
1.将代码添加到暂存区
```s
// 查看工作区的状态，可以查到哪些文件发生了变化
git status
```


```s
// 添加指定已修改文件
git add <fileurl>
```
**OR**
```s
// 添加所有已修改文件
git add .
```


2.将暂存区文件提交到本地仓库
```s
git commit -m "commit message"
```


3.拉取远程仓库代码（这一步很重要，因为在你开发的过程中，别人也有可能提交了代码）
```s
git pull origin dev
```


4.推送本地仓库代码到远程仓库
```s
git push origin dev
```

**恭喜你，这时候我们已经完成了代码的提交和推送**

# Git的4个阶段的撤销更改

参考地址：_**[http://mp.weixin.qq.com/s/mBckvjSiKorTuSmHcjp8oQ](http://mp.weixin.qq.com/s/mBckvjSiKorTuSmHcjp8oQ)**_

# 线上项目有个小bug需要修改

> 项目2期的功能已经开发到了一半，肯定是不能在`dev`分支下进行修改的，所以我们很容易就想到了`master`主要分支是和线上版本一致的

1.从`dev`分支切换到`master`
```s
git checkout master
```

2.在`master`分支上创建一个临时的分支`temp`，并切换到`temp`
```s
git branch temp
git checkout temp
```
**OR**
```s
git checkout -b temp
```

3.在`temp`分支上修改并测试完功能后，合并到主要分支
```s
// 切换到主分支
git checkout master
// 合并分支
git merge temp
// 推送
git push origin master
```

# 项目2期功能开发完成并已经上线

将`dev`分支代码合并到`master`
```s
git checkout master
git merge dev
git push origin master
```

# 注意事项

## git pull 和git fetch区别

* **git pull**：拉取远程分支仓库代码到本地分支仓库并**自动合并**
```s
git pull origin dev
```

* **git fetch**：拉取远程分支仓库代码到本地

以下两步等价于上面一步
```s
git fetch origin dev
git merge origin/dev
```




