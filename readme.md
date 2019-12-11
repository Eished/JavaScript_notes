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

  - 样式：div 的 display / none
  - 事件：onmouseover / onmouseout
  - 动手编写效果

- 特效基础

  - 事件驱动：onmouseover
  - 元素属性操作：obj.style.[...]
  - 特效实现原理概括：响应式用户操作，对页面元素样式修改

- 兼容性问题 

  ```js
  // div2.style.display='block'; // 部分浏览器不兼容
  document.getElementById('div2').style.display='block'; // 所有浏览器兼容
  ```

- 函数

  - 制作更复杂的效果
  - 直接在事件内写代码会很乱
    - 引入 function() 函数的基本形式
    - 把 JS 标签里放入到函数里，类似于 css 里的 class
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
        if (document.getElementById('link1').href == 'file:///E:/web/node/JStest/JStest/JavaScript/css/grey.css') {
          document.getElementById('link1').href='css/black.css';
          document.getElementById('b1').value='开灯';
          console.log('black')
        } else {
          document.getElementById('link1').href='css/grey.css';
          document.getElementById('b1').value='关灯';
          console.log('bl2:', document.getElementById('link1').href)
        }
      }
  
      function changeText() {
        document.getElementById('text1').value='456';
        document.getElementById('text1').title='文字1';
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
        div.className='div4';
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
      <!-- HTML 里面怎么写，JS 里面就怎么写 -->
      <input id="text1" type="text" value="123">
      <input type="button" value="改文字" onclick="changeText()">
      <br>
      <!-- a 链接的使用 -->
      <a href="javascript:;">javascript:;</a>
  
      <!-- className 的使用 -->
      <div id="div4" style="width: 100px; height: 50px; background: grey;">4</div>
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

    - `parseInt() 、parseFloat() `：从左至右提取数字，遇到不是数字跳出
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

- JSON 和 for in

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
        console.log('b:',json.b,'c:',json['c'], json.length);
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

### 函数传参

- 可变函数（不定参数）：`arguments`

  - **参数数组**

- 例子：求和

  - 求所有参数的和

- 例子2：CSS 函数

  - 判断 `arguments.length`
  - 给参数取名，增强可读性

- 取非行间样式（不能用来设置）：

  - `obj.currentStyle[attr]` 只兼容 IE

  - `getComputedStyle(obj, false)[attr]`

  - ```js
    // 解决兼容问题
    if (oDiv.currentStyle)
    {
    	// ie
    	alert(oDiv.currentStyle.width);
    } else {
    	// ff
    	alert(getComputedStyle(oDiv, false).width);
    }
    ```

  - 复合样式：`background / border ` 要用具体样式名 `backgroundColor ` 等

  - 单一样式：` width / height / position`

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

  - `数组.sort([比较函数])`，排序一个数组

    - 排序一个字符串数组

    - 排序一个数字数组

    - ```js
      // 按大小排序 比较函数
      arr.sort(function (n1, n2) {
      	return n1 - n2
      })
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

## 定时器的使用

### 定时器的作用

- 开启定时器

  - `setInterval(函数, 间隔时间)` 间隔型
  - `setTimeout(函数, 延时时间)`   延时型
  - 两种定时器的区别

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

  - `Date 对象`
  - `getHours / getMinutes / getSeconds`

- 显示系统时间

  - 字符串连接
  - 空位补零

- 设置图片路径

  - `str[i]` 不兼容 ie7

  - `charAt(i) 方法` 兼容各种浏览器

- 代码：

  ```HTML
  
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

- 代码：

  ```HTML
  
  ```

  

### 无缝滚动

- 效果演示

- 物体运动基础

  - 让 `div` 移动起来
  - `offsetLeft` 的作用
  - 用定时器让物体连续移动

- 改变滚动的方向

  - 修改 `speed`
  - 修改判定条件

- 鼠标移入暂停

  - 移入关闭定时器
  - 移出重新开启定时器

- 代码：

  ```HTML
  
  ```

  

## DOM 基础

### DOM 基础

- 什么是 DOM
- 浏览器支持情况

### DOM 节点

- DOM 节点
  - 获取子节点
    - `childNodes`：不兼容高版本，用`nodeType` 兼容
      - 获取文本节点( nodeType == 3) 和元素节点( nodeType == 1)
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

## DOM操作应用高级

## JS 运动基础

## JS 运动应用

## JS 运动中级

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

