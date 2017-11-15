---
title: git 使用遇到的问题（持续更新中）
date: 2017-11-13 17:09:34
tags:
categories: git
---

## 1、使用git add <file>有些文件添加失败

``` bash
$ git statsu
modified contentChanges not staged for commit:
    (use "git add <file>..." to update what will be committed)
    (use "git checkout -- <file>..." to discard changes in working directory)
    (commit or discard the untracked or modified content in submodules)

            modified:   themes/next (modified content)
```

<!-- more -->
提示modified content, untracked content是因为在add的时候这个目录下面本来就有一个.git文件，自然就会add失败，先删除这个.git文件再add

## 2、当在.gitignore文件中忽略的文件不起作用或者没有忽略文件却跟踪不了
这时候我们可以先把本地缓存清除，然后再进行push
命令如下：
``` javascript
git rm -r  --cached
git add .
git commit -m "update all"
git push origin <branch>
```
