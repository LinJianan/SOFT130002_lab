# Lab8设计文档

## html 和 css 部分

css 无改动。

html 做了如下调整：
1. 删除 h3 标题；
2. 给 img 和 button 分别增加鼠标挪动和点击的事件函数，函数在 js 文件中；
3. 对部分布局做了少量调整。

## js 部分

Q1：准备两个函数，prev 和 next 分别对应，使用全局变量 num 来确定当前显示的图片，函数进行加减操作，溢出则倒扣一个周期。

Q2：准备两个函数，鼠标挪开时循环调用自己，使用 setTimeout 函数进行周期操作，每次都调用 next 操作的函数；当鼠标挪上去的时候，使用另一个函数，切断周期，具体原理是修改 num 变量，因为每次循环都要检测 num 是否允许继续循环，同时做 clearTimeout 操作。注意，刚打开时不操作，只有鼠标挪上去再挪开才行。

Q3：直接跳到某个图片，跟 Q1 一样的原理。

Q4：用jQuery，详见代码，对所有 td 提供修改方式，注意得双击才能修改。
