# [JavaScript从入门到精通](https://www.bilibili.com/video/av29885002)

## 初探 JavaScript 魅力

### JavsScript 是什么

- 网页特效原理
  - JavaScript 就是修改样式（文档）
- 编写 JS 的流程
  - 布局：HTML + CSS 
  - 属性：确定要修改的属性
  - 事件： 确定用户 做哪些操作（产品设计）
  - 编写 JS ：在事件中，用 JS 来修改页面元素的样式

### 第一个 JS 特效：鼠标提示框

- 分析效果实现原理

  - 样式：`div` 的 `display / none`
  - 事件：`onmouseover / onmouseout`
  - 动手编写效果

- 特效基础

  - 事件驱动：`onmouseover`
  - 元素属性操作：`obj.style.[...]`
  - 特效实现原理概括：响应式用户操作，对页面元素样式修改

- 兼容性问题 

  ```js
  // div2.style.display='block'; // 部分浏览器不兼容
  document.getElementById('div2').style.display='block'; // 所有浏览器兼容
  ```

- 函数

  - 制作更复杂的效果
  - 直接在事件内写代码会很乱
    - 引入 `function()` 函数的基本形式
    - 把 JS 标签里放入到函数里，类似于 css 里的 `class`
    - 变量的使用：别名
  - 定义和调用
    - 函数定义：告诉系统有这个函数，不会执行
    - 函数调用：执行函数里面的代码
    - 关系和区别

- 代码

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>第一个JS效果</title>
  
      <style>
        #div2 {
          display: none; 
          background: red; 
          width: 100px; 
          height: 50px; 
          font-size: 16px;
        }
        #div1 {
          display: block; 
          background: red; 
          width: 100px; 
          height: 100px; 
          font-size: 16px;
        }
      </style>
  
      <script>
  
      // 封装 getElementById 函数
      function get(id) {
        return document.getElementById(id);
      }
  
      // 显示 div2
      function show() {
        // div2.style.display='block'; // 部分浏览器不兼容
        get('div2').style.display='block';
      }
  
      // 隐藏 div2
      function hide() {
        // div2.style.display='none'; // 部分浏览器不兼容
        get('div2').style.display='none';
      }
  
      // div1 变绿
      function toGreen() {
       get('div1').style.background='green';
      }
  
      // div1 变蓝
      function toblue() {
        get('div1').style.background='blue';
      }
  
      // div1 变红
      function toRed() {
        get('div1').style.background='red';
      }
      
      // 点击循环变色
      var i = 0;
      function changeColor() {
        console.log('i=',i)
        if (i == 0) {
          toGreen();
          i++;
          console.log('i=',i)
          return;
        } 
        if (i == 1) {
          toblue();
          i++;
          console.log('i=',i)
          return;
        } 
        if (i == 2) {
          toRed();
          i = i - 2;
          console.log('i=',i)
          return;
        }
      }
      </script>
    </head>
  
    <body>
       <!-- 调用页内函数修改样式 -->
      <input type="button" onclick="changeColor()" value="按钮">
      <div id="div1">
      </div>
        <!-- 行内 JS 修改样式 -->
      <input type="checkbox" onmouseover="div2.style.display='block';" onmouseout="div2.style.display='none';" value="按钮">  
      <div id="div2">
        <p>文字<br>文字2</p>
      </div>
    </body>
  </html>
  ```

### 网页换肤和 if 判断

- 网页换肤

  - 土豆网 “开灯” “关灯效果”
  - 任何标签都可以加 ID ，包括 link
  - 任何标签的属性，都可以修改
  - HTML 里面怎么写，JS 里面就怎么写

- if 判断

  - 特效实现原理
  - if 基本形式
  - JS 里面 ` = 赋值， == 判断`
  - 为 a 链接添加 JS 
    - ` <a href="javascript:;"></a> `
  - className  的使用
    - ` class ` 是关键字，所以用 ` className ` 代替
    - 其它 HTML 里面怎么写，JS 里面就怎么写

- 代码

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
      <link id="link1" rel="stylesheet" type="text/css" href="css/grey.css">
  
      <script>
      function changeColor() {
        if (document.getElementById('b1').value == '关灯') {
          document.getElementById('link1').href = 'css/black.css';
          document.getElementById('b1').value = '开灯';
          console.log('black')
        } else {
          document.getElementById('link1').href = 'css/grey.css';
          document.getElementById('b1').value = '关灯';
          console.log('bl2:', document.getElementById('link1').href)
        }
      }
  
      function changeText() {
        document.getElementById('text1').value = '456';
        document.getElementById('text1').title = '文字1';
      }
  
      function showHide() {
        var div2 = document.getElementById('div2');
        if(div2.style.display == 'block') {
          div2.style.display ='none';
          console.log('1');
        } else {
          div2.style.display = 'block';
          div2.style.background = 'blue';
        }
        console.log('display:', div2.style.display);
      }
  
      function class1() {
        var div = document.getElementById('div4');
        div.className='div5';
        div.id='div5';
      }
      </script>
    </head>
    <body>
      <!-- 换肤 -->
      <input id="b1" type="button" onclick="changeColor()" value="关灯">
      <div id="div1">1</div>
      <div id="div2">2</div>
      <div id="div3">3</div>
      <input type="button" value="显示隐藏div2" onclick="showHide()">
      <br>
      <!-- HTMl 里面怎么写，JS 里面就怎么写 -->
      <input id="text1" type="text" value="123">
      <input type="button" value="改文字" onclick="changeText()">
      <br>
      <!-- a 链接的使用 -->
      <a href="javascript:;">javascript:;</a>
  
      <!-- className 的使用 -->
      <div id="div4">4</div>
      <input type="button" value="className" onclick="class1()">
    </body>
  </html>
  ```

### 函数传参

- 改变背景颜色

  - 函数传参：参数就是占位符
    - 函数里面变量用传参

- 改变 div 的任意样式

  - 操纵属性的第二种方式
    - 要修改的属性不确定时：` 元素.style[ 变量/字符串 ] = 变量/字符串 `
    - JS 中用 `.` 的地方都可以用 `[]` 代替;
    - 字符串变量区别和关系 ：带引号是字符串，不带是变量
  - 将属性名作为参数传递

- style 与 className 

  - ` 元素.style.属性 = 变量/字符串 ` 
    - style 是修改行内样式
  - 行内样式优先级最高，之后再修改 className 不会有效果
  - 建议：只操作一种样式，要么只操作 style ，要么只操作 className

- 代码：

  ```HTML
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>函数传参</title>
  
      <style>
        div {
          display: block; 
          background: red; 
          width: 100px; 
          height: 100px; 
          font-size: 16px;
        }
  
        .div2 {
          display: block; 
          background: grey; 
          width: 100px; 
          height: 100px; 
        }
      </style>
  
      <script>
  
      // 封装 getElementById 函数
      function get(id) {
        return document.getElementById(id);
      }
  
      // div1 变绿
      function toGreen() {
       get('div1').style.background='green';
      }
  
      // div1 变蓝
      function toblue() {
        get('div1').style.background='blue';
      }
  
      // div1 变红
      function toRed() {
        get('div1').style.background='red';
      }
      
      // 点击循环变色
      var i = 0;
      function changeColor() {
        console.log('i=',i)
        if (i == 0) {
          toGreen();
          i++;
          console.log('i=',i)
          return;
        } 
        if (i == 1) {
          toblue();
          i++;
          console.log('i=',i)
          return;
        } 
        if (i == 2) {
          toRed();
          i = i - 2;
          console.log('i=',i)
          return;
        }
      }
  
      // 函数传参
      function toColor(color, width) {
        get('div1').style.background = color;
        get('div1').style.width = width;
      }
      // 将属性名作为参数传递
      function chgName(name, width) {
        // get('div1').style.name = width; // name 会被当作属性赋值
        get('div1')['style'][name] = width; // 数组 可以加字符串或者变量
      }
      // 样式优先级
      function chgClass(className) {
        get('div1').className =  className; 
      }
      </script>
    </head>
  
    <body>
      <!-- 调用页内函数修改样式 -->
      <input type="button" onclick="changeColor()" value="循环">
      <!-- 函数传参 -->
      <input type="button" onclick="toColor('green', '200px')" value="变绿">
      <input type="button" onclick="toColor('blue', '300px')" value="变蓝">
      <input type="button" onclick="toColor('red', '400px')" value="变红">
      <input type="button" onclick="chgName('height', '200px')" value="变高">
      <input type="button" onclick="chgClass('div2')" value="class变灰">
      <div id="div1"></div>
  
    </body>
  </html>
  ```

  

### 提取行间事件

- 提取事件
  - 为元素添加事件
    - 事件和其它属性一样，可以用 JS 添加：`元素.事件 = 函数名/函数;`
      - 不能加括号，加括号直接执行函数
    - `window.onload` 的意义：等待页面加载完成再执行 JS
    - 行为( js )、样式( css )、结构( html ) 三者分离
- 获取一组元素
  - ` 元素.getElementsByTagName('标签名') `
    - 数组的使用
    - 数组的属性
  - 全选的实现
- 代码: 同下

### 循环 while 和 for

- 用 while 引入 循环的概念

  - while 循环语法
    - 自增的意义
    - 循环的构成：初始化、条件、语句、自增

- for 循环

  - 用 for 代替 while 循环
    - 用 for 循环为一组元素甜腻骄傲事件
    - 什么时候用循环----一组元素
  - 例子
    - 全选---- checked 属性
    - 反选---- for 循环配合 if 判断

- 代码:

  ```HTML
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>提取行间事件和循环</title>
  
      <style>
        div {
          display: block; 
          border: 1px solid black; 
          width: 100px; 
          height: 100px; 
          margin: 10px;
          float: left;
        }
      </style>
        
      <script>
        window.onload = function () {
          // 封装 getElementById 函数
          function get(id) {
            return document.getElementById(id);
          }
  
          // 封装 getElementsByTagName
          function gets(tagName) {
            return document.getElementsByTagName(tagName)
          }
  
          // 提取行间样式
          get('btn1').onclick = function () {
            get('btn1').value = '提取成功';
          }
  
          // 修改一组元素中的某一个元素
          get('btn2').onclick = function () {
            gets('div')[2].style.background = 'blue';
          } 
  
          // 修改一组元素- while 循环
          get('btn3').onclick = function () {
            var i = 0;
            while ( i < gets('div').length ) {
              gets('div')[i].style.background = 'yellow';
              i++;
            }
          } 
          // for
          get('btn4').onclick = function () {
            for (var i = 0; i < gets('div').length; i++ ){
              gets('div')[i].style.background = 'pink';
            }
          } 
  
          // 全选的实现 if 判断 无需div
          get('btn5').onclick = function () {
            for (var i = 0; i < gets('input').length; i++ ){
              if (gets('input')[i].type == 'checkbox'){
                if (gets('input')[i].checked == false) {
                  gets('input')[i].checked = true;
                } else {
                  gets('input')[i].checked = false;
                }
              }
            }
          } 
          // 元素.getElementsByTagName 方法 单个div
          get('btn6').onclick = function () {
            var div2 = get('div2');
            var inp = div2.getElementsByTagName('input');
            for (var i = 0; i < inp.length; i++ ){
              // console.log(inp);
              if (inp[i].checked == false) {
                inp[i].checked = true;
              } else {
                inp[i].checked = false;
              }
            }
          }
          // 元素.getElementsByTagName 方法 多个div
          get('btn7').onclick = function () {
            var div2 = gets('div');
            for (var i = 0; i < div2.length; i++ ){
              var div = gets('div')[i];
              var inps = div.getElementsByTagName('input');
              for (var a = 0; a < inps.length; a++){
                if (inps[a].checked == false) {
                  inps[a].checked = true;
                } else {
                  inps[a].checked = false;
                }
              }
            }
          }  
        };
      </script>
    </head>
  
    <body>
      <!-- 提取行间样式 -->
      <input id="btn1" type="button" value="按钮">
      <!-- 修改一组元素中的某一个元素 -->
      <input type="button" id="btn2" value="改第三个元素">
      <!-- 修改一组元素-循环 -->
      <input type="button" id="btn3" value="while循环改一组元素">
      <input type="button" id="btn4" value="for循环改一组元素">
      <input type="button" id="btn5" value="全选">
      <input type="button" id="btn6" value="全选2">
      <input type="button" id="btn7" value="全选3">
      <div><input type="checkbox" name="1" id="c1"></div>
      <div><input type="checkbox" name="1" id="c2"></div>
      <div><input type="checkbox" name="1" id="c3"></div>
      <div><input type="checkbox" name="1" id="c4"></div>
      <div><input type="checkbox" name="1" id="c5"></div>
  
      <div id="div2">
        <input type="checkbox" name="" id="">
        <input type="checkbox" name="" id="">
        <input type="checkbox" name="" id="">
        <input type="checkbox" name="" id="">
        <input type="checkbox" name="" id="">
        <input type="checkbox" name="" id="">
        <input type="checkbox" name="" id="">
      </div>
  
    </body>
  </html>
  ```

  

### 导航栏选项卡

- 按钮的实现

  - 添加事件
    - this 的使用: 指当前发生事件的元素
  - 先清空所有按钮，再选中当前按钮

- 内容的实现（ul）

  - 先隐藏所有 ul，再显示当前 ul
    - 索引值的使用：什么时候用索引值
    - HTML 添加 index 会被 FireFox 过滤
    - JS 添加 index

- 代码:

  ```HTML
  <!DOCTYPE html>
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
      <title>导航选项卡</title>
      <style>
        body {
          margin: 0;
          padding: 0;
        }
        #div2 {
          width: 200px;
          height: 200px;
          margin-top: 20px;
          position: relative;
        }
        #div1 {
          width: 200px;
          height: 20px;
          position: absolute;
          top: 0px;
        }
        ul {
          margin: 0;
          padding: 0;
          display: block;
          background: rgb(157, 234, 253);
          float: left;
          position: absolute;
          display: none;
          width: 200px;
          height: 200px;
        }
        .ul {
          display: block;
        }
        a {
          display: block;
          float: left;
          width: 49px;
          height: 20px;
          background: rgb(7, 184, 253);
          border-left: 1px solid rgb(255, 0, 234);
          text-decoration: none;
        }
        .a {
          background: rgb(32, 108, 221);
        }
      </style>
      <script>
        window.onload = function (){
          // 封装 getElementById 函数
          function get(id) {
            return document.getElementById(id);
          }
          // 封装 getElementsByTagName
          function gets(tagName) {
            return document.getElementsByTagName(tagName)
          }
          // 显示第一个元素
          gets('ul')[0].className = 'ul';
          // 当鼠标覆盖某个标签时 显示对应元素
          for (var i = 0; i < 4; i++) {
            gets('a')[i].index = i;
            gets('a')[i].onmouseover = function () {
              for (var a = 0; a < 4; a++) {
                gets('ul')[a].className = '';
                gets('a')[a].className = '';
              }
              // console.log(this);
              gets('ul')[this.index].className = 'ul';
              this.className = 'a';
            }
          }
        }
      </script>
    </head>
    <body>
      <div id="div1">
        <a href="javascript:;" id="a0">1</a>
        <a href="javascript:;" id="a1">2</a>
        <a href="javascript:;" id="a2">3</a>
        <a href="javascript:;" id="a3">4</a>
      </div>
      <div id="div2">
        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
        <ul>
          <li>2</li>
          <li>2</li>
          <li>2</li>
        </ul>
        <ul>
          <li>3</li>
          <li>3</li>
          <li>3</li>
        </ul>
        <ul>
          <li>4</li>
          <li>4</li>
          <li>4</li>
        </ul>
      </div>
    </body>
  </html>
  ```

  

### JS 简易日历

- 程序实现思路

  - 类似于选项卡，只是下面只有一个div
  - innerHTML 的使用

- 数组的使用

  - 定义：` arr = [1, 2, 3] `
  - 使用：` arr[0] `

- 字符串拼接

  - 作用：拼接两个字符串
  - 问题：拼接中的优先级
    - 就近相加, 字符串后面数字相加要加括号

- 代码: 

  ```HTML
  <!DOCTYPE html>
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
      <title>简易日历</title>
      <style>
        body {
          margin: 0;
          padding: 0;
        }
        td {
          border: 5px solid rgb(218, 218, 218);
          width: 59px;
          height: 59px;
          text-align: center;
          background: rgb(83, 83, 83);
          color: white;
        }
        .td {
          background: rgb(255, 255, 255);
          color: rgb(0, 0, 0);
        }
  
        /* 日历数字区 */
        #t1 {
          border: 10px solid rgb(218, 218, 218);
          margin:0 auto;
          position: relative;
          width: 240px;
          height: 320px;
          background: rgb(218, 218, 218);
        }
  
        /* 下方文字 */
        #d2 {
          margin:0 auto;
          width: 240px;
          height: 100px;
          background: rgb(218, 218, 218);
        }
        #p1 {
          position: relative;
          margin: auto;
          width: 205px;
          height: 80px;
          background: rgb(255, 255, 255);
        }
      </style>
      <script>
        window.onload = function () {
          // 封装 getElementById 函数
          function get(id) {
            return document.getElementById(id);
          }
          // 封装 getElementsByTagName
          function gets(tagName) {
            return document.getElementsByTagName(tagName)
          }
          // 获取所有 td，注册 onmouseover 事件，添加索引
          // console.log(gets('td')) 
          var tds = gets('td');
          var i = 0;
          for (i = 0; i < tds.length; i++) {
            tds[i].index = i;
            tds[i].onmouseover = function () {
              // 先清空 td className
              for (a = 0; a < tds.length; a++) {
                tds[a].className = '';
              }
              // 修改td className 并插入文字
              tds[this.index].className = 'td';
              // console.log(i);
              get('p1').innerHTML = (this.index + 1) + arr[this.index];
            }
          }
  
          arr = [
          '月活动：学编程、英语', '月活动：学编程、英语', '月活动：学编程、日语', 
          '月活动：学编程、画画', '月活动：学编程、旅游', '月活动：学编程', 
          '月活动：学编程', '月活动：学编程', '月活动：学编程', 
          '月活动：学编程', '月活动：学编程', '月活动：学编程'
          ]
        }
      </script>
    </head>
    <body>
      <div id="d1">
        <table id="t1">
          <tr>
            <td>1 <br>JAN</td>
            <td>2 <br>FER</td>
            <td>3 <br>MAR</td>
          </tr>
          <tr>
            <td>4 <br>APR</td>
            <td>5 <br>MAY</td>
            <td>6 <br>JUN</td>
          </tr>
          <tr>
            <td>7 <br>JUL</td>
            <td>8 <br>AUG</td>
            <td>9 <br>SEP</td>
          </tr>
          <tr>
            <td>10 <br>OCT</td>
            <td>11 <br>NOV</td>
            <td>12 <br>DEC</td>
          </tr>
        </table>
        <div id="d2">
          <p id="p1">
  
          </p>
        </div>
      </div>
    </body>
  </html>
  ```

  

## JavaScript 基础

### JavaScript 组成

- ECMAScript：解释器、编译器（几乎所有兼容）
- DOM：Document Object Model，HTML，document（大部分兼容）
- BOM：Browser Object Model，浏览器，window（完全不兼容）
  - 各组成部分的兼容性、兼容性问题的由来

### 变量类型

- 类型：typeof 运算符
  - 用法、返回值：返回类型
  - 常见类型：
    - number 、string 、boolean 、undefined（未定义或定义未使用）、object、function
- 一个变量应该只放一种类型的数据

### 变量类型转换

- 数据类型转换

  - 例子：计算两个文本框的和

  - 显式类型转换（强制类型转换）

    - `parseInt()`  去除小数、`parseFloat() ` 保留小数：从左至右提取数字，遇到不是数字跳出
    - `NaN ` 的意义和检测：Not a Number
    - NaN 和 NaN 不相等：使用 ` isNaN()` 检测是否是全是数字

  - 隐式类型的转换

    - `== `：先转换类型 再比较

      对比 `=== `：全等于，不转换类型直接比较

    - ` - `：数字相减

      对比 ` +`：字符串连接、数字相加

- 代码：

  ```HTML
  <!DOCTYPE html>
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
      <title>变量类型转换</title>
      <style></style>
      <script>
        window.onload = function () {
          // 封装 getElementById 函数
          function get(id) {
            return document.getElementById(id);
          }
  
          let t1 = get('t1');
          let t2 = get('t2');
          let b1 = get('b1');
          let s1 = get('s1');
          let s2 = get('s2');
          b1.onclick = function (){
            if (isNaN(t1.value)) {
              s1.innerHTML = '<br>' + t1.value + '不是数字';
            } else if (isNaN(t2.value)) {
              s1.innerHTML = '<br>' + t2.value + '不是数字';
            } else {
              console.log('t1:',typeof t1.value, 't2',typeof t2.value);
              let val = parseInt(t1.value) + parseInt(t2.value);
              let val2 = parseFloat(t1.value) + parseFloat(t2.value);
              s1.innerHTML = '<br>int结果：' + val+ '<br>float结果：' + val2;
              console.log(typeof val);
  
              // == 和 - 隐式转换
              let a = t1.value ;
              let b = t2.value;
              if (a == b) {
                s2.innerHTML = 'a == b' + '<br>a - b = ' + (a - b) + '<br>a + b = ' + (a + b);
              } else if (a === b) {
                s2.innerHTML = 'a === b！';
              } else {
                s2.innerHTML = 'a不等于b！' + '<br>a - b = ' + (a - b) + '<br>a + b = ' + (a + b);
              }
            }
          }
        }
      </script>
    </head>
    <body>
      <input type="text" name="" id="t1">
      <input type="text" name="" id="t2">
      <input type="button" name="" id="b1" value="计算">
      <div>
          <span id="s1"></span>
      </div>
      <div>
          <span id="s2"></span>
      </div>
    </body>
  </html>
  ```

  

### 变量的作用域和闭包

- 变量作用域（作用范围）
  - 局部变量、全局变量
- 什么是闭包？
  - **子函数可以使用父函数中的局部变量**
  - 之前一直在使用闭包
  - 网上对于闭包的定义

### 命名规范

- 命名规范及必要性
  - 可读性--能看懂
  - 规范性--符合规则
- 匈牙利命名法
  - **类型前缀 + 首字母大写**：` getElementByTagName `

| 类型       | 前缀 | 类型（英文） | 实例         |
| ---------- | ---- | ------------ | ------------ |
| 数组       | a    | Array        | aItems       |
| 布尔值     | b    | Boolean      | bIsComplete  |
| 浮点数     | f    | Float        | fPrice       |
| 函数       | fn   | Function     | fnHandler    |
| 整数       | i    | Integer      | iItemCount   |
| 对象       | o    | Object       | oDiv1        |
| 正则表达式 | re   | RegExp       | reEmailCheck |
| 字符串     | s    | String       | sUserName    |
| 变体变量   | v    | Variant      | vAnything    |

### 运算符

- 算数：` +加、-减、*乘、/ 除、%取模 `

  - 实例：隔行变色、秒转时间

- 赋值：` =、+=、-=、*=、/=、%= `

  - ` +=` ：  `i += 1  等于 i++ `

- 关系：` <、>、<=、>=、== 、===、!=、!==` 

  - `!==` ：不同类型不比较，且无结果，同类型才比较，对应 `===`
  - `!=`：若类型不同，会偿试转换类型，对应 `== `

- 逻辑：&&与、||或、!否

  - 实例：全选与反选

- 运算符优先级：括号

- 代码：

  ```HTML
  <!DOCTYPE html>
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
      <title>运算符</title>
      <style>
      .blue {
        width: auto;
        height: 20px;
        background: blue;
      }
      .yellow {
        width: auto;
        height: 20px;
        background: yellow;
      }
      </style>
      <script>
        window.onload = function () {
          // 封装 getElementById 函数
          function get(id) {
            return document.getElementById(id);
          }
          // 封装 getElementsByTagName
          function gets(tagName) {
            return document.getElementsByTagName(tagName)
          }
          // 隔行变色
          function liCol() {
            let i = 0;
            let oLi = gets('li') ;
            for (i = 0; i < oLi.length; i++) {
              if (i % 2 === 0) {
                oLi[i].className = 'blue';
              } else {
                oLi[i].className = 'yellow';
              }
            }
          }
          liCol();
  
          // 毫秒转日期
          const date = Date.now();
          // 60000ms / 1000ms /60s /60m /24h /365d
          const millisecond = date % 1000 + '毫秒';
          const second = parseInt(date/1000) % 60 + '秒';
          const minute = parseInt(date/1000/60) % 60 + '分';
          const hour = parseInt(date/1000/60/60) % 24 + 8 + '小时';
          const day = parseInt(date/1000/60/60/24/365) % 30 - 9 + '号';
          const month = parseInt(date/1000/60/60/24/30) % 12 + 4 + '月'; 
          const year = parseInt(date/1000/60/60/24/265) + 1951 +'年';
          const d1 = get('d1');
          d1.innerHTML = millisecond+ second+ minute+ hour+ day+ month+ year;
        }
  
        // 赋值 ` =、+=、-=、*=、/=、%= `
        let i = 11;
        i += 2;
        console.log(i);
        i -= 3;
        console.log(i);
        i *= 2;
        console.log(i);
        i /= 2;
        console.log(i);
        i %= 3;
        console.log(i);
  
        // 判断 <、>、<=、>=、== 、===、!=、!==
        if (i > 0) {
        console.log('i > 0');
        } 
        if (i <= i) {
          console.log('i <= i');
        }
        if (i == '1') {
          console.log('i == "1"')
        }
        if (i === 1) {
          console.log('i === 1')
        }
        if (i != '1') {
          console.log('i != 2')
        }
        if (i !== 1) {
          console.log('i !== 1')
        }
  
        // 逻辑 &&与、||或、!否
        if (i<2 && i>0) {
          console.log('i<2 && i>0')
        }
        if (i<2 || i<0) {
          console.log('i<2 || i<0')
        }
      </script>
    </head>
    <body>
      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div id="d1"></div>
    </body>
  </html>
  ```

### 程序流程控制

- 判断：`if、switch、?:`
- 循环：`while、for`
- 跳出：`break、continue`
- 什么是真、什么是假
  - 真：true、非零数字、非空字符串、非空对象
  - 假：false、数字0、空字符串、空对象、undefiend
- 代码：同下

### JSON

- 什么是 JSON

- JSON 和数组

- `JSON` 和 `for in`

- 代码：

  ```HTML
  <!DOCTYPE html>
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
      <title>程序流程控制</title>
      <script>
      window.onload = function () {
        // switch
        var i = 0;
        switch (i){
          case i*++i:
            console.log('i');
            break;
          case 1:
            console.log('1')
            break;
          default:
            console.log('default');
            break;
        }
  
        // ?:  条件?语句一:语句二
        var a = 1;
        a % 2 == 0 ? console.log('双数'):console.log('单数');
  
        // break continue
        for (i = 0; i < 5; i++){
          if (i === 2){
            // break; // 中断所有循环
            continue; // 中断本次循环
          }
          console.log(i);
        }
  
        // json 和 数组
        const json = {a: 2, b: 5, c:9};
        const arr = [23, 45, 5467];
        console.log('b:', json.b, 'c:', json['c'], '没有length', json.length);
        console.log(arr[2], arr.length);
  
        // JSON 和 for in
        for (var i in arr) {
          console.log('第' + i + '个：' + arr[i]);
        }
        for (var i in json) {
          console.log('第' + i + '个：' + json[i]);
        }
      }
      </script>
    </head>
    <body>
    </body>
  </html>
  ```

## 深入 JavaScript

### 函数返回值

- 什么是函数返回值
  - 函数的执行结果
  - 可以没有 return
- 一个函数应该只有一种返回值类型

### 函数传参与行间样式

- 可变函数（不定参数）：`arguments`

  - **参数数组**

- 例子：求和

  - 求所有参数的和

- 例子2：CSS 函数

  - 判断 `arguments.length`
  - 给参数取名，增强可读性

- **取非行间样式（不能用来设置）：**

  - `obj.currentStyle[attr]` 只兼容 IE ，返回小数

  - `getComputedStyle(obj, false)[attr]`，返回小数

  - ```js
    // 解决兼容问题
    // 封装获取计算后元素样式函数
    function getStyle(obj, name) {
        if (obj.currentStyle) {
            return obj.currentStyle[name];
        } else {
            return getComputedStyle(obj, '') [name];
        }
    }
    ```

  - 复合样式：`background` / `border ` 要用具体样式名 `backgroundColor ` 等

  - 单一样式：` width` / `height` / `position`

### 数组基础操作

- 数组的使用

  - 定义
    - `var arr = [23, 234, 23, 45];`
    - `var arr = new Array(12, 5, 7, 34);`
    - 没有任何差别，`[]` 的性能略高，因为代码短

- 数组的属性

  - `length`
    - 既可以获取，又可以设置
    - 例子：快速清空数组 `length  = 0`

- 数组的使用原则：数组中应该只存一种类型的变量

- 数组的方法

  - 添加
    - `push(元素)`，从尾部添加
    - `unshift(元素)`，从头部添加
  - 删除
    - `pop()`，从尾部删除
    - `shift()`，从头部删除

- 排序

  - `数组.sort([比较函数])`，排序一个数组，只有数组能使用

    - 排序一个字符串数组，不加比较函数，**默认按照 ASCII 码排序**

    - 排序一个数字数组，加数字比较大小函数

    - ```js
      // 正序比较函数 数字比大小 字符比ASCII值大小
      function positiveSort(n1, n2) {
          if (isNaN) {
              if (n1 > n2) {
                  return 1;
              }
              if (n1 < n2) {
                  return -1;
              }
              if (n1 === n2) {
                  return 0;
              }
          } else {
              return n1 - n2;
          }
      }
      ```

- 转换类

  - `数组.concat(数组2)`
    - 连接两个数组
  - `数组.join(分隔符)`
    - 用分隔符，组合数组元素，生成字符串
    - 字符串 `split`

-  `splice` 删除、插入、替换

  - `splice(起点,长度,元素)`

  - 删除

    - `splice(起点,长度)`

  - 插入

    - `splice(起点,0,元素...)`

  - 替换

    - `splice(起点,长度,元素)`
- 先删除，后插入
  
- 代码：

  ```HTML
  <!DOCTYPE html>
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
      <title>数组操作</title>
      <style>
      div {
        margin-top: 10px;
      }
      </style>
      <script>
      var arr = [23, 435, 567, 321, 9, 4];
      var arr2 = new Array('m', 'r', 'a', 'z', 'c', 'p', 'e', '破就', '不发');
  
      // 封装getById
      function get(id) {
        return document.getElementById(id);
      }
  
      window.onload = function () {
        // 显示数组
        function showArr() {
          get('d1').innerHTML = arr + ' + ' + arr2;
        }
        showArr();
  
        // 添加元素 从尾部添加
        get('btn2').onclick = function () {
          arr.push(222);
          showArr();
        }
  
        // 添加元素 从头部添加
        get('btn22').onclick = function () {
          arr.unshift(234);
          showArr();
        }
  
        // 删除元素 从尾部删除
        get('btn3').onclick = function () {
          arr.pop();
          showArr();
        }
  
        // 删除元素 从头部删除
        get('btn33').onclick = function () {
          arr.shift();
          showArr();
        }
  
        // 排序元素
        get('btn4').onclick = function () {
          arr.sort(positiveSort);
          arr2.sort(positiveSort);
          showArr();
        }
        // 比较函数 数字比大小 字符比ASCII值大小
        function positiveSort(n1, n2) {
          if (isNaN) {
            if (n1 > n2) {
              return 1;
            }
            if (n1 < n2) {
              return -1;
            }
            if (n1 === n2) {
              return 0;
            }
          } else {
            return n1 - n2;
          }
        }
  
        // 拼接数组
        get('btn5').onclick = function () {
          arr = arr.concat(arr2);
          showArr();
        }
        
        // 分隔符
        get('btn6').onclick = function () {
          arr = arr.join('_');
          showArr();
        }
        
        // splice 插入 splice(起点,长度,元素)
        get('btn7').onclick = function () {
          arr.splice(2, 0, 5, 1);
          showArr();
        }
        // splice 删除
        get('btn8').onclick = function () {
          arr.splice(0, arr.length);
          showArr();
        }
        // splice 替换 = 删除 + 插入
        get('btn9').onclick = function () {
          arr.splice(2, 1, 999, 888);
          showArr();
        }
  
      }
      </script>
    </head>
    <body>
      <div>
        <input type="button" name="" id="btn2" value="尾部添加元素">
        <input type="button" name="" id="btn22" value="头部添加元素">
        <input type="button" name="" id="btn3" value="尾部删除元素">
        <input type="button" name="" id="btn33" value="头部删除元素">
        <input type="button" name="" id="btn4" value="正序排序元素">
      </div>
      <div>
        <input type="button" name="" id="btn5" value="拼接数组">
        <input type="button" name="" id="btn6" value="分割数组">
      </div>
      <div>
        <input type="button" name="" id="btn7" value="插入元素">
        <input type="button" name="" id="btn8" value="删除元素">
        <input type="button" name="" id="btn9" value="替换元素">
      </div>
      <div id="d1"></div>
    </body>
  </html>
  ```

- 数组名作为变量（遍历数组中的数组）：

  ```js
  var arr1=new Array(); 
  var arr2=new  Array(); 
  var arrlist= new Array(); //存放以上数组
  arrlist.push(arr1);
  arrlist.push(arr2);
  //循环遍历arrlist，就可以达到你要的效果
  ```

  

## 定时器的使用

### 定时器的作用

- 开启定时器

  - `setInterval(函数, 间隔时间)` 间隔型，函数后面不能带括号和传参
  - `setTimeout(函数, 延时时间)`   延时型
  - 两种定时器的区别，定时器要 `window.onload` 完一秒后才执行

- 停止定时器

  - `clearInterval(定时器名字)`
  - `clearTimeout(定时器名字)`

- 代码：

  ```js
  window.onload = function () {
  	var oBtn1 = document.getElementById('btn1');
  	var oBtn2 = document.getElementById('btn2');
      var timer = null;
      
      oBtn1.onclick = function () {
  		timer = setInterval(function () {
              alert('a');
          }, 2000);
      };
      
      oBtn2.onclick = function () {
          clearInterval(timer);
      };
  };
  ```

### 数码时钟

- 效果思路

- 获取系统时间

  - `new Date` 对象
  - `getHours / getMinutes / getSeconds`

- 显示系统时间

  - 字符串连接
  - 空位补零

- 设置图片路径

  - `str[i]` 不兼容 ie7
- `charAt(i)` 方法 ：取出字符串中的第 i 个值，兼容各种浏览器
  - 设置路径：`"url('img/0.png')"`

- 代码：

  ```HTML
  <!DOCTYPE html>
  <html>
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>数码时钟</title>
    <style>
    body{
      margin: 0;
      padding: 0;
      background-color: rgb(49, 49, 49);
    }
    li {
      list-style: none;
      float: left;
      width: 100px;
      height: 149px;
    }
    span {
      float: left;
      font-size: 100px;
      color: rgb(255, 255, 255);
    }
    </style>
    <script>
    window.onload = function () {
      // 封装 getElementsByTagName
      function gets(tagName) {
        return document.getElementsByTagName(tagName)
      }
  
      // 数码时钟
      // 数字时钟图片设置函数
      const oLi = gets('li');
      function clock() {
        const date = new Date();
        const str = addZero(date.getHours()) + addZero(date.getMinutes()) + addZero(date.getSeconds());
      
        let i = 0;
        for (i = 0; i < oLi.length; i++) {
          oLi[i].style.backgroundImage = "url('img/"+ str.charAt(i) +".png')";
        }
      }
      // 补零
      function addZero(num) {
        if (num < 10) {
          num = '0' + num;
        } else {
          num = '' + num;
        }
        return num;
      }
      // 先执行一遍，就不会出现一秒的空白，定时器要 window.onload 完一秒后才执行
      clock();
      // 定时器 每秒刷新一次
      setInterval(clock, 1000);
    }
    </script>
    <body>
      <ul>
        <li></li>
        <li></li>
        <span>:</span>
        <li></li>
        <li></li>
        <span>:</span>
        <li></li>
        <li></li>
      </ul>
    </body>
  </html>
  ```
  
  

### Date 对象其它方法

- 年 ` getFullYear()`
- 月` getMonth()`
- 日`getDate()`
- 星期`getDay()`

### 延时提示框

- 效果演示

- 原来的方法

  - 移入显示，移出隐藏

- 移出延时隐藏

  - 移入下面 `div` 后，还是隐藏

- 简化代码

  - 合并两个相同的 `mouseover` 和 `mouseout`
  - 连续 `a=b=c=function()`  两个事件共使用一个函数

- 代码：同下


### 无缝滚动

- 效果演示

- 物体运动基础

  - 让 `div` 移动起来
  - `offsetLeft/offsetTop` 的作用：获取当前对象的左边距/上边距
  - `offsetWidth/offsetHeight`
  - 用定时器让物体连续移动：
    - `innerHTML` 拼接两节图片, 宽度后面加 `px` 才会生效
    - `overflow:hidden;` 隐藏元素外的内容

- 改变滚动的方向

  - 修改 `speed`
  - 修改判定条件
  - 多次点击越来越快：`if (!timer) `或`clearInterval(timer);` 避免重复调用

- 鼠标移入暂停

  - 移入关闭定时器
  - 移出重新开启定时器

- 代码：

  ```HTML
  <!DOCTYPE html>
  <html>
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <link rel="stylesheet" href="../reset.css">
    <title>移出延时隐藏</title>
    <style>
      body {
        width: 560px;
        margin: 0 auto;
      }
      #d2 {
        margin: 10px;
        width: 200px;
        height: 200px;
        background-color: rgb(0, 204, 255);
        display: none;
        float: left;
      }
      #d1 {
        margin: 10px;
        width: 100px;
        height: 100px;
        background-color: rgb(0, 255, 149);
        float: left;
      }
      #d3 {
        margin: 220px auto;
        width: 560px;
        height: 140px;
        position: absolute;
        background-color: rgb(135, 182, 182);
        overflow: hidden;
      }
      #u1 {
        position: relative;
      }
      #u1 li {
        float: left;
      }
    </style>
    <script>
    window.onload = function () {
      // 封装 getElementById 函数
      function get(id) {
        return document.getElementById(id);
      }
      // 封装 getElementsByTagName
      function gets(tagName) {
        return document.getElementsByTagName(tagName)
      }
  
      // 鼠标移动到 d1 上，d2 显示，移出隐藏；
      // 鼠标移到 d2 上，清除定时器，移出 d2 开启定时器
      let timer = '';
      get('d1').onmouseover= get('d2').onmouseover = function () {
        clearTimeout(timer);
        get('d2').style.display = 'block';
      }
      get('d1').onmouseout= get('d2').onmouseout = function () {
        timer = setTimeout(hide,1000);
      }
      function hide() {
        get('d2').style.display = 'none';
      }
  
      // 无缝滚动
      get('u1').innerHTML += get('u1').innerHTML;
      get('u1').style.width = gets('li').length * gets('li')[0].offsetWidth + 'px';
      let timer2 = '';
      let speed = 2;
      // 左移
      get('btn1').onclick = function () {
        speed = -2;
        if (!timer2) {
          timer2 = setInterval(move, 30);
        }
      }
      // 右移
      get('btn2').onclick = function () {
        speed = 2;
        if (!timer2) {
          timer2 = setInterval(move, 30);
        }
      }
      // 移动
      function move() {
        get('u1').style.left = get('u1').offsetLeft + speed + 'px';
        if (get('u1').offsetLeft < -get('u1').offsetWidth/2) {
          get('u1').style.left = 0;
        } else if (get('u1').offsetLeft > 0){
          get('u1').style.left = -get('u1').offsetWidth/2 + 'px';
        }
          console.log(get('u1').offsetLeft);
      }
      // 鼠标悬停
      get('d3').onmouseover = function () {
        clearInterval(timer2);
      }
      get('d3').onmouseout = function () {
        timer2 = setInterval(move, 30);
      }
    }
    </script>
    <body>
      <div id="d1"></div>
      <div id="d2"></div>
      <div id="d3">
        <ul id="u1">
          <li><img src="images/1.png" alt=""></li>
          <li><img src="images/2.png" alt=""></li>
          <li><img src="images/3.png" alt=""></li>
          <li><img src="images/4.png" alt=""></li>
        </ul>
      </div>
      <input type="button" name="" id="btn1" value="左移">
      <input type="button" name="" id="btn2" value="右移">
    </body>
  </html>
  ```
  
  

## DOM 基础

### DOM 基础

- 什么是 DOM
- 浏览器支持情况

### DOM 节点

- DOM 节点
  - 获取子节点
    - `childNodes`：不兼容高版本，用`nodeType` 兼容
      - 获取文本节点`( nodeType == 3)` 和元素节点`( nodeType == 1)`
    - **`children`：只获取元素节点，兼容**
  - `parentNode`：查找父节点
    - 例子：点击链接，隐藏整个 `li`
  - `offsetParent`：查找定位父级
    - 例子：获取元素在页面上的实际位置
  - 首尾子节点
    - `firstChild`  有兼容性问题，IE6-8用
    - `firstElementChild` 高版本使用
    - `lastChild `/ `lastElementChild` 
  - 兄弟节点
    - 有兼容性问题，IE6-8用前面的
    - `nextSbling` / ` nextElementSibling`
    - `previousSibling  `  /  `previousElementSibling`

### 操作元素属性

- 操作元素属性
  - 元素属性操作
    - 第一种：`oDiv.style.display = 'block';`
    - 第二种：`oDiv.style['display'] = 'block';`
    - 第三种：Dom 方式
  - Dom 方式操作元素属性
    - 获取：`getAttribute(名称)`
    - 设置：`setAttribute(名称, 值)`
    - 删除：`removeAttribute(名称)`

### DOM 元素灵活查找

- 用 className 选择元素

  - 如何用 className 选择元素

    - 选出所有元素
    - 通过 className 条件筛选

  - 封装成函数：

    ```js
    // 通过 className 查找元素
    function getByClass(oParent, sClass) {
    	var aResult = [];
    	var aEle = oParent.getElementsByTagName('*');
    	
    	for(var i = 0; i < aEle.length; i++) {
            if (aEle[i].className == sClass) {
                aResult.push(aEle[i]);
            }
        }
        return aResult;
    }
```
    
    

## DOM 操作应用

### 创建、插入和删除元素

- 创建 DOM 元素

  - `document.createElement(标签名)`	创建一个节点，不渲染
  - `父级.appendChild(节点)`    **删除原有子节点**，再添加子节点，并渲染
    - 例子：为 `ul` 插入 `li`

- 插入元素

  - `父级.insertBefore(节点, 原有节点)`	在已有元素前插入
    - 例子：倒叙插入 `li`

- 删除 DOM 元素

  - `父级.removeChild(节点)` 	删除一个节点
    - 例子：删除 `li`

- 代码：

  ```HTML
  <!DOCTYPE html>
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
      <title>DOM创建插入删除元素</title>
      <script>
        window.onload = function () {
          // 封装getElementById
          function get(id) {
            return document.getElementById(id);
          };
  
          // 在 ul 下增加 li
          let oUl = get('u1');
          get('btn1').onclick = function () {
            let oLi = document.createElement('li');
            let sL = get('txt1').value + "<a href='javascript:;'>删除</a>";
            oLi.innerHTML = sL;
            oUl.appendChild(oLi);
            aRemove();
          };
          // 从 ul 下插入 li
          get('btn2').onclick = function () {
            let oLi = document.createElement('li');
            let aLi = document.getElementsByTagName('li');
            let sL = get('txt1').value + "<a href='javascript:;'>删除</a>";
            let i = get('txt2').value - 1;
            oLi.innerHTML = sL;
            if (aLi.length > i && aLi.length > 0) {
              oUl.insertBefore(oLi, aLi[i]);
            } else {
              oUl.appendChild(oLi);
            }
            aRemove();
          };
          // 从 ul 下删除 li
          get('btn3').onclick = function () {
            let aLi = document.getElementsByTagName('li');
            let i = get('txt2').value - 1;
            if (i < aLi.length && i >= 0) {
             oUl.removeChild(aLi[i]);
            } else {
              alert('找不到第'+ (parseInt(i) + 1) +'个li');
            }
          };
  
          // this 从 ul 删除 li
          function aRemove() {
            let aA = document.getElementsByTagName('a');
            let i =0
            for (i = 0; i < aA.length; i++) {
              aA[i].onclick = function () {
                oUl.removeChild(this.parentNode);
              }
            }
          }
        }
      </script>
    </head>
    <body>
      <input type="text" name="" id="txt1" value="123">
      <input type="button" name="" id="btn1" value="增加">
      <input type="text" name="" id="txt2" value="1">
      <input type="button" name="" id="btn2" value="插入">
      <input type="button" name="" id="btn3" value="删除">
      <div is="d1">
        <ul id="u1">
        </ul>
      </div>
    </body>
  </html>
  ```

  

### 文档碎片

- 文档碎片理论上可以提高 DOM 操作性能

- 文档碎片原理

- `document.createDocumentFragment()`：Vue 、MVVM 还有用到

- 代码：

  ```js
  var element  = document.getElementById('ul'); // assuming ul exists
  var fragment = document.createDocumentFragment();
  var browsers = ['Firefox', 'Chrome', 'Opera', 
      'Safari', 'Internet Explorer'];
  
  browsers.forEach(function(browser) {
      var li = document.createElement('li');
      li.textContent = browser;
      fragment.appendChild(li);
  });
  
  element.appendChild(fragment);
  ```

  

## DOM操作应用高级

### 表格标签

| 表格       | 描述                   |
| :--------- | :--------------------- |
| <table>    | 定义表格               |
| <caption>  | 定义表格标题。         |
| <th>       | 定义表格的表头。       |
| <tr>       | 定义表格的行。         |
| <td>       | 定义表格单元。         |
| <thead>    | 定义表格的页眉。       |
| <tbody>    | 定义表格的主体。       |
| <tfoot>    | 定义表格的页脚。       |
| <col>      | 定义用于表格列的属性。 |
| <colgroup> | 定义表格列的组。       |

### 表格应用

- 获取

  - `tBodies / tHead / tFoot / rows / cells `

    ```js
    var oTab = document.getElementById('tab1');
    alert(oTab.tBodies[0].rows[1].cells[1].innerHTML);
    ```

- 隔行变色

  - 鼠标移入高亮

- 添加/删除一行

  -  DOM 方法的使用

- 搜索

  - 版本1：基础版本 -- 字符串比较
  - 版本2：忽略大小写 -- 大小写转换 `toLowerCase()`，返回字符串
  - 版本3：模糊搜索 -- `search()` 的使用，没找到返回 -1，找到则返回位置
  - 版本4：多关键词 -- `split()` 分割字符串，返回数组
  - 高亮显示、筛选

- 排序

  - 移动 `li` ，使用`appendChild()`： 删除原有 `li`，尾部新增 `li`
  - 元素排序：元素集合转换成数组 -- `sort()` 排序 -- `appendChild()`插入

- 代码：

  ```HTML
  <!DOCTYPE html>
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
      <title>表格操作</title>
      <style>
        body {
          margin: 0 auto;
          width: 400px;
        }
        table {
          border: rgb(97, 97, 97) 1px solid;
          width: 400px;
        }
        td {
          border: rgb(255, 106, 136) 1px solid;
        }
      </style>
      <script>
        window.onload = function () { 
          // 封装getElementById
          function get(id) {
            return document.getElementById(id);
          };
  
          // 表格数据
          // tHead 作为最后一个数组传入
          var data = new Array(
            [1, '张三', 12, "<a href='javascript:;'>删除</a>"],
            [2, '李四', 13, "<a href='javascript:;'>删除</a>"],
            [3, '王五', 14, "<a href='javascript:;'>删除</a>"],
            [4, '王七', 19, "<a href='javascript:;'>删除</a>"],
            [5, '王九', 24, "<a href='javascript:;'>删除</a>"],
            [6, '李六', 42, "<a href='javascript:;'>删除</a>"],
            [7, '李三', 23, "<a href='javascript:;'>删除</a>"],
            [8, '李六', 76, "<a href='javascript:;'>删除</a>"],
            [9, 'CAT', 8, "<a href='javascript:;'>删除</a>"],
            [10, 'cat', 2, "<a href='javascript:;'>删除</a>"],
            [11, 'dog', 1, "<a href='javascript:;'>删除</a>"],
            [12, '3', 5, "<a href='javascript:;'>删除</a>"],
            [13, '31', 2, "<a href='javascript:;'>删除</a>"],
            [14, '4', 7, "<a href='javascript:;'>删除</a>"],
            [15, '42', 9, "<a href='javascript:;'>删除</a>"],
            [16, '啊Q', 9, "<a href='javascript:;'>删除</a>"],
            ['ID', '姓名', '年龄', "操作"]
          );
  
          // 传入格式化数组文件 data ，自动生成表格
          function createTable(data) {
            // 使用文档碎片 生成表格
            // var frag = document.createDocumentFragment();
            var table = document.createElement('table');
            var caption = document.createElement('caption');
            var thead = document.createElement('thead');
            var tbody = document.createElement('tbody');
            var tr = document.createElement('tr');
            // 渲染表格
            get('b1').appendChild(table);
            table.appendChild(caption);
            table.appendChild(thead);
            table.appendChild(tbody);
            thead.appendChild(tr);
            var oTr = document.getElementsByTagName('tr');
            // 渲染单元格
            caption.innerHTML = "<strong style='font-size: 20px'>人员表</strong>";
            var i = 0;
            var j = 0;
            var rNmb = data.length - 1; // 行
            var rLth = data[0].length;  //列
            // 生成表头
            for (i = 0; i < rLth; i++){
              var th = document.createElement('th');
              oTr[0].appendChild(th);
              // 写入th数据
              var aArr = data[rNmb];
              table.tHead.rows[0].cells[i].innerHTML = aArr[i];
            }
            // 生成 tbody 及插入内容
            for (i = 0; i < rNmb; i++) {
              var tr = document.createElement('tr');
              tbody.appendChild(tr);
              for (j = 0; j < rLth; j++) {
                var td = document.createElement('td');
                tr.appendChild(td);
                // 写入td数据
                aArr = data[i];
                table.tBodies[0].rows[i].cells[j].innerHTML = aArr[j];
              }
            }
            // 不加 tBodies[0] 会把 tHead 当作一行
            // console.log(table.rows.length); 
            chgColor();
            aClick();
          }
          createTable(data);
  
          function chgColor() {
            // 隔行变色
            var oTr = document.getElementsByTagName('tr');
            var oldColor = '';
            for (i = 1; i < oTr.length; i++) {
              if (i % 2 === 0) {
                oTr[i].style.background = '#eee';
              } else {
                oTr[i].style.background = '#bbb';
              }
              // 鼠标移入高亮
              oTr[i].onmouseover = function () {
                oldColor = this.style.background;
                this.style.background = 'yellow';
              }
              oTr[i].onmouseout = function () {
                this.style.background = oldColor;
              }
            }
          }
  
          // 增加/删除一行 
          var btn1 = get('btn1');
          var btn2 = get('btn2');
          var btn3 = get('btn3');
          var btn4 = get('btn4');
          var btn5 = get('btn5');
          var btn6 = get('btn6');
          var txt1 = get('txt1');
          var txt2 = get('txt2');
          var txt3 = get('txt3');
          var txt4 = get('txt4');
          var id = data.length;
          var oTab = document.getElementsByTagName('table');
          // txt1 txt2 增加一行
          btn1.onclick = function () {
            if (txt1.value != '' && txt2.value != '') {
              var newPerson = new Array(id, txt1.value, txt2.value, "<a href='javascript:;'>删除</a>")
              data.splice(data.length - 1, 0, newPerson);
              get('b1').removeChild(oTab[0]);
              createTable(data);
              id++;
            } else {
              alert('请输入姓名和年龄！');
            }
          }
          // 根据 txt4 删除一行
          btn3.onclick = del;
          function del() {
            for (var i in data) {
              var aData = data[i];
              // console.log(aData[0])
              // 校验输入ID 是否和 data.ID 匹配
              if (aData[0] === parseInt(txt4.value) || aData[0] === parseInt(txtTd)) {
                data.splice(i, 1);
                break;
              }
            }
            get('b1').removeChild(oTab[0]);
            createTable(data);
          }
  
          // 注册 a 标签删除操作事件
          var txtTd = '';
          function aClick() {
            var oA = document.getElementsByTagName('a');
            for (var i in oA) {
              oA[i].onclick = function () {
                // oTab[0].tBodies[0].removeChild(this.parentNode.parentNode);
                txtTd = this.parentNode.parentNode.cells[0].innerHTML;
                del();
              }
            }
          }
  
          // data 筛选查询
          btn2.onclick = searchTr;
          function searchTr() {
            var oTr = document.getElementsByTagName('tr');
            var bData = new Array();
            // 储存表头
            var thData = data[data.length-1];
            if (txt3.value != '') {
              for (var i in data) {
                var aData = data[i];
                // console.log(aData[0])
                // 校验输入name 是否和 data.name 匹配
                if (aData[1].toLowerCase() === txt3.value.toLowerCase()) {
                  // 忽略大小写
                  bData.push(data[i]);
                } else if (aData[1].toLowerCase().search(txt3.value.toLowerCase()) != -1) {
                  // 模糊搜索 search()
                  bData.push(data[i]);
                } else {
                  // 多关键词搜索 split() 分割关键词
                  var aTxt = txt3.value.split(' ');
                  for(var j in aTxt) {
                    if (aData[1].toLowerCase().search(aTxt[j].toLowerCase()) != -1) {
                      bData.push(data[i]);
                      continue;
                    }
                  }
                }
              }
            // 传入表头 thData
            bData.push(thData);
            get('b1').removeChild(oTab[0]);
            createTable(bData);
            } else {
              back();
            }
          }
  
          // 恢复 data
          btn4.onclick = back;
          function back() {
            get('b1').removeChild(oTab[0]);
            createTable(data);
          }
  
          // tr 高亮查询
          btn5.onclick = function () {
            chgColor();
            var name = '';
            for (i = 0; i < oTab[0].tBodies[0].rows.length; i++) {
              name = oTab[0].tBodies[0].rows[i].cells[1].innerHTML; 
              if (txt3.value != '') {
                if (name.toLowerCase() === txt3.value.toLowerCase()) {
                  // 忽略大小写
                  oTab[0].tBodies[0].rows[i].style.background = 'yellow';
                } else if (name.toLowerCase().search(txt3.value.toLowerCase()) != -1) {
                  // 模糊搜索 search()
                  oTab[0].tBodies[0].rows[i].style.background = 'yellow';
                } else {
                  // 多关键词搜索 split() 分割关键词
                  var aTxt = txt3.value.split(' ');
                  for(var j in aTxt) {
                    if (name.toLowerCase().search(aTxt[j].toLowerCase()) != -1) {
                      oTab[0].tBodies[0].rows[i].style.background = 'yellow';
                      continue;
                    }
                  }
                }
              } else {
                back();
              }
            }
          }
  
          // data 根据元素排序 sort() 方法
          btn6.onclick = sortName;
          var item = 0; // 排序的元素
          var txt5 = get('txt5');
          var thData = data[data.length-1]; // 保存 th
          function sortName() {
            item = parseInt(txt5.value);
            data.pop(); // 去掉最后的 th
            data.sort(compare); // 正向排序
            data.push(thData); // th 加回去
            back(); //生成表格
          }
          // 比较函数 此函数 数字类型和字符串类型不能混排
          function compare(arr1, arr2) {
            var val1 = arr1[item];
            var val2 = arr2[item];
            if (!isNaN(val1) && !isNaN(val2)) {
              return val1 - val2;
            } else {
              if (val1 > val2) {
                return 1;
              } else if (val1 < val2) {
                return -1;
              } else if (val1 === val2) {
                return 0;
              }
            }
          }
        }
      </script>
    </head>
    <body id="b1">
      <div>
        <input type="text" name="name" id="txt1" placeholder="姓名">
        <input type="text" name="age" id="txt2" placeholder="年龄">
        <input type="button" name="" id="btn1" value="增加">
      </div>
      <div>
        <input type="text" name="" id="txt3" value="张三 六 五">
        <input type="button" name="" id="btn2" value="筛选查询">
        <input type="button" name="" id="btn4" value="返回">
        <input type="button" name="" id="btn5" value="高亮查询">
      </div>
      <div>
        <input type="text" name="" id="txt4" placeholder="id">
        <input type="button" name="" id="btn3" value="删除">
      </div>
      <div>
        <input type="text" name="" id="txt5" value='1'>
        <input type="button" name="" id="btn6" value="排序">
      </div>
    </body>
  </html>
  ```

  

### 表单应用

- 表单基础知识（本章学习事件的时候再详细说明）
  - 什么是表单
    - 向服务器提交数据，比如：用户注册
  - `action ` ： 提交到哪里
- 表单事件 
  - `onsubmit`：提交时发生
  - `onreset`：重置时发生
- 表单内容验证
  - 阻止用户输入非法字符：阻止事件
  - 输入时、失去焦点时验证：`onkeyup` 和`onblur`
  - 提交时检查：`onsubmit`
  - 后台数据检查



## JS 运动基础

### 运动基础

- 让 div 动起来
- 速度：物体运动快慢
- 运动中的 Bug
  - 不会停止
  - 速度取某些值会无法停止
  - 到达位置后点击还会运动
  - 重复点击速度加快
- 匀速运动
  - 速度不变

### 运动框架及应用

- 运动框架

  - 在开始运动时，关闭已有定时器
  - 把运动和停止隔开：`if / else`

- 运动框架实例

  - 例子1：“分享到” 侧边栏
    - 通过目标点，计算速度值
  - 例子2：淡入淡出图片
    - 用变量储存透明度
    - `filter:alpha(opacity=30); opacity: 0.3;` IE 用前者

- ```HTML
  <!DOCTYPE html>
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
      <title>运动框架及应用</title>
      <style>
        #div1 {
          width: 150px;
          height: 400px;
          background-color:cyan;
          position: absolute;
          left: -150px;
        }
        #div1 span {
          width: 20px;
          height: 60px;
          left: 150px;
          background-color:rgb(106, 176, 255);
          position: absolute;
          margin-top: 170px;
        }
        #div2 {
          left: 200px;
          position: absolute;
          filter:alpha(opacity=30);
          opacity: 0.3;
        }
      </style>
      <script>
        window.onload = function () {
          // 封装getElementById
          function get(id) {
            return document.getElementById(id);
          };
  
          var oDiv = get('div1');
          var timer = '';
          var speed = 0;
          var target = 0;
          // 运动框架
          function startMove(target) {
            clearInterval(timer);
            timer = setInterval(move, 30);
            function move() {
              if (oDiv.offsetLeft < target) {
                speed = 10;
                oDiv.style.left = oDiv.offsetLeft + speed + 'px';
              } else if (oDiv.offsetLeft > target) {
                speed = -10;
                oDiv.style.left = oDiv.offsetLeft + speed + 'px';
              } else if (oDiv.offsetLeft === target){
                clearInterval(timer);
              }
            }
          }
          // 注册鼠标移入事件
          oDiv.onmouseover = function () {
            startMove(0);
          };
          oDiv.onmouseout = function () {
            startMove(-150);
          };
  
          // 图片淡入淡出
          var oDiv2 = get('div2');
          var alpha = 30;
          oDiv2.onmouseover = function () {
            shallow(100);
          }
          oDiv2.onmouseout = function () {
            shallow(30);
          }
          function shallow(target) {
            clearInterval(timer);
            timer = setInterval(shallowMove, 30);
            function shallowMove() {
              if (alpha === target) {
                clearInterval(timer);
              } else if (alpha < target) {
                speed = 10;
                alpha += speed;
                oDiv2.style.filter = 'alpha(opacity='+ alpha +')';
                oDiv2.style.opacity = alpha/100;
              } else if (alpha > target) {
                speed = -10;
                alpha += speed;
                oDiv2.style.filter = 'alpha(opacity='+ alpha +')';
                oDiv2.style.opacity = alpha/100;
              }
            }
          }
        }
      </script>
    </head>
    <body>
      <div id="div1">
        <span>分享到</span>
      </div>
      <div id="div2"><img src="images/0.png" alt=""></div>
    </body>
  </html>
  ```

### 缓冲运动

- 逐渐变慢，最后停止

- 距离越大速度越大，**速度取整**

  - 速度由距离决定
  - 速度 = (目标值-当前值)/缩放系数
  - `Math.ceil`：向上取整
  - `Math.floor`：向下取整

- 例子：缓冲菜单

  - Bug：速度取整  `Math.ceil`、`Math.floor`
  - 跟随页面滚动的缓冲侧边栏
    - 潜在问题：目标不是整数时
    - 目标取整：`parseInt()`

- 代码：

  ```HTML
  <!DOCTYPE html>
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
      <link rel="stylesheet" href="../reset.css">
      <title>缓冲运动及停止条件</title>
      <style>
        body {
          width: 800px;
          height: 2000px;
        }
        #div1 {
          width: 150px;
          height: 400px;
          background-color:cyan;
          position: absolute;
          left: -150px;
        }
        #div1 span {
          width: 20px;
          height: 60px;
          left: 150px;
          background-color:rgb(106, 176, 255);
          position: absolute;
          margin-top: 170px;
        }
        #div2 {
          top: 50px;
          left: 150px;
          position: absolute;
          filter:alpha(opacity=30);
          opacity: 0.3;
          width: 140px;
          height: 140px;
          background-color: red;
        }
        #div3 {
          width: 100px;
          height: 200px;
          background: rgb(99, 128, 255);
          position: absolute;
          right: 0px;
          bottom: 0px;
        }
        #div4 {
          width: 298px;
          height: 198px;
          border: rgb(0, 0, 0) solid 1px;
          position: absolute;
          left: 100px;
        }
      </style>
      <script>
        window.onload = function () {
          // 封装getElementById
          function get(id) {
            return document.getElementById(id);
          };
  
          var oDiv = get('div1');
          var timer = '';
  
          // 注册鼠标移入事件
          oDiv.onmouseover = function () {
            startMove(0, oDiv);
          };
          oDiv.onmouseout = function () {
            startMove(-150, oDiv);
          };
  
          // 图片淡入淡出
          var oDiv2 = get('div2');
          var alpha = 30;
          oDiv2.onmouseover = function () {
            shallow(100);
          }
          oDiv2.onmouseout = function () {
            shallow(30);
          }
          // 变浅函数
          function shallow(target) {
            clearInterval(timer);
            timer = setInterval(shallowMove, 30);
            function shallowMove() {
              speed = (target - alpha)/7;
              if (alpha === target) {
                clearInterval(timer);
              } else if (alpha < target) {
                alpha += speed;
                oDiv2.style.filter = 'alpha(opacity='+ Math.ceil(alpha) +')';
                oDiv2.style.opacity = Math.ceil(alpha)/100;
              } else if (alpha > target) {
                alpha += speed;
                oDiv2.style.filter = 'alpha(opacity='+ Math.floor(alpha) +')';
                oDiv2.style.opacity = Math.floor(alpha)/100;
              }
            }
          }
  
          // 跟随页面滚动的缓冲侧边栏
  
          var oDiv3 = get('div3'); 
          window.onscroll = function () {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var target = parseInt((document.documentElement.clientHeight - oDiv3.offsetHeight)/2 + scrollTop);
            scrollMove(target);
            console.log(
              '可视区：', document.documentElement.clientHeight,
              '滚动距离：', scrollTop, 
              'div3的高度：', oDiv3.offsetHeight, 
              '目标值：', target) 
          }
          // 纵向运动函数
          function scrollMove(target) {
            clearInterval(timer);
            timer = setInterval(scrollMoving, 30);
  
            function scrollMoving() {
              var speed = (target - oDiv3.offsetTop)/7;
              if (oDiv3.offsetTop === target) {
                clearInterval(timer);
              } else if (oDiv3.offsetTop > target) {
                oDiv3.style.top = oDiv3.offsetTop + Math.floor(speed) + 'px';
              } else if (oDiv3.offsetTop < target) {
                oDiv3.style.top = oDiv3.offsetTop + Math.ceil(speed) + 'px';
              }
            }
          }
  
          // 运动停止的条件
          var btn1 = get('btn1');
          var btn2 = get('btn2');
          var btn3 = get('btn3');
          var btn4 = get('btn4');
          btn1.onclick = function () {
            startMove(100, oDiv2);
          }
          btn2.onclick = function () {
            startMove(400, oDiv2);
          }
          btn3.onclick = function () {
            startMove2(100, oDiv2);
          }
          btn4.onclick = function () {
            startMove2(400, oDiv2);
          }
          // 横向缓冲运动框架
          function startMove(target, div) {
            clearInterval(timer);
            timer = setInterval(move, 30);
            function move() {
              speed = (target - div.offsetLeft)/9;
              if (div.offsetLeft < target) {
                div.style.left = div.offsetLeft + Math.ceil(speed) + 'px';
              } else if (div.offsetLeft > target) {
                div.style.left = div.offsetLeft + Math.floor(speed) + 'px';
              } else if (div.offsetLeft === target){
                clearInterval(timer);
              }
            }
          }
          // 横向匀速运动框架
          function startMove2(target, div) {
            clearInterval(timer);
            timer = setInterval(move2, 30);
            function move2() {
              // speed正向
              if (div.offsetLeft <= target) {
                speed = 9;
                moving();
              }
              // speed反向
              else if (div.offsetLeft >= target) {
                speed = -9;
                moving();
              } 
              function moving() {
                if (Math.abs(target - div.offsetLeft) <= Math.abs(speed)) {
                  div.style.left = target + 'px'; // 直接到达
                  clearInterval(timer); // 停止
                } else {
                  div.style.left = div.offsetLeft + speed + 'px';
                }
              }
            }
          }
        }
      </script>
    </head>
    <body>
      <div id="div1">
        <span>分享到</span>
      </div>
      <div id="div2"><img src="images/0.png" alt=""></div>
      <div id="div3"></div>
      <div id="div4">
        <input type="button" name="" id="btn1" value="减速到100px">
        <input type="button" name="" id="btn2" value="减速到400px">
        <input type="button" name="" id="btn3" value="匀速到100px">
        <input type="button" name="" id="btn4" value="匀速到400px">
      </div>
      </div>
    </body>
  </html>
  ```

### 运动的停止条件

- 运动终止条件
  - 匀速运动：两点足够近（直接改位置），`Math.abs()` 取绝对值
  - 缓冲运动：两点重合（取整后）
- 代码：同上

## JS 运动应用

### 多物体运动框架

- 多个物体同时运动
  - 例子：多个 `div` ，鼠标移入变宽
    - 单定时器，存在问题
    - 每个 `div` 一个定时器
- 多物体运动框架
  - 定时器作为物体的属性
  - 参数的传递：物体、目标值
  - 例子：多个 `div` 淡入淡出
    - 所有东西都不能公用
    - 属性与运动对象绑定：速度、其它属性值（如透明度等）
- 代码：同下

### 任意值运动框架

- `offset` 属性的 Bug

  - 获取的是整个盒子模型的大小，有边框的 div 变宽
    - 用 `obj.currentStyle('name')` 和 `getComputedStyle(obj,'').name`代替 `offset`

- 原有运动框架的问题

  - 只能让某个值运动起来
  - 如果想让其他值运动起来，要修改程序

- 扩展的运动框架

  - 运动属性作为参数
  - 封装 `opacity `
    - 小数精度问题：`Math.round()`  四舍五入取整

- 代码：

  ```HTML
  <!DOCTYPE html>
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
      <link rel="stylesheet" href="../reset.css">
      <title>缓冲运动及停止条件</title>
      <style>
        body {
          width: 800px;
          height: 2000px;
        }
        div {
          width: 100px;
          height: 100px;
          background-color: darkblue;
        }
        #div1 {
          position: absolute;
        }
        #div2 {       
          position: absolute;
          top: 110px;
        }
        #div3 {
          position: absolute;
          top: 220px;
        }
        #div4 {
          position: absolute;
          top: 330px;
          opacity: 0.3;
          filter: alpha(opacity=30);
        }
        #div5 {
          position: absolute;
          top: 440px;
          opacity: 0.3;
          filter: alpha(opacity=30);
        }
        #div6 {
          position: absolute;
          top: 550px;
          opacity: 0.3;
          filter: alpha(opacity=30);
        }
        #div7 {
          left: 400px;
          position: absolute;
        }
        #div8 {
          left: 510px;
          position: absolute;
          border: red solid 10px;
        }
        #div9 {
          left: 110px;
          top: 330px;
          position: absolute;
          color: seashell;
        }
        #div10 {
          left: 110px;
          top: 440px;
          position: absolute;
          border: rgb(255, 106, 0) solid 1px;
        }
        #div11 {
          left: 110px;
          top: 550px;
          position: absolute;
          opacity: 0.2;
          filter: alpha(opacity=20);
        }
      </style>
      <script>
        window.onload = function () {
          // 封装getElementById
          function get(id) {
            return document.getElementById(id);
          };
          // 封装获取计算后元素样式函数，返回小数
          function getStyle(obj, name) {
            if (obj.currentStyle) {
              return obj.currentStyle[name];
            } else {
              return getComputedStyle(obj, '') [name];
            }
          }
  
          //  多物体运动框架 offset 获取的是整个盒子的大小，无法通用
          // function startMove(obj, iTarget, name) {
          //   clearInterval(obj.timer);
          //   obj.timer = setInterval(move, 30);
          //   function move() {
          //     iTarget = parseInt(iTarget);
          //     var speed = (iTarget - obj['offset'+name])/7;  
          //     if (speed < 0) {
          //       speed = Math.floor(speed);
          //     } else {
          //       speed = Math.ceil(speed);
          //     }
          //     if (iTarget === obj['offset'+name]) {
          //       clearInterval(obj.timer);
          //     } else {
          //       obj.style[name.toLowerCase()] = obj['offset'+name] + speed + 'px'; 
          //     }
              
          //     console.log(iTarget,obj['offset'+name],speed)
          //   }
          // }
  
          // 任意值运动框架
          function startMove(obj, iTarget, name) {
            clearInterval(obj.timer);
            obj.timer = setInterval(move, 30);
            function move() {
              var objName = 0;
              if (name === 'opacity') {
                // 用 parseFloat 保留小数并去掉后面 px ，从左至右提取数字，遇到不是数字跳出
                // Math.round() 四舍五入取整 
                objName = Math.round(parseFloat(getStyle(obj, name))*100);
              } else {
                // 用 parseInt 去掉后面 px ，从左至右提取数字，遇到不是数字跳出
                objName = parseInt(getStyle(obj, name));
              }
              var speed = (iTarget - objName)/7;  
              if (speed < 0) {
                speed = Math.floor(speed);
              } else {
                speed = Math.ceil(speed);
              }
              if (iTarget === objName) {
                clearInterval(obj.timer);
              } else {
                if (name === 'opacity') {
                  obj.style[name] = (objName + speed)/100;
                  obj.style.filter = "alpha("+[name]+ "=" + (objName + speed) + ")"; 
                } else {
                  obj.style[name] = objName + speed + 'px'; 
                }
              }
              console.log('iTarget',iTarget,'objName',objName,'getStyle',getStyle(obj, name),speed)
            }
          }
  
          var oDiv1 = get('div1');
          var oDiv2 = get('div2');
          var oDiv3 = get('div3');
          var oDiv7 = get('div7');
          var oDiv8 = get('div8');
          var oDiv9 = get('div9');
          var oDiv10 = get('div10');
          var oDiv11 = get('div11');
          // 变宽
          oDiv1.onmouseover = function () {
            startMove(oDiv1, 400, 'width')
          }
          oDiv1.onmouseout = function () {
            startMove(oDiv1, 100, 'width')
          }
          oDiv2.onmouseover = function () {
            startMove(oDiv2, 400, 'width')
          }
          oDiv2.onmouseout = function () {
            startMove(oDiv2, 100, 'width')
          }
          oDiv3.onmouseover = function () {
            startMove(oDiv3, 400, 'width')
          }
          oDiv3.onmouseout = function () {
            startMove(oDiv3, 100, 'width')
          }
          // 变高
          oDiv7.onmouseover = function () {
            startMove(oDiv7, 400, 'height')
          }
          oDiv7.onmouseout = function () {
            startMove(oDiv7, 100, 'height')
          }
          oDiv8.onmouseover = function () {
            startMove(oDiv8, 400, 'height')
          }
          oDiv8.onmouseout = function () {
            startMove(oDiv8, 100, 'height')
          }
          oDiv9.onmouseover = function () {
            startMove(oDiv9, 40, 'fontSize')
          }
          oDiv9.onmouseout = function () {
            startMove(oDiv9, 12, 'fontSize')
          }
          oDiv10.onmouseover = function () {
            startMove(oDiv10, 100, 'borderWidth')
          }
          oDiv10.onmouseout = function () {
            startMove(oDiv10, 1, 'borderWidth')
          }
          oDiv11.onmouseover = function () {
            startMove(oDiv11, 100, 'opacity')
          }
          oDiv11.onmouseout = function () {
            startMove(oDiv11, 20, 'opacity')
          }
  
          // 淡入淡出
          function shallowMove(obj, iTarget) {
            clearInterval(obj.timer);
            obj.timer = setInterval(move, 30);
            function move() {
              iTarget = parseInt(iTarget);
              var speed = (iTarget - obj.alpha)/7;  
              if (speed < 0) {
                speed = Math.floor(speed);
              } else {
                speed = Math.ceil(speed);
              }
              if (iTarget === obj.alpha) {
                clearInterval(obj.timer);
              } else {
                obj.alpha += speed;
                obj.style.opacity = obj.alpha/100 ; 
                obj.style.filter = "alpha(opacity="+ obj.alpha + ")";
              }
            }
          }
          var oDiv4 = get('div4');
          var oDiv5 = get('div5');
          var oDiv6 = get('div6');
          var aDiv = document.getElementsByTagName('div');
          for (var i in aDiv) {
            aDiv[i].alpha = 30;
          }
  
          oDiv4.onmouseover = function () {
            shallowMove(oDiv4, 100)
          }
          oDiv4.onmouseout = function () {
            shallowMove(oDiv4, 30)
          }
          oDiv5.onmouseover = function () {
            shallowMove(oDiv5, 100)
          }
          oDiv5.onmouseout = function () {
            shallowMove(oDiv5, 30)
          }
          oDiv6.onmouseover = function () {
            shallowMove(oDiv6, 100)
          }
          oDiv6.onmouseout = function () {
            shallowMove(oDiv6, 30)
          }
        }
      </script>
    </head>
    <body>
      <div id="div1"></div>
      <div id="div2"></div>
      <div id="div3"></div>
      <div id="div4"></div>
      <div id="div5"></div>
      <div id="div6"></div>
      <div id="div7"></div>
      <div id="div8"></div>
      <div id="div9">123adsfzv</div>
      <div id="div10"></div>
      <div id="div11"></div>
    </body>
  </html>
  ```

  

### 仿 Flash 图片展示

- 效果思路

  - 两边的按钮：淡入淡出
  - 大图下拉：层级、高度变化
  - 下方的 `li` ：多物体淡入淡出
  - 下方的 `ul` ：位置计算

- 左右按钮

  - 淡入淡出
    - 鼠标移动到按钮上，按钮会消失
      - 层级问题
      - 按钮和遮罩上都得加上事件

- 下方 `li` 效果

  - 点击切换大图：选项卡
  - `li` 淡入淡出：移入移出
  - `ul` 移动：位置计算

- 大图片切换

  - 图片层级：`z-Index` 一直 +1
  - 图片下拉效果（运动框架）
    - 可以改为淡入淡出

- 加入自动播放

  - 和选项卡一样

- 代码：

  ```HTML
  <!DOCTYPE html>
  <html>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>仿Flash图片展示</title>
    <link rel="stylesheet" href="../reset.css">
    <script src="./lib/move.js"></script>
    <style>
      body {
        width: 100%;
        height: 100%;
        background-color: cornsilk;
      }
      li {
        float: left;
      }
      /* 居中 div */
      #div_center {
        margin: 20px auto;
        width: 640px;
        height: 450px;
      }
      /* 定位 div */
      #div_position {
        width: 640px;
        height: 450px;
        overflow: hidden;
        background-color: rgb(70, 70, 70);
        position: absolute;
      }
  
      /* 大图样式 */
      #div_pic {
        width: 640px;
        height: 360px;
        overflow: hidden;
        position: relative;
      }
      .ul_pic {
        position: absolute;
      }
      .li_pic {
        position: absolute;
      }
      .li_pic img{
        width: 640px;
        height: 360px;
      }
  
      /* 左右键样式 */
      .ul_btn {
        top: 0px;
        width: 640px;
        height: 360px;
        position: absolute;
        float: left;
      }
      .slider_btn_left, .slider_btn_right {
        width: 150px;
        height: 360px;
      }
      .slider_btn_right {
        float: right;
      }
      .slider_btn_left img{
        padding: 150px 105px 150px 10px ;
        position: relative;
        width: 35px;
        height: 60px;
        opacity: 0;
        filter: alpha(opacity=0);
        float: left;
      }
      .slider_btn_right img{
        padding: 150px 10px 150px 105px ;
        position: relative;
        width: 35px;
        height: 60px;
        opacity: 0;
        filter: alpha(opacity=0);
        float: right;
      }
  
      /* 小图样式 */
      #div_thumbnail {
        width: 620px;
        background-color: rgb(70, 70, 70);
        margin: 0 10px 0 5px;
        overflow: hidden;
        position: relative;
      }
      .ul_thumbnail {
        width: 640px;
        height: 90px;
      }
      .li_thumnali {
        opacity: 0.5;
        filter: alpha(opacity=50);
      }
      .li_thumnali img{
        padding: 10px 0px 10px 10px;
        width: 125px;
        height: 70px;
      }
  
      /* 图片文字栏 */
      .ul_txt {
        width: 640px;
        height: 20px;
        position: absolute;
        top: 340px;
      }
      .li4_background {
        width: 640px;
        height: 20px;
        top: 0px;
        background-color: rgb(0, 0, 0);
        opacity: 0.5;
        filter: alpha(opacity=50);
      }
      .li4_introduction {
        top: -17px;
        margin-left: 10px;
        width: 500px;
        position: relative;
        color: rgb(255, 255, 255);
        filter: alpha(opacity=80);
        opacity: 0.8;
      }
      .li4_sum_num {
        width: 120px;
        top: -17px;
        left: 10px;
        position: relative;
        color: rgb(255, 255, 255);
        filter: alpha(opacity=80);
        opacity: 0.8;
      }
    </style>
    <script>
    window.onload = function () {
      // 封装 getElementById
      function get(id) {
        return document.getElementById(id);
      }
      // 封装 getElementsByTagName
      function gets(tagName) {
        return document.getElementsByTagName(tagName)
      }
      // 封装 getByClassName 方法
      function getByClassName(oParent, sClass) {
        var aResult = new Array();
        var aEle = document.getElementsByTagName('*');
        for (var i in aEle) {
          if (aEle[i].className === sClass) {
            aResult.push(aEle[i]);
          }
        }
        return aResult;
      }
  
      // 左右箭头切换图片
      // 获取箭头所在 ul
      var oDiv_position = get('div_position');
      var ul_btn = getByClassName(oDiv_position[1], 'ul_btn')[0];
      // 获取 li
      var li_btn_left = getByClassName(ul_btn, 'slider_btn_left')[0];
      var li_btn_right = getByClassName(ul_btn, 'slider_btn_right')[0];
      // 获取 img
      var left_icon = getByClassName(li_btn_left, 'left_icon')[0];
      var right_icon = getByClassName(li_btn_right, 'right_icon')[0];
      // 鼠标移入/移出 显示/隐藏
      li_btn_left.onmouseover = left_icon.onmouseover = function () {
        startMove(left_icon, 'opacity', 30);
      }
      li_btn_left.onmouseout = left_icon.onmouseout = function () {
        startMove(left_icon, 'opacity', 0);
      }
      li_btn_right.onmouseover = right_icon.onmouseover = function () {
        startMove(right_icon, 'opacity', 30);
      }
      li_btn_right.onmouseout = right_icon.onmouseout = function () {
        startMove(right_icon, 'opacity', 0);
      }
  
      // 获取大图 class li
      var ul_pic = getByClassName(oDiv_position[1], 'ul_pic')[0];
      var oli_pic = getByClassName(ul_pic, 'li_pic');
      var oImg = gets('img');
  
      // 获取缩略图 class li
      var div_thumbnail = get('div_thumbnail');
      var ul_thumbnail = getByClassName(div_thumbnail, 'ul_thumbnail')[0];
      var oli_thumnali = getByClassName(ul_thumbnail, 'li_thumnali');
      var pic_index = 0;
      var index = 0;
      var z = 1;
      // 缩略图鼠标移入高亮，移出恢复,并注册index 绑定大图
      for (var i in oli_thumnali) {
        oli_thumnali[i].index = i;
        oli_pic[i].index = i;
        // 鼠标移入
        oli_thumnali[i].onmouseover = function () {
          startMove(this, 'opacity', 100);
        }
        // 鼠标移出 如果是当前显示则不执行
        oli_thumnali[i].onmouseout= function () {
          if (oli_pic[this.index].style.zIndex != z) {
            startMove(this, 'opacity', 50);
          }
        }
        // 点击小图片显示大图
        oli_thumnali[i].onclick = function () {
            pic_index = parseInt(this.index);
            tab();
        }
        // 让第一个图片显示
        if (oli_pic[i].style.zIndex == z) {
          startMove(oli_thumnali[i], 'opacity', 100);
        }
      }
      
      function tab() {
        // 判断是否是当前显示图片
        if (oli_pic[pic_index].style.zIndex != z) {
          // 全部图片半透明
          for (var j in oli_thumnali) {
            startMove(oli_thumnali[j], 'opacity', 50);
          }
          // 显示当前点击图片
          startMove(oli_thumnali[pic_index], 'opacity', 100);
          // 显示当前index对应大图
          oli_pic[pic_index].style.zIndex = ++z;
          // 显示文字的按钮
          ul_btn.style.zIndex = ul_txt.style.zIndex = z;
          // 隐藏大图 再用动画显示
          oImg[pic_index].style.height = 0;
          startMove(oImg[pic_index],'height', 360);
          // 显示当前图片介绍
          introduction.innerHTML = arr[pic_index];
          sum_num.innerHTML = parseInt(pic_index) + 1 + '/' + oli_thumnali.length;
        }
      }
      // 鼠标点击按钮 上一张/下一张
      left_icon.onclick = function () {
        if (0 <= pic_index - 1) {
          // console.log('1~length-1:',pic_index)
          pic_index--;
          if (0 < pic_index && pic_index <= oli_thumnali.length - 1) {
            // 1~length-1
            startMove(ul_thumbnail, 'marginLeft', -(pic_index-1)*li_thumbnali_width);
            tab(); 
          } else {
            // 0
            tab();
          }
        } else {
          // 循环播放
          // console.log('0:',pic_index)
          pic_index = oli_thumnali.length - 1;
          startMove(ul_thumbnail, 'marginLeft', -(pic_index-2)*li_thumbnali_width);
          tab();
        }
      }
      right_icon.onclick = function () {
        if (pic_index + 1 < oli_thumnali.length) {
          pic_index++;
          if (2 < pic_index && pic_index <= oli_thumnali.length - 1) {
            startMove(ul_thumbnail, 'marginLeft', -(pic_index-2)*li_thumbnali_width);
            tab(); 
          } else {
            tab();
          }
        } else {
          pic_index = 0;
          startMove(ul_thumbnail, 'marginLeft', pic_index*li_thumbnali_width);
          tab();
        }
      }
  
      // 自动播放
      oDiv_position.timer = setInterval(right_icon.onclick, 2000);
      oDiv_position.onmouseover = function () {
        clearInterval(oDiv_position.timer);
      }
      oDiv_position.onmouseout = function () {
        clearInterval(oDiv_position.timer);
        oDiv_position.timer = setInterval(right_icon.onclick, 2000);
      }
      // 设置 ul_thumbnail 的宽度
      var li_thumbnali_width = oli_thumnali[0].offsetWidth;
      ul_thumbnail.style.width = oli_thumnali.length * oli_thumnali[0].offsetWidth + 'px';
  
      // 设置文字说明
      var arr = new Array('雪山','峡谷','悬崖','岩壁','海岸','雪覆盖的悬崖','雪山','峡谷','悬崖','岩壁','海岸','雪覆盖的悬崖');
      // 获取文字说明 li
      var ul_txt = getByClassName(oDiv_position[1], 'ul_txt')[0];
      var introduction = getByClassName(ul_txt, 'introduction')[0];
      var sum_num = getByClassName(ul_txt, 'sum_num')[0];
      sum_num.innerHTML = pic_index + 1 + '/' + oli_thumnali.length;
      introduction.innerHTML = arr[pic_index];
  
  
    }
    </script>
    <body>
      <div id="div_center">
        <div id="div_position">
          <div id="div_pic">
            <ul class="ul_pic">
              <li class="li_pic" style="z-index:1"><img src="./images/album/1.jpeg" alt=""></li>
              <li class="li_pic"><img src="./images/album/2.jpeg" alt=""></li>
              <li class="li_pic"><img src="./images/album/3.jpeg" alt=""></li>
              <li class="li_pic"><img src="./images/album/4.jpeg" alt=""></li>
              <li class="li_pic"><img src="./images/album/5.jpeg" alt=""></li>
              <li class="li_pic"><img src="./images/album/6.jpeg" alt=""></li>
              <li class="li_pic"><img src="./images/album/2.jpeg" alt=""></li>
              <li class="li_pic"><img src="./images/album/5.jpeg" alt=""></li>
            </ul>
          </div>
          <ul class="ul_btn" style="z-index:1">
            <li class="slider_btn_left"><img class="left_icon" src="./images/images/slider_btn_icon_left.png" alt=""></li>
            <li class="slider_btn_right"><img class="right_icon" src="./images/images/slider_btn_icon_right.png" alt=""></li>
          </ul>
          <ul class="ul_txt" style="z-index:1">
            <li class="li4_background"></li>
            <li class="li4_introduction">图片说明：<span class="introduction">introduction</span></li>
            <li class="li4_sum_num">图片位置：<span class="sum_num"></span></li>
          </ul>
          <div id="div_thumbnail">
            <ul class="ul_thumbnail">
              <li class="li_thumnali"><img src="./images/album/1.jpeg" alt=""></li>
              <li class="li_thumnali"><img src="./images/album/2.jpeg" alt=""></li>
              <li class="li_thumnali"><img src="./images/album/3.jpeg" alt=""></li>
              <li class="li_thumnali"><img src="./images/album/4.jpeg" alt=""></li>
              <li class="li_thumnali"><img src="./images/album/5.jpeg" alt=""></li>
              <li class="li_thumnali"><img src="./images/album/6.jpeg" alt=""></li>
              <li class="li_thumnali"><img src="./images/album/2.jpeg" alt=""></li>
              <li class="li_thumnali"><img src="./images/album/5.jpeg" alt=""></li>
            </ul>
          </div>
        </div>
      </div>
    </body>
  </html>
  ```

- 笔记：不让子元素继承父元素的 `opacity ` 属性

  - 使用 `rgba(R,G,B,opacity)`  间接的设定 `opacity` 的值，这个属性不会向下继承
  - 或者把 `opacity` 属性放到同级元素实现

  

## JS 运动中级

### 链式运动框架

- 回调函数
  - 运动停止时，执行函数
  - 运动停止时，开始下一次运动
  - 例子：土豆网右下角菜单

### 完美运动框架

- 多个值同时变化
  - `setStyle` 同时设置多个属性
    - 参数传递：
      - `JSON` 的使用 
      - `for in` 遍历属性
- 运用到运动框架
- 检测运动停止
  - 标志变量
- 例子：伸缩同时淡入淡出的菜单

### 运动框架总结

- 运动框架演变过程
  - `startMove(iTarget)` ：运动框架
  - `startMove(obj, iTarget)` ：多物体
  - `startMove(obj, attr, iTarget)` ：任意值
  - `startMove(obj, attr, iTarget, fn)` ：链式运动
  - `startMove(obj, json)` ：多值运动
  - `startMove(obj, json, fn)` ：完美运动框架

### 运动框架应用

- 运动框架应用
  - 例子：幻灯片
- 例子：新浪微博
  - 链式运动

## JS事件基础

## JS 事件中级

## JS 事件高级应用

## Ajax 基础

## Ajax 中级

## JS 面对对象基础

## JS 面对对象实例

## JS 面对对象高级

## BOM 应用

## COOKIE 基础与应用

##  JS 中的正则表达式

