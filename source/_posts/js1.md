---
title: JavaScript学习之 for...of 循环
date: 2017-11-24 22:11:56
tags: 
    - JavaScript
    - for
    - 循环
categories: JavaScript
---



**for...of 循环**是最新添加到 JavaScript 循环系列中的循环。

它结合了其兄弟循环形式 **for 循环**和 **for...in 循环**的优势，可以循环任何**可迭代**（也就是遵守可迭代协议）类型的数据。默认情况下，包含以下数据类型：String、Array、Map 和 Set，注意不包含 `Object` 数据类型（即 `{}`）。默认情况下，对象不可迭代。

<!-- more -->
在研究 ...of 循环之前，先快速了解下其他 for 循环，看看它们有哪些不足之处。

# for 循环
for 循环很明显是最常见的循环类型，因此快速复习下即可。


```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < digits.length; i++) {
  console.log(digits[i]);
}
```

> Prints:
> 0
> 1
> 2
> 3
> 4
> 5
> 6
> 7
> 8
> 9

for 循环的最大缺点是需要跟踪**计数器**和**退出条件**。

在此示例中，我们使用变量 `i` 作为计数器来跟踪循环并访问数组中的值。我们还使用 `digits.length` 来判断循环的退出条件。如果只看一眼这段代码，有时候会比较困惑，尤其是对于初学者而言。

虽然 for 循环在循环数组时的确具有优势，但是某些数据结构不是数组，因此并非始终适合使用 loop 循环。

# for...in 循环
for...in 循环改善了 for 循环的不足之处，它消除了计数器逻辑和退出条件。

```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits) {
  console.log(digits[index]);
}
```
> Prints:
> 0
> 1
> 2
> 3
> 4
> 5
> 6
> 7
> 8
> 9
但是依然需要使用 `index` 来访问数组的值，这样很麻烦；几乎比之前更让人迷惑。

此外，当你需要向数组中添加额外的方法（或另一个对象）时，for...in 循环会带来很大的麻烦。因为 for...in 循环循环访问所有可枚举的属性，意味着如果向数组的原型中添加任何其他属性，这些属性也会出现在循环中。

```
Array.prototype.decimalfy = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits) {
  console.log(digits[index]);
}
```
> Prints:
> 0
> 1
> 2
> 3
> 4
> 5
> 6
> 7
> 8
> 9
> function() {
>  for (let i = 0; i < this.length; i++) {
>   this[i] = this[i].toFixed(2);
>  }
> }

太可怕！这就是为何在循环访问数组时，不建议使用 for...in 循环。

> **注意： forEach 循环** 是另一种形式的 JavaScript 循环。但是，**forEach()** 实> 际上是数组方法，因此只能用在数组中。也无法停止或退出 forEach 循环。如果希> 望你的循环中出现这种行为，则需要使用基本的 for 循环。
> 下一项

最后，我们要提到强大的...of 循环了。

# for...of 循环
**for...of** 循环用于循环访问任何可迭代的数据类型。

**for...of** 循环的编写方式和 **for...in** 循环的基本一样，只是将 `in` 替换为 `of`，可以忽略**索引**。

```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}
```
> Prints:
> 0
> 1
> 2
> 3
> 4
> 5
> 6
> 7
> 8
> 9
这使得 for...of 循环成为所有 for 循环中最简洁的版本。

> **提示：**建议使用复数对象名称来表示多个值的集合。这样，循环该集合时，可以使用名称的单数版本来表示集合中的单个值。例如，`for (const button of buttons) {…}`。

但是等等，还有更多优势！for...of 循环还具有其他优势，解决了 for 和 for...in 循环的不足之处。

你可以随时停止或退出 for...of 循环。

```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  if (digit % 2 === 0) {
    continue;
  }
  console.log(digit);
}
```
> Prints:
> 1
> 3
> 5
> 7
> 9
不用担心向对象中添加新的属性。for...of 循环将只循环访问对象中的值。

```
Array.prototype.decimalfy = function() {
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}
```
> Prints:
> 0
> 1
> 2
> 3
> 4
> 5
> 6
> 7
> 8
> 9


- 首字母大写
`str.substring(0,1).toUpperCase + str.substring(1)`