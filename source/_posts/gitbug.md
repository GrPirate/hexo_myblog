---
title: git 使用遇到的问题（持续更新中）
date: 2017-11-13 17:09:34
tags:
---

## 1、使用git add <file>有些文件添加失败

```bash
$ git statsu
modified contentChanges not staged for commit:
    (use "git add <file>..." to update what will be committed)
    (use "git checkout -- <file>..." to discard changes in working directory)
    (commit or discard the untracked or modified content in submodules)

            modified:   themes/next (modified content)
```
提示modified content, untracked content是因为在add的时候这个目录下面本来就有一个.git文件，自然就会add失败，先删除这个.git文件再add