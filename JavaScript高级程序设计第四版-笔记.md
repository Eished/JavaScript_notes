第 1 章，介绍 JavaScript 的起源：从哪里来，如何发展，以及现今的状况。这一章会谈到 JavaScript
与 ECMAScript 的关系、 DOM、 BOM，以及 Ecma 和 W3C 相关的标准。
第 2 章，了解 JavaScript 如何与 HTML 结合来创建动态网页，主要介绍在网页中嵌入 JavaScript 的
不同方式，还有 JavaScript 的内容类型及其与`<script>`元素的关系。
第 3 章，介绍语言的基本概念，包括语法和流控制语句；解释 JavaScript 与其他类 C 语言在语法上
的异同点。在讨论内置操作符时也会谈到强制类型转换。此外还将介绍所有的原始类型，包括 Symbol。
第 4 章，探索 JavaScript 松散类型下的变量处理。这一章将涉及原始类型与引用类型的不同，以及
与变量有关的执行上下文。此外，这一章也会讨论 JavaScript 中的垃圾回收，涉及在变量超出作用域时如何回收内存。
第 5 章，讨论 JavaScript 所有内置的引用类型，如 Date、 Regexp、原始类型及其包装类型。每种引用类型既有理论上的讲解，也有相关浏览器实现的剖析。
第 6 章，继续讨论内置引用类型，包括 Object、 Array、 Map、 WeakMap、 Set 和 WeakSet 等。
第 7 章，介绍 ECMAScript 新版中引入的两个基本概念：迭代器和生成器，并分别讨论它们最基本
的行为和在当前语言环境下的应用。
第 8 章，解释如何在 JavaScript 中使用类和面向对象编程。首先会深入讨论 JavaScript 的 Object 类
型，进而探讨原型式继承，接下来全面介绍 ES6 类及其与原型式继承的紧密关系。
第 9 章，介绍两个紧密相关的概念： Proxy（代理）和 Reflect（反射） API。代理和反射用于拦
截和修改这门语言的基本操作。
第 10 章，探索 JavaScript 最强大的一个特性：函数表达式，主要涉及闭包、 this 对象、模块模式、
创建私有对象成员、箭头函数、默认参数和扩展操作符。
第 11 章，介绍两个紧密相关的异步编程构造： Promise 类型和 async/await。这一章讨论 JavaScript
的异步编程范式，进而介绍期约（ promise）与异步函数的关系。
第 12 章，介绍 BOM，即浏览器对象模型，跟与浏览器本身交互的 API 相关。所有 BOM 对象都会
涉及，包括 window、 document、 location、 navigator 和 screen 等。
第 13 章，解释检测客户端机器及其能力的不同手段，包括能力检测和用户代理字符串检测。这一
章讨论每种手段的优缺点，以及适用的场景。
第 14 章，介绍 DOM，即文档对象模型，主要是 DOM Level 1 定义的 API。这一章将简单讨论 XML
及其与 DOM 的关系，进而全面探索 DOM 以及如何利用它操作网页。
第 15 章，解释其他 DOM API，包括浏览器本身对 DOM 的扩展，主要涉及 Selectors API、 Element
Traversal API 和 HTML5 扩展。
第 16 章，在之前两章的基础上，解释 DOM Level 2 和 Level 3 对 DOM 的扩展，包括新增的属性、
方法和对象。这一章还会介绍 DOM4 的相关内容，比如 Mutation Observer。
第 17 章，解释事件在 JavaScript 中的本质，以及事件的起源及其在 DOM 中的运行方式。
第 18 章，围绕`<canvas>`标签讨论如何创建动态图形，包括 2D 和 3D 上下文（ WebGL）等动画和
游戏开发所需的基础。这一章还会讨论 WebGL1 和 WebGL2。
第 19 章，探索使用 JavaScript 增强表单交互及突破浏览器限制，主要讨论文本框、选择框等表单元
素及数据验证和操作。
第 20 章，介绍各种 JavaScript API，包括 Atomics、 Encoding、 File、 Blob、 Notifications、 Streams、Timing、 Web Components 和 Web Cryptography。
第 21 章，讨论浏览器如何处理 JavaScript 代码中的错误及几种错误处理方式。这一章同时介绍了每
种浏览器的调试工具和技术，包括简化调试过程的建议。  

第 22 章，介绍通过 JavaScript 读取和操作 XML 数据的特性，解释了不同浏览器支持特性和对象的
差异，提供了简化跨浏览器编码的建议。这一章也讨论了使用 XSLT 在客户端转换 XML 数据。
第 23 章，介绍作为 XML 替代的 JSON 数据格式，还讨论了浏览器原生解析和序列化 JSON，以及
使用 JSON 时要注意的安全问题。
第 24 章，探讨浏览器请求数据和资源的常用方式，包括早期的 XMLHttpRequest 和现代的 Fetch API。
第 25 章，讨论应用程序离线时在客户端机器上存储数据的各种技术。先从 cookie 谈起，然后讨论
Web Storage 和 IndexedDB。
第 26 章，介绍模块模式在编码中的应用，进而讨论 ES6 模块之前的模块加载方式，包括 CommonJS、AMD 和 UMD。最后介绍新的 ES6 模块及其正确用法。
第 27 章，深入介绍专用工作者线程、共享工作者线程和服务工作者线程。其中包括工作者线程在
操作系统和浏览器层面的实现，以及使用各种工作者线程的最佳策略。
第 28 章，探讨在企业级开发中进行 JavaScript 编码的最佳实践。其中提到了提升代码可维护性的编
码惯例，包括编码技巧、格式化及通用编码建议。深入讨论应用性能和提升速度的技术。最后介绍与上线部署相关的话题，包括项目构建流程。  



第一章随便看看，了解历史

第二章简单看看，script 里的 defer 和 async 属性了解下就好了，noscript 不用看 第三章位运算、label、with 不用看 第四章概念性质的了解就可以，基本类型与引用类型需要掌握

第五章正则不用看

第六章都看看，重点内容

第七章也是重点内容，都需要看

第八章了解就可以了，知道 bom 是什么，用的时候能查到 第九章随便看看，有个印象就行

10，11，12 了解 DOM 的类型，掌握操作 DOM，包括选择、style、文本等

13 事件中和 IE 有关的部分不用看

14 表单内容需要掌握，可以和 jquery 的 api 结合看，简化理解

15 可以跳过，有兴趣的自己看看就好了

16 了解就行了，postMessage 可能会出现在跨域问题中

17 18 19 跳过就可以了

20 21 是 JSON 和 AJAX，不过大部分应该掌握了，新加入的东西看看好了，用的时候 比如 formData 在上传文件的时候需要用上，progress 用的比较少。 跨域知识比较旧， 但是面试的套路就是要掌握这些，所以还是需要看。

22 高级技巧感兴趣就看看，因为要求相对较高，不愿意看也没有关系

23 看看 localStorage 和 cookie 就可以，其他的实际用得不多

24 看看还是有必要的，算是合格的编程风格

25 使用比较多的是 requestAnimationFrame(主要是改良动画) 和 File API，其他的 使用较少，用的时候再查就可以了

附录部分里的严格模式不用看，其他了解下就可以



# 第 1章　什么是JavaScript 1

1.1　简短的历史回顾 

## 1.2　JavaScript 实现 

- 完整的 JavaScript 实现包含以下几个部分（见图 1-1）：

  - 核心（ ECMAScript）
  - 文档对象模型（ DOM）
  - 浏览器对象模型（ BOM）  

  ![image-20210605161656189](JavaScript高级程序设计第四版-笔记.assets/image-20210605161656189.png)

### 1.2.1 ECMAScript

1. ECMAScript 版本
   1. ES6 正式支持了类、模块、迭代器、生成器、箭头函数、期约、反射、代理和众多新的数据类型。  
   2. ES7  包含少量语法层面的增强，Array.prototype.includes 和指数操作符。  
   3. ES8  主要增加了异步函数（ `async/await`）、 `SharedArrayBuffer` 及 `Atomics API`，以及`Object.values()/Object.entries()/Object.getOwnPropertyDescriptors()`和字符串填充方法，另外明确支持对象字面量最后的逗号。
   4. ES9   异步迭代、剩余和扩展属性、一组新的正则表达式特性、 Promise finally()，以及模板字面量修订。   
   5. ES10  增加了 `Array.prototype.flat()/flatMap()、String.prototype.trimStart()/trimEnd()、 Object.fromEntries()`方
      法，以及 `Symbol.prototype.description` 属性，明确定义了`Function.prototype.toString()`的返回值并固定了 `Array.prototype.sort()`的顺序。另外，这次修订解决了与 JSON 字符串兼容的问题，并定义了 catch 子句的可选绑定。  
2. ECMAScript 符合性是什么意思 
3. 浏览器对 ECMAScript 的支持  

### 1.2.2 DOM 

- **文档对象模型（ DOM， Document Object Model）**是一个应用编程接口（ API），用于在 HTML 中使用扩展的 XML。 DOM 将整个页面抽象为一组分层节点。   
  - DOM 通过创建表示文档的树，让开发者可以随心所欲地控制网页的内容和结构。使用 DOM API，可以轻松地删除、添加、替换、修改节点。 

1. 为什么 DOM 是必需的  
2. DOM 级别  
   - 这个规范由两个模块组成： DOM Core 和 DOM  HTML。前者提供了一种映射 XML 文档，从而方便访问和操作文档任意部分的方式；后者扩展了前者，并增加了特定于 HTML 的对象和方法。  
   - DOM Living Standard 其快照称为DOM4 。
3. 其他 DOM  
   1. 可伸缩矢量图（ SVG， Scalable Vector Graphics）
   2. 数学标记语言（ MathML， Mathematical Markup Language）
   3. 同步多媒体集成语言（ SMIL， Synchronized Multimedia Integration Language）
4. Web 浏览器对 DOM 的支持情况  

### 1.2.3 BOM

1. **浏览器对象模型（ BOM） API**  

   - 用于支持访问和操作浏览器的窗口。使用 BOM，开发者可以操控浏览器显示页面之外的部分。而 BOM 真正独一无二的地方，当然也是问题最多的地方，就是它是唯一一个没有相关标准的 JavaScript 实现。 
   - HTML5 改变了这个局面，这个版本的 HTML 以正式规范的形式涵盖了尽可能多的 BOM 特性。

2. BOM 主要针对**浏览器窗口和子窗口（ frame）**，不过人们通常会把任何特定于浏览器的扩展都归在 BOM 的范畴内。  比如，下面就是这样一些扩展：  

   1. 弹出新浏览器窗口的能力；
   2. 移动、缩放和关闭浏览器窗口的能力；
   3. navigator 对象，提供关于浏览器的详尽信息；
   4. location 对象，提供浏览器加载页面的详尽信息；  
   5. screen 对象，提供关于用户屏幕分辨率的详尽信息；
   6. performance 对象，提供浏览器内存占用、导航行为和时间统计的详尽信息；
   7. 对 cookie 的支持；
   8. 其他自定义对象，如 XMLHttpRequest 和 IE 的 ActiveXObject。  

   浏览器实现的都是自己的 BOM。有一些所谓的事实标准，比如对于 window 对象和 navigator 对象，每个浏览器都会给它们定义自己的属性和方法。  

1.3　JavaScript 版本 

## 1.4　小结 10

- JavaScript 是一门用来与网页交互的脚本语言，包含以下三个组成部分。
  1. ECMAScript：由 ECMA-262 定义并提供核心功能。
  2. 文档对象模型（ DOM）：提供与网页内容交互的方法和接口。
  3. 浏览器对象模型（ BOM）：提供与浏览器交互的方法和接口。

# 第 2章　HTML中的JavaScript 11

本章内容

- 使用`<script>`元素
- 行内脚本与外部脚本的比较
- 文档模式对 JavaScript 有什么影响
- 确保 JavaScript 不可用时的用户体验  

## 2.1　script 元素 11

- `<script>`元素有下列 8 个属性。
  1. **async**：可选。表示应该立即开始下载脚本，但不能阻止其他页面动作，比如下载资源或等待其他脚本加载。只对外部脚本文件有效。
  2. **charset**：可选。使用 src 属性指定的代码字符集。这个属性很少使用，因为大多数浏览器不在乎它的值。
  3. **crossorigin**：可选。配置相关请求的 CORS（跨源资源共享）设置。默认不使用 CORS。 crossorigin="anonymous"配置文件请求不必设置凭据标志。 crossorigin="use-credentials"设置凭据标志，意味着出站请求会包含凭据。
  4. **defer**：可选。 表示脚本可以延迟到文档完全被解析和显示之后再执行。 只对外部脚本文件有效。在 IE7 及更早的版本中，对行内脚本也可以指定这个属性。
  5. **integrity**：可选。允许比对接收到的资源和指定的加密签名以验证子资源完整性（ SRI，Subresource Integrity）。如果接收到的资源的签名与这个属性指定的签名不匹配，则页面会报错，脚本不会执行。这个属性可以用于确保内容分发网络（ CDN， Content Delivery Network）不会提供恶意内容。
  6. language：废弃。
  7. **src**：可选。表示包含要执行的代码的外部文件。
  8. **type**：可选。代替 language，表示代码块中**脚本语言的内容类型**（也称 **MIME 类型**）。按照惯
     例，这个值始终都是"text/javascript"，尽管"text/javascript"和"text/ecmascript"
     都已经废弃了。 JavaScript 文件的 MIME 类型通常是 "application/x-javascript"，不过给
     type 属性这个值 有 可 能 导 致 脚 本 被 忽 略 。 在 非 IE 的 浏 览 器 中 有 效 的 其 他 值 还 有
     "application/javascript"和"application/ecmascript"。如果这个值是 **module**，则代
     码会被当成 ES6 模块，而且只有这时候代码中才能出现 import 和 export 关键字。  

### 2.1.1 标签位置

1. 过去，所有`<script>`元素都被放在页面的`<head>`标签内

   - 意味着必须把所有 JavaScript 代码都下载、解析和解释完成后，才能开始渲染页面  

   ```html
   <!DOCTYPE html>
   <html>
   <head>
   <title>Example HTML Page</title>
   <script src="example1.js"></script>
   <script src="example2.js"></script>
   </head>
   <body>
   <!-- 这里是页面内容 -->
   </body>
   </html>
   ```

   

2. 现代 Web 应用程序通常将所有 JavaScript 引用放在`<body>`元素中的页面内容后面：

   - 页面会在处理 JavaScript 代码之前完全渲染页面。  

   ```html
   <!DOCTYPE html>
   <html>
   <head>
   <title>Example HTML Page</title>
   </head>
   <body>
   <!-- 这里是页面内容 -->
   <script src="example1.js"></script>
   <script src="example2.js"></script>
   </body>
   </html>
   ```

   

### 2.1.2 推迟执行脚本

```html
<!DOCTYPE html>
<html>
<head>
<title>Example HTML Page</title>
<script defer src="example1.js"></script>
<script defer src="example2.js"></script>
</head>
<body>
<!-- 这里是页面内容 -->
</body>
</html>
```

- 虽然这个例子中的`<script>`元素包含在页面的`<head>`中，但它们会在浏览器解析到结束的
  `</html>`标签后才会执行。 HTML5 规范要求脚本应该按照它们出现的顺序执行，因此第一个推迟的脚本会在第二个推迟的脚本之前执行，而且两者都会在 DOMContentLoaded 事件之前执行（关于事件，请参考第 17 章）。不过在实际当中，推迟执行的脚本不一定总会按顺序执行或者在 DOMContentLoaded 事件之前执行，因此最好只包含一个这样的脚本。 
  - defer 属性只对外部脚本文件才有效。   

### 2.1.3 异步执行脚本

```html
<!DOCTYPE html>
<html>
<head>
<title>Example HTML Page</title>
<script async src="example1.js"></script>
<script async src="example2.js"></script>
</head>
<body>
<!-- 这里是页面内容 -->
</body>
</html>
```

- async 属性的目的是告诉浏览器，  不必等脚本下载和执行完后再加载页面，同样也不必等到该异步脚本下载和执行后再加载其他脚本。正因为如此，异步脚本不应该在加载期间修改 DOM。 
- 异步脚本保证会在页面的 load 事件前执行，但可能会在 DOMContentLoaded（参见第 17 章）之
  前或之后。    

### 2.1.4 动态加载脚本

```javascript
let script = document.createElement('script');
script.src = 'gibberish.js';
document.head.appendChild(script);
```

- 默认情况下，以这种方式创建的`<script>`元素是以异步方式加载的，相当于添加了 async 属性。不过这样做可能会有问题，因为所有浏览器都支持 createElement()方法，但不是所有浏览器都支持 async 属性。因此，如果要统一动态脚本的加载行为，可以明确将其设置为同步加载。

  ```javascript
  script.async = false;
  ```

- 这会严重影响它们在资源获取队列中的优先级。根据应用程序的工作方式以及怎么使用，这种方式可能会严重影响性能。要想让预加载器知道这些动态请求文件的存在，可以在文档头部显式声明它们：

  ```html
  <link rel="preload" href="gibberish.js">
  ```

   

### 2.1.5 XHTML 中的变化

- **可扩展超文本标记语言（ XHTML， Extensible HyperText Markup Language）**是将 HTML 作为 XML的应用重新包装的结果。与 HTML 不同，在 XHTML 中使用 JavaScript 必须指定 **type** 属性且值为 text/javascript， HTML 中则可以没有这个属性。 XHTML 虽然已经退出历史舞台，但实践中偶尔
  可能也会遇到遗留代码，为此本节稍作介绍。  

- 在 HTML 中，解析`<script>`元素会应用特殊规则。 XHTML 中则没有这些规则。这意味着 a < b
  语句中的小于号（ <）会被解释成一个标签的开始，并且由于作为标签开始的小于号后面不能有空格，这会导致语法错误。  解决方案：

  - 把所有代码都包含到一个 **CDATA** 块中。在 XHTML（及 XML）中， CDATA 块表示文档中**可以包含任意文本**的区块，其内容不作为标签来解析，因此可以在其中包含任意字符，包括小于号，并且不会引发语法错误。使用 CDATA 的格式如下：  

    ```xml
    <script type="text/javascript"><![CDATA[
    function compare(a, b) {
    if (a < b) {
    console.log("A is less than B");
    } else if (a > b) {
    console.log("A is greater than B");
    } else {
    console.log("A is equal to B");
    }
    }
    ]]></script>
    ```

  - 在兼容 XHTML 的浏览器中，这样能解决问题。但在不支持 CDATA 块的**非 XHTML 兼容浏览器**中
    则不行。为此， CDATA 标记必须使用 JavaScript 注释来抵消：  

    ```XML
    <script type="text/javascript">
    //<![CDATA[
    function compare(a, b) {
    if (a < b) {
    console.log("A is less than B");
    } else if (a > b) {
    console.log("A is greater than B");
    } else {
    console.log("A is equal to B");
    }
    }
    //]]>
    </script>
    ```

    

### 2.1.6 废弃的语法  

- type 属性使用一个 MIME 类型字符串来标识`<script>`的内容，但 MIME 类型并没有跨浏览器标准化。  
  - 因此，除非你使用 XHTML 或`<script>`标签要求或包含非 JavaScript 代码，最佳做法是不指
    定 type 属性。  

## 2.2　行内代码与外部文件 18

- 推荐使用外部文件的理由如下。
  1. **可维护性**。 JavaScript 代码如果分散到很多 HTML 页面，会导致维护困难。而用一个目录保存
     所有 JavaScript 文件，则更容易维护，这样开发者就可以独立于使用它们的 HTML 页面来编辑
     代码。
  2. **缓存**。浏览器会根据特定的设置缓存所有外部链接的 JavaScript 文件，这意味着如果两个页面都
     用到同一个文件，则该文件只需下载一次。这最终意味着页面加载更快。
  3. **适应未来**。 通过把 JavaScript 放到外部文件中，就不必考虑用 XHTML 或前面提到的注释黑科技。包含外部 JavaScript 文件的语法在 HTML 和 XHTML 中是一样的。  
- 在配置浏览器请求外部文件时，要重点考虑的一点是它们会占用多少带宽。在 SPDY/HTTP2 中，
  **预请求**的消耗已显著降低，以轻量、独立 JavaScript 组件形式向客户端送达脚本更具优势。
  - 在初次请求时，如果浏览器支持 SPDY/HTTP2，就可以从同一个地方取得一批文件，并将它们逐个放到浏览器缓存中。从浏览器角度看，通过 SPDY/HTTP2 获取所有这些独立的资源与获取一个大JavaScript 文件的延迟差不多。
  - 在第二个页面请求时，由于你已经把应用程序切割成了轻量可缓存的文件，第二个页面也依赖的某些组件此时已经存在于浏览器缓存中了。  
  - 

## 2.3　文档模式 18

- `doctype`   最初的文档模式有两种： 混杂模式（ quirks mode）和标准模式（ standards mode）。

  - 第三种文档模式： 准标准模式（ almost standards mode）。    
    - 主要区别在于如何对待图片元素周围的空白（在表格中使用图片时最明显）。  
  - 标准模式通过下列几种文档类型声明开启：  

  ```html
  <!-- HTML 4.01 Strict -->
  <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
  "http://www.w3.org/TR/html4/strict.dtd">
  
  <!-- XHTML 1.0 Strict -->
  <!DOCTYPE html PUBLIC
  "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
  
  <!-- HTML5 -->
  <!DOCTYPE html>
  ```

  - 准标准模式通过过渡性文档类型（ Transitional）和框架集文档类型（ Frameset）来触发：  

  ```html
  <!-- HTML 4.01 Transitional -->
  <!DOCTYPE HTML PUBLIC
  "-//W3C//DTD HTML 4.01 Transitional//EN"
  "http://www.w3.org/TR/html4/loose.dtd">
  
  <!-- HTML 4.01 Frameset -->
  <!DOCTYPE HTML PUBLIC
  "-//W3C//DTD HTML 4.01 Frameset//EN"
  "http://www.w3.org/TR/html4/frameset.dtd">
  
  <!-- XHTML 1.0 Transitional -->
  <!DOCTYPE html PUBLIC
  "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  
  <!-- XHTML 1.0 Frameset -->
  <!DOCTYPE html PUBLIC
  "-//W3C//DTD XHTML 1.0 Frameset//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
  ```

- 准标准模式与标准模式非常接近，很少需要区分。  本书后面所说的标准模式，指的就是除混杂模式以外的模式。  

## 2.4　noscript 元素 19

- `<noscript>` 元素出现，被用于给不支持 JavaScript 的浏览器提供替代内容。虽然如今的浏览器已经 100%支持JavaScript，但对于禁用 JavaScript 的浏览器来说，这个元素仍然有它的用处。
  - `<noscript>`元素可以包含任何可以出现在`<body>`中的 HTML 元素， `<script>`除外。在下列两种情况下，浏览器将显示包含在`<noscript>`中的内容：
    - 浏览器不支持脚本；
    - 浏览器对脚本的支持被关闭。
  - 任何一个条件被满足，包含在`<noscript>`中的内容就会被渲染。否则，浏览器不会渲染`<noscript>`中的内容。  

```html
<!DOCTYPE html>
<html>
<head>
<title>Example HTML Page</title>
<script defer="defer" src="example1.js"></script>
<script defer="defer" src="example2.js"></script>
</head>
<body>
<noscript>
<p>This page requires a JavaScript-enabled browser.</p>
</noscript>
</body>
</html>
```

- 这个例子是在脚本不可用时让浏览器显示一段话。如果浏览器支持脚本，则用户永远不会看到它。

## 2.5　小结 20

- 要包含外部 JavaScript 文件，必须将 src 属性设置为要包含文件的 URL。文件可以跟网页在同
  一台服务器上，也可以位于完全不同的域。
- 所有`<script>`元素会依照它们在网页中出现的次序被解释。在不使用 defer 和 async 属性的
  情况下，包含在`<script>`元素中的代码必须严格按次序解释。
- 对不推迟执行的脚本，浏览器必须解释完位于`<script>`元素中的代码，然后才能继续渲染页面
  的剩余部分。为此，通常应该把`<script>`元素放到页面末尾，介于主内容之后及`</body>`标签
  之前。
- 可以使用 defer 属性把脚本推迟到文档渲染完毕后再执行。推迟的脚本原则上按照它们被列出
  的次序执行。
- 可以使用 async 属性表示脚本不需要等待其他脚本，同时也不阻塞文档渲染，即异步加载。异
  步脚本不能保证按照它们在页面中出现的次序执行。
- 通过使用`<noscript>`元素，可以指定在浏览器不支持脚本时显示的内容。如果浏览器支持并启
  用脚本，则`<noscript>`元素中的任何内容都不会被渲染。  

# 第3章　语言基础 21

本章内容

- 语法
- 数据类型
- 流控制语句
- 理解函数  

## 3.1　语法 21

### 3.1.1 区分大小写

- ECMAScript 中一切都区分大小写。无论是变量、函数名还是操作符，都区分大小写。  

### 3.1.2 标识符

- 所谓标识符，就是变量、函数、属性或函数参数的名称。标识符可以由一或多个下列字符组成：
  1. **第一个字符必须是一个字母、下划线 `_` 或美元符号 `$`；**
  2. 剩下的其他字符可以是字母、下划线、美元符号或数字。
  3. 标识符中的字母可以是扩展 ASCII（ Extended ASCII）中的字母，也可以是 Unicode 的字母字符，如 À 和 Æ（但不推荐使用）。
- 按照惯例， ECMAScript 标识符使用**驼峰大小写**形式，即第一个单词的首字母小写，后面每个单词的首字母大写，如：  `firstSecond、myCar、doSomethingImportant`。

### 3.1.3 注释 

- ECMAScript 采用 C 语言风格的注释，包括单行注释和块注释。  

```javascript
// 单行注释
块注释以一个斜杠和一个星号（ /*）开头，以它们的反向组合（ */）结尾，如：
/* 这是多行
注释 */
```



### 3.1.4 严格模式

- 严格模式（ strict mode）  

  - 要对整个脚本启用严格模式，在脚本开头加上这一行：`"use strict";`  

  - 也可以单独指定一个函数在严格模式下执行，只要把这个预处理指令放到函数体开头即可：

    ```JavaScript
    function doSomething() {
    "use strict";
    // 函数体
    }
    ```

  - 严格模式会影响 JavaScript 执行的很多方面，因此本书在用到它时会明确指出来。所有现代浏览

    器都支持严格模式。  

### 3.1.5 语句

- 以分号结尾。省略分号意味着由解析器确定语句在哪里结尾 ：

  ```JavaScript
  let sum = a + b // 没有分号也有效，但不推荐
  let diff = a - b; // 加分号有效，推荐
  ```

  - 即使语句末尾的分号不是必需的，也应该加上。  

- 多条语句可以合并到一个 C 语言风格的代码块中。  

- if 之类的控制语句只在执行多条语句时要求必须有代码块。  

  ```Javascript
  // 有效，但容易导致错误，应该避免
  if (test)
  console.log(test);
  // 推荐
  if (test) {
  console.log(test);
  }
  ```

  

## 3.2　关键字与保留字 23

```javascript
break 		do 				in 					typeof
case 			else 			instanceof 	var
catch 		export 		new 				void
class 		extends 	return 			while
const 		finally 	super 			with
continue 	for 			switch 			yield
debugger 	function 	this
default 	if 				throw
delete 		import 		try

//始终保留:
enum

//严格模式下保留:
implements  package 	public
interface 	protected static
let 				private

//模块代码中保留:
await
```



## 3.3　变量 24

### 3.3.1 var 关键字  

- 不仅可以改变保存的值，也可以改变值的类型：
  - 虽然不推荐改变变量保存值的类型，但这在 ECMAScript 中是完全有效的。  

```javascript
var message = "hi";
message = 100; // 合法，但不推荐
```

1. **var 声明作用域**  

   ```javascript
   function test() {
   	var message = "hi"; // 局部变量,该变量将在函数退出时被销毁
   }
   test();
   console.log(message); // 出错！
   ```

2. 在函数内定义变量时省略 var 操作符，可以创建一个全局变量：  

   ```javascript
   function test() {
   	message = "hi"; // 全局变量,不推荐这么做。很难维护
   }
   test();
   console.log(message); // "hi"
   ```

   - 如果需要定义多个变量，可以在一条语句中用逗号分隔每个变量（及可选的初始化）：  

   ```javascript
   var message = "hi",found = false, //插入换行和空格缩进并不是必需的
   age = 29;
   ```

   - 严格模式下，不能定义名为 eval 和 arguments 的变量，否则会导致语法错误。  

3. **var 声明提升（ hoist）  **

   - 关键字声明的变量会自动提升到函数作用域顶部：  

   ```javascript
   function foo() {
   console.log(age);
   var age = 26;
   }
   foo(); // undefined
   
   //等价于如下代码：
   function foo() {
   var age;
   console.log(age);
   age = 26;
   }
   foo(); // undefined
   ```

   - 反复多次使用 var 声明同一个变量也没有问题。

### 3.3.2 let 声明  

- let 声明的范围是**块作用域**，而 var 声明的范围是**函数作用域**。  

  ```javascript
  if (true) {
  var name = 'Matt';
  console.log(name); // Matt
  }
  console.log(name); // Matt
  
  if (true) {
  let age = 26;
  console.log(age); // 26
  }
  console.log(age); // ReferenceError: age 没有定义
  ```

  - age 变量之所以不能在 if 块外部被引用，是因为它的作用域仅限于该块内部。块作用域是函数作用域的子集，因此适用于 var 的作用域限制同样也适用于 let。 

- let 也不允许同一个块作用域中出现冗余声明。这样会导致报错：

  ```javascript
  var name;
  var name;
  
  let age;
  let age; // SyntaxError；标识符 age 已经声明过了  
  ```

- JavaScript 引擎会记录用于变量声明的标识符及其**所在的块作用域**，因此**嵌套使用相同的标识符**不会报错，而这是因为同一个块中没有重复声明：  

  ```javascript
  var name = 'Nicholas';
  console.log(name); // 'Nicholas'
  if (true) {
  	var name = 'Matt';
  	console.log(name); // 'Matt'
  }
  
  let age = 30;
  console.log(age); // 30
  if (true) {
  	let age = 26;
  	console.log(age); // 26
  }
  ```

- 对声明冗余报错不会因混用 let 和 var 而受影响。这两个关键字声明的并不是不同类型的变量，
  它们只是指出变量在相关作用域如何存在。

  ```javascript
  var name;
  let name; // SyntaxError
  
  let age;
  var age; // SyntaxError  
  ```

1. **暂时性死区**
   let 与 var 的另一个重要的区别，就是 let 声明的变量不会在作用域中被提升。

   ```javascript
   // name 会被提升
   console.log(name); // undefined
   var name = 'Matt';
   // age 不会被提升
   console.log(age); // ReferenceError： age 没有定义
   let age = 26;
   ```

   - 在解析代码时， JavaScript 引擎也会注意出现在块后面的 let 声明，只不过在此之前不能以任何方式来引用未声明的变量。在 let 声明之前的执行瞬间被称为“暂时性死区”（ temporal dead zone），在此阶段引用任何后面才声明的变量都会抛出 ReferenceError。  

2. **全局声明**

   -   let 在全局作用域中声明的变量不会成为 window 对象的属性（ var 声明的变量则会）。 

3. **条件声明**  

   - var 声明变量时，由于声明会被提升， JavaScript 引擎会自动将多余的声明在作用域顶部合并为一个声明。  
   - **let 的作用域是块**，所以不可能检查前面是否已经使用 let 声明过同名变量。
     - 不能超出分号块的范围使用。

   ```javascript
   <script>
     var name = 'Nicholas';
     let age = 26;
   </script>
   
   <script>
     // 假设脚本不确定页面中是否已经声明了同名变量
     // 那它可以假设还没有声明过
     var name = 'Matt';
     // 这里没问题，因为可以被作为一个提升声明来处理
     // 不需要检查之前是否声明过同名变量
     let age = 36;
     // 如果 age 之前声明过，这里会报错
   </script>
   
   //使用 try/catch 语句或 typeof 操作符也不能解决，因为条件块中 let 声明的作用域仅限于该块。
   <script>
   let name = 'Nicholas';
   let age = 36;
   </script>
   
   <script>
   // 假设脚本不确定页面中是否已经声明了同名变量
   // 那它可以假设还没有声明过
   if (typeof name === 'undefined') {
     let name;
   }
   // name 被限制在 if {} 块的作用域内
   // 因此这个赋值形同全局赋值
   name = 'Matt';
   try {
     console.log(age); // 如果 age 没有声明过，则会报错
   }
   catch(error) {
   	let age;
   }
   // age 被限制在 catch {}块的作用域内
   // 因此这个赋值形同全局赋值
   age = 26;
   </script>
   ```

4. **for 循环中的 let 声明**  

   1. 在 let 出现之前， for 循环定义的迭代变量会渗透到循环体外部：  

      ```javascript
      for (var i = 0; i < 5; ++i) {
      	// 循环逻辑
      }
      console.log(i); // 5
      
      // 改成使用 let 之后，这个问题就消失了，因为迭代变量的作用域仅限于 for 循环块内部：
      for (let i = 0; i < 5; ++i) {
      	// 循环逻辑
      }
      console.log(i); // ReferenceError: i 没有定义
      ```

   2. 在使用 var 的时候，最常见的问题就是对**迭代变量**的奇特声明和修改：  

      ```javascript
      for (var i = 0; i < 5; ++i) {
      	setTimeout(() => console.log(i), 0)
      }
      // 你可能以为会输出 0、 1、 2、 3、 4
      // 实际上会输出 5、 5、 5、 5、 5
      // 退出循环时，迭代变量保存的是导致循环退出的值
      
      // 使用 let 声明迭代变量时， JavaScript 引擎在后台会为每个迭代循环声明一个新的迭代变量。
      for (let i = 0; i < 5; ++i) {
      	setTimeout(() => console.log(i), 0)
      }
      // 会输出 0、 1、 2、 3、 4
      ```

      - 每次迭代声明一个独立变量实例的行为适用于所有风格的 for 循环，包括 for-in 和 for-of 循环。  

### 3.3.3 const 声明  

- const 的行为与 let 基本相同，唯一一个重要的区别是用它声明变量时必须同时初始化变量，且尝试修改 const 声明的变量会导致运行时错误。  

  - const 声明的限制**只适用于它指向的变量的引用**。换句话说，如果 const 变量引用的是一个对象，那么修改这个对象内部的属性并不违反 const 的限制。  

    ```javascript
    const person = {};
    person.name = 'Matt'; // ok
    ```

  - const 声明一个不会被修改的 for 循环变量  

    ```javascript
    let i = 0;
    for (const j = 7; i < 5; ++i) {
    	console.log(j);
    }
    // 7, 7, 7, 7, 7
    for (const key in {a: 1, b: 2}) {
    	console.log(key);
    }
    // a, b
    for (const value of [1,2,3,4,5]) {
      console.log(value);
    }
    // 1, 2, 3, 4, 5
    ```

    

### 3.3.4 声明风格及最佳实践  

1. 不使用 var  
2. const 优先， let 次之  

## 3.4　数据类型 30

- ECMAScript 有 **6 种简单数据类型**（也称为原始类型）：
  -  Undefined、 Null、 Boolean、 Number、String 和 Symbol。   
  - 还有**一种复杂数据类型**叫 Object（对象）。  
    - Object 是一种**无序名值对的集合**。  

### 3.4.1 typeof 操作符

- 确定任意变量的数据类型。  

  - 对一个值使用 typeof 操作符会返回下列字符串之一：

    - "undefined"表示值未定义；
    - "boolean"表示值为布尔值；
    - "string"表示值为字符串；
    - "number"表示值为数值；
    - "object"表示值为对象（而不是函数）或 null；
    - "function"表示值为函数；
    - "symbol"表示值为符号。  

  - 下面是使用 typeof 操作符的例子：

    ```javascript
    let message = "some string";
    console.log(typeof message); // "string"
    console.log(typeof(message)); // "string"
    console.log(typeof 95); // "number"  
    ```

  - 注意，因为 typeof 是一个**操作符而不是函数**，所以**不需要参数**（但可以使用参数）。

### 3.4.2 Undefined 类型

- Undefined 类型只有一个值，就是特殊值 undefined。  

  - 当使用 var 或 let 声明了变量但没有初始化时，就相当于给变量赋予了 undefined 值。

    ```javascript
    let message;
    console.log(message == undefined); // true
    ```

  - 在对**未初始化的变量**调用 typeof 时，返回的结果是"undefined"，但对**未声明的变量**调用它时，返回的结果还是"undefined"，这就有点让人看不懂了。比如下面的例子：

    ```javascript
    let message; // 这个变量被声明了，只是值为 undefined
    // 确保没有声明过这个变量
    // let age
    console.log(typeof message); // "undefined"
    console.log(typeof age); // "undefined"  
    ```

    - 建议在声明变量的同时进行初始化，用来区分两种情况。

### 3.4.3 Null 类型

- Null 类型同样只有一个值，即特殊值 null。  

  - null 值表示一个**空对象指针**，这也是给typeof 传一个 null 会返回"object"的原因：  

    ```javascript
    let car = null;
    console.log(typeof car); // "object"
    ```

  - 

### 3.4.4 Boolean 类型

### 3.4.5 Number 类型

### 3.4.6 String 类型

### 3.4.7 Symbol 类型 

### 3.4.8 Object 类型 

## 3.5　操作符 56

3.5.1 一元操作符
3.5.2 位操作符
3.5.3 布尔操作符
3.5.4 乘性操作符
3.5.5 指数操作符 
3.5.6 加性操作符 
3.5.7 关系操作符 
3.5.8 相等操作符 
3.5.9 条件操作符 
3.5.10 赋值操作符 
3.5.11 逗号操作符 

## 3.6　语句 73

3.6.1 if 语句 
3.6.2 do-while 语句 
3.6.3 while 语句 

3.6.4 for 语句 
3.6.5 for-in 语句 
3.6.6 for-of 语句 
3.6.7 标签语句 
3.6.8 break 和 continue 语句 
3.6.9 with 语句
3.6.10 switch 语句  

## 3.7　函数 80

3.8　小结 82

# 第4章　变量、作用域与内存 83

## 4.1　原始值与引用值 83

## 4.2　执行上下文与作用域 87

## 4.3　垃圾回收 94

4.4　小结 101

# 第5章　基本引用类型 103

## 5.1　Date 103

## 5.2　RegExp 107

## 5.3　原始值包装类型 113

## 5.4　单例内置对象 128

5.5　小结 135

# 第6章　集合引用类型 136

## 6.1　Object 136

## 6.2　Array 138

## 6.3　定型数组 155

## 6.4　Map 163

## 6.5　WeakMap 168

## 6.6　Set 173

## 6.7　WeakSet 178

## 6.8　迭代与扩展操作 180

6.9　小结 182

# 第7章　迭代器与生成器 183

## 7.1　理解迭代 183

## 7.2　迭代器模式 184

## 7.3　生成器 192

7.4　小结 204

# 第8章　对象、类与面向对象编程 205

## 8.1　理解对象 205

## 8.2　创建对象 220

## 8.3　继承 238

## 8.4　类 249

8.5　小结 265

# 第9章　代理与反射 266

## 9.1　代理基础 266

## 9.2　代理捕获器与反射方法 274

## 9.3　代理模式 283

9.4　小结 286

# 第 10章　函数 287

## 10.1　箭头函数 288

## 10.2　函数名 289

## 10.3　理解参数 290

## 10.4　没有重载 292

## 10.5　默认参数值 293

## 10.6　参数扩展与收集 295

## 10.7　函数声明与函数表达式 297

## 10.8　函数作为值 297

## 10.9　函数内部 299

## 10.10　函数属性与方法 302

## 10.11　函数表达式 304

## 10.12　递归 306

## 10.13　尾调用优化 307

## 10.14　闭包 309

## 10.15　立即调用的函数表达式 314

## 10.16　私有变量 316

10.17　小结 321

# 第 11章　期约与异步函数 322

## 11.1　异步编程 322

## 11.2　期约 325

## 11.3　异步函数 347

11.4　小结 360

# 第 12章　BOM 361

## 12.1　window对象 361

## 12.2　location对象 372

## 12.3　navigator对象 375

## 12.4　screen对象 379

## 12.5　history对象 379

12.6　小结 381

# 第 13章　客户端检测 382

## 13.1　能力检测 382

## 13.2　用户代理检测 386

## 13.3　软件与硬件检测 394

13.4　小结 400

# 第 14章　DOM 401

## 14.1　节点层级 401

## 14.2　DOM编程 426

## 14.3　MutationObserver接口 432

14.4　小结 444

# 第 15章　DOM扩展 445

## 15.1　Selectors API 445

## 15.2　元素遍历 447

## 15.3　HTML5 448

## 15.4　专有扩展 456

15.5　小结 459

# 第 16章　DOM2和DOM3 460

## 16.1　DOM的演进 460

## 16.2　样式 467

## 16.3　遍历 476

## 16.4　范围 481

16.5　小结 489

# 第 17章　事件 490

## 17.1　事件流 490

## 17.2　事件处理程序 493

## 17.3　事件对象 499

## 17.4　事件类型 505

## 17.5　内存与性能 540

## 17.6　模拟事件 543

17.7　小结 548

# 第 18章　动画与Canvas图形 549

## 18.1　使用requestAnimationFrame 549

## 18.2　基本的画布功能 552

## 18.3　2D绘图上下文 553

## 18.4　WebGL 569

18.5　小结 579

# 第 19章　表单脚本 581

## 19.1　表单基础 581

## 19.2　文本框编程 587

## 19.3　选择框编程 597

## 19.4　表单序列化 601

## 19.5　富文本编辑 603

19.6　小结 608

# 第 20章　JavaScript API 609

## 20.1　Atomics与SharedArrayBuffer 609

## 20.2　跨上下文消息 616

## 20.3　Encoding API 617

## 20.4　File API与Blob API 622

## 20.5　媒体元素 627

## 20.6　原生拖放 631

## 20.7　Notifications API 635

## 20.8　Page Visibility API 636

## 20.9　Streams API 637

## 20.10　计时API 644

## 20.11　Web组件 648

## 20.12　Web Cryptography API 663

20.13　小结 674

# 第 21章　错误处理与调试 675

## 21.1　浏览器错误报告 675

## 21.2　错误处理 676

## 21.3　调试技术 688

## 21.4　旧版IE的常见错误 691

21.5　小结 693

# 第 22章　处理XML 694

## 22.1　浏览器对XML DOM的支持 694

## 22.2　浏览器对XPath的支持 696

## 22.3　浏览器对XSLT的支持 700

22.4　小结 702

# 第 23章　JSON 703

## 23.1　语法 703

## 23.2　解析与序列化 706

23.4　小结 710

# 第 24章　网络请求与远程资源 711

## 24.1　XMLHttpRequest对象 711

## 24.2　进度事件 718

## 24.3　跨源资源共享 719

## 24.4　替代性跨源技术 721

## 24.5　Fetch API 722

## 24.6　Beacon API 747

## 24.7　Web Socket 747

## 24.8　安全 749

24.9　小结 750

# 第 25章　客户端存储 751

25.1　cookie 751
25.2　Web Storage 759
25.3　IndexedDB 762

25.4　小结 771

# 第 26章　模块 772

## 26.1　理解模块模式 772

## 26.2　凑合的模块系统 776

## 26.3　使用ES6之前的模块加载器 779

## 26.4　使用ES6模块 783

26.5　小结 790

# 第 27章　工作者线程 791

## 27.1　工作者线程简介 791

## 27.2　专用工作者线程 793

## 27.3　共享工作者线程 813

## 27.4　服务工作者线程 817

27.5　小结 841

# 第 28章　最佳实践 842

## 28.1　可维护性 842

## 28.2　性能 851

## 28.3　部署 861

28.4　小结 864

# 附录A　ES2018和ES2019（图灵社区下载）

# 附录B　严格模式（图灵社区下载）

# 附录C　JavaScript库和框架（图灵社区下载）

# 附录D　JavaScript工具（图灵社区下载）