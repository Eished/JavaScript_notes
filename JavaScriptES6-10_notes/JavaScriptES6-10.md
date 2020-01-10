〖课程介绍〗:
  应对更复杂的场景，提升自己的技术实力，优化臃肿的代码，都需要对打牢语法基础。本课涉及JavaScript ES6到10的语法教学，内容全面丰富，熟练掌握语法，很多依赖第三方库才能做到的事用原生JS寥寥几行代码就可迎刃而解。

〖课程目录〗:

#   第1章 课程介绍与环境搭建

  JS作为前端的立身之本，让大家了解学习这门课的必要性。考虑到很多同学刚刚接触前端或者对工程化方法不太了解，为了快速进入到学习状态，我们提供了极其简单的方式帮大家准备好学习环境。

##    1-1 课程导学 试看

### 怎么学？

1. 一天后：体验乐趣
2. 十天后：进入状态
3. 一个月后：养成习惯
4. 三个月后：收获知识
5. 五个月后：形成思维习惯

### 课程内容

1. 快速搭建开发环境
2. 学习语法
3. 推荐阅读材料
4. 练习题
5. Vue 框架内实战
6. 学习开发环境如何构建

### 适用人群

1. 拥有 JavaScript ES3 以上基础
2. 会编程，有编程思维
3. 有耐心
4. 求上进

1-2 电子书位置

##    1-3 环境准备

### 环境准备

- 原理
  1. ES6-10 ：原生代码
  2. Babel→Webpack ：构建转换
  3. ES5 ：浏览器可以识别的代码

- 开发环境
  - Chrome和Node环境
  - 自动刷新 自动编译
  - 格式化编写代码

##    1-4 Node 安装

- Node 安装：-v 12.2.0
  - npm
  - npx

##    1-5 初始化项目

### 初始化项目

```
npx es10-cli create projectName // 创建模板文件命令
```

启动项目

```
cd projectName
npm install
npm start
touch static/lesson2-1.js // 新建文件命令
```

##    1-6 编辑器配置

VS code 插件 beautify 和 ESLint

#   第2章 ES6基础知识

  ES6语法相对于ES5有了非常大的改变，让原生 JavaScript 能力再上一个台阶，这个章节会分门别类进行讲述，单纯讲语法既乏味也不利于记忆更不知道如何运用，我们以应用场景开场分别给出ES5和ES6两种不同的解决方案，循序渐进剖析语法...

##    2-1 作用域（1）

1. var 声明的全局变量相当于 window 的属性，但无法删除，属性可以删除
2. 没有var 定义的变量是作为 window 的属性定义的，是全局属性
3. 在函数内部没有 var 定义的变量是window 的属性，是全局属性

##    2-2 作用域（2）

- 函数作用域 = 局部作用域
- var 定义的变量会变量提升
- let 定义的变量具有块状作用域

### this 与 动态作用域 的关系

- this 具有动态指向

### 四种作用域

1. 全局作用域
2. 函数作用域
3. 块状作用域 ，配合 let 和 const 使用
4. 动态作用域

##    2-3 什么是作用域

几乎所有编程语言就是在变量中储存值，并且能够读取和修改这些值。事实上在变量中储存和取出值得能力，给程序赋予了状态。

如果没有这样的概念，一个程序虽然可以执行一些任务，但是它们将会受到极大的限制而且不会非常有趣。

但是这些变量该储存在哪？又如何读取？为了完成这个目标需要制定一些规则，规则就是：作用域。

- #### 四种常见作用域类型：

  | 对象     | 类型                     |
  | -------- | ------------------------ |
  | global   | 全局作用域               |
  | function | 函数作用域（局部作用域） |
  | {}       | 块状作用域               |
  | this     | 动态作用域               |

- > 如果一个变量 或者其它表达式不在“当前得作用域”，那么JavaScript机制会继续沿着作用域链上查找直到找到全局作用域，通常是指沿着链式得作用域查找，而不能从父作用域引用子作用域中的变量和引用

##    2-4 let&amp;const

- let 声明的特点
  - 块状作用域
  - 不能用用全局变量的属性访问
  - 不能重复定义
  - 不会变量提升
- const 声明的特点
  - **只能赋值一次**
  - **初始化时一定要赋值**
  - 块状作用域
  - 不能用用全局变量的属性访问
  - 不能重复定义
  - 不会变量提升
- 阅读
  1. 什么是作用域
  2. JavaScript深入之词法作用域和动态作用域
  3. 深入理解JS中声明提升、作用域（链）和 this 关键字

2-5 Let &amp; Const

##    2-6 ES5中数组有多少种遍历的方法？

他们有什么优势和缺点？

1. for 循环

2. forEach ：`arr.forEach(funciton (item) {console.log(item)})`

   > 不支持 `break` 和 `continue`

3. every ：`arr.every(funciton (item) {console.log(item)})`

   > 是否继续执行取决于函数返回值 true 、false

4. for in ：for ( let index in Object) {console.log(Object[index])}

   > 为对象设计的，数组的属性和下标作为字符串遍历
   >
   > 支持 continue 和 break

##    2-7 ES6中数组有多少种遍历的方法？

1. for of ：`for of (let item of arr) { console.log(item)}`

   > 不仅可以遍历数组和对象
   >
   > 可以遍历自定义数据结构

##    2-8 Array.from（如何将伪数组转换成数组？）

### ES5

```js
let args = [].slice.call(arguments) // collection
let imgs = [].slice.call(doncument.querySelectorAll('img')) // NodeList
```

### ES6

```js
Array.prototype.from // ES6 新增方法
let args = Array.from(arguments)
```

##    2-9 Array.of-fill（如何生成新数组？）

##    2-10 Find&amp;FindIndex（如何查找数组？）

##    2-11 数组 - Array

##    2-12 Class基础语法（怎么声明一个类？）

##    2-13 Setter&amp;Getter（如何读写属性？）

##    2-14 Static Methods（如何操作方法？）

##    2-15 Sub Classes（如何继承一个类？）

##    2-16 Class

##    2-17 Default Parameters（函数参数的默认值）

##    2-18 Rest Parameter（怎么处理不确定参数？） 试看

##    2-19 Spread Operator（rest参数的逆运算）

##    2-20 Arrow Functions（箭头函数）

##    2-21 Function Update

##    2-22 Object Property

##    2-23 Set数据结构

##    2-24 Map数据结构

##    2-25 Object.assign（对象拷贝）

##    2-26 Object Update

##    2-27 Regexp Sticky（y修饰符）

##    2-28 Regexp Unicode（u修饰符）

##    2-29 RegExp Update

##    2-30 String（字符串拼接问题）

##    2-31 Template

##    2-32 Array Destructure（解构赋值）

##    2-33 Array Destructure（解构赋值）

##    2-34 Object Destructrue（解构赋值）

##    2-35 Desctructuring

##    2-36 Callback（异步操作）

##    2-37 Promise（异步操作）

##    2-38 Then（异步操作）

##    2-39 Resolve &amp; Reject（异步操作）

##    2-40 Catch（异步操作）

##    2-41 All（异步操作）

##    2-42 Race（异步操作）

##    2-43 Promise

##    2-44 Reflect.apply（反射机制）

##    2-45 Reflect.construct（反射机制）

##    2-46 Reflect.getOwnPropertyDescriptor（反射机制）

##    2-47 Reflect

##    2-48 proxy basic syntax（该怎样使用代理功能）

##    2-49 Schema Validation（1）

##    2-50 Schema Validation（2）

##    2-51 Schema Validation（3）

##    2-52 Revocable Proxy

##    2-53 Proxy

##    2-54 Generator（如何让遍历“停”下来）

##    2-55 Syntax（1）

##    2-56 Syntax（2）

##    2-57 Scene Pratice

##    2-58 Generator

##    2-59 Iterator（如何让不支持遍历的数据结构“可遍历”）

##    2-60 Iterator

##    2-61 Generator

##    2-62 Iterator

##    2-63 Export Import（如何把代码进行模块化设计）

##    2-64 Export Import（2）

##    2-65 Export Import（3）

##    2-66 module

#   第3章 ES7基础知识

  ES7在ES6基础上新增了两项功能，一个是数组的 include 方法、一个是 Math.pow 的简写语法

##    3-1 includes+pow（数组中如何判断元素是否存在）

##    3-2 Array.prototype.includes &amp; Math.pow

#   第4章 ES8基础知识

  ES8在异步操作、Object、String能力上做了进一步增强，让代码编写更加效率

##    4-1 Async\Await（有没有比Promise更优雅的异步方式）

##    4-2 Object keys.values.entries(新增对Object快速遍历的方法,了解下？)

##    4-3 String Padding（对String补白的方式）

##    4-4 Object.getOwnDescriptor（如何获取Object数据的描述符）

##    4-5 Aysnc/Await &amp; Object.values ……

#   第5章 ES9基础知识

  ES9主要解决了遍历中异步、异步的归一操作等问题、也提供了对象的拷贝、筛选功能并且提升了正则的处理能力

##    5-1 For await of（异步操作集合是如何遍历的）

##    5-2 For await of(2)

##    5-3 Promise.finally（Promise是如何“兜底”操作的）

##    5-4 Object.rest.spread（新增Object的Rest和Spread方法）

##    5-5 RegExp-dotAll

##    5-6 RegExp-named captured groups(命名分组捕获)

##    5-7 RegExp-lookbehind assert(后行断言)

##    5-8 For await of ……

#   第6章 ES10基础知识

  ES10虽然没有大幅的改动，JSON问题修复，数组、字符串、对象、函数等能力进一步增强，同时新增的 BigInt 数据类型也格外引人注目

##    6-1 ES10新增知识点（1）

##    6-2 ES10新增知识点（2）

##    6-3 ES10新增知识点（3）

##    6-4 JSON.stringify ……

#   第7章 ES新语法配合Vue实战

  Vue是很多前端同学必用的框架，如何把原生语法在Vue项目里运用的活灵活现至关重要，心动不如行动，通过实例演示是最接地气的讲义

##    7-1 vue项目安装

##    7-2 vue 指令

##    7-3 异步操作 Promise

##    7-4 desctructing解构赋值

##    7-5 字符串应用

##    7-6 代理 Proxy

##    7-7 自定义遍历

##    7-8 setup

##    7-9 Directive

##    7-10 ES6+

#   第8章 构建环境

  浏览器没有全部兼容新语法，需要通过构建的方式把代码转换成浏览器兼容的代码，学会构建也是前端工程师能力提升的另一个标志

##    8-1 webpack

##    8-2 babel

##    8-3 eslint

##    8-4 Webpack

##    8-5 Babel

##    8-6 ESlint

#   第9章 课程总结

  对课程进行整体的回顾与总结。

##    9-1 课程总结