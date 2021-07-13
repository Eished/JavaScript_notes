# **目录概要**

> 第 1 章，介绍 JavaScript 的起源：从哪里来，如何发展，以及现今的状况。这一章会谈到 JavaScript与 ECMAScript 的关系、 DOM、 BOM，以及 Ecma 和 W3C 相关的标准。
> 第 2 章，了解 JavaScript 如何与 HTML 结合来创建动态网页，主要介绍在网页中嵌入 JavaScript 的不同方式，还有 JavaScript 的内容类型及其与`<script>`元素的关系。
> 第 3 章，介绍语言的基本概念，包括语法和流控制语句；解释 JavaScript 与其他类 C 语言在语法上的异同点。在讨论内置操作符时也会谈到强制类型转换。此外还将介绍所有的原始类型，包括 Symbol。
> 第 4 章，探索 JavaScript 松散类型下的变量处理。这一章将涉及原始类型与引用类型的不同，以及与变量有关的执行上下文。此外，这一章也会讨论 JavaScript 中的垃圾回收，涉及在变量超出作用域时如何回收内存。
> 第 5 章，讨论 JavaScript 所有内置的引用类型，如 Date、 Regexp、原始类型及其包装类型。每种引用类型既有理论上的讲解，也有相关浏览器实现的剖析。
> 第 6 章，继续讨论内置引用类型，包括 Object、 Array、 Map、 WeakMap、 Set 和 WeakSet 等。
> 第 7 章，介绍 ECMAScript 新版中引入的两个基本概念：迭代器和生成器，并分别讨论它们最基本的行为和在当前语言环境下的应用。
> 第 8 章，解释如何在 JavaScript 中使用类和面向对象编程。首先会深入讨论 JavaScript 的 Object 类型，进而探讨原型式继承，接下来全面介绍 ES6 类及其与原型式继承的紧密关系。
> 第 9 章，介绍两个紧密相关的概念： Proxy（代理）和 Reflect（反射） API。代理和反射用于拦截和修改这门语言的基本操作。
> 第 10 章，探索 JavaScript 最强大的一个特性：函数表达式，主要涉及闭包、 this 对象、模块模式、创建私有对象成员、箭头函数、默认参数和扩展操作符。
> 第 11 章，介绍两个紧密相关的异步编程构造： Promise 类型和 async/await。这一章讨论 JavaScript的异步编程范式，进而介绍期约（ promise）与异步函数的关系。
> 第 12 章，介绍 BOM，即浏览器对象模型，跟与浏览器本身交互的 API 相关。所有 BOM 对象都会涉及，包括 window、 document、 location、 navigator 和 screen 等。
> 第 13 章，解释检测客户端机器及其能力的不同手段，包括能力检测和用户代理字符串检测。这一章讨论每种手段的优缺点，以及适用的场景。
> 第 14 章，介绍 DOM，即文档对象模型，主要是 DOM Level 1 定义的 API。这一章将简单讨论 XML及其与 DOM 的关系，进而全面探索 DOM 以及如何利用它操作网页。
> 第 15 章，解释其他 DOM API，包括浏览器本身对 DOM 的扩展，主要涉及 Selectors API、 ElementTraversal API 和 HTML5 扩展。
> 第 16 章，在之前两章的基础上，解释 DOM Level 2 和 Level 3 对 DOM 的扩展，包括新增的属性、方法和对象。这一章还会介绍 DOM4 的相关内容，比如 Mutation Observer。
> 第 17 章，解释事件在 JavaScript 中的本质，以及事件的起源及其在 DOM 中的运行方式。
> 第 18 章，围绕`<canvas>`标签讨论如何创建动态图形，包括 2D 和 3D 上下文（ WebGL）等动画和游戏开发所需的基础。这一章还会讨论 WebGL1 和 WebGL2。
> 第 19 章，探索使用 JavaScript 增强表单交互及突破浏览器限制，主要讨论文本框、选择框等表单元素及数据验证和操作。
> 第 20 章，介绍各种 JavaScript API，包括 Atomics、 Encoding、 File、 Blob、 Notifications、 Streams、Timing、 Web Components 和 Web Cryptography。
> 第 21 章，讨论浏览器如何处理 JavaScript 代码中的错误及几种错误处理方式。这一章同时介绍了每种浏览器的调试工具和技术，包括简化调试过程的建议。  
>
> 第 22 章，介绍通过 JavaScript 读取和操作 XML 数据的特性，解释了不同浏览器支持特性和对象的差异，提供了简化跨浏览器编码的建议。这一章也讨论了使用 XSLT 在客户端转换 XML 数据。
> 第 23 章，介绍作为 XML 替代的 JSON 数据格式，还讨论了浏览器原生解析和序列化 JSON，以及使用 JSON 时要注意的安全问题。
> 第 24 章，探讨浏览器请求数据和资源的常用方式，包括早期的 XMLHttpRequest 和现代的 Fetch API。
> 第 25 章，讨论应用程序离线时在客户端机器上存储数据的各种技术。先从 cookie 谈起，然后讨论Web Storage 和 IndexedDB。
> 第 26 章，介绍模块模式在编码中的应用，进而讨论 ES6 模块之前的模块加载方式，包括 CommonJS、AMD 和 UMD。最后介绍新的 ES6 模块及其正确用法。
> 第 27 章，深入介绍专用工作者线程、共享工作者线程和服务工作者线程。其中包括工作者线程在操作系统和浏览器层面的实现，以及使用各种工作者线程的最佳策略。
> 第 28 章，探讨在企业级开发中进行 JavaScript 编码的最佳实践。其中提到了提升代码可维护性的编码惯例，包括编码技巧、格式化及通用编码建议。深入讨论应用性能和提升速度的技术。最后介绍与上线部署相关的话题，包括项目构建流程。  

# 阅读指南

> 第一章随便看看，了解历史
>
> 第二章简单看看，script 里的 defer 和 async 属性了解下就好了，noscript 不用看 
>
> 第三章位运算、label、with 不用看 
>
> 第四章概念性质的了解就可以，基本类型与引用类型需要掌握
>
> 第五章正则不用看
>
> 第六章都看看，重点内容
>
> 第七章也是重点内容，都需要看
>
> 第八章了解就可以了，知道 bom 是什么，用的时候能查到 
>
> 第九章随便看看，有个印象就行
>
> 10，11，12 了解 DOM 的类型，掌握操作 DOM，包括选择、style、文本等
>
> 13 事件中和 IE 有关的部分不用看
>
> 14 表单内容需要掌握，可以和 jquery 的 api 结合看，简化理解
>
> 15 可以跳过，有兴趣的自己看看就好了
>
> 16 了解就行了，postMessage 可能会出现在跨域问题中
>
> 17 18 19 跳过就可以了
>
> 20 21 是 JSON 和 AJAX，不过大部分应该掌握了，新加入的东西看看好了，用的时候 比如 formData 在上传文件的时候需要用上，progress 用的比较少。 跨域知识比较旧， 但是面试的套路就是要掌握这些，所以还是需要看。
>
> 22 高级技巧感兴趣就看看，因为要求相对较高，不愿意看也没有关系
>
> 23 看看 localStorage 和 cookie 就可以，其他的实际用得不多
>
> 24 看看还是有必要的，算是合格的编程风格
>
> 25 使用比较多的是 requestAnimationFrame(主要是改良动画) 和 File API，其他的 使用较少，用的时候再查就可以了
>
> 附录部分里的严格模式不用看，其他了解下就可以



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
   2. ES7  包含少量语法层面的增强，`Array.prototype.includes` 和指数操作符。  
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
   3. `navigator` 对象，提供关于浏览器的详尽信息；
   4. `location` 对象，提供浏览器加载页面的详尽信息；  
   5. `screen` 对象，提供关于用户屏幕分辨率的详尽信息；
   6. `performance` 对象，提供浏览器内存占用、导航行为和时间统计的详尽信息；
   7. 对 cookie 的支持；
   8. 其他自定义对象，如 `XMLHttpRequest` 和 IE 的 `ActiveXObject`。  

   浏览器实现的都是自己的 BOM。有一些所谓的事实标准，比如对于 `window` 对象和 `navigator` 对象，每个浏览器都会给它们定义自己的属性和方法。  

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
  8. **type**：可选。代替 language，表示代码块中**脚本语言的内容类型**（也称 **MIME 类型**）。
     - 按照惯例，这个值始终都是"text/javascript"，尽管"text/javascript"和"text/ecmascript"都已经废弃了。
     -  JavaScript 文件的 MIME 类型通常是 "application/x-javascript"，不过给 type 属性这个值 有 可 能 导 致 脚 本 被 忽 略 。 在 非 IE 的 浏 览 器 中 有 效 的 其 他 值 还 有"application/javascript"和"application/ecmascript"。
     - 如果这个值是 **module**，则代码会被当成 ES6 模块，而且只有这时候代码中才能出现 import 和 export 关键字。  

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

  - 在定义将来要保存对象值的变量时，**建议使用 null 来初始化**。只要检查这个变量的值是不是 null 就可以知道这个变量是否在后来被重新赋予了一个对象的引用，比如：

    - 用 null 来填充该变量 ，这样就可以保持 null 是空对象指针的语义，并进一步将其与 undefined 区分开来。  

    ```javascript
    if (car != null) {
    // car 是一个对象的引用
    } 
    ```

  - undefined 值是由 null 值派生而来的，因此 ECMA-262 将它们定义为表面上相等

    ```javascript
    console.log(null == undefined); // true
    ```

### 3.4.4 Boolean 类型

- Boolean（布尔值）类型是 ECMAScript 中使用最频繁的类型之一，有两个字面值： true 和 false。

  - 这两个布尔值不同于数值，因此 **true 不等于 1， false 不等于 0。**    

  - 下面是给变量赋布尔值的例子：

    ```javascript
    let found = true;
    let lost = false;  
    ```

- 将一个其他类型的值转换为布尔值，可以调用特定的 `Boolean()` 转型函数：

  ```javascript
  let message = "Hello world!";
  let messageAsBoolean = Boolean(message);  
  ```

- 下表总结了不同类型与布尔值之间的转换规则。  

  | 数据类型  |    转换为 true 的值    |       转换为 false 的值       |
  | :-------: | :--------------------: | :---------------------------: |
  |  Boolean  |          true          |             false             |
  |  String   |       非空字符串       |       `""`（空字符串）        |
  |  Number   | 非零数值（包括无穷值） | 0、 NaN（参见后面的相关内容） |
  |  Object   |        任意对象        |             null              |
  | Undefined |     N/A（不存在）      |           undefined           |

  - if 等流控制语句会**自动执行其他类型值到布尔值的转换**，例如：

    ```javascript
    let message = "Hello world!";
    if (message) {
    	console.log("Value is true");
    }  
    ```

### 3.4.5 Number 类型

- Number 类型使用 IEEE 754 格式表示**整数和浮点值**（在某些语言中也叫双精度值）。  不同的数值类型相应地也有不同的数值字面量格式。  

  - **十进制**整数 ：`let intNum = 55; // 整数  `

  - **八进制**（以 8 为基数），第一个数字必须是零 ，后面数值 0~7

    ```javascript
    let octalNum1 = 070; // 八进制的 56
    let octalNum2 = 079; // 无效的八进制值，当成 79 处理
    let octalNum3 = 08; // 无效的八进制值，当成 8 处理
    ```

    - 八进制字面量在严格模式下是无效的，会导致 JavaScript 引擎抛出语法错误。   

  - **十六进制**（以 16 为基数），数值前缀 0x（区分大小写），然后是十六进制数字（ 0~9 以
    及 A~F）。  

    ```javascript
    let hexNum1 = 0xA; // 十六进制 10
    let hexNum2 = 0x1f; // 十六进制 31
    ```

1. **浮点值**

   -   定义浮点值，数值中必须包含小数点，而且小数点后面必须至少有一个数字。  

     ```javascript
     let floatNum1 = 1.1;
     let floatNum2 = 0.1;
     let floatNum3 = .1; // 有效，但不推荐
     ```

     - 浮点值使用的内存空间是存储整数值的两倍。
     - 小数点后面没有数字的情况下，数值就会变成整数。  类似地，  数值本身就是整数，只是小数点后面**跟着 0（如 1.0），那它也会被转换为整数。**  

     ```javascript
     let floatNum1 = 1.; // 小数点后面没有数字，当成整数 1 处理
     let floatNum2 = 10.0; // 小数点后面是零，当成整数 10 处理
     ```

   - 非常大或非常小的数值，浮点值可以用科学记数法来表示。  

     - 一个数值（整数或浮点数）后跟一个大写或小写的字母 e，再加上一个要乘的 10 的多少次幂。比如：  

     ```javascript
     let floatNum = 3.125e7; // 等于 31250000
     ```

   - 浮点值的精确度最高可达 17 位小数，但在算术计算中远不如整数精确。

     - 例如， 0.1 加 0.2 得到的不是 0.3，而是 0.300 000 000 000 000 04。由于这种微小的舍入错误，导致很难测试特定的浮点值。比如下面的例子：

       ```javascript
       if (a + b == 0.3) { // 别这么干！
       	console.log("You got 0.3.");
       }  
       ```

     - **永远不要测试某个特定的浮点值。**  

2. **值的范围**  

   - ECMAScript 可以表示的最小数值保存在 `Number.MIN_VALUE` 中，这个值在多数浏览器中是 `5e-324`；可以表示的最大数值保存在`Number.MAX_VALUE` 中，这个值在多数浏览器中是 `1.797 693 134 862 315 7e+308`。

   - 如果某个计算得到的数值结果超出了 JavaScript 可以表示的范围，那么这个数值会被自动转换为一个特殊的 Infinity（无穷）值。任何无法表示的负数以 **-Infinity（负无穷大）**表示，任何无法表示的正数以 **Infinity（正无穷大）**表示  。

     - 要确定一个值是不是有限大（即介于 JavaScript 能表示的最小值和最大值之间），可以使用 `isFinite()` 函数，如下所示：

       ```javascript
       let result = Number.MAX_VALUE + Number.MAX_VALUE;
       console.log(isFinite(result)); // false  
       ```

3. **NaN**  

   - **“不是数值”（ Not a Number）**，用于表示本来要返回数值的操作失败了（而不是抛出错误）。

   - 比如，用 0 除任意数值在其他语言中通常都会导致错误，从而中止代码执行。但在 ECMAScript 中， 0、 +0 或-0 相除会返回 NaN：

     ```javascript
     console.log(0/0); // NaN
     console.log(-0/+0); // NaN  
     
     // 如果分子是非 0 值，分母是有符号 0 或无符号 0，则会返回 Infinity 或-Infinity：
     console.log(5/0); // Infinity
     console.log(5/-0); // -Infinity
     ```

   - **NaN 的属性：**

     - 任何涉及 NaN 的操作始终返回 NaN（如 NaN/10），
     - **NaN 不等于包括 NaN 在内的任何值。**  
       - `console.log(NaN == NaN); // false  `

   - `isNaN()` 函数。  

     - 任何不能转换为数值的值都会导致这个函数返回 true。举例如下：

       ```javascript
       console.log(isNaN(NaN)); // true
       console.log(isNaN(10)); // false， 10 是数值
       console.log(isNaN("10")); // false，可以转换为数值 10
       console.log(isNaN("blue")); // true，不可以转换为数值
       console.log(isNaN(true)); // false，可以转换为数值 1 
       ```

4. **数值转换  **

   - 3 个函数可以将非数值转换为数值： `Number()`、 `parseInt()` 和 `parseFloat()`。  

   - **`Number()` 函数**基于如下规则执行转换：

     - 布尔值， true 转换为 1， false 转换为 0。
     - 数值，直接返回。
     - null，返回 0。
     - undefined，返回 NaN。
     - 字符串，应用以下规则：
       -  如果字符串**包含数值字符**，包括数值字符前面带加、减号的情况，则转换为一个十进制数值。
         因此， Number("1")返回 1， Number("123")返回 123， Number("011")返回 11（忽略前面
         的零）。
       - 如果字符串**包含有效的浮点值**格式如"1.1"，则会转换为相应的浮点值（同样，忽略前面的零）。
       - 如果字符串**包含有效的十六进制**格式如"0xf"，则会转换为与该十六进制值**对应的十进制整**
         **数值**。
       - 如果是空字符串（不包含字符），则返回 0。
       - 如果字符串包含除上述情况之外的其他字符，则返回 NaN。  
     - 对象，调用 `valueOf()` 方法，并按照上述规则转换返回的值。如果转换结果是 NaN，则调用`toString()` 方法，再按照转换字符串的规则转换。  

     ```javascript
     let num1 = Number("Hello world!"); // NaN
     let num2 = Number(""); // 0
     let num3 = Number("000011"); // 11
     let num4 = Number(true); // 1
     ```

   - 需要得到整数时可以优先使用 **`parseInt()` 函数**。  

     - 字符串最前面的空格会被忽略，从第一个非空格字符开始转换。如果第一个字符不是数值字符、加号或减号， **`parseInt()` 立即返回 NaN**。这意味着**空字符串也会返回 NaN**（这一点跟 `Number()` 不一样，它返回 0）。如果第一个字符是数值字符、加号或减号，则继续依次检测每个字符，直到字符串末尾，或碰到非数值字符。  

       ```javascript
       let num1 = parseInt("1234blue"); // 1234
       let num2 = parseInt(""); // NaN
       let num3 = parseInt("0xA"); // 10，解释为十六进制整数
       let num4 = parseInt(22.5); // 22
       let num5 = parseInt("70"); // 70，解释为十进制值
       let num6 = parseInt("0xf"); // 15，解释为十六进制整数
       ```

     - 不同的数值格式很容易混淆，因此 `parseInt()` 也接收第二个参数，用于指定底数（进制数）。如果知道要解析的值是十六进制，那么可以传入 16 作为第二个参数，以便正确解析：

       - 为避免解析出错，建议始终传给它第二个参数。  

       ```javascript
       let num = parseInt("0xAF", 16); // 175
       
       // 事实上，如果提供了十六进制参数，那么字符串前面的"0x"可以省掉：
       let num1 = parseInt("AF", 16); // 175
       let num2 = parseInt("AF"); // NaN
       
       // 通过第二个参数，可以极大扩展转换后获得的结果类型。比如：
       let num1 = parseInt("10", 2); // 2，按二进制解析
       let num2 = parseInt("10", 8); // 8，按八进制解析
       let num3 = parseInt("10", 10); // 10，按十进制解析
       let num4 = parseInt("10", 16); // 16，按十六进制解析
       ```

   - **`parseFloat()` 函数**的工作方式跟 `parseInt()` 函数类似，都是从位置 0 开始检测每个字符。同样，它也是解析到字符串末尾或者解析到一个无效的浮点数值字符为止。这意味着第一次出现的小数点是有效的，但第二次出现的小数点就无效了，此时字符串的剩余字符都会被忽略。 

     - `"22.34.5"将转换成 22.34  ` 
     - parseFloat() 函数的另一个不同之处在于，它始终忽略字符串开头的零。  
     - 十六进制数值始终会返回 0。因为 parseFloat() **只解析十进制值**，因此不能指定底数。
     - 如果字符串表示整数（没有小数点或者小数点后面只有一个零），则 parseFloat() 返回整数。    

     ```javascript
     let num1 = parseFloat("1234blue"); // 1234，按整数解析
     let num2 = parseFloat("0xA"); // 0
     let num3 = parseFloat("22.5"); // 22.5
     let num4 = parseFloat("22.34.5"); // 22.34
     let num5 = parseFloat("0908.5"); // 908.5
     let num6 = parseFloat("3.125e7"); // 31250000
     ```

### 3.4.6 String 类型

- **String（字符串）**数据类型表示零或多个 16 位 Unicode 字符序列。

  - 字符串可以使用双引号（ `"`）、单引号（ `'`）或反引号（ `）标示。
  - ECMAScript 语法中表示字符串的引号没有区别。  
  - 以某种引号作为字符串开头，必须仍然以该种引号作为字符串结尾。  

  ```javascript
  let firstName = "John";
  let lastName = 'Jacob';
  let lastName = `Jingleheimerschmidt`
  ```

1. **字符字面量  **

   - 字符串数据类型包含一些字符字面量，用于表示非打印字符或有其他用途的字符，如下表所示：  

     | 字 面 量 | 含 义                                                        |
     | -------- | ------------------------------------------------------------ |
     | `\n`     | 换行                                                         |
     | `\t`     | 制表                                                         |
     | `\b`     | 退格                                                         |
     | `\r`     | 回车                                                         |
     | `\f`     | 换页                                                         |
     | `\\`     | 反斜杠                                                       |
     | `\'`     | 单引号（`‘`），在字符串以单引号标示时使用，例如  `'He said, \'hey.\''` |
     | `\"`     | 双引号（ `"`），在字符串以双引号标示时使用，例如 `"He said, \"hey.\""` |
     | `` \` `` | 反引号（ `` ` ``），在字符串以反引号标示时使用，例如 `` `He said, \`hey.\` ` `` |
     | `\xnn`   | 以十六进制编码 `nn` 表示的字符（其中 n 是十六进制数字 `0~F`），例如 `\x41` 等于"A" |
     | `\unnnn` | 以十六进制编码 `nnnn` 表示的 Unicode 字符（其中 n 是十六进制数字 `0~F`），例如 `\u03a3` 等于希腊字符 "Σ" |

     - 这些字符字面量**可以出现在字符串中的任意位置**，且可以**作为单个字符被解释**：

       ```javascript
       let text = "This is the letter sigma: \u03a3.";
       
       // 因为转义序列表示一个字符，所以只算一个字符
       console.log(text.length); // 28
       
       // 如果字符串中包含双字节字符，那么 length 属性返回的值可能不是准确的字符数。
       ```

2. **字符串的特点  **

   - ECMAScript 中的字符串是**不可变的（ immutable）**，意思是一旦创建，它们的值就不能变了。

     - 要修改某个变量中的字符串值，必须先销毁原始的字符串，然后将包含新值的另一个字符串保存到该变量

       ```javascript
       let lang = "Java";
       lang = lang + "Script";
       ```

3. **转换为字符串  **

   - 有两种方式把一个值转换为字符串。

     - 首先是使用几乎所有值都有的 **`toString()`** 方法。这个方法唯一的用途就是返回当前值的字符串等价物。  

       ```javascript
       let age = 11;
       let ageAsString = age.toString(); // 字符串"11"
       let found = true;
       let foundAsString = found.toString(); // 字符串"true"
       ```

     - toString() 方法可见于数值、布尔值、对象和字符串值。（没错，字符串值也有 toString()方法，该方法只是简单地返回自身的一个副本。） null 和 undefined 值没有 toString()方法。

     - 在对数值调用这个方法时， **toString()可以接收一个底数参数**，即以什么底数来输出数值的字符串表示。  

       ```javascript
       let num = 10;
       console.log(num.toString()); // "10"
       console.log(num.toString(2)); // "1010"
       console.log(num.toString(8)); // "12"
       console.log(num.toString(10)); // "10"
       console.log(num.toString(16)); // "a"
       ```

   - 如果你不确定一个值是不是 null 或 undefined，可以使用 **`String()` 转型函数**，它始终会返回表示相应类型值的字符串。 `String()` 函数遵循如下规则。

     - 如果值有 toString() 方法，则调用该方法（不传参数）并返回结果。
     - 如果值是 null，返回 "null"。
     - 如果值是 undefined，返回 "undefined"。  

     ```javascript
     let value1 = 10;
     let value2 = true;
     let value3 = null;
     let value4;
     console.log(String(value1)); // "10"
     console.log(String(value2)); // "true"
     console.log(String(value3)); // "null"
     console.log(String(value4)); // "undefined"
     ```

4. **模板字面量  **

   - ECMAScript 6 新增了使用模板字面量定义字符串的能力。与使用单引号或双引号不同，模板字面量保留换行字符，可以跨行定义字符串：

     ```javascript
     let myMultiLineString = 'first line\nsecond line';
     let myMultiLineTemplateLiteral = `first line
     second line`;
     
     console.log(myMultiLineString);
     // first line
     // second line"
     
     console.log(myMultiLineTemplateLiteral);
     // first line
     // second line
     
     console.log(myMultiLineString === myMultiLinetemplateLiteral); // true
     ```

   - 顾名思义，模板字面量在定义模板时特别有用，比如下面这个 HTML 模板：  

     ```javascript
     let pageHTML = `
     <div>
       <a href="#">
       	<span>Jake</span>
       </a>
     </div>`;
     ```

   - 由于模板字面量会**保持反引号内部的空格**，因此在使用时要格外注意。格式正确的模板字符串看起来可能会缩进不当：  

     ```javascript
     // 这个模板字面量在换行符之后有 25 个空格符
     let myTemplateLiteral = `first line
     second line`;
     console.log(myTemplateLiteral.length); // 47
     
     // 这个模板字面量以一个换行符开头
     let secondTemplateLiteral = `
     first line
     second line`;
     console.log(secondTemplateLiteral[0] === '\n'); // true
     
     // 这个模板字面量没有意料之外的字符
     let thirdTemplateLiteral = `first line
     second line`;
     console.log(thirdTemplateLiteral);
     // first line
     // second line
     ```

5. **字符串插值  **

   - 模板字面量最常用的一个特性是支持字符串插值，也就是可以在一个连续定义中插入一个或多个值。

     ```javascript
     // 字符串插值通过在${}中使用一个 JavaScript 表达式实现：
     let value = 5;
     let exponent = 'second';
     
     // 以前，字符串插值是这样实现的：
     let interpolatedString =
     value + ' to the ' + exponent + ' power is ' + (value * value);
     
     // 现在，可以用模板字面量这样实现：
     let interpolatedTemplateLiteral =
     `${ value } to the ${ exponent } power is ${ value * value }`;
     
     console.log(interpolatedString); // 5 to the second power is 25
     console.log(interpolatedTemplateLiteral); // 5 to the second power is 25
     ```

   - **所有插入的值都会使用 toString() 强制转型为字符串，而且任何 JavaScript 表达式都可以用于插值。**嵌套的模板字符串无须转义：

     ```javascript
     console.log(`Hello, ${ `World` }!`); // Hello, World!
     
     // 将表达式转换为字符串时会调用 toString()：
     let foo = { toString: () => 'World' };
     console.log(`Hello, ${ foo }!`); // Hello, World!
     
     // 在插值表达式中可以调用函数和方法：
     function capitalize(word) {
     	return `${ word[0].toUpperCase() }${ word.slice(1) }`;
     }
     console.log(`${ capitalize('hello') }, ${ capitalize('world') }!`); // Hello, World!
     
     // 此外，模板也可以插入自己之前的值：
     let value = '';
     function append() {
       value = `${value}abc`
       console.log(value);
     }
     append(); // abc
     append(); // abcabc
     append(); // abcabcabc
     ```

6. **模板字面量标签函数  **

   - 模板字面量也支持定义**标签函数（ tag function）**，而通过标签函数可以**自定义插值**行为。标签函数会接收被插值记号分隔后的模板和对每个表达式求值的结果。  

     ```javascript
     let a = 6;
     let b = 9;
     
     function simpleTag(strings, aValExpression, bValExpression, sumExpression) {
       console.log(strings);
       console.log(aValExpression);
       console.log(bValExpression);
       console.log(sumExpression);
     	return 'foobar';
     }
     
     let untaggedResult = `${ a } + ${ b } = ${ a + b }`;
     let taggedResult = simpleTag`${ a } + ${ b } = ${ a + b }`;
     // ["", " + ", " = ", ""]
     // 6
     // 9
     // 15
     
     console.log(untaggedResult); // "6 + 9 = 15"
     console.log(taggedResult); // "foobar"
     ```

   - 因为表达式参数的数量是可变的，所以通常应该使用**剩余操作符（ rest operator）**将它们收集到一个数组中：`function zipTag(strings, ...expressions)`

     - 对于有 n 个插值的模板字面量，传给标签函数的表达式参数的个数始终是 n，而传给标签函数的第一个参数所包含的字符串个数则始终是 n+1。因此，如果你想把这些字符串和对表达式求值的结果拼接起来作为默认返回的字符串，可以这样做：    

     ```javascript
     let a = 6;
     let b = 9;
     
     function zipTag(strings, ...expressions) {
       return strings[0] +
       expressions.map((e, i) => `${e}${strings[i + 1]}`).join('');
     }
     
     let untaggedResult = `${ a } + ${ b } = ${ a + b }`;
     let taggedResult = zipTag`${ a } + ${ b } = ${ a + b }`;
     
     console.log(untaggedResult); // "6 + 9 = 15"
     console.log(taggedResult); // "6 + 9 = 15"
     
     // 等价于
     let a = 6;
     let b = 9;
     
     function zipTag(strings, ...expressions) {
       let c = expressions.map((e, i) => {
         return `${e}${strings[i + 1]}`;
       });
       //"" a + b = 15 ""
       return strings[0] + c.join('');
     }
     
     let untaggedResult = `${ a } + ${ b } = ${ a + b }`;
     let taggedResult = zipTag `${ a } + ${ b } = ${ a + b }`;
     
     console.log(untaggedResult); // "6 + 9 = 15"
     console.log(taggedResult); // "6 + 9 = 15"
     ```

7. **原始字符串  **

   - 使用模板字面量也可以直接获取原始的模板字面量内容（如换行符或 Unicode 字符），而不是被转换后的字符表示。为此，可以使用默认的 **String.raw 标签函数**：  

     - 实际的换行符不行。

     ```javascript
     // Unicode 示例
     // \u00A9 是版权符号
     console.log(`\u00A9`); // ©
     console.log(String.raw `\u00A9`); // \u00A9
     
     // 换行符示例
     console.log(`first line\nsecond line`);
     // first line
     // second line
     
     console.log(String.raw `first line\nsecond line`); // "first line\nsecond line"
     
     // 对实际的换行符来说是不行的
     // 它们不会被转换成转义序列的形式
     console.log(`first line
     second line`);
     // first line
     // second line
     
     console.log(String.raw `first line
     second line`);
     // first line
     // second line
     
     
     // 另外，也可以通过标签函数的第一个参数，即字符串数组的.raw 属性取得每个字符串的原始内容：
     function printRaw(strings) {
       console.log('Actual characters:');
       for (const string of strings) {
         console.log(string);
       }
       console.log('Escaped characters;');
       for (const rawString of strings.raw) {
         console.log(rawString);
       }
     }
     printRaw `\u00A9${ 'and' }\n`;
     // Actual characters:
     // ©
     //（换行符）
     // Escaped characters:
     // \u00A9
     // \n
     ```

### 3.4.7 Symbol 类型 

- Symbol（符号）是 ECMAScript 6 新增的数据类型。符号是原始值，且符号实例是**唯一、不可变的**。符号的用途是**确保对象属性使用唯一标识符**，不会发生属性冲突的危险。  
  - **符号就是用来创建唯一记号，进而用作非字符串形式的对象属性。**

1. **符号的基本用法  **

   1. 符号需要使用 `Symbol()` 函数初始化。因为符号本身是原始类型，所以 `typeof` 操作符对符号返回 `symbol`。  

      ```javascript
      let sym = Symbol();
      console.log(typeof sym); // symbol
      ```

   2. 调用 `Symbol()` 函数时，也可以传入一个字符串参数作为对符号的描述（ `description`），将来可以通过这个字符串来调试代码。但是，这个字符串参数与符号定义或标识完全无关：  

      ```javascript
      let genericSymbol = Symbol();
      let otherGenericSymbol = Symbol();
      let fooSymbol = Symbol('foo');
      let otherFooSymbol = Symbol('foo');
      console.log(genericSymbol == otherGenericSymbol); // false
      console.log(fooSymbol == otherFooSymbol); // false
      ```

   3. 符号没有字面量语法，这也是它们发挥作用的关键。按照规范，你只要创建 Symbol() 实例并将其用作对象的新属性，就可以保证它不会覆盖已有的对象属性，无论是符号属性还是字符串属性。  

      ```javascript
      let genericSymbol = Symbol();
      console.log(genericSymbol); // Symbol()
      let fooSymbol = Symbol('foo');
      console.log(fooSymbol); // Symbol(foo);
      ```

   4. 最重要的是， **Symbol() 函数不能与 new 关键字一起作为构造函数使用**。这样做是为了避免创建符号包装对象，像使用 Boolean、 String 或 Number 那样，它们都支持构造函数且可用于初始化包含原始值的包装对象：  

      ```javascript
      let myBoolean = new Boolean();
      console.log(typeof myBoolean); // "object"
      let myString = new String();
      console.log(typeof myString); // "object"
      let myNumber = new Number();
      console.log(typeof myNumber); // "object"
      let mySymbol = new Symbol(); // TypeError: Symbol is not a constructor
      
      // 如果你确实想使用符号包装对象，可以借用 Object()函数：
      let mySymbol = Symbol();
      let myWrappedSymbol = Object(mySymbol);
      console.log(typeof myWrappedSymbol); // "object"
      ```

2. **使用全局符号注册表  **

   1. 如果运行时的不同部分需要共享和重用符号实例，那么可以用一个字符串作为键，在全局符号注册表中创建并重用符号。  

      - 需要使用 `Symbol.for()` 方法：  

        ```javascript
        let fooGlobalSymbol = Symbol.for('foo');
        console.log(typeof fooGlobalSymbol); // symbol
        ```

   2. `Symbol.for()` 对每个字符串键都执行幂等操作。第一次使用某个字符串调用时，它会检查全局运行时注册表，发现不存在对应的符号，于是就会生成一个新符号实例并添加到注册表中。后续使用相同字符串的调用同样会检查注册表，发现存在与该字符串对应的符号，然后就会返回该符号实例。  

      ```javascript
      let fooGlobalSymbol = Symbol.for('foo'); // 创建新符号
      let otherFooGlobalSymbol = Symbol.for('foo'); // 重用已有符号
      
      console.log(fooGlobalSymbol === otherFooGlobalSymbol); // true
      ```

   3. 即使采用相同的符号描述，在**全局注册表**中定义的符号跟使用 `Symbol()` 定义的符号也并不等同：

      ```javascript
      let localSymbol = Symbol('foo');
      let globalSymbol = Symbol.for('foo');
      
      console.log(localSymbol === globalSymbol); // false
      ```

   4. **全局注册表中的符号必须使用字符串键**来创建，因此作为参数传给 `Symbol.for()`的任何值都会被转换为字符串。此外，注册表中使用的键同时也会被用作符号描述。  

      ```javascript
      let emptyGlobalSymbol = Symbol.for();
      console.log(emptyGlobalSymbol); // Symbol(undefined)
      ```

   5. 还可以使用 **`Symbol.keyFor()`来查询全局注册表**，这个方法接收符号，返回该全局符号对应的字符串键。如果查询的不是全局符号，则返回 undefined。  

      ```javascript
      // 创建全局符号
      let s = Symbol.for('foo');
      console.log(Symbol.keyFor(s)); // foo
      
      // 创建普通符号
      let s2 = Symbol('bar');
      console.log(Symbol.keyFor(s2)); // undefined
      
      // 如果传给 Symbol.keyFor()的不是符号，则该方法抛出 TypeError：
      Symbol.keyFor(123); // TypeError: 123 is not a symbol
      ```

3. **使用符号作为属性  **

   1. 凡是可以使用字符串或数值作为属性的地方，都可以使用符号。这就包括了对象字面量属性和`Object.defineProperty()/Object.defineProperties()`定义的属性。对象字面量只能在计算属性语法中使用符号作为属性。  

      ```javascript
      let s1 = Symbol('foo'),
        s2 = Symbol('bar'),
        s3 = Symbol('baz'),
        s4 = Symbol('qux');
      let o = {
        [s1]: 'foo val'
      };
      // 这样也可以： o[s1] = 'foo val';
      console.log(o);
      // {Symbol(foo): foo val}
      Object.defineProperty(o, s2, {
        value: 'bar val'
      });
      console.log(o);
      // {Symbol(foo): foo val, Symbol(bar): bar val}
      Object.defineProperties(o, {
        [s3]: {
          value: 'baz val'
        },
        [s4]: {
          value: 'qux val'
        }
      });
      console.log(o);
      // {Symbol(foo): foo val, Symbol(bar): bar val,
      // Symbol(baz): baz val, Symbol(qux): qux val}
      ```

   2. 类似于 `Object.getOwnPropertyNames()`返回对象实例的常规属性数组， `Object.getOwnPropertySymbols()`返回对象实例的符号属性数组。这两个方法的返回值彼此互斥。 `Object.getOwnPropertyDescriptors()`会返回同时包含常规和符号属性描述符的对象。 `Reflect.ownKeys()`会返回两种类型的键：  

      ```javascript
      let s1 = Symbol('foo'),
        s2 = Symbol('bar');
      let o = {
        [s1]: 'foo val',
        [s2]: 'bar val',
        baz: 'baz val',
        qux: 'qux val'
      };
      console.log(Object.getOwnPropertySymbols(o));
      // [Symbol(foo), Symbol(bar)]
      console.log(Object.getOwnPropertyNames(o));
      // ["baz", "qux"]
      console.log(Object.getOwnPropertyDescriptors(o));
      // {baz: {...}, qux: {...}, Symbol(foo): {...}, Symbol(bar): {...}}
      console.log(Reflect.ownKeys(o));
      // ["baz", "qux", Symbol(foo), Symbol(bar)]
      ```

   3. 因为符号属性是对内存中符号的一个引用，所以直接创建并用作属性的符号不会丢失。但是，如果没有显式地保存对这些属性的引用，那么必须遍历对象的所有符号属性才能找到相应的属性键：  

      ```javascript
      let o = {
        [Symbol('foo')]: 'foo val',
        [Symbol('bar')]: 'bar val'
      };
      console.log(o);
      // {Symbol(foo): "foo val", Symbol(bar): "bar val"}
      let barSymbol = Object.getOwnPropertySymbols(o)
        .find((symbol) => symbol.toString().match(/bar/));
      console.log(barSymbol);
      // Symbol(bar)
      ```

      

4. **常用内置符号  **

   1. 常用内置符号（ **well-known symbol**），用于暴露语言内部行为，开发者可以直接访问、重写或模拟这些行为。这些内置符号都以 Symbol 工厂函数字符串属性的形式存在。  
   2. 这些内置符号最重要的用途之一是重新定义它们，从而改变原生结构的行为。比如，我们知道 for-of 循环会在相关对象上使用 Symbol.iterator 属性，那么就可以通过在自定义对象上重新定义 Symbol.iterator 的值，来改变 for-of 在迭代该对象时的行为。
   3. 这些内置符号也没有什么特别之处，它们就是全局函数 Symbol 的普通字符串属性，指向一个符号的实例。所有内置符号属性都是不可写、不可枚举、不可配置的。  
   4. @@iterator 指的就是 Symbol.iterator  

5. **`Symbol.asyncIterator`  **

   1. 这个符号作为一个属性表示“一个方法， 该方法返回对象默认的 AsyncIterator。由 for-await-of 语句使用”。换句话说，这个符号表示实现异步迭代器 API 的函数。  

6. **`Symbol.hasInstance`  **

   1. 这个符号作为一个属性表示“一个方法，该方法决定一个构造器对象是否认可一个对象是它的实例。由 instanceof 操作符使用”。 instanceof 操作符可以用来确定一个对象实例的原型链上是否有原型。   

7. **`Symbol.isConcatSpreadable`  **

   1. 这个符号作为一个属性表示“一个布尔值，如果是 true，则意味着对象应该用 `Array.prototype.concat()`打平其数组元素”。  ES6 中的 `Array.prototype.concat()`方法会根据接收到的对象类型选择如何将一个类数组对象拼接成数组实例。覆盖 `Symbol.isConcatSpreadable` 的值可以修改这个行为。  

8. **`Symbol.iterator  `**

   1. 这个符号作为一个属性表示“一个方法，该方法返回对象默认的迭代器。由 for-of 语句使用”。换句话说，这个符号表示实现迭代器 API 的函数。  

9. **`Symbol.match  `**

   1. 这个符号作为一个属性表示“一个正则表达式方法，该方法用正则表达式去匹配字符串。由 `String.prototype.match()`方法使用”。 `String.prototype.match()`方法会使用以 `Symbol.match` 为键的函数来对正则表达式求值。  

   2. 正则表达式的原型上默认有这个函数的定义，因此所有正则表达式实例默认是这个 String 方法的有效参数  

      ```javascript
      console.log(RegExp.prototype[Symbol.match]);
      // ƒ [Symbol.match]() { [native code] }
      console.log('foobar'.match(/bar/));
      // ["bar", index: 3, input: "foobar", groups: undefined]
      ```

10. **`Symbol.replace  `**

    1. 这个符号作为一个属性表示“一个正则表达式方法，该方法替换一个字符串中匹配的子串。由 String.prototype.replace()方法使用”。 String.prototype.replace() 方法会使用以 Symbol.replace 为键的函数来对正则表达式求值。

11. **`Symbol.search  `**

    1. 这个符号作为一个属性表示“一个正则表达式方法，该方法返回字符串中匹配正则表达式的索引。由 String.prototype.search()方法使用”。String.prototype.search()方法会使用以 Symbol.search 为键的函数来对正则表达式求值。  

12. **`Symbol.species  `**

    1. 这个符号作为一个属性表示“一个函数值，该函数作为创建派生对象的构造函数”。这个属性在内置类型中最常用，用于对内置类型实例方法的返回值暴露实例化派生对象的方法。用 Symbol.species 定义静态的获取器（ getter）方法，可以覆盖新创建实例的原型定义：  

       ```javascript
       class Bar extends Array {}
       class Baz extends Array {
         static get[Symbol.species]() {
           return Array;
         }
       }
       let bar = new Bar();
       console.log(bar instanceof Array); // true
       console.log(bar instanceof Bar); // true
       bar = bar.concat('bar');
       console.log(bar instanceof Array); // true
       console.log(bar instanceof Bar); // true
       let baz = new Baz();
       console.log(baz instanceof Array); // true
       console.log(baz instanceof Baz); // true
       baz = baz.concat('baz');
       console.log(baz instanceof Array); // true
       console.log(baz instanceof Baz); // false
       ```

13. **`Symbol.split  `**

    1. 这个符号作为一个属性表示“一个正则表达式方法，该方法在匹配正则表达式的索引位置拆分字符串。由 String.prototype.split()方法使用” 。 String.prototype.split()方法会使用以 Symbol.split 为键的函数来对正则表达式求值。  

14. **`Symbol.toPrimitive  `**

    1. 这个符号作为一个属性表示“一个方法，该方法将对象转换为相应的原始值。由 ToPrimitive 抽象操作使用”。很多内置操作都会尝试强制将对象转换为原始值，包括字符串、数值和未指定的原始类型。对于一个自定义对象实例，通过在这个实例的Symbol.toPrimitive 属性上定义一个函数可以改变默认行为。  

15. **`Symbol.toStringTag  `**

    1. 这个符号作为一个属性表示“一个字符串，该字符串用于创建对象的默认字符串描述。由内置方法 Object.prototype.toString()使用”。  

16. **`Symbol.unscopables  `**

    1. 这个符号作为一个属性表示“一个对象，该对象所有的以及继承的属性，都会从关联对象的 with 环境绑定中排除”。设置这个符号并让其映射对应属性的键值为 true，就可以阻止该属性出现在 with 环境绑定中，如下例所示：  
    2. 注意 不推荐使用 with，因此也不推荐使用 Symbol.unscopables。  

    

### 3.4.8 Object 类型 

1. Object 的实例本身并不是很有用，但理解与它相关的概念非常重要。类似 Java 中的java.lang.Object， ECMAScript 中的 Object 也是派生其他对象的基类。 Object 类型的所有属性和方法在派生的对象上同样存在。  
2. 每个 Object 实例都有如下属性和方法。  
   1. **constructor**：用于创建当前对象的函数。在前面的例子中，这个属性的值就是 Object()
      函数。
   2. **hasOwnProperty(propertyName)**：用于判断当前对象实例（不是原型）上是否存在给定的属性。要检查的属性名必须是字符串（如 o.hasOwnProperty("name")）或符号。
   3. **isPrototypeOf(object)**：用于判断当前对象是否为另一个对象的原型。（第 8 章将详细介绍原型。）
   4. **propertyIsEnumerable(propertyName)**：用于判断给定的属性是否可以使用（本章稍后讨论的） for-in 语句枚举。与 **hasOwnProperty()**一样，属性名必须是字符串。
   5. **toLocaleString()**：返回对象的字符串表示，该字符串反映对象所在的本地化执行环境。
   6. **toString()**：返回对象的字符串表示。
   7. **valueOf()**：返回对象对应的字符串、数值或布尔值表示。通常与 toString()的返回值相同。
3. 因为在 ECMAScript 中 Object 是所有对象的基类，所以任何对象都有这些属性和方法。第 8 章将介绍对象间的继承机制。  
4. 注意：严格来讲， ECMA-262 中对象的行为不一定适合 JavaScript 中的其他对象。比如浏览器环境中的 BOM 和 DOM 对象，都是由宿主环境定义和提供的宿主对象。而宿主对象不受 ECMA-262 约束，所以它们可能会也可能不会继承 Object。  



## 3.5　操作符 56

### 3.5.1 一元操作符

只操作一个值的操作符叫一元操作符（ **unary operator**）。一元操作符是 ECMAScript 中最简单的操作符。  

1. 递增/递减操作符

   - 递增和递减操作符直接照搬自 C 语言  

   - 这 4 个操作符**可以作用于任何值**，意思是不限于整数——字符串、布尔值、浮点值，甚至对象都可以。递增和递减操作符遵循如下规则。  

     1. 对于字符串，如果是有效的数值形式，则转换为数值再应用改变。变量类型从字符串变成数值。
     2. 对于字符串，如果不是有效的数值形式，则将变量的值设置为 NaN 。变量类型从字符串变成数值。
     3. 对于布尔值，如果是 false，则转换为 0 再应用改变。变量类型从布尔值变成数值。
     4. 对于布尔值，如果是 true，则转换为 1 再应用改变。变量类型从布尔值变成数值。
     5. 对于浮点值，加 1 或减 1。
     6. 如果是对象，则调用其（第 5 章会详细介绍的） valueOf()方法取得可以操作的值。对得到的值应用上述规则。如果是 NaN，则调用 toString()并再次应用其他规则。变量类型从对象变成数值。  

     ```javascript
     let s1 = "2";
     let s2 = "z";
     let b = false;
     let f = 1.1;
     let o = {
       valueOf() {
         return -1;
       }
     };
     s1++; // 值变成数值 3
     s2++; // 值变成 NaN
     b++; // 值变成数值 1
     f--; // 值变成 0.10000000000000009（因为浮点数不精确）
     o--; // 值变成-2
     ```

2. 一元加和减  

   1. 如果将一元加应用到非数值，则会执行与使用 Number()转型函数一样的类型转换：布尔值 false和 true 转换为 0 和 1，字符串根据特殊规则进行解析，对象会调用它们的 valueOf() 和/或 toString() 方法以得到可以转换的值。

      下面的例子演示了一元加在应用到不同数据类型时的行为：    

      ```javascript
      let s1 = "01";
      let s2 = "1.1";
      let s3 = "z";
      let b = false;
      let f = 1.1;
      let o = {
        valueOf() {
          return -1;
        }
      };
      s1 = +s1; // 值变成数值 1
      s2 = +s2; // 值变成数值 1.1
      s3 = +s3; // 值变成 NaN
      b = +b; // 值变成数值 0
      f = +f; // 不变，还是 1.1
      o = +o; // 值变成数值-1
      ```

      

### 3.5.2 位操作符

1. 按位非  
   1. 按位非操作符用波浪符（ `~`）表示，它的作用是返回数值的一补数。按位非是ECMAScript 中为数不多的几个二进制数学操作符之一。  
2. 按位与  
   1. 按位与操作符用和号（ `&`）表示，有两个操作数。本质上，按位与就是将两个数的每一个位对齐，然后基于真值表中的规则，对每一位执行相应的与操作。  
3. 按位或  
   1. 按位或操作符用管道符（ `|`）表示，同样有两个操作数。  
4. 按位异或
   1. 按位异或用脱字符（ `^`）表示，同样有两个操作数。  
5. 左移
   1. 左移操作符用两个小于号（ `<<`）表示，会按照指定的位数将数值的所有位向左移动。  
6. 有符号右移
   1. 有符号右移由两个大于号（ `>>`）表示，会将数值的所有 32 位都向右移，同时保留符号（正或负）。有符号右移实际上是左移的逆运算。  
7. 无符号右移
   1. 无符号右移用 3 个大于号表示（ `>>>`），会将数值的所有 32 位都向右移。对于正数，无符号右移与有符号右移结果相同。  

### 3.5.3 布尔操作符

布尔操作符一共有 3 个：逻辑非、逻辑与和逻辑或。  

1. 逻辑非

   1. 逻辑非操作符由一个叹号（ `!`）表示，可应用给 ECMAScript 中的任何值。这个操作符始终返回布尔值，无论应用到的是什么数据类型。逻辑非操作符首先将操作数转换为布尔值，然后再对其取反。

   2. 逻辑非操作符也可以用于把任意值转换为布尔值。同时使用两个叹号（ `!!`），相当于调用了转型函数 `Boolean()`。无论操作数是什么类型，**第一个叹号总会返回布尔值**。**第二个叹号对该布尔值取反**，从而给出变量真正对应的布尔值。结果与对同一个值使用 `Boolean()`函数是一样的：  

      ```javascript
      console.log(!!"blue"); // true
      console.log(!!0); // false
      console.log(!!NaN); // false
      console.log(!!""); // false
      console.log(!!12345); // true
      ```

      

2. 逻辑与

   1. 逻辑与操作符由两个和号（ `&&`）表示  
   2. 逻辑与操作符**可用于任何类型的操作数**，不限于布尔值。如果有操作数不是布尔值，则逻辑与并不一定会返回布尔值，而是遵循如下规则：
      1. 如果第一个操作数是对象，则返回第二个操作数。
      2. 如果第二个操作数是对象，则只有第一个操作数求值为 true 才会返回该对象。
      3. 如果两个操作数都是对象，则返回第二个操作数。
      4. 如果有一个操作数是 null，则返回 null。
      5. 如果有一个操作数是 NaN，则返回 NaN。
      6. 如果有一个操作数是 undefined，则返回 undefined。  
   3. 逻辑与操作符是一种**短路操作符**，意思就是如果第一个操作数决定了结果，那么永远不会对第二个操作数求值。  

3. 逻辑或

   1. 逻辑或操作符由两个管道符（ `||`）表示  
   2. 与逻辑与类似，如果有一个操作数不是布尔值，那么逻辑或操作符也不一定返回布尔值。它遵循如下规则：
      1. 如果第一个操作数是对象，则返回第一个操作数。
      2. 如果第一个操作数求值为 false，则返回第二个操作数。
      3. 如果两个操作数都是对象，则返回第一个操作数。
      4. 如果两个操作数都是 null，则返回 null。
      5. 如果两个操作数都是 NaN，则返回 NaN。
      6. 如果两个操作数都是 undefined，则返回 undefined。  
   3. 同样与逻辑与类似，逻辑或操作符也具有**短路的特性**。只不过对逻辑或而言，第一个操作数求值为true，第二个操作数就不会再被求值了。  

### 3.5.4 乘性操作符

ECMAScript 定义了 3 个乘性操作符：乘法、除法和取模。这些操作符跟它们在 Java、 C 语言及 Perl 中对应的操作符作用一样，但在处理非数值时，它们也会包含一些自动的类型转换。如果乘性操作符有不是数值的操作数，则该操作数会在后台被使用 Number()转型函数转换为数值。这意味着空字符串会被当成 0，而布尔值 true 会被当成 1。  

1. 乘法操作符
   1. 乘法操作符由一个星号（ *）表示，可以用于计算两个数值的乘积。  
   2. 如果有任一操作数是 NaN，则返回 NaN。  
   3. 如果是 Infinity 乘以 0，则返回 NaN。
   4. 如果是 Infinity 乘以非 0 的有限数值，则根据第二个操作数的符号返回 Infinity 或-Infinity。
   5. 如果是 Infinity 乘以 Infinity，则返回 Infinity。
   6. 如果有不是数值的操作数，则先在后台用 Number()将其转换为数值，然后再应用上述规则。  
2. 除法操作符
   1. 除法操作符由一个斜杠（ /）表示，用于计算第一个操作数除以第二个操作数的商。
   2. 如果 ECMAScript不能表示商， 则返回Infinity 或-Infinity。  
   3. 如果有任一操作数是 NaN，则返回 NaN。
   4. 如果是 Infinity 除以 Infinity，则返回 NaN。
   5. 如果是 0 除以 0，则返回 NaN。
   6. 如果是非 0 的有限值除以 0，则根据第一个操作数的符号返回 Infinity 或-Infinity。
   7. 如果是 Infinity 除以任何数值，则根据第二个操作数的符号返回 Infinity 或-Infinity。
   8. 如果有不是数值的操作数，则先在后台用 Number()函数将其转换为数值，然后再应用上述规则。  
3. 取模操作符
   1. 取模（余数）操作符由一个百分比符号（ %）表示 。
   2. 如果被除数是无限值，除数是有限值，则返回 NaN。
   3. 如果被除数是有限值，除数是 0，则返回 NaN。
   4. 如果是 Infinity 除以 Infinity，则返回 NaN。
   5. 如果被除数是有限值，除数是无限值，则返回被除数。
   6. 如果被除数是 0，除数不是 0，则返回 0。
   7. 如果有不是数值的操作数，则先在后台用 Number()函数将其转换为数值，然后再应用上述规则。  

### 3.5.5 指数操作符 

ECMAScript 7 新增了指数操作符， `Math.pow()` 现在有了自己的操作符 `**`，结果是一样的：  

```javascript
console.log(Math.pow(3, 2); // 9
console.log(3 ** 2); // 9
console.log(Math.pow(16, 0.5); // 4
console.log(16** 0.5); // 4
```

不仅如此，指数操作符也有自己的**指数赋值操作符** `**=`，该操作符执行指数运算和结果的赋值操作：

```javascript
let squared = 3;
squared **= 2;
console.log(squared); // 9  
sqrt = 16;
sqrt **= 0.5;
console.log(sqrt); // 4
```



### 3.5.6 加性操作符 

加法和减法操作符，  在 ECMAScript 中，这两个操作符拥有一些特殊的行为。与乘性操作符类似，加性操作符在后台会发生不同数据类型的转换。只不过对这两个操作符来说，转换规则不是那么直观。  

1. 加法操作符  
   1. 如果两个操作数都是数值，加法操作符执行加法运算并根据如下规则返回结果：
      - 如果有任一操作数是 NaN，则返回 NaN；
      - 如果是 Infinity 加 Infinity，则返回 Infinity；
      - 如果是-Infinity 加-Infinity，则返回-Infinity；
      - 如果是 Infinity 加-Infinity，则返回 NaN；
      - 如果是+0 加+0，则返回+0；
      - 如果是-0 加+0，则返回+0；
      - 如果是-0 加-0，则返回-0。 
   2. 如果有一个操作数是字符串，则要应用如下规则：
      - 如果两个操作数都是字符串，则将第二个字符串**拼接**到第一个字符串后面；
      - 如果只有一个操作数是字符串，则将另一个操作数转换为字符串，再将两个字符串**拼接**在一起。
   3. 如果有任一操作数是对象、数值或布尔值，则调用它们的 toString()方法以获取字符串，然后再应用前面的关于字符串的规则。对于 undefined 和 null，则调用 String()函数，分别获取"undefined"和"null"。   
2. 减法操作符  
   1. 如果有任一操作数是字符串、布尔值、 null 或 undefined，则先在后台使用 `Number()`将其转换为数值，然后再根据前面的规则执行数学运算。如果转换结果是 NaN，则减法计算的结果是NaN。
   2. 如果有任一操作数是对象，则调用其 `valueOf()`方法取得表示它的数值。如果该值是 NaN，则减法计算的结果是 NaN。如果对象没有 `valueOf()`方法，则调用其`toString()`方法，然后再将得到的字符串转换为数值。  

### 3.5.7 关系操作符 

关系操作符执行比较两个值的操作，包括小于（ `<`）、大于（ `>`）、小于等于（ `<=`）和大于等于（ `>=`），用法跟数学课上学的一样。这几个操作符都返回布尔值。

1. 与 ECMAScript 中的其他操作符一样，在将它们应用到不同数据类型时也会发生类型转换和其他行为。
   - 如果操作数都是数值，则执行数值比较。
   - 如果操作数都是字符串，则逐个比较字符串中对应字符的编码。
   - 如果有任一操作数是数值，则将另一个操作数转换为数值，执行数值比较。
   - 如果有任一操作数是对象，则调用其 valueOf()方法，取得结果后再根据前面的规则执行比较。
   如果没有 valueOf()操作符，则调用 toString()方法，取得结果后再根据前面的规则执行比较。
   - 如果有任一操作数是布尔值，则将其转换为数值再执行比较。

2. 在使用关系操作符比较两个字符串时，会发生一个有趣的现象。很多人认为小于意味着“字母顺序靠前”，而大于意味着“字母顺序靠后”，实际上不是这么回事。对字符串而言，关系操作符会比较字符串中对应字符的编码，而这些编码是数值。比较完之后，会返回布尔值。问题的关键在于，大写字母的编码都小于小写字母的编码，因此以下这种情况就会发生：  

   ```javascript
   let result = "Brick" < "alphabet"; // true
   ```

   1. 在这里，字符串"Brick"被认为小于字符串"alphabet"，因为字母 B 的编码是 66，字母 a 的编码是 97。要得到确实按字母顺序比较的结果，就必须把两者都**转换为相同的大小写形式**（全大写或全小写），然后再比较。

   ```javascript
   let result = "23" < "3"; // true
   ```

   1. 因为两个操作数都是字符串，所以会逐个比较它们的字符编码（字符"2"的编码是 50，而字符"3"的编码是 51）。不过，如果有一个操作数是数值，那么比较的结果就对了 。

### 3.5.8 相等操作符 

判断两个变量是否相等是编程中最重要的操作之一。在比较字符串、数值和布尔值是否相等时，过程都很直观。但是在比较两个对象是否相等时，情形就比较复杂了。 ECMAScript 中的相等和不相等操作符，原本在比较之前会执行类型转换，但很快就有人质疑这种转换是否应该发生。最终， ECMAScript  提供了两组操作符。第一组是等于和不等于，它们在比较之前执行转换。第二组是全等和不全等，它们在比较之前不执行转换。  

1. 等于和不等于（ `==`）  （ `!=`）  

   1. 这两个操作符都会先进行类型转换（通常称为强制类型转换）再确定操作数是否相等。

   2. 在转换操作数的类型时，相等和不相等操作符遵循如下规则。
      - 如果任一操作数是布尔值，则将其转换为数值再比较是否相等。 false 转换为 0， true 转换为 1。
      - 如果一个操作数是字符串，另一个操作数是数值，则尝试将字符串转换为数值，再比较是否相等。
      - 如果一个操作数是对象，另一个操作数不是，则调用对象的 valueOf()方法取得其原始值，再根据前面的规则进行比较。

   3. 在进行比较时，这两个操作符会遵循如下规则。
      - null 和 undefined 相等。
      - null 和 undefined 不能转换为其他类型的值再进行比较。
      - 如果有任一操作数是 NaN，则相等操作符返回 false，不相等操作符返回 true。记住：即使两个操作数都是 NaN，相等操作符也返回 false，因为按照规则， NaN 不等于 NaN。
      - 如果两个操作数都是对象，则比较它们是不是同一个对象。如果两个操作数都指向同一个对象，则相等操作符返回 true。否则，两者不相等。    

   4. 一些特殊情况及比较的结果：

      ![image-20210710161827359](JavaScript高级程序设计第四版-笔记.assets/image-20210710161827359.png)

2. 全等和不全等（ `=== 、!==`  ）

   1. 全等和不全等操作符与相等和不相等操作符类似，只不过它们在比较相等时不转换操作数。  
   2. 虽然 null == undefined 是 true（因为这两个值类似），但 null === undefined 是 false，因为它们不是相同的数据类型。  

### 3.5.9 条件操作符 

条件操作符是 ECMAScript 中用途最为广泛的操作符之一，语法跟 Java 中一样：

```javascript
variable = boolean_expression ? true_value : false_value;
```



### 3.5.10 赋值操作符 

1. 简单赋值用等于号（ =）表示，将右手边的值赋给左手边的变量 。

2. 复合赋值使用乘性、加性或位操作符后跟等于号（ =）表示。  

3. 每个数学操作符以及其他一些操作符都有对应的复合赋值操作符：  

   - 乘后赋值（ `*=`）
   - 除后赋值（ `/=`）
   - 取模后赋值（ `%=`）
   - 加后赋值（ `+=`）
   - 减后赋值（ `-=`）
   - 左移后赋值（ `<<=`）
   - 右移后赋值（ `>>=`）
   - 无符号右移后赋值（ `>>>=`）  



### 3.5.11 逗号操作符 

逗号操作符可以用来在一条语句中执行多个操作，如下所示：  

```javascript
let num1 = 1, num2 = 2, num3 = 3;
```

在一条语句中同时声明多个变量是逗号操作符最常用的场景。不过，也可以使用逗号操作符来辅助
赋值。在赋值时使用逗号操作符分隔值，最终会返回表达式中最后一个值：  

```javascript
let num = (5, 1, 4, 8, 0); // num 的值为 0
```



## 3.6　语句 73

ECMA-262 描述了一些语句（也称为**流控制语句**），而 ECMAScript 中的大部分语法都体现在语句中。语句通常使用一或多个关键字完成既定的任务。语句可以简单，也可以复杂。简单的如告诉函数退出，复杂的如列出一堆要重复执行的指令。  

### 3.6.1 if 语句 

1. 这里的条件（ condition）**可以是任何表达式**，并且求值结果不一定是布尔值。 ECMAScript 会自动调用 `Boolean()`函数将这个表达式的值转换为布尔值。  

### 3.6.2 do-while 语句 

1. do-while 语句是一种后测试循环语句，即循环体中的代码执行后才会对退出条件进行求值。换句话说，循环体内的代码至少执行一次。  

### 3.6.3 while 语句 

1. while 语句是一种先测试循环语句，即先检测退出条件，再执行循环体内的代码。因此， while 循环体内的代码有可能不会执行。  

### 3.6.4 for 语句 

1. for 语句也是先测试语句，只不过增加了进入循环之前的初始化代码，以及循环执行后要执行的表达式。 

2. 初始化、条件表达式和循环后表达式都不是必需的。因此，下面这种写法可以创建一个无穷循环：  

   ```javascript
   for (;;) { // 无穷循环
   	doSomething();
   }
   
   
   // 如果只包含条件表达式，那么 for 循环实际上就变成了 while 循环：
   let count = 10;
   let i = 0;
   for (; i < count; ) {
   	console.log(i);
   	i++;
   }
   ```

   

### 3.6.5 for-in 语句 

for-in 语句是一种严格的迭代语句，用于枚举对象中的非符号键属性，语法如下：  

```javascript
for (property in expression) statement
```

下面是一个例子：

```javascript
for (const propName in window) {
	document.write(propName);
}  
```

1. 与 for 循环一样，这里控制语句中的 const 也不是必需的。但为了确保这个局部变量不被修改，推荐使用 const。  
2. ECMAScript 中对象的属性是无序的，因此 for-in 语句不能保证返回对象属性的顺序。  
3. 如果 for-in 循环要迭代的变量是 null 或 undefined，则不执行循环体。  

### 3.6.6 for-of 语句 

for-of 语句是一种严格的迭代语句，用于遍历可迭代对象的元素，语法如下：  

```javascript
for (property of expression) statement

// 下面是示例：
for (const el of [2,4,6,8]) {
	document.write(el);
}  
```

1. 在这个例子中，我们使用 for-of 语句显示了一个包含 4 个元素的数组中的所有元素。循环会一直持续到将所有元素都迭代完。与 for 循环一样，这里控制语句中的 const 也不是必需的。但为了确保这个局部变量不被修改，推荐使用 const。
2. for-of 循环会按照可迭代对象的 `next()`方法产生值的顺序迭代元素。关于可迭代对象，本书将在第 7 章详细介绍。  
3. 注意 **ES2018** 对 for-of 语句进行了扩展，增加了 `for-await-of` 循环，以支持生成期约（ promise）的异步可迭代对象。相关内容将在附录 A 介绍。  

### 3.6.7 标签语句 

标签语句用于给语句加标签，语法如下：

```javascript
label: statement

// 下面是一个例子：
start: for (let i = 0; i < count; i++) {
	console.log(i);
}
```

在这个例子中， start 是一个标签，可以在后面通过 break 或 continue 语句引用。标签语句的典型应用场景是嵌套循环。  

### 3.6.8 break 和 continue 语句 

break 和 continue 语句为执行循环代码提供了更严格的控制手段。其中， break 语句用于立即退出循环，强制执行循环后的下一条语句。而 continue 语句也用于立即退出循环，但会再次从循环顶部开始执行。  

break 和 continue 都可以与标签语句一起使用，返回代码中特定的位置。这通常是在嵌套循环中，如下面的例子所示：

```javascript
let num = 0;
outermost:
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (i == 5 && j == 5) {
        break outermost;
      }
      num++;
    }
  }
console.log(num); // 55  
```

在这个例子中， outermost 标签标识的是第一个 for 语句。正常情况下，每个循环执行 10 次，意味着 num++语句会执行 100 次，而循环结束时 console.log 的结果应该是 100。但是， break 语句带来了一个变数，即要退出到的标签。添加标签不仅让 break 退出（使用变量 j 的）内部循环，也会退出（使用变量 i 的）外部循环。当执行到 i 和 j 都等于 5 时，循环停止执行，此时 num 的值是 55。  

组合使用标签语句和 break、 continue 能实现复杂的逻辑，但也容易出错。注意标签要使用描述性强的文本，而嵌套也不要太深。  



### 3.6.9 with 语句

警告：由于 with 语句影响性能且难于调试其中的代码，通常不推荐在产品代码中使用 with语句。

with 语句的用途是将代码作用域设置为特定的对象，其语法是：
`with (expression) statement;`
使用 with 语句的主要场景是针对一个对象反复操作，这时候将代码作用域设置为该对象能提供便利，如下面的例子所示：

```javascript
let qs = location.search.substring(1);
let hostName = location.hostname;
let url = location.href;
```

上面代码中的每一行都用到了 location 对象。如果使用 with 语句，就可以少写一些代码：

```javascript
with(location) {
  let qs = search.substring(1);
  let hostName = hostname;
  let url = href;
}
```

这里， with 语句用于连接 location 对象。这意味着在这个语句内部，每个变量首先会被认为是一个局部变量。如果没有找到该局部变量，则会搜索 location 对象，看它是否有一个同名的属性。如果有，则该变量会被求值为 location 对象的属性。
严格模式不允许使用 with 语句，否则会抛出错误。  

### 3.6.10 switch 语句  

switch 语句是与 if 语句紧密相关的一种流控制语句，从其他语言借鉴而来。 ECMAScript 中 switch语句跟 C 语言中 switch 语句的语法非常相似 。

1. 首先，switch 语句**可以用于所有数据类型**（在很多语言中，它只能用于数值），因此可以使用字符串甚至对象。其次，**条件的值不需要是常量，也可以是变量或表达式。**  
2. 注意 switch 语句在比较每个条件的值时会**使用全等操作符**，因此不会强制转换数据类型（比如，字符串"10"不等于数值 10）。  



## 3.7　函数 80

函数对任何语言来说都是核心组件，因为它们可以封装语句，然后在任何地方、任何时间执行。
ECMAScript 中的函数使用 function 关键字声明，后跟一组参数，然后是函数体。  

1. 严格模式对函数也有一些限制：
   - 函数不能以 eval 或 arguments 作为名称；
   - 函数的参数不能叫 eval 或 arguments；
   - 两个命名参数不能拥有同一个名称。
   如果违反上述规则，则会导致语法错误，代码也不会执行。  

3.8　小结 82

# 第4章　变量、作用域与内存

## 4.1　原始值与引用值

1. ECMAScript 变量可以包含两种不同类型的数据：原始值和引用值。 原始值（ primitive value）就是最简单的数据， 引用值（ reference value）则是由多个值构成的对象。
2. 在把一个值赋给变量时， JavaScript 引擎必须确定这个值是原始值还是引用值。上一章讨论了 **6 种原始值**： `Undefined、 Null、 Boolean、 Number、 String 和 Symbol`。保存原始值的变量是按值（ by value）访问的，因为我们操作的就是存储在变量中的实际值。
3. **引用值是保存在内存中的对象**。与其他语言不同， JavaScript 不允许直接访问内存位置，因此也就不能直接操作对象所在的内存空间。在操作对象时，实际上操作的是对该对象的引用（reference）而非实际的对象本身。为此，保存引用值的变量是按引用（ by reference）访问的。  

### 4.1.1 动态属性

1. 对于引用值而言，可以随时添加、修改和删除其属性和方法。 

2. 原始值不能有属性，尽管尝试给原始值添加属性不会报错。   

3. 注意，原始类型的初始化可以只使用原始字面量形式。如果使用的是 new 关键字，则 JavaScript 会创建一个 Object 类型的实例，但其行为类似原始值。下面来看看这两种初始化方式的差异：  

   ```javascript
   let name1 = "Nicholas";
   let name2 = new String("Matt");
   name1.age = 27;
   name2.age = 26;
   console.log(name1.age); // undefined
   console.log(name2.age); // 26
   console.log(typeof name1); // string
   console.log(typeof name2); // object
   ```

   

### 4.1.2 复制值  

1. 除了存储方式不同，原始值和引用值在通过变量复制时也有所不同。在通过变量把一个原始值赋值到另一个变量时，原始值会被复制到新变量的位置。 

2. 在把引用值从一个变量赋给另一个变量时，存储在变量中的值也会被复制到新变量所在的位置。

   - 区别在于，这里复制的值实际上是一个**指针**，它指向存储在堆内存中的对象。
   - 操作完成后，两个变量实际上指向同一个对象，因此一个对象上面的变化会在另一个对象上反映出来。

   ![image-20210710225957749](JavaScript高级程序设计第四版-笔记.assets/image-20210710225957749.png)

   

### 4.1.3 传递参数  

1. ECMAScript 中**所有函数的参数都是按值传递的**。

   - 这意味着函数外的值会被复制到函数内部的参数中，就像从一个变量复制到另一个变量一样。
   - 如果是原始值，那么就跟原始值变量的复制一样，如果是引用值，那么就跟引用值变量的复制一样。  

2. 很多开发者错误地认为，当在局部作用域中修改对象而变化反映到全局时，就意味着参数是按引用传递的。为证明对象是按值传递的，我们再来看看下面这个修改后的例子：  

   ```javascript
   function setName(obj) {
     obj.name = "Nicholas";
     obj = new Object();
     obj.name = "Greg";
   }
   let person = new Object();
   setName(person);
   console.log(person.name); // "Nicholas"
   ```

   - 这个例子前后唯一的变化就是 setName()中多了两行代码，将 obj 重新定义为一个有着不同 name的新对象。
   - 当 person 传入 setName()时，其 name 属性被设置为"Nicholas"。然后变量 obj 被设置为一个新对象且 name 属性被设置为"Greg"。
   - 如果 person 是按引用传递的，那么 person 应该自动将指针改为指向 name 为"Greg"的对象。
   - 可是，当我们再次访问 person.name 时， 它的值是"Nicholas"，这表明函数中参数的值改变之后，原始的引用仍然没变。
   - 当 obj 在函数内部被重写时，它变成了一个指向本地对象的指针。而那个本地对象在函数执行结束时就被销毁了。  

3. **注意** ECMAScript 中函数的参数就是局部变量。  



### 4.1.4 确定类型  

1. typeof 虽然对原始值很有用，但它对引用值的用处不大。我们通常不关心一个值是不是对象，而是想知道它是什么类型的对象。

   - 为了解决这个问题， ECMAScript 提供了 instanceof 操作符，语法如下：
   - `result = variable instanceof constructor  `
   - 如果变量是给定引用类型（由其原型链决定，将在第 8 章详细介绍）的实例，则 instanceof 操作符返回 true。  

   ```javascript
   console.log(person instanceof Object); // 变量 person 是 Object 吗？
   console.log(colors instanceof Array); // 变量 colors 是 Array 吗？
   console.log(pattern instanceof RegExp); // 变量 pattern 是 RegExp 吗？
   ```

   - 按照定义，所有引用值都是 Object 的实例，因此通过 instanceof 操作符检测任何引用值和 Object 构造函数都会返回 true。
   - 类似地，如果用 instanceof 检测原始值，则始终会返回 false，因为原始值不是对象。  

## 4.2　执行上下文与作用域

1. 变量或函数的上下文决定了它们可以访问哪些数据，以及它们的行为。

   - **每个上下文都有一个关联的变量对象（ variable object）**，
   - 而这个上下文中定义的**所有变量和函数都存在于这个对象上**。  

2. 根据 ECMAScript 实现的宿主环境，表示全局上下文的对象可能不一样。

   - 在浏览器中，全局上下文就是我们常说的 window 对象（第 12 章会详细介绍），因此所有通过 var 定义的全局变量和函数都会成为 window 对象的属性和方法。
   - 使用 let 和 const 的顶级声明不会定义在全局上下文中，但在作用域链解析上效果是一样的。  

3. 上下文中的代码在执行的时候，会创建变量对象的一个**作用域链（ scope chain）**。

   - 这个作用域链决定了各级上下文中的代码在访问变量和函数时的顺序。代码**正在执行的上下文的变量对象始终位于作用域链的最前端。**
   - 如果上下文是函数，则其**活动对象（ activation object）用作变量对象**。活动对象最初只有一个定义变量： arguments。（全局上下文中没有这个变量。）作用域链中的下一个变量对象来自包含上下文，再下一个对象来自再下一个包含上下文。以此类推直至全局上下文；**全局上下文的变量对象始终是作用域链的最后一个变量对象。**
   - 代码执行时的标识符解析是通过沿作用域链逐级搜索标识符名称完成的。搜索过程始终从作用域链的最前端开始，然后逐级往后，直到找到标识符。（如果没有找到标识符，那么通常会报错。）  

   ![image-20210710232601499](JavaScript高级程序设计第四版-笔记.assets/image-20210710232601499.png)



### 4.2.1 作用域链增强  

1. 某些语句会导致在作用域链前端临时添加一个上下文，这个上下文在代码执行后会被删除。通常在两种情况下会出现这个现象，即代码执行到下面任意一种情况时：  

   - try/catch 语句的 catch 块
   - with 语句  
   - 这两种情况下，都会在作用域链前端添加一个变量对象。对 with 语句来说，会向作用域链前端添加指定的对象；
   - 对 catch 语句而言，则会创建一个新的变量对象，这个变量对象会包含要抛出的错误对象的声明。看下面的例子：  

   ```javascript
   function buildUrl() {
   let qs = "?debug=true";
     with(location){
       let url = href + qs;
     }
       return url;
   }
   ```

   

### 4.2.2 变量声明  

1. 使用 var 的函数作用域声明  
   - 变量提升（ hoisting）  
2. 使用 let 的块级作用域声明  
   - 作用域是块级的，这也是 JavaScript 中的新概念。块级作用域由最近的一对包含花括号{}界定。  
3. 使用 const的块级作用域声明  
   - 如果想让整个对象都不能修改，可以使用 Object.freeze()，这样再给属性赋值时虽然不会报错，但会静默失败。
4. 标识符查找  
   - 当在特定上下文中为读取或写入而引用一个标识符时，必须通过搜索确定这个标识符表示什么。搜索开始于作用域链前端，以给定的名称搜索对应的标识符。如果在局部上下文中找到该标识符，则搜索停止，变量确定；如果没有找到变量名，则继续沿作用域链搜索。（注意，作用域链中的对象也有一个原型链，因此搜索可能涉及每个对象的原型链。）这个过程一直持续到搜索至全局上下文的变量对象。如果仍然没有找到标识符，则说明其未声明。  
   - 标识符查找并非没有代价。**访问局部变量比访问全局变量要快**，因为不用切换作用域。不过， JavaScript 引擎在优化标识符查找上做了很多工作，将来这个差异可能就微不足道了。  



## 4.3　垃圾回收

JavaScript 是使用垃圾回收的语言，也就是说执行环境负责在代码执行时管理内存。在 C 和 C++等语言中，跟踪内存使用对开发者来说是个很大的负担，也是很多问题的来源。 JavaScript 为开发者卸下了这个负担，通过自动内存管理实现内存分配和闲置资源回收。基本思路很简单：确定哪个变量不会再使用，然后释放它占用的内存。这个过程是周期性的，即垃圾回收程序每隔一定时间（或者说在代码执行过程中某个预定的收集时间）就会自动运行。垃圾回收过程是一个近似且不完美的方案，因为某块内存是否还有用，属于“不可判定的”问题，意味着靠算法是解决不了的。  

在浏览器的发展史上，用到过两种主要的标记策略：标记清理和引用计数。  

### 4.3.1 标记清理  

JavaScript 最常用的垃圾回收策略是**标记清理（ mark-and-sweep）**。当变量进入上下文，比如在函数内部声明一个变量时，这个变量会被加上存在于上下文中的标记。而在上下文中的变量，逻辑上讲，永远不应该释放它们的内存，因为只要上下文中的代码在运行，就有可能用到它们。当变量离开上下文时，也会被加上离开上下文的标记。  

垃圾回收程序运行的时候，会标记内存中存储的所有变量（记住，标记方法有很多种）。然后，它会将所有在上下文中的变量，以及被在上下文中的变量引用的变量的标记去掉。在此之后再被加上标记的变量就是待删除的了，原因是任何在上下文中的变量都访问不到它们了。随后垃圾回收程序做一次内存清理，销毁带标记的所有值并收回它们的内存。  

### 4.3.2 引用计数  

另一种没那么常用的垃圾回收策略是**引用计数（ reference counting）**。其思路是对每个值都记录它被引用的次数。声明变量并给它赋一个引用值时，这个值的引用数为 1。如果同一个值又被赋给另一个变量，那么引用数加 1。类似地，如果保存对该值引用的变量被其他值给覆盖了，那么引用数减 1。当一个值的引用数为 0 时，就说明没办法再访问到这个值了，因此可以安全地收回其内存了。垃圾回收程序下次运行的时候就会释放引用数为 0 的值的内存。  

### 4.3.3 性能  

垃圾回收程序会周期性运行，如果内存中分配了很多变量，则可能造成性能损失，因此垃圾回收的时间调度很重要。  

因此最好的办法是在写代码时就要做到：无论什么时候开始收集垃圾，都能让它尽快结束工作。  

现代垃圾回收程序会基于对 JavaScript 运行时环境的探测来决定何时运行。探测机制因引擎而异，但基本上都是根据已分配对象的大小和数量来判断的。比如，根据 V8 团队 2016 年的一篇博文的说法：“在一次完整的垃圾回收之后， V8 的堆增长策略会根据活跃对象的数量外加一些余量来确定何时再次垃圾回收。”  

### 4.3.4 内存管理  

JavaScript 运行在一个内存管理与垃圾回收都很特殊的环境。分配给浏览器的内存通常比分配给桌面软件的要少很多，分配给移动浏览器的就更少了。这更多出于安全考虑而不是别的，就是为了避免运行大量 JavaScript 的网页耗尽系统内存而导致操作系统崩溃。这个内存限制不仅影响变量分配，也影响调用栈以及能够同时在一个线程中执行的语句数量。

将内存占用量保持在一个较小的值可以让页面性能更好。优化内存占用的最佳手段就是保证在执行代码时只保存必要的数据。如果数据不再必要，那么**把它设置为 null**，从而释放其引用。这也可以叫作**解除引用**。这个建议最适合全局变量和全局对象的属性。  

1. 通过 const 和 let 声明提升性能  

   - 使用这两个新关键字可能会更早地让垃圾回收程序介入，尽早回收应该回收的内存。  

2. 隐藏类和删除操作  

   - V8 在将解释后的 JavaScript代码编译为实际的机器码时会利用“隐藏类”。如果你的代码非常注重性能，那么这一点可能对你很重要。  

   - 运行期间， V8 会将创建的对象与隐藏类关联起来，以跟踪它们的属性特征。能够共享相同隐藏类的对象性能会更好， V8 会针对这种情况进行优化，但不一定总能够做到。比如下面的代码：  

     ```javascript
     function Article() {
       this.title = 'Inauguration Ceremony Features Kazoo Band';
     }
     let a1 = new Article();
     let a2 = new Article();
     
     // 自动转换后的类
     class Article {
       constructor() {
         this.title = 'Inauguration Ceremony Features Kazoo Band';
       }
     }
     let a1 = new Article();
     let a2 = new Article();
     ```

   - V8 会在后台配置，让这两个类实例共享相同的隐藏类，因为这两个实例共享同一个构造函数和原型。假设之后又添加了下面这行代码：  

     ```javascript
     a2.author = 'Jake';
     ```

   - 此时两个 Article 实例就会对应两个不同的隐藏类。根据这种操作的频率和隐藏类的大小，这有可能对性能产生明显影响。

   - 当然，解决方案就是**避免 JavaScript 的“先创建再补充”（ ready-fire-aim）式的动态属性赋值，并在构造函数中一次性声明所有属性。**

   - 使用 delete 关键字会导致生成相同的隐藏类片段。看一下这个例子：  

     ```javascript
     function Article() {
       this.title = 'Inauguration Ceremony Features Kazoo Band';
       this.author = 'Jake';
     }
     let a1 = new Article();
     let a2 = new Article();
     // delete a1.author;
     
     // 保持隐藏类不变和继续共享
     a1.author = null;
     ```

   - 在代码结束后，即使两个实例使用了同一个构造函数，它们也不再共享一个隐藏类。动态删除属性与动态添加属性导致的后果一样。**最佳实践是把不想要的属性设置为 null。**这样可以保持隐藏类不变和继续共享，同时也能达到删除引用值供垃圾回收程序回收的效果。  

3. 内存泄漏  

   - JavaScript 中的内存泄漏大部分是由不合理的引用导致的。  

   - 意外声明全局变量是最常见但也最容易修复的内存泄漏问题。

   - 定时器也可能会悄悄地导致内存泄漏。下面的代码中，定时器的回调通过闭包引用了外部变量：  

     ```javascript
     let name = 'Jake';
     setInterval(() => {
     	console.log(name);
     }, 100);
     ```

   - 使用 JavaScript 闭包很容易在不知不觉间造成内存泄漏。请看下面的例子：  

     ```javascript
     let outer = function () {
       let name = 'Jake';
       return function () {
         return name;
       };
     };
     ```

     - 调用 outer()会导致分配给 name 的内存被泄漏。以上代码执行后创建了一个内部闭包，只要返回的函数存在就不能清理 name，因为闭包一直在引用着它。假如 name 的内容很大（不止是一个小字符串），那可能就是个大问题了。  

4. 静态分配与对象池  

   - 为了提升 JavaScript 性能，最后要考虑的一点往往就是压榨浏览器了。此时，一个关键问题就是如何减少浏览器执行垃圾回收的次数。开发者无法直接控制什么时候开始收集垃圾，但可以间接控制触发垃圾回收的条件。理论上，如果能够合理使用分配的内存，同时避免多余的垃圾回收，那就可以保住因释放内存而损失的性能。  

   - 浏览器决定何时运行垃圾回收程序的一个标准就是对象更替的速度。如果有很多对象被初始化，然后一下子又都超出了作用域，那么浏览器就会采用更激进的方式调度垃圾回收程序运行，这样当然会影响性能。看一看下面的例子，这是一个计算二维矢量加法的函数：  

     ```javascript
     function addVector(a, b) {
     	let resultant = new Vector();
       resultant.x = a.x + b.x;
       resultant.y = a.y + b.y;
       return resultant;
     }
     ```

     - 假如这个矢量加法函数频繁被调用，那么垃圾回收调度程序会发现这里对象更替的速度很快，从而会更频繁地安排垃圾回收。
     - 该问题的解决方案是不要动态创建矢量对象，比如可以修改上面的函数，让它使用一个已有的矢量对象：  

     ```javascript
     function addVector(a, b, resultant) {
       resultant.x = a.x + b.x;
       resultant.y = a.y + b.y;
       return resultant;
     }
     ```

   - 那么在哪里创建矢量可以不让垃圾回收调度程序盯上呢？一个策略是使用对象池。在初始化的某一时刻，可以创建一个对象池，用来管理一组可回收的对象。应用程序可以向这个对象池请求一个对象、设置其属性、使用它，然后在操作完成后再把它还给对象池。由于没发生对象初始化，垃圾回收探测就不会发现有对象更替，因此垃圾回收程序就不会那么频繁地运行。  

     ```javascript
     // vectorPool 是已有的对象池
     let v1 = vectorPool.allocate();
     let v2 = vectorPool.allocate();
     let v3 = vectorPool.allocate();
     v1.x = 10;
     v1.y = 5;
     v2.x = -3;
     v2.y = -6;
     addVector(v1, v2, v3);
     console.log([v3.x, v3.y]); // [7, -1]
     vectorPool.free(v1);
     vectorPool.free(v2);
     vectorPool.free(v3);
     // 如果对象有属性引用了其他对象
     // 则这里也需要把这些属性设置为 null
     v1 = null;
     v2 = null;
     v3 = null;
     ```

   - 如果对象池只按需分配矢量（在对象不存在时创建新的，在对象存在时则复用存在的），那么这个实现本质上是一种贪婪算法，有单调增长但为静态的内存。这个对象池必须使用某种结构维护所有对象，数组是比较好的选择。不过，使用数组来实现，必须留意不要招致额外的垃圾回收。  



4.4　小结

# 第5章　基本引用类型

引用值（或者对象）是某个特定引用类型的实例。在 ECMAScript 中，引用类型是把数据和功能组织到一起的结构，经常被人错误地称作“类”。虽然从技术上讲 JavaScript 是一门面向对象语言，但ECMAScript 缺少传统的面向对象编程语言所具备的某些基本结构，包括类和接口。引用类型有时候也被称为对象定义，因为它们描述了自己的对象应有的属性和方法。

- 注意 引用类型虽然有点像类，但跟类并不是一个概念。为避免混淆，本章后面不会使用术语“类”。  

**对象被认为是某个特定引用类型的实例。新对象通过使用 new 操作符后跟一个构造函数（ constructor）来创建。**构造函数就是用来创建新对象的函数，比如下面这行代码：
`let now = new Date();`
这行代码创建了引用类型 Date 的一个新实例，并将它保存在变量 now 中。 Date()在这里就是构造函数，它负责创建一个只有默认属性和方法的简单对象。 ECMAScript 提供了很多像 Date 这样的原生引用类型，帮助开发者实现常见的任务。  

- 注意 函数也是一种引用类型，但有关函数的内容太多了，一章放不下，所以本书专门用第 10 章来介绍函数。  

## 5.1　Date

Date 类型将日期保存为自协调世界时（ UTC， Universal Time Coordinated）时间 1970 年 1 月 1 日午夜（零时）至今所经过的毫秒数。  

在不给 Date 构造函数传参数的情况下，创建的对象将保存当前日期和时间。要基于其他日期和时间创建日期对象，必须传入其毫秒表示（ UNIX 纪元 1970 年 1 月 1 日午夜之后的毫秒数）。 ECMAScript为此提供了两个辅助方法： `Date.parse()和 Date.UTC()`。

1. `Date.parse()`方法接收一个表示日期的字符串参数，尝试将这个字符串转换为表示该日期的毫秒数。

   ECMA-262 第 5 版定义了 Date.parse()应该支持的日期格式，填充了第 3 版遗留的空白。所有实现都必须支持下列日期格式：  

   ```
   “月/日/年”，如"5/23/2019"；
   “月名 日, 年”，如"May 23, 2019"；
   “周几 月名 日 年 时:分:秒 时区”，如"Tue May 23 2019 00:00:00 GMT-0700"；
   ISO 8601 扩展格式“YYYY-MM-DDTHH:mm:ss.sssZ”，如 2019-05-23T00:00:00（只适用于兼容 ES5 的实现）。  
   ```

   - 比如，要创建一个表示“2019 年 5 月 23 日”的日期对象，可以使用以下代码： 

     `let someDate = new Date(Date.parse("May 23, 2019"));  ` 

   - 如果传给 Date.parse()的字符串并不表示日期，则该方法会返回 NaN。如果直接把表示日期的字符串传给 Date 构造函数，那么 **Date 会在后台调用 Date.parse()**。

     `let someDate = new Date("May 23, 2019");`  

2. `Date.UTC()`方法也返回日期的毫秒表示，但使用的是跟 Date.parse() 不同的信息来生成这个值。

   传给 Date.UTC()的参数是年、零起点月数（ 1 月是 0， 2 月是 1，以此类推）、日（ 1~31）、时（ 0~23）、分、秒和毫秒。这些参数中，只有前两个（年和月）是必需的。如果不提供日，那么默认为 1 日。其他参数的默认值都是 0。下面是使用 Date.UTC() 的两个例子：  

   ```javascript
   // GMT 时间 2000 年 1 月 1 日零点
   let y2k = new Date(Date.UTC(2000, 0));
   // GMT 时间 2005 年 5 月 5 日下午 5 点 55 分 55 秒
   let allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));
   ```

   - 与 Date.parse() 一样， Date.UTC() 也会被 Date 构造函数隐式调用，但有一个区别：这种情况下创建的是本地日期，不是 GMT 日期。  

     ```javascript
     // 本地时间 2000 年 1 月 1 日零点
     let y2k = new Date(2000, 0);
     // 本地时间 2005 年 5 月 5 日下午 5 点 55 分 55 秒
     let allFives = new Date(2005, 4, 5, 17, 55, 55);
     ```

3. `Date.now()` 方法，返回表示方法执行时日期和时间的毫秒数。  



### 5.1.1 继承的方法  

Date 类型重写了 `toLocaleString()、 toString() 和 valueOf()` 方法。但与其他类型不同，重写后这些方法的返回值不一样。 

- Date 类型的 **`toLocaleString()`** 方法返回与浏览器运行的本地环境一致的日期和时间。这通常意味着格式中包含针对时间的 AM（上午）或 PM（下午），但不包含时区信息（具体格式可能因浏览器而不同）。 

- **`toString()`** 方法通常返回带时区信息的日期和时间，而时间也是以 24 小时制（ 0~23）表示的。

  - 下面给出了 toLocaleString() 和 toString() 返回的2019 年 2 月 1 日零点的示例（地区为"en-US"的 PST，即 Pacific Standard Time，太平洋标准时间）：  

  ```javascript
  toLocaleString() - 2/1/2019 12:00:00 AM
  toString() - Thu Feb 1 2019 00:00:00 GMT-0800 (Pacific Standard Time)
  ```

- Date 类型的 valueOf() 方法根本就不返回字符串，这个方法被重写后返回的是日期的**毫秒**表示。因此，操作符（如小于号和大于号）可以直接使用它返回的值。比如下面的例子：  

  ```javascript
  let date1 = new Date(2019, 0, 1); // 2019 年 1 月 1 日
  let date2 = new Date(2019, 1, 1); // 2019 年 2 月 1 日
  console.log(date1 < date2); // true
  console.log(date1 > date2); // false
  ```

  

### 5.1.2 日期格式化方法  

- Date 类型有几个专门用于格式化日期的方法，它们都会返回字符串：
  - **`toDateString()`** 显示日期中的周几、月、日、年（格式特定于实现）；
  - **`toTimeString()`** 显示日期中的时、分、秒和时区（格式特定于实现）；
  - **`toLocaleDateString()`** 显示日期中的周几、月、日、年（格式特定于实现和地区）；
  - **`toLocaleTimeString()`** 显示日期中的时、分、秒（格式特定于实现和地区）；
  - **`toUTCString()`** 显示完整的 UTC 日期（格式特定于实现）。
- 这些方法的输出与 toLocaleString() 和 toString() 一样，会因浏览器而异。因此**不能用于在用户界面上一致地显示日期**。  

### 5.1.3 日期/时间组件方法  

Date 类型剩下的方法（见下表）直接涉及取得或设置日期值的特定部分。注意表中“UTC 日期”，指的是没有时区偏移（将日期转换为 GMT）时的日期。  

![image-20210711153109588](JavaScript高级程序设计第四版-笔记.assets/image-20210711153109588.png)

![image-20210711153732577](JavaScript高级程序设计第四版-笔记.assets/image-20210711153732577.png)



## 5.2　RegExp

ECMAScript 通过 RegExp 类型支持正则表达式。正则表达式使用类似 Perl 的简洁语法来创建：
`let expression = /pattern/flags;`  

- 下面给出了表示匹配模式的标记。

  - g：全局模式，表示查找字符串的全部内容，而不是找到第一个匹配的内容就结束。
  - i：不区分大小写，表示在查找匹配时忽略 pattern 和字符串的大小写。
  - m：多行模式，表示查找到一行文本末尾时会继续查找。
  - y：粘附模式，表示只查找从 lastIndex 开始及之后的字符串。
  - u： Unicode 模式，启用 Unicode 匹配。
  - s： dotAll 模式，表示元字符`.`匹配任何字符（包括\n 或\r）。  

- 与其他语言中的正则表达式类似，所有元字符在模式中也必须转义，包括：  

  `( [ { \ ^ $ | ) ] } ? * + .  `

  - 元字符在正则表达式中都有一种或多种特殊功能，所以要匹配上面这些字符本身，就必须使用反斜杠来转义。  

- 前面例子中的正则表达式都是使用字面量形式定义的。正则表达式也可以使用 RegExp 构造函数来创建，它接收两个参数：模式字符串和（可选的）标记字符串。任何使用字面量定义的正则表达式也可以通过构造函数来创建，比如：  

  ```javascript
  // 匹配第一个"bat"或"cat"，忽略大小写
  let pattern1 = /[bc]at/i;
  
  // 跟 pattern1 一样，只不过是用构造函数创建的
  let pattern2 = new RegExp("[bc]at", "i");
  ```

  - 注意， RegExp 构造函数的两个参数都是字符串。**因为 RegExp 的模式参数是字符串，所以在某些情况下需要二次转义。**  

  ![image-20210711154422125](JavaScript高级程序设计第四版-笔记.assets/image-20210711154422125.png)

  - 此外，使用 RegExp 也可以基于已有的正则表达式实例，并可选择性地修改它们的标记：  

  ```javascript
  const re1 = /cat/g;
  console.log(re1); // "/cat/g"
  
  const re2 = new RegExp(re1);
  console.log(re2); // "/cat/g"
  
  const re3 = new RegExp(re1, "i");
  console.log(re3); // "/cat/i"
  ```

  

### 5.2.1 RegExp 实例属性  

- 每个 RegExp 实例都有下列属性，提供有关模式的各方面信息。
  - global：布尔值，表示是否设置了 g 标记。
  - ignoreCase：布尔值，表示是否设置了 i 标记。
  - unicode：布尔值，表示是否设置了 u 标记。
  - sticky：布尔值，表示是否设置了 y 标记。
  - lastIndex：整数，表示在源字符串中下一次搜索的开始位置，始终从 0 开始。
  - multiline：布尔值，表示是否设置了 m 标记。
  - dotAll：布尔值，表示是否设置了 s 标记。
  - source：正则表达式的字面量字符串（不是传给构造函数的模式字符串），没有开头和结尾的斜杠。
  - flags：正则表达式的标记字符串。始终以字面量而非传入构造函数的字符串模式形式返回（没有前后斜杠）。  

### 5.2.2 RegExp 实例方法  

RegExp 实例的主要方法是 `exec()`，主要用于配合捕获组使用。

- 这个方法只接收一个参数，即要应用模式的字符串。如果找到了匹配项，则返回包含第一个匹配信息的数组；如果没找到匹配项，则返回null。

- 返回的数组虽然是 Array 的实例，但包含两个额外的属性： index 和 input。 index 是字符串中匹配模式的起始位置， input 是要查找的字符串。

- 这个数组的第一个元素是匹配整个模式的字符串，其他元素是与表达式中的捕获组匹配的字符串。如果模式中没有捕获组，则数组只包含一个元素。

- 来看下面的例子：  

  ```javascript
  let text = "mom and dad and baby";
  let pattern = /mom( and dad( and baby)?)?/gi;
  
  let matches = pattern.exec(text);
  console.log(matches.index); // 0
  console.log(matches.input); // "mom and dad and baby"
  console.log(matches[0]); // "mom and dad and baby"
  console.log(matches[1]); // " and dad and baby"
  console.log(matches[2]); // " and baby"
  ```

- 如果模式设置了全局标记，则每次调用 exec()方法会返回一个匹配的信息。如果没有设置全局标记，则无论对同一个字符串调用多少次 exec()，也只会返回第一个匹配的信息。  

  - 如果在这个模式上设置了 g 标记，则每次调用 exec()都会在字符串中向前搜索下一个匹配项。
  - 注意模式的 lastIndex 属性每次都会变化。在全局匹配模式下，每次调用 exec()都会更新 lastIndex 值，以反映上次匹配的最后一个字符的索引。 

  ```javascript
  let text = "cat, bat, sat, fat";
  let pattern = /.at/g;
  
  let matches = pattern.exec(text);
  console.log(matches.index); // 0
  console.log(matches[0]); // cat
  console.log(pattern.lastIndex); // 3
  
  matches = pattern.exec(text);
  console.log(matches.index); // 5
  console.log(matches[0]); // bat
  console.log(pattern.lastIndex); // 8
  
  matches = pattern.exec(text);
  console.log(matches.index); // 10
  console.log(matches[0]); // sat
  console.log(pattern.lastIndex); // 13
  ```

  - 如果模式设置了粘附标记 y，则每次调用 exec() 就只会在 lastIndex 的位置上寻找匹配项。粘附标记覆盖全局标记。  

  ```javascript
  let text = "cat, bat, sat, fat";
  let pattern = /.at/y;
  
  let matches = pattern.exec(text);
  console.log(matches.index); // 0
  console.log(matches[0]); // cat
  console.log(pattern.lastIndex); // 3
  
  // 以索引 3 对应的字符开头找不到匹配项，因此 exec()返回 null
  // exec()没找到匹配项，于是将 lastIndex 设置为 0
  matches = pattern.exec(text);
  console.log(matches); // null
  console.log(pattern.lastIndex); // 0
  
  // 向前设置 lastIndex 可以让粘附的模式通过 exec()找到下一个匹配项：
  pattern.lastIndex = 5;
  matches = pattern.exec(text);
  console.log(matches.index); // 5
  console.log(matches[0]); // bat
  console.log(pattern.lastIndex); // 8
  ```

- 正则表达式的另一个方法是 `test()`，接收一个字符串参数。如果输入的文本与模式匹配，则参数返回 true，否则返回 false。这个方法适用于只想测试模式是否匹配，而不需要实际匹配内容的情况。  

- 无论正则表达式是怎么创建的，继承的方法 toLocaleString() 和 toString() 都返回正则表达式的字面量表示。  

  - valueOf() 方法返回正则表达式本身。  

### 5.2.3 RegExp 构造函数属性  

可以通过两种不同的方式访问它们。换句话说，每个属性都有一个全名和一个简写。  

![image-20210711160141212](JavaScript高级程序设计第四版-笔记.assets/image-20210711160141212.png)

通过这些属性可以提取出与 exec()和 test()执行的操作相关的信息。来看下面的例子：  

```javascript
let text = "this has been a short summer";
let pattern = /(.)hort/g;
if (pattern.test(text)) {
  console.log(RegExp.input); // this has been a short summer
  console.log(RegExp.leftContext); // this has been a
  console.log(RegExp.rightContext); // summer
  console.log(RegExp.lastMatch); // short
  console.log(RegExp.lastParen); // s
}
```

注意 RegExp 构造函数的所有属性都没有任何 Web 标准出处，因此不要在生产环境中使用它们。  



### 5.2.4 模式局限  

虽然 ECMAScript 对正则表达式的支持有了长足的进步，但仍然缺少 Perl 语言中的一些高级特性。下列特性目前还没有得到 ECMAScript 的支持（想要了解更多信息，可以参考 Regular-Expressions.info
网站）：
- \A 和\Z 锚（分别匹配字符串的开始和末尾）
- 联合及交叉类
- 原子组
- x（忽略空格）匹配模式
- 条件式匹配
- 正则表达式注释
虽然还有这些局限，但 ECMAScript 的正则表达式已经非常强大，可以用于大多数模式匹配任务。  



## 5.3　原始值包装类型

- ECMAScript 提供了 3 种特殊的引用类型： Boolean、 Number 和 String。  
- 具有与各自原始类型对应的特殊行为。每当用到某个原始值的方法或属性时，后台都会创建一个相应原始包装类型的对象，从而暴露出操作原始值的各种方法。
- 在以读模式访问字符串值的任何时候，后台都会执行以下 3 步：
  1. 创建一个 String 类型的实例；    
  2. 调用实例上的特定方法；  
  3. 销毁实例。 
- 可以把这 3 步想象成执行了如下 3 行 ECMAScript 代码：

```javascript
let s1 = new String("some text");
let s2 = s1.substring(2);
s1 = null;  
```

- 这种行为可以让原始值拥有对象的行为。对布尔值和数值而言，以上 3 步也会在后台发生，只不过使用的是 Boolean 和 Number 包装类型而已。  

- 引用类型与原始值包装类型的主要区别在于对象的生命周期。

  - 在通过 new 实例化引用类型后，得到的实例会在离开作用域时被销毁，而自动创建的原始值包装对象则只存在于访问它的那行代码执行期间。
  - 这意味着不能在运行时给原始值添加属性和方法。 

- 可以显式地使用 Boolean、 Number 和 String 构造函数创建原始值包装对象。不过应该在确实必要时再这么做，否则容易让开发者疑惑，分不清它们到底是原始值还是引用值。

  - 在原始值包装类型的实例上调用 typeof 会返回"object"，**所有原始值包装对象都会转换为布尔值 true**。  

- Object 构造函数作为一个工厂方法，能够根据传入值的类型返回相应原始值包装类型的实例。

- 注意，使用 new 调用原始值包装类型的构造函数，与调用同名的转型函数并不一样。    

  ```javascript
  let value = "25";
  let number = Number(value); // 转型函数
  console.log(typeof number); // "number"
  let obj = new Number(value); // 构造函数
  console.log(typeof obj); // "object"
  ```

  

### 5.3.1 Boolean  

- `let booleanObject = new Boolean(true);`  
- Boolean 的实例会重写 valueOf() 方法，返回一个原始值 true 或 false。 
- toString() 方法被调用时也会被覆盖，返回字符串"true"或"false"。  
- 理解原始布尔值和 Boolean 对象之间的区别非常重要，**强烈建议永远不要使用后者。**  

### 5.3.2 Number  

- Number 是对应数值的引用类型。要创建一个 Number 对象，就使用 Number 构造函数并传入一个数值。

  `let numberObject = new Number(10);  `

- 与 Boolean 类型一样， Number 类型重写了 valueOf()、 toLocaleString()和 toString()方法。

  -  `valueOf()` 方法返回 Number 对象表示的原始数值，另外两个方法返回数值字符串。
  - `toString()` 方法可选地接收一个表示基数的参数，并返回相应基数形式的数值字符串 。

  ```javascript
  let num = 10;
  console.log(num.toString()); // "10"
  console.log(num.toString(2)); // "1010"
  console.log(num.toString(8)); // "12"
  console.log(num.toString(10)); // "10"
  console.log(num.toString(16)); // "a"
  ```

- 除了继承的方法， Number 类型还提供了几个用于将数值格式化为字符串的方法。

  - `toFixed()` 方法返回包含指定小数点位数的数值字符串 

    ```javascript
    let num = 10;
    console.log(num.toFixed(2)); // "10.00"
    ```

    - 如果数值本身的小数位超过了参数指定的位数，则四舍五入 。
    - 注意 toFixed() 方法可以表示有 **0~20 个小数位的数值**。某些浏览器可能支持更大的范围，但这是通常被支持的范围。  

  - `toExponential()`，返回以科学记数法（也称为指数记数法）表示的数值字符串。  

    - 接收一个参数，表示结果中小数的位数。  

    ```javascript
    let num = 10;
    console.log(num.toExponential(1)); // "1.0e+1"
    ```

    - 这么小的数不用表示为科学记数法形式。如果想得到数值最适当的形式，那么可以使用 `toPrecision()`。  

  - `toPrecision()`方法会根据情况返回最合理的输出结果，可能是固定长度，也可能是科学记数法形式。

    - 这个方法接收一个参数，表示结果中**数字的总位数（不包含指数）**。  

    ```javascript
    let num = 99;
    console.log(num.toPrecision(1)); // "1e+2"
    console.log(num.toPrecision(2)); // "99"
    console.log(num.toPrecision(3)); // "99.0"
    ```

    - 本质上， toPrecision() 方法会根据数值和精度来决定调用 toFixed()还是 toExponential()。
    - 为了以正确的小数位精确表示数值，这 3 个方法都会向上或向下舍入。  
    - toPrecision()方法可以表示带 1~21 个小数位的数值。  

- **不建议直接实例化 Number 对象。**  

- `isInteger()` 方法与 `Number.isSafeInteger()`  

  - ES6 新增了 `Number.isInteger()`方法，用于辨别一个数值是否保存为整数。
  - 有时候，小数位的 0可能会让人误以为数值是一个浮点值： 

  ```javascript
  console.log(Number.isInteger(1)); // true
  console.log(Number.isInteger(1.00)); // true
  console.log(Number.isInteger(1.01)); // false
  ```

  - 这个数值范围从 `Number.MIN_SAFE_INTEGER`（ $-2^{53} + 1$）到 `Number.MAX_SAFE_INTEGER`（ $2^{53} -1$）。对超出这个范围的数值，即使尝试保存为整数， IEEE 754 编码格式也意味着二进制值可能会表示一个完全不同的数值。为了鉴别整数是否在这个范围内，可以使 `Number.isSafeInteger()`方法：  

  ```javascript
  console.log(Number.isSafeInteger(-1 * (2 ** 53))); // false
  console.log(Number.isSafeInteger(-1 * (2 ** 53) + 1)); // true
  console.log(Number.isSafeInteger(2 ** 53)); // false
  console.log(Number.isSafeInteger((2 ** 53) - 1)); // true
  ```

  

### 5.3.3 String  

- `let stringObject = new String("hello world");  `

- 3 个继承的方法 valueOf()、 toLocaleString() 和 toString() 都返回对象的原始字符串值。  

- 每个 String 对象都有一个 length 属性，表示字符串中字符的数量。

  ```javascript
  let stringValue = "hello world";
  console.log(stringValue.length); // "11"
  ```

  - 注意，即使字符串中包含双字节字符（而不是单字节的 ASCII 字符），也仍然会按单字符来计数。  

1. **JavaScript 字符**  

   - JavaScript 字符串由 **16 位码元（ code unit）**组成。对多数字符来说，每 16 位码元对应一个字符。

     - **`charAt()`** 方法返回给定索引位置的字符，由传给方法的整数参数指定。具体来说，这个方法查找指定索引位置的 16 位码元，并返回该码元对应的字符。
       - **方括号是获取字符的一种现代化方法**，而 `charAt` 是历史原因才存在的。它们之间的唯一区别是，如果没有找到字符，`[]` 返回 `undefined`，而 `charAt` 返回一个空字符串：
     - 使用 **`charCodeAt()`**方法可以查看指定码元的字符编码。这个方法返回指定索引位置的码元值，索引以整数指定。  
     - **`fromCharCode()`**方法用于根据给定的 **UTF-16 码元**创建字符串中的字符。这个方法可以接受任意多个数值，并返回将所有数值对应的字符拼接起来的字符串。
     - 对于 U+0000~U+FFFF 范围内的字符， `length、 charAt()、charCodeAt()和 fromCharCode()`返回的结果都跟预期是一样的。这是因为在这个范围内，每个字符都是用 16 位表示的，而这几个方法也都基于 16 位码元完成操作。只要字符编码大小与码元大小一一对应这些方法就能如期工作。  

   - 16 位只能唯一表示65 536 个字符。这对于大多数语言字符集是足够了，在 Unicode 中称为**基本多语言平面（ BMP）**。

     - 为了表示更多的字符， Unicode 采用了一个策略，即每个字符使用另外 16 位去选择一个**增补平面**。
     - 这种每个字符使用两个 16 位码元的策略称为**代理对**。  

   - 在涉及增补平面的字符时，前面讨论的字符串方法就会出问题。比如，下面的例子中使用了一个笑脸表情符号，也就是一个使用代理对编码的字符：  

     ```javascript
     // "smiling face with smiling eyes" 表情符号的编码是 U+1F60A
     // 0x1F60A === 128522
     let message = "ab😊de";
     console.log(message.length); // 6
     console.log(message.charAt(1)); // b
     console.log(message.charAt(2)); // <?>
     console.log(message.charAt(3)); // <?>
     console.log(message.charAt(4)); // d
     
     console.log(message.charCodeAt(1)); // 98
     console.log(message.charCodeAt(2)); // 55357
     console.log(message.charCodeAt(3)); // 56842
     console.log(message.charCodeAt(4)); // 100
     
     console.log(String.fromCodePoint(0x1F60A)); // ☺
     console.log(String.fromCharCode(97, 98, 55357, 56842, 100, 101)); // ab☺de
     ```

     - fromCharCode() 方法仍然返回正确的结果，因为它实际上是基于提供的二进制表示直接组合成字符串。浏览器可以正确解析代理对（由两个码元构成），并正确地将其识别为一个Unicode 笑脸字符。 

   - **`codePointAt()`** 接收 16 位码元的索引并返回该索引位置上的**码点（ code point）**。 

     - **码点是 Unicode 中一个字符的完整标识。**
     - 比如， "c"的码点是 0x0063，而"😊"的码点是 0x1F60A。
     - 码点可能是 16 位，也可能是 32 位，而 codePointAt()方法可以从指定码元位置识别完整的码点。  

     ```javascript
     let message = "ab😊de";
     console.log(message.codePointAt(1)); // 98
     console.log(message.codePointAt(2)); // 128522
     console.log(message.codePointAt(3)); // 56842
     console.log(message.codePointAt(4)); // 100
     ```

     - 注意，如果传入的码元索引并非代理对的开头，就会返回错误的码点。这种错误只有检测单个字符的时候才会出现，可以通过从左到右按正确的码元数遍历字符串来规避。  

   - fromCharCode() 也有一个对应的 **`fromCodePoint()`**。  

     ```javascript
     console.log(String.fromCharCode(97, 98, 55357, 56842, 100, 101)); // ab😊de
     console.log(String.fromCodePoint(97, 98, 128522, 100, 101)); // ab😊de
     ```

2. **`normalize()方法`**  

   1. 某些 Unicode 字符可以有多种编码方式。有的字符既可以通过一个 BMP 字符表示，也可以通过一个代理对表示。 

      ```javascript
      // U+00C5：上面带圆圈的大写拉丁字母 A
      console.log(String.fromCharCode(0x00C5)); // Å
      // U+212B：长度单位“埃”
      console.log(String.fromCharCode(0x212B)); // Å
      // U+004：大写拉丁字母 A
      // U+030A：上面加个圆圈
      console.log(String.fromCharCode(0x0041, 0x030A)); // Å
      
      
      // 比较操作符不在乎字符看起来是什么样的，因此这 3 个字符互不相等。
      let a1 = String.fromCharCode(0x00C5),
      a2 = String.fromCharCode(0x212B),
      a3 = String.fromCharCode(0x0041, 0x030A);
      console.log(a1, a2, a3); // Å, Å, Å
      console.log(a1 === a2); // false
      console.log(a1 === a3); // false
      console.log(a2 === a3); // false
      ```

   2. Unicode 提供了 4 种规范化形式，可以将类似上面的字符规范化为一致的格式，无论底层字符的代码是什么。

      1. 这 4 种规范化形式是： `NFD（ Normalization Form D）、 NFC（ Normalization Form C）、NFKD（ Normalization Form KD）和 NFKC（ Normalization Form KC）`。
      2. 可以使用 `normalize()` 方法对字符串应用上述规范化形式，使用时需要传入表示哪种形式的字符串： `"NFD"、 "NFC"、"NFKD"或"NFKC"`。  

   3. 通过比较字符串与其调用 normalize()的返回值，就可以知道该字符串是否已经规范化了：  

      ```javascript
      let a1 = String.fromCharCode(0x00C5),
        a2 = String.fromCharCode(0x212B),
        a3 = String.fromCharCode(0x0041, 0x030A);
      
      // U+00C5 是对 0+212B 进行 NFC/NFKC 规范化之后的结果
      console.log(a1 === a1.normalize("NFD")); // false
      console.log(a1 === a1.normalize("NFC")); // true
      console.log(a1 === a1.normalize("NFKD")); // false
      console.log(a1 === a1.normalize("NFKC")); // true
      
      // U+212B 是未规范化的
      console.log(a2 === a2.normalize("NFD")); // false
      console.log(a2 === a2.normalize("NFC")); // false
      console.log(a2 === a2.normalize("NFKD")); // false
      console.log(a2 === a2.normalize("NFKC")); // false
      
      // U+0041/U+030A 是对 0+212B 进行 NFD/NFKD 规范化之后的结果
      console.log(a3 === a3.normalize("NFD")); // true
      console.log(a3 === a3.normalize("NFC")); // false
      console.log(a3 === a3.normalize("NFKD")); // true
      console.log(a3 === a3.normalize("NFKC")); // false
      
      //选择同一种规范化形式可以让比较操作符返回正确的结果：
      let a1 = String.fromCharCode(0x00C5),
        a2 = String.fromCharCode(0x212B),
        a3 = String.fromCharCode(0x0041, 0x030A);
      console.log(a1.normalize("NFD") === a2.normalize("NFD")); // true
      console.log(a2.normalize("NFKC") === a3.normalize("NFKC")); // true
      console.log(a1.normalize("NFC") === a3.normalize("NFC")); // true
      ```

3. **字符串操作方法**  

   1. concat()，用于将一个或多个字符串拼接成一个新字符串。

      - 更常用的方式是使用加号操作符（ +）。  

      ```javascript
      let stringValue = "hello ";
      let result = stringValue.concat("world", "!");
      
      console.log(result); // "hello world!"
      console.log(stringValue); // "hello"
      ```

   2. **`slice()、 substr()和 substring()`**  

      - 第一个参数表示子字符串开始的位置，第二个参数表示子字符串结束的位置。  

      ```javascript
      let stringValue = "hello world";
      console.log(stringValue.slice(3)); // "lo world"
      console.log(stringValue.substring(3)); // "lo world"
      console.log(stringValue.substr(3)); // "lo world"
      console.log(stringValue.slice(3, 7)); // "lo w"
      console.log(stringValue.substring(3, 7)); // "lo w"
      
      // substr() 第二个参数对它而言表示返回的字符数。
      console.log(stringValue.substr(3, 7)); // "lo worl"
      ```

      - 当某个参数是负值时，这 3 个方法的行为又有不同。
        - `slice()` 方法将所有负值参数都当成字符串长度加上负参数值。
        -  `substr()` 方法将第一个负参数值当成字符串长度加上该值，将第二个负参数值转换为 0。
        - `substring()`方法会将所有负参数值都转换为 0。    

      ```javascript
      let stringValue = "hello world";
      console.log(stringValue.slice(-3)); // "rld"
      console.log(stringValue.substring(-3)); // "hello world"
      console.log(stringValue.substr(-3)); // "rld"
      console.log(stringValue.slice(3, -4)); // "lo w"
      console.log(stringValue.substring(3, -4)); // "hel"
      console.log(stringValue.substr(3, -4)); // "" (empty string)
      ```

      - 在第二个参数是负值时，这 3 个方法各不相同。   
        - slice()方法将第二个参数转换为 7 (11-4)，实际上相当于调用 slice(3, 7)，因此返回"lo w"。
        - 而 substring()方法会将第二个参数转换为 0，相当于调用substring(3, 0)，等价于 substring(0, 3)，这是因为这个方法会将较小的参数作为起点，将较大的参数作为终点。
        - 对 substr()来说，第二个参数会被转换为 0，意味着返回的字符串包含零个字符，因而会返回一个空字符串。  

4. **字符串位置方法**  

   - **`indexOf()和 lastIndexOf()`**。  

     - 这两个方法从字符串中搜索传入的字符串，并返回位置（如果没找到，则返回-1）。
     - 两者的区别在于， indexOf() 方法从字符串开头开始查找子字符串，而 lastIndexOf() 方法从字符串末尾开始查找子字符串。  

   - 这两个方法都可以接收可选的第二个参数，表示开始搜索的位置。这意味着， 

     - indexOf() 会从这个参数指定的位置开始向字符串末尾搜索，忽略该位置之前的字符；
     - lastIndexOf() 则会从这个参数指定的位置开始向字符串开头搜索，忽略该位置之后直到字符串末尾的字符。 

     ```javascript
     let stringValue = "hello world";
     console.log(stringValue.indexOf("o", 6)); // 7
     console.log(stringValue.lastIndexOf("o", 6)); // 4
     ```

5. **字符串包含方法**  

   ECMAScript 6 增加了 3 个用于判断字符串中是否包含另一个字符串的方法： `startsWith()、endsWith()和 includes()`。  

   - 这些方法都会从字符串中搜索传入的字符串，并返回一个表示是否包含
     的布尔值。
   - 它们的区别在于：
     1. **`startsWith()`** 检查开始于索引 0 的匹配项。
     2. **`endsWith()`** 检查开始于索引 `(string.length - substring.length)` 的匹配项。
     3. **`includes()`** 检查整个字符串。

   ```javascript
   let message = "foobarbaz";
   
   console.log(message.startsWith("foo")); // true
   console.log(message.startsWith("bar")); // false
   
   console.log(message.endsWith("baz")); // true
   console.log(message.endsWith("bar")); // false
   
   console.log(message.includes("bar")); // true
   console.log(message.includes("qux")); // false
   ```

   - startsWith() 和 includes() 方法接收可选的第二个参数，表示开始搜索的位置。如果传入第二个参数，则意味着这两个方法会从指定位置向着字符串末尾搜索，忽略该位置之前的所有字符。  

6. **`trim()方法`**  

   - ECMAScript 在所有字符串上都提供了 trim()方法。这个方法会创建字符串的一个副本，删除前、后所有空格符（和末尾换行符），再返回结果。
   - `trimLeft() 和 trimRight()` 方法分别用于从字符串开始和末尾清理空格符。  

7. **`repeat()方法`**  

   - 这个方法接收一个整数参数，表示要将字符串复制多少次，然后返回拼接所有副本后的结果。  

8. **`padStart()和 padEnd()方法  `**

   - padStart()和 padEnd()方法会复制字符串，如果小于指定长度，则在相应一边填充字符，直至满足长度条件。这两个方法的第一个参数是长度，第二个参数是可选的填充字符串，默认为空格（ U+0020）。  

     ```javascript
     let stringValue = "foo";
     console.log(stringValue.padStart(6)); // " foo"
     console.log(stringValue.padStart(9, ".")); // "......foo"
     console.log(stringValue.padEnd(6)); // "foo "
     console.log(stringValue.padEnd(9, ".")); // "foo......"
     ```

   - 可选的第二个参数并不限于一个字符。如果提供了多个字符的字符串，则会将其拼接并截断以匹配指定长度。此外，如果长度小于或等于字符串长度，则会返回原始字符串。  

9. **字符串迭代与解构**

   - 字符串的原型上暴露了一个`@@iterator` 方法，表示可以迭代字符串的每个字符。可以像下面这样手动使用迭代器：  

     ```javascript
     let message = "abc";
     let stringIterator = message[Symbol.iterator]();
     
     console.log(stringIterator.next()); // {value: "a", done: false}
     console.log(stringIterator.next()); // {value: "b", done: false}
     console.log(stringIterator.next()); // {value: "c", done: false}
     console.log(stringIterator.next()); // {value: undefined, done: true}
     ```

   - 有了这个迭代器之后，字符串就可以通过解构操作符来解构了。比如，可以更方便地把字符串分割为字符数组：  

     ```javascript
     let message = "abcde";
     console.log([...message]); // ["a", "b", "c", "d", "e"]
     ```

10. **字符串大小写转换  **

    - 包括 4 个方法： `toLowerCase()、 toLocaleLowerCase()、 toUpperCase()和toLocaleUpperCase()` 。
    - toLowerCase()和toUpperCase()方法是原来就有的方法，与 java.lang.String 中的方法同名。
    -  toLocaleLowerCase() 和 toLocaleUpperCase() 方法旨在基于特定地区实现。在很多地区，地区特定的方法与通用的方法是一样的。但在少数语言中（如土耳其语），Unicode 大小写转换需应用特殊规则，要使用地区特定的方法才能实现正确转换。  
    - 通常，如果不知道代码涉及什么语言，则最好使用地区特定的转换方法。

11. **字符串模式匹配方法  **

    - **`match() 方法`**

      - 这个方法本质上跟 RegExp 对象的 exec()方法相同。 match()方法接收一个参数，可以是一个正则表达式字符串，也可以是一个 RegExp 对象。  
      - match() 方法返回的数组与 RegExp 对象的 exec() 方法返回的数组是一样的：第一个元素是与整个模式匹配的字符串，其余元素则是与表达式中的捕获组匹配的字符串（如果有的话）。  
      - 不能直接匹配双引号内的元字符，需要正则表达式。

      ```javascript
      let text = "cat, bat, sat, fat";
      let pattern = /.at/;
      
      // 等价于 pattern.exec(text)
      let matches = text.match(pattern);
      console.log(matches.index); // 0
      console.log(matches[0]); // "cat"
      console.log(pattern.lastIndex); // 0
      ```

    - **`search()`**

      - 这个方法唯一的参数与 match()方法一样：正则表达式字符串或 RegExp 对象。这个方法返回模式第一个匹配的位置索引，如果没找到则返回 -1。 
      - search() 始终从字符串开头向后匹配模式。  

    - **`replace()方法  `**

      - 这个方法接收两个参数，第一个参数可以是一个 RegExp 对象或一个字符串（这个字符串不会转换为正则表达式），第二个参数可以是一个字符串或一个函数。
      - 如果第一个参数是字符串，那么只会替换第一个子字符串。要想替换所有子字符串，第一个参数必须为正则表达式并且带全局标记。
      - 第二个参数是字符串的情况下，有几个特殊的字符序列，可以用来插入正则表达式操作的值。ECMA-262 中规定了下表中的值。
        - 使用这些特殊的序列，可以在替换文本中使用之前匹配的内容，如下面的例子所示：  

    ![image-20210711193851091](JavaScript高级程序设计第四版-笔记.assets/image-20210711193851091.png)

    ```javascript
    let text = "cat, bat, sat, fat";
    result = text.replace(/(.at)/g, "word ($1)");
    console.log(result); // word (cat), word (bat), word (sat), word (fat)
    ```

    - `replace()` 的第二个参数可以是一个函数。

      - 在只有一个匹配项时，这个函数会收到 3 个参数：与整个模式匹配的字符串、匹配项在字符串中的开始位置，以及整个字符串。
      - 在有多个捕获组的情况下，每个匹配捕获组的字符串也会作为参数传给这个函数，但最后两个参数还是与整个模式匹配的开始位置和原始字符串。这个函数应该返回一个字符串，表示应该把匹配项替换成什么。使用函数作为第二个参数可以更细致地控制替换过程。

      ```javascript
      function htmlEscape(text) {
        return text.replace(/[<>"&]/g, function (match, pos, originalText) {
          switch (match) {
            case "<":
              return "&lt;";
            case ">":
              return "&gt;";
            case "&":
              return "&amp;";
            case "\"":
              return "&quot;";
          }
        });
      }
      console.log(htmlEscape("<p class=\"greeting\">Hello world!</p>"));
      // "&lt;p class=&quot;greeting&quot;&gt;Hello world!</p>"
      ```

      - 函数 htmlEscape()用于将一段 HTML 中的 4 个字符替换成对应的实体：小于号、大于号、和号，还有双引号（都必须经过转义）。  

    - **`split()`**

      - 这个方法会根据传入的分隔符将字符串拆分成数组。作为分隔符的参数可以是字符串，也可以是 RegExp 对象。（字符串分隔符不会被这个方法当成正则表达式。）还可以传入第二个参数，即数组大小，确保返回的数组不会超过指定大小。  

      ```javascript
      let colorText = "red,blue,green,yellow";
      let colors1 = colorText.split(","); // ["red", "blue", "green", "yellow"]
      let colors2 = colorText.split(",", 2); // ["red", "blue"]
      let colors3 = colorText.split(/[^,]+/); // ["", ",", ",", ",", ""]
      ```

      

12. **`localeCompare()方法  `**

    - 这个方法比较两个字符串，返回如下 3 个值中的一个。  
      - 如果按照字母表顺序，字符串应该排在字符串参数前头，则返回负值。（通常是-1，具体还要看与实际值相关的实现。）
      - 如果字符串与字符串参数相等，则返回 0。
      - 如果按照字母表顺序，字符串应该排在字符串参数后头，则返回正值。（通常是 1，具体还要看与实际值相关的实现。）  

    ```javascript
    let stringValue = "yellow";
    console.log(stringValue.localeCompare("brick")); // 1
    console.log(stringValue.localeCompare("yellow")); // 0
    console.log(stringValue.localeCompare("zoo")); // -1
    
    function determineOrder(value) {
      let result = stringValue.localeCompare(value);
      if (result < 0) {
        console.log(`The string 'yellow' comes before the string '${value}'.`);
      } else if (result > 0) {
        console.log(`The string 'yellow' comes after the string '${value}'.`);
      } else {
        console.log(`The string 'yellow' is equal to the string '${value}'.`);
      }
    }
    determineOrder("brick");
    determineOrder("yellow");
    determineOrder("zoo");
    ```

    - `localeCompare()` 的独特之处在于，实现所在的地区（国家和语言）决定了这个方法如何比较字符串。在美国，英语是 ECMAScript 实现的标准语言， `localeCompare()` 区分大小写，大写字母排在小写字母前面。但其他地区未必是这种情况。  

13. **HTML 方法**  

    - 这些方法基本上已经没有人使用了，因为结果通常不是语义化的标记。

    

## 5.4　单例内置对象

ECMA-262 对内置对象的定义是“任何由 ECMAScript 实现提供、与宿主环境无关，并在 ECMAScript 程序开始执行时就存在的对象”。这就意味着，开发者不用显式地实例化内置对象，因为它们已经实例化好了。前面我们已经接触了大部分内置对象，包括 Object、 Array 和 String。本节介绍 ECMA-262定义的另外两个单例内置对象： Global 和 Math。  

### 5.4.1 Global  

ECMA-262 规定 Global 对象为一种兜底对象，它所针对的是不属于任何对象的属性和方法。事实上，不存在全局变量或全局函数这种东西。在全局作用域中定义的变量和函数都会变成 Global 对象的属性 。本书前面介绍的函数，包括 `isNaN()、 isFinite()、 parseInt() 和 parseFloat()`，实际上都是 Global 对象的方法。除了这些， Global 对象上还有另外一些方法。

1. **URL 编码方法**  

   - `encodeURI()和 encodeURIComponent()方法`

     - 用于编码统一资源标识符（ URI），以便传给浏览器。有效的 URI 不能包含某些字符，比如空格。使用 URI 编码方法来编码 URI 可以让浏览器能够理解它们，同时又以特殊的 UTF-8 编码替换掉所有无效字符。  

   - `decodeURI()和 decodeURIComponent()。`

     - decodeURI() 只对使用 encodeURI() 编码过的字符解码。  

     ```javascript
     let uri = "http://www.wrox.com/illegal value.js#start";
     // "http://www.wrox.com/illegal%20value.js#start"
     console.log(encodeURI(uri));
     // "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start"
     console.log(encodeURIComponent(uri));
     ```

     - decodeURIComponent() 解码所有被 encodeURIComponent() 编码的字符，基本上就是解码所有特殊值。

     ```javascript
     let uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start";
     // http%3A%2F%2Fwww.wrox.com%2Fillegal value.js%23start
     console.log(decodeURI(uri));
     // http:// www.wrox.com/illegal value.js#start
     console.log(decodeURIComponent(uri));
     ```

2. **`eval()` 方法**  

   - 最后一个方法可能是整个 ECMAScript 语言中最强大的了，它就是 eval()。
     - 这个方法就是一个完整的 ECMAScript 解释器，它接收一个参数，即一个要执行的 ECMAScript（ JavaScript）字符串。  
     - 当解释器发现 eval()调用时，会将参数解释为实际的 ECMAScript 语句，然后将其插入到该位置。通过 eval()执行的代码属于该调用所在上下文，被执行的代码与该上下文拥有相同的作用域链。这意味着定义在包含上下文中的变量可以在 eval()调用内部被引用  。
     - 通过 eval()定义的任何变量和函数都不会被提升，这是因为在解析代码的时候，它们是被包含在一个字符串中的。它们只是在 eval()执行的时候才会被创建。
     - 在严格模式下，在 eval()内部创建的变量和函数无法被外部访问。换句话说，最后两个例子会报错。同样，在严格模式下，赋值给 eval 也会导致错误 。
   - **总结：**调用 `eval(code)` 会运行代码字符串，并返回最后一条语句的结果。
     - 在现代 JavaScript 编程中，很少使用它，通常也不需要使用它。
     - 可以访问外部局部变量。这被认为是一个不好的编程习惯。
     - 要在全局作用域中 `eval` 代码，可以使用 `window.eval(code)` 进行替代。
     - 此外，如果你的代码需要从外部作用域获取数据，请使用 `new Function`，并将数据作为参数传递给函数。

   > 注意 解释代码字符串的能力是非常强大的，但也非常危险。在使用 eval()的时候必须极为慎重，特别是在解释用户输入的内容时。因为这个方法会对 XSS 利用暴露出很大的攻击面。恶意用户可能插入会导致你网站或应用崩溃的代码。  

3. **Global 对象属性**  

   ![image-20210711205301182](JavaScript高级程序设计第四版-笔记.assets/image-20210711205301182.png)

   ![image-20210711205332837](JavaScript高级程序设计第四版-笔记.assets/image-20210711205332837.png)

   

4. **window 对象**  

   - 虽然 ECMA-262 没有规定直接访问 Global 对象的方式，但浏览器将 window 对象实现为 Global 对象的代理。因此，所有全局作用域中声明的变量和函数都变成了 window 的属性。  
   - 当一个函数在没有明确（通过成为某个对象的方法，或者通过 call()/apply()）指定 this 值的情况下执行时， this 值等于 Global 对象。因此，调用一个简单返回 this 的函数是在任何执行上下文中获取 Global 对象的通用方式。  

   > 注意 window 对象在 JavaScript 中远不止实现了 ECMAScript 的 Global 对象那么简单。关于 window 对象的更多介绍，请参考第 12 章。  



### 5.4.2 Math  

ECMAScript 提供了 Math 对象作为保存数学公式、信息和计算的地方。 Math 对象提供了一些辅助计算的属性和方法。  

> 注意：Math 对象上提供的计算要比直接在 JavaScript 实现的快得多，因为 Math 对象上的计算使用了 JavaScript 引擎中更高效的实现和处理器指令。但使用 Math 计算的问题是精度会因浏览器、操作系统、指令集和硬件而异。  

1. **Math 对象属性**  

   ![image-20210711205531624](JavaScript高级程序设计第四版-笔记.assets/image-20210711205531624.png)

   

2. **`min()和 max()方法`**  

   - min()和 max()方法用于确定一组数值中的最小值和最大值。这两个方法都接收任意多个参数，如下面的例子所示：  

   ```javascript
   let max = Math.max(3, 54, 32, 16);
   console.log(max); // 54
   
   let min = Math.min(3, 54, 32, 16);
   console.log(min); // 3
   ```

   - 要知道数组中的最大值和最小值，可以像下面这样使用扩展操作符：  

   ```javascript
   let values = [1, 2, 3, 4, 5, 6, 7, 8];
   let max = Math.max(...values);
   console.log(max);
   ```

   

3. **舍入方法**  

   - 把小数值舍入为整数的 4 个方法： `Math.ceil()、 Math.floor()、 Math.round()和 Math.fround()`。  
     - Math.ceil()方法始终向上舍入为最接近的整数。  
     - Math.floor()方法始终向下舍入为最接近的整数。  
     - Math.round()方法执行四舍五入。  
     - Math.fround()方法返回数值最接近的单精度（ 32 位）浮点值表示。  

   ```javascript
   console.log(Math.ceil(25.9)); // 26
   console.log(Math.ceil(25.5)); // 26
   console.log(Math.ceil(25.1)); // 26
   
   console.log(Math.round(25.9)); // 26
   console.log(Math.round(25.5)); // 26
   console.log(Math.round(25.1)); // 25
   
   console.log(Math.fround(0.4)); // 0.4000000059604645
   console.log(Math.fround(0.5)); // 0.5
   console.log(Math.fround(25.9)); // 25.899999618530273
   
   console.log(Math.floor(25.9)); // 25
   console.log(Math.floor(25.5)); // 25
   console.log(Math.floor(25.1)); // 25
   ```

   

4. **`random()方法`**  

   - Math.random() 方法返回一个 0~1 范围内的随机数，其中**包含 0 但不包含 1**。  
   - 可以基于如下公式使用 Math.random()从一组整数中随机选择一个数：  
     - `number = Math.floor(Math.random() * total_number_of_choices + first_possible_value)  `
   - 从 1~10 范围内随机选择一个数  
     - `let num = Math.floor(Math.random() * 10 + 1);  `

   > 注意 Math.random()方法在这里出于演示目的是没有问题的。如果是为了加密而需要生成随机数（传给生成器的输入需要较高的不确定性），那么建议使用 window.crypto.getRandomValues()。  

5. **其他方法**  

   ![image-20210711210425719](JavaScript高级程序设计第四版-笔记.assets/image-20210711210425719.png)



5.5　小结

# 第6章　集合引用类型

## 6.1　Object

虽然 Object 的实例没有多少功能，但很适合存储和在应用程序间交换数据。  

- 显式地创建 Object 的实例有两种方式。

  1. 第一种是使用 new 操作符和 Object 构造函数 ：

  ```javascript
  let person = new Object();
  person.name = "Nicholas";
  person.age = 29;
  ```

  2. 另一种方式是使用**对象字面量（ object literal）表示法**。  

  ```javascript
  let person = {
    name: "Nicholas",
    age: 29
  };
  ```

  - 在这个例子中，左大括号（ `{`）表示对象字面量开始，因为它出现在一个**表达式上下文（ expression context）**中。
  - 在 ECMAScript 中，表达式上下文指的是期待返回值的上下文。赋值操作符表示后面要期待一个值，因此左大括号表示一个表达式的开始。
  - 同样是左大括号，如果出现在**语句上下文（ statement context）**中，比如 if 语句的条件后面，则表示一个语句块的开始。  

- 属性名可以是字符串或数值  

  - 数值属性会自动转换为字符串。  

- **注意：在使用对象字面量表示法定义对象时，并不会实际调用 Object 构造函数。**  

- 虽然属性一般是通过**点语法**来存取的，这也是面向对象语言的惯例，但也可以使用**中括号**来存取属性。 

  - 从功能上讲，这两种存取属性的方式没有区别。使用中括号的主要优势就是可以通过变量访问属性。
  - 如果属性名中包含可能会导致语法错误的字符，或者包含关键字/保留字时，也可以使用中括号语法。  

  ```javascript
  person["first name"] = "Nicholas";
  ```

  

## 6.2　Array

ECMAScript 数组也是一组有序的数据，但跟其他语言不同的是，**数组中每个槽位可以存储任意类型的数据。**这意味着可以创建一个数组，它的第一个元素是字符串，第二个元素是数值，第三个是对象。   

### 6.2.1 创建数组  

- 一种是使用 Array 构造函数：

  - `let colors = new Array();  `
  - `let colors = new Array(20);  `
  - `let colors = new Array("red", "blue", "green");  `
  - 创建数组时可以给构造函数传一个值。这时候就有点问题了，因为如果这个值是数值，则会创建一个长度为指定数值的数组；而如果这个值是其他类型的，则会创建一个只包含该特定值的数组。  

  ```javascript
  let colors = new Array(3); // 创建一个包含 3 个元素的数组
  let names = new Array("Greg"); // 创建一个只包含一个元素，即字符串"Greg"的数组
  
  //在使用 Array 构造函数时，也可以省略 new 操作符。结果是一样的，比如：
  let colors = Array(3); // 创建一个包含 3 个元素的数组
  let names = Array("Greg"); // 创建一个只包含一个元素，即字符串"Greg"的数组
  ```

- 另一种创建数组的方式是使用**数组字面量（ array literal）表示法**。数组字面量是在中括号中包含以逗号分隔的元素列表。

  ```javascript
  let colors = ["red", "blue", "green"]; // 创建一个包含 3 个元素的数组
  let names = []; // 创建一个空数组
  let values = [1,2,]; // 创建一个包含 2 个元素的数组
  ```

  > 注意 与对象一样，在使用数组字面量表示法创建数组不会调用 Array 构造函数。

- Array 构造函数还有两个 **ES6 新增**的用于创建数组的静态方法： 

  - **`from()`** 用于将**类数组结构转换为数组实例**，

    - `Array.from()`的第一个参数是一个类数组对象，即任何可迭代的结构，或者有一个 length 属性和可索引元素的结构。  

    ```javascript
    // 字符串会被拆分为单字符数组
    console.log(Array.from("Matt")); // ["M", "a", "t", "t"]
    
    // 可以使用 from()将集合和映射转换为一个新数组
    const m = new Map().set(1, 2)
      .set(3, 4);
    const s = new Set().add(1)
      .add(2)
      .add(3)
      .add(4);
    
    console.log(Array.from(m)); // [[1, 2], [3, 4]]
    console.log(Array.from(s)); // [1, 2, 3, 4]
    
    // Array.from()对现有数组执行浅复制
    const a1 = [1, 2, 3, 4];
    const a2 = Array.from(a1);
    console.log(a1); // [1, 2, 3, 4]
    alert(a1 === a2); // false
    
    // 可以使用任何可迭代对象
    const iter = {
      *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
      }
    };
    console.log(Array.from(iter)); // [1, 2, 3, 4]
    
    // arguments 对象可以被轻松地转换为数组
    function getArgsArray() {
      return Array.from(arguments);
    }
    console.log(getArgsArray(1, 2, 3, 4)); // [1, 2, 3, 4]
    
    // from()也能转换带有必要属性的自定义对象
    const arrayLikeObject = {
      0: 1,
      1: 2,
      2: 3,
      3: 4,
      length: 4
    };
    console.log(Array.from(arrayLikeObject)); // [1, 2, 3, 4]
    ```

    - `Array.from()` 还接收第二个可选的映射函数参数。这个函数可以直接增强新数组的值，而无须像调用 `Array.from().map()`那样先创建一个中间数组。还可以接收第三个可选参数，用于指定映射函数中 this 的值。但这个重写的 this 值在箭头函数中不适用。  

    ```javascript
    const a1 = [1, 2, 3, 4];
    const a2 = Array.from(a1, x => x**2);
    const a3 = Array.from(a1, function(x) {return x**this.exponent}, {exponent: 2});
    console.log(a2); // [1, 4, 9, 16]
    console.log(a3); // [1, 4, 9, 16]
    ```

  - **`of()`** 用于将**一组参数转换为数组实例**。  

    - `Array.of()`可以把一组参数转换为数组。这个方法用于替代在 ES6 之前常用的 `Array.prototype.slice.call(arguments)`，一种异常笨拙的将 arguments 对象转换为数组的写法：  

    ```javascript
    console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4]
    console.log(Array.of(undefined)); // [undefined]
    ```

### 6.2.2 数组空位  

- 使用数组字面量初始化数组时，可以使用一串逗号来创建**空位（ hole）**。 ECMAScript 会将逗号之间相应索引位置的值当成空位， ES6 规范重新定义了该如何处理这些空位。  

  ```javascript
  const options = [,,,,,]; // 创建包含 5 个元素的数组
  console.log(options.length); // 5
  console.log(options); // [,,,,,]
  ```

  - ES6 新增的方法和迭代器与早期 ECMAScript 版本中存在的方法行为不同。 
    - ES6 新增方法普遍将这些空位当成**存在的元素( empty )**，只不过值为 `undefined`  。
  - ES6 之前的方法则会忽略这个空位，但具体的行为也会因方法而异。

  注意：由于行为不一致和存在性能隐患，因此实践中要**避免使用数组空位。如果确实需要空位，则可以显式地用 undefined 值代替。**  

### 6.2.3 数组索引  

- 在中括号中提供的索引表示要访问的值。  
- 设置数组的值方法也是一样的，就是替换指定位置的值。  
  - 如果把一个值设置给超过数组最大索引的索引，  数组长度会自动扩展到该索引值加 1。
- 数组中元素的数量保存在 length 属性中，这个属性始终返回 0 或大于 0 的值  。
  - 通过修改 length 属性，可以从数组末尾删除或添加元素。  

- **注意：**数组最多可以包含 `4 294 967 295` 个元素，这对于大多数编程任务应该足够了。
  - 如果尝试添加更多项，则会导致抛出错误。以这个最大值作为初始值创建数组，可能导致脚本运行时间过长的错误。  

### 6.2.4 检测数组  

- 判断一个对象是不是数组。在只有一个网页（因而只有一个全局作用域）的情况下，使用 `instanceof` 操作符就足矣：  

  ```javascript
  if (value instanceof Array){
  	// 操作数组
  }
  ```

  - 使用 instanceof 的问题是假定只有一个全局执行上下文。如果网页里有多个框架，则可能涉及两个不同的全局执行上下文，因此就会有两个不同版本的 Array 构造函数。如果要把数组从一个框架传给另一个框架，则这个数组的构造函数将有别于在第二个框架内本地创建的数组。  

- **`Array.isArray()`方法**。

  - 为解决上述问题 。
  - 这个方法的目的就是确定一个值是否为数组，而不用管它是在哪个全局执行上下文中创建的。  

  ```javascript
  if (Array.isArray(value)){
  	// 操作数组
  }
  ```

  

### 6.2.5 迭代器方法  

Array 的原型上暴露了 3 个用于检索数组内容的方法： keys()、 values()和
entries()。 

1. **`keys()`**返回数组索引的迭代器
2. **`values()`**返回数组元素的迭代器
3. **`entries()`**返回索引/值对的迭代器  

```javascript
const a = ["foo", "bar", "baz", "qux"];

// 因为这些方法都返回迭代器，所以可以将它们的内容
// 通过 Array.from()直接转换为数组实例
const aKeys = Array.from(a.keys());
const aValues = Array.from(a.values());
const aEntries = Array.from(a.entries());

console.log(aKeys); // [0, 1, 2, 3]
console.log(aValues); // ["foo", "bar", "baz", "qux"]
console.log(aEntries); // [[0, "foo"], [1, "bar"], [2, "baz"], [3, "qux"]]

// 使用 ES6 的解构可以非常容易地在循环中拆分键/值对：
// const a = ["foo", "bar", "baz", "qux"];
for (const [idx, element] of a.entries()) {
  console.log(idx);
  console.log(element);
}
// 0
// foo
// 1
// bar
// 2
// baz
// 3
// qux

console.log(...a.keys()); // 0 1 2 3
console.log(...a.values()); // foo bar baz qux
console.log(...a.entries()); // [0, "foo"] [1, "bar"] [3, "qux"]
```



### 6.2.6 复制和填充方法  

ES6 新增了两个方法：批量复制方法 `copyWithin()`，以及填充数组方法 `fill()`。这两个方法的函数签名类似，都需要指定既有数组实例上的一个范围，包含开始索引，不包含结束索引。使用这个方法不会改变数组的大小。  

- **`fill()`**方法可以向一个已有的数组中插入全部或部分相同的值。

  - 开始索引用于指定开始填充的位置，它是可选的。
  - 如果不提供结束索引，则一直填充到数组末尾。负值索引从数组末尾开始计算。也可以将负索引想象成数组长度加上它得到的一个正索引。

  ```javascript
  const zeroes = [0, 0, 0, 0, 0];
  
  // 用 5 填充整个数组
  zeroes.fill(5);
  console.log(zeroes); // [5, 5, 5, 5, 5]
  zeroes.fill(0); // 重置
  
  // 用 6 填充索引大于等于 3 的元素
  zeroes.fill(6, 3);
  console.log(zeroes); // [0, 0, 0, 6, 6]
  zeroes.fill(0); // 重置
  
  // 用 7 填充索引大于等于 1 且小于 3 的元素
  zeroes.fill(7, 1, 3);
  console.log(zeroes); // [0, 7, 7, 0, 0];
  zeroes.fill(0); // 重置
  
  // 用 8 填充索引大于等于 1 且小于 4 的元素
  // (-4 + zeroes.length = 1)
  // (-1 + zeroes.length = 4)
  zeroes.fill(8, -4, -1);
  console.log(zeroes); // [0, 8, 8, 8, 0];
  
  // fill()静默忽略超出数组边界、零长度及方向相反的索引范围：
  const zeroes = [0, 0, 0, 0, 0];
  
  // 索引过低，忽略
  zeroes.fill(1, -10, -6);
  console.log(zeroes); // [0, 0, 0, 0, 0]
  
  // 索引过高，忽略
  zeroes.fill(1, 10, 15);
  console.log(zeroes); // [0, 0, 0, 0, 0]
  
  // 索引反向，忽略
  zeroes.fill(2, 4, 2);
  console.log(zeroes); // [0, 0, 0, 0, 0]
  
  // 索引部分可用，填充可用部分
  zeroes.fill(4, 3, 10)
  console.log(zeroes); // [0, 0, 0, 4, 4]
  ```

- **`copyWithin()`** 会按照指定范围浅复制数组中的部分内容，然后将它们插入到指定索引开始的位置。开始索引和结束索引则与 `fill()`使用同样的计算方法：  

  ```javascript
  let ints,
    reset = () => ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  reset();
  
  // 从 ints 中复制索引 0 开始的内容，插入到索引 5 开始的位置
  // 在源索引或目标索引到达数组边界时停止
  ints.copyWithin(5);
  console.log(ints); // [0, 1, 2, 3, 4, 0, 1, 2, 3, 4]
  reset();
  
  // 从 ints 中复制索引 5 开始的内容，插入到索引 0 开始的位置
  ints.copyWithin(0, 5);
  console.log(ints); // [5, 6, 7, 8, 9, 5, 6, 7, 8, 9]
  reset();
  
  // 从 ints 中复制索引 0 开始到索引 3 结束的内容
  // 插入到索引 4 开始的位置
  ints.copyWithin(4, 0, 3);
  console.log(ints); // [0, 1, 2, 3, 0, 1, 2, 7, 8, 9]
  reset();
  
  // JavaScript 引擎在插值前会完整复制范围内的值
  // 因此复制期间不存在重写的风险
  ints.copyWithin(2, 0, 6);
  console.log(ints); // [0, 1, 0, 1, 2, 3, 4, 5, 8, 9]
  reset();
  
  // 支持负索引值，与 fill()相对于数组末尾计算正向索引的过程是一样的
  ints.copyWithin(-4, -7, -3);
  console.log(ints); // [0, 1, 2, 3, 4, 5, 3, 4, 5, 6]
  
  
  // copyWithin() 静默忽略超出数组边界、 零长度及方向相反的索引范围：
  // let ints,
  //   reset = () => ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // reset();
  
  // 索引过低，忽略
  ints.copyWithin(1, -15, -12);
  console.log(ints); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  reset()
  
  // 索引过高，忽略
  ints.copyWithin(1, 12, 15);
  console.log(ints); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  reset();
  
  // 索引反向，忽略
  ints.copyWithin(2, 4, 2);
  console.log(ints); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  reset();
  
  // 索引部分可用，复制、填充可用部分
  ints.copyWithin(4, 7, 10)
  console.log(ints); // [0, 1, 2, 3, 7, 8, 9, 7, 8, 9];
  ```

  

### 6.2.7 转换方法  

所有对象都有 `toLocaleString()、 toString()和 valueOf()`方法。

-  `valueOf()`返回的还是数组本身。而 `toString()`返回由数组中每个值的等效字符串拼接而成的一个逗号分隔的字符串。 
- `toLocaleString()`方法也可能返回跟 toString()和 valueOf()相同的结果，但也不一定。在调用数组的 toLocaleString()方法时，会得到一个逗号分隔的数组值的字符串。
  - 它与另外两个方法唯一的区别是，为了得到最终的字符串，会调用数组每个值的 toLocaleString()方法，而不是toString()方法。   
- 如果想使用不同的分隔符，则可以使用 **`join()`**方法。
  - `join()` 方法接收一个参数，即字符串分隔符，返回包含所有项的字符串。  
  - 如果不给 join()传入任何参数，或者传入 undefined，则仍然使用逗号作为分隔符。  
- **注意：** 如果数组中某一项是 `null 或 undefined`，则在 `join()、 toLocaleString()、toString()和 valueOf()`返回的结果中会以空字符串表示。  

### 6.2.8 栈方法  

数组对象可以像栈一样，也就是一种限制插入和删除项的数据结构。

- 栈是一种**后进先出（ LIFO， Last-In-First-Out）的结构**，也就是最近添加的项先被删除。
- 数据项的**插入（称为推入， push）**和**删除（称为弹出， pop）**只在栈的一个地方发生，即**栈顶**。 
- ECMAScript 数组提供了 push() 和 pop() 方法，以实现类似栈的行为。
  - **`push()`**方法接收任意数量的参数，并将它们添加到数组末尾，返回数组的最新长度。 
  - **`pop()`**方法则用于删除数组的最后一项，同时减少数组的 length 值，返回被删除的项。    

### 6.2.9 队列方法  

- 队列以**先进先出（ FIFO， First-In-First-Out）**形式限制访问。
  - 队列在列表末尾添加数据，但从列表开头获取数据。因为有了在数据末尾添加数据的 push() 方法，所以要模拟队列就差一个从数组开头取得数据的方法了。
- 这个数组方法叫 **`shift()`**，它会删除数组的第一项并返回它，然后数组长度减 1。
  - 使用 shift() 和 push()，可以把数组当成队列来使用。
- **`unshift() 方法`**。
  - `unshift()` 就是执行跟 `shift()` 相反的操作：在数组开头添加任意多个值，然后返回新的数组长度。 
  - 通过使用 unshift() 和 pop() ，可以在相反方向上模拟队列，即在数组开头添加新数据，在数组末尾取得数据。

### 6.2.10 排序方法  

数组有两个方法可以用来对元素重新排序： reverse() 和 sort()。

- 顾名思义， **`reverse() 方法`**就是将数组元素反向排列。比如：

  ```javascript
  let values = [1, 2, 3, 4, 5];
  values.reverse();
  alert(values); // 5,4,3,2,1  
  ```

- 默认情况下， **`sort()`** 会按照升序重新排列数组元素，即最小的值在前面，最大的值在后面。

  - 为此，**sort() 会在每一项上调用 String() 转型函数，然后比较字符串来决定顺序**。
  - 即使数组的元素都是数值，也会先把数组转换为字符串再比较、排序。比如：

  ```javascript
  let values = [0, 1, 5, 10, 15];
  values.sort();
  alert(values); // 0,1,10,15,5  
  ```

  - sort() 方法可以接收一个比较函数，用于判断哪个值应该排在前面。

    - 比较函数接收两个参数：
    - 如果第一个参数应该排在第二个参数前面，就返回负值；如果两个参数相等，就返回 0；
    - 如果第一个参数应该排在第二个参数后面，就返回正值。   

    ```javascript
    function compare(value1, value2) {
      if (value1 < value2) {
        return -1;
      } else if (value1 > value2) {
        return 1;
      } else {
        return 0;
      }
    }
    
    let values = [0, 1, 5, 10, 15];
    // values.sort(compare);
    // alert(values); // 0,1,5,10,15
    
    values.sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
    alert(values); // 15,10,5,1,0
    ```

- **注意：**reverse()和 sort()都返回调用它们的数组的引用。  

- 如果数组的元素是数值，比较函数就是要返回小于 0、 0 和大于 0 的数值，因此减法操作完全可以满足要求。  

  ```javascript
  function compare(value1, value2){
  	return value2 - value1;
  }
  ```

  

### 6.2.11 操作方法  

- **`concat()方法`**可以在现有数组全部元素基础上创建一个新数组。

  - 它首先会创建一个当前数组的副本，然后再把它的参数添加到副本末尾，最后返回这个新构建的数组。

  - 如果传入一个或多个数组，则 concat()会把这些数组的每一项都添加到结果数组。

  - 如果参数不是数组，则直接把它们添加到结果数组末尾。  

  - 打平数组参数的行为可以重写，方法是在参数数组上指定一个特殊的符号： `Symbol.isConcatSpreadable`。

    - 这个符号能够阻止 `concat()`打平参数数组。
    - 相反，把这个值设置为 true 可以强制打平类数组对象。

    ```javascript
    let colors = ["red", "green", "blue"];
    let newColors = ["black", "brown"];
    let moreNewColors = {
      [Symbol.isConcatSpreadable]: true,
      length: 2,
      0: "pink",
      1: "cyan"
    };
    
    newColors[Symbol.isConcatSpreadable] = false;
    
    // 强制不打平数组
    let colors2 = colors.concat("yellow", newColors);
    
    // 强制打平类数组对象
    let colors3 = colors.concat(moreNewColors);
    
    console.log(colors); // ["red", "green", "blue"]
    console.log(colors2); // ["red", "green", "blue", "yellow", ["black", "brown"]]
    console.log(colors3); // ["red", "green", "blue", "pink", "cyan"]
    ```

- **`方法 slice()`** 用于创建一个包含原有数组中一个或多个元素的新数组。

  - `slice()`方法可以接收一个或两个参数：返回元素的开始索引和结束索引。
  - 如果只有一个参数，则 `slice()`会返回该索引到数组末尾的所有元素。
  - 如果有两个参数，则 `slice()`返回从开始索引到结束索引对应的所有元素，其中不包含结束索引对应的元素。
    - 记住，这个操作不影响原始数组。  

  ```javascript
  let colors = ["red", "green", "blue", "yellow", "purple"];
  let colors2 = colors.slice(1);
  let colors3 = colors.slice(1, 4);
  
  alert(colors2); // green,blue,yellow,purple
  alert(colors3); // green,blue,yellow
  ```

  - **注意：** 如果 slice() 的参数有负值，那么就以数值长度加上这个负值的结果确定位置。比如，在包含 5 个元素的数组上调用 slice(-2,-1)，就相当于调用 slice(3,4)。如果结束位置小于开始位置，则返回空数组。  

- **`splice()`** 的主要目的是在数组中间插入元素，但有 3 种不同的方式使用这个方法。  

  1. **删除。**
     - 需要给 splice() 传 2 个参数：要删除的第一个元素的位置和要删除的元素数量。
     - 可以从数组中删除任意多个元素，比如 splice(0, 2)会删除前两个元素。
  2. **插入。**
     - 需要给 splice() 传 3 个参数：开始位置、 0（要删除的元素数量）和要插入的元素，可以在数组中指定的位置插入元素。
     - 第三个参数之后还可以传第四个、第五个参数，乃至任意多个要插入的元素。
     - 比如， splice(2, 0, "red", "green")会从数组位置 2 开始插入字符串"red"和"green"。
  3. **替换。** 
     - splice() 在删除元素的同时可以在指定位置插入新元素，同样要传入 3 个参数：开始位置、要删除元素的数量和要插入的任意多个元素。要插入的元素数量不一定跟删除的元素数量一致。
     - 比如， `splice(2, 1, "red", "green")`会在位置 2 删除一个元素，然后从该位置开始向数组中插入"red"和"green"。  

  `splice()` 方法始终返回一个数组，它包含从数组中被删除的元素（如果没有删除元素，则返回空数组）。  

  ```javascript
  let colors = ["red", "green", "blue"];
  let removed = colors.splice(0, 1); // 删除第一项
  
  alert(colors); // green,blue
  alert(removed); // red，只有一个元素的数组
  
  removed = colors.splice(1, 0, "yellow", "orange"); // 在位置 1 插入两个元素
  alert(colors); // green,yellow,orange,blue
  alert(removed); // 空数组
  
  removed = colors.splice(1, 1, "red", "purple"); // 插入两个值，删除一个元素
  alert(colors); // green,red,purple,orange,blue
  alert(removed); // yellow，只有一个元素的数组
  ```

  

### 6.2.12 搜索和位置方法  

ECMAScript 提供两类搜索数组的方法：按严格相等搜索和按断言函数搜索。  

1. **严格相等  **

   - ECMAScript 提供了 3 个严格相等的搜索方法： `indexOf()、lastIndexOf()和 includes()`。
     - 其中，前两个方法在所有版本中都可用，而第三个方法是 ECMAScript 7 新增的。
     - 这些方法都接收两个参数：
       - 要查找的元素和
       - 一个可选的起始搜索位置。 
     - `indexOf()和 includes()`方法从数组前头（第一项）开始向后搜索，而 `lastIndexOf()`从数组末尾（最后一项）开始向前搜索。  
   - `indexOf()和 lastIndexOf()`都返回要查找的元素在数组中的位置，如果没找到则返回 -1。
   - `includes()`返回布尔值，表示是否至少找到一个与指定元素匹配的项。
   - 在比较第一个参数跟数组每一项时，会使用全等（ `===`）比较，也就是说两项**必须严格相等**。  

   ```javascript
   let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
   
   console.log(numbers.indexOf(4)); // 3
   console.log(numbers.lastIndexOf(4)); // 5
   console.log(numbers.includes(4)); // true
   
   console.log(numbers.indexOf(4, 4)); // 5
   console.log(numbers.lastIndexOf(4, 4)); // 3
   console.log(numbers.includes(4, 7)); // false
   
   let person = {
     name: "Nicholas"
   };
   let people = [{
     name: "Nicholas"
   }];
   let morePeople = [person];
   
   console.log(people.indexOf(person)); // -1
   console.log(morePeople.indexOf(person)); // 0
   console.log(people.includes(person)); // false
   console.log(morePeople.includes(person)); // true
   console.log(morePeople, people, person);
   ```

   

2. **断言函数  **

   - ECMAScript 也允许按照定义的断言函数搜索数组，每个索引都会调用这个函数。断言函数的返回值决定了相应索引的元素是否被认为匹配。  
   - 断言函数接收 3 个参数：元素、索引和数组本身。
     - 其中元素是数组中当前搜索的元素，索引是当前元素的索引，而数组就是正在搜索的数组。
     - 断言函数返回真值，表示是否匹配。
   - **`find() 和 findIndex()`** 方法使用了断言函数。这两个方法都从数组的最小索引开始。
     - find() 返回第一个匹配的元素， 
     - findIndex() 返回第一个匹配元素的索引。
     - 这两个方法也都接收第二个可选的参数，用于指定断言函数内部 this 的值。 
   - 找到匹配项后，这两个方法都不再继续搜索。   

   ```javascript
   const people = [{
       name: "Matt",
       age: 27
     },
     {
       name: "Nicholas",
       age: 29
     }
   ];
   
   console.log(people.find((element, index, array) => element.age < 28));
   // {name: "Matt", age: 27}
   
   console.log(people.findIndex((element, index, array) => element.age < 28));
   // 0
   ```

   

### 6.2.13 迭代方法  

ECMAScript 为数组定义了 5 个迭代方法。

- 每个方法接收两个参数：

  - 以每一项为参数运行的函数，
  - 以及可选的作为函数运行上下文的作用域对象（影响函数中 this 的值）。

- 传给每个方法的函数接收 3 个参数：数组元素、元素索引和数组本身。

  - 因具体方法而异，这个函数的执行结果可能会也可能不会影响方法的返回值。

- 数组的 5 个迭代方法如下。  

  1. **`every()`**： 对数组每一项都运行传入的函数，如果对每一项函数都返回 true， 则这个方法返回 true。
  2. **`filter()`**：对数组每一项都运行传入的函数，函数返回 true 的项会组成数组之后返回。
  3. **`forEach()`**：对数组每一项都运行传入的函数，没有返回值。
  4. **`map()`**：对数组每一项都运行传入的函数，返回由每次函数调用的结果构成的数组。
  5. **`some()`**：对数组每一项都运行传入的函数，如果有一项函数返回 true，则这个方法返回 true。

  这些方法都不改变调用它们的数组。  

  ```javascript
  let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
  
  let everyResult = numbers.every((item, index, array) => item > 2);
  console.log(everyResult); // false
  
  let someResult = numbers.some((item, index, array) => item > 2);
  console.log(someResult); // true
  
  let filterResult = numbers.filter((item, index, array) => item > 2);
  console.log(filterResult); // 3,4,5,4,3
  
  let mapResult = numbers.map((item, index, array) => item * 2);
  console.log(mapResult); // 2,4,6,8,10,8,6,4,2
  
  numbers.forEach((item, index, array) => {
    // 执行某些操作
  });
  ```

  

### 6.2.14 归并方法  

ECMAScript 为数组提供了两个归并方法： reduce() 和 reduceRight()。

- 这两个方法都会迭代数组的所有项，并在此基础上构建一个最终返回值。 

- reduce() 方法从数组第一项开始遍历到最后一项。

- 而 reduceRight() 从最后一项开始遍历至第一项。

  - 这两个方法都接收两个参数：对每一项都会运行的归并函数，以及可选的以之为归并起点的初始值。
  - 传给 reduce() 和 reduceRight() 的函数接收 4 个参数：上一个归并值、当前项、当前项的索引和数组本身。
  - 这个函数返回的任何值都会作为下一次调用同一个函数的第一个参数。如果没有给这两个方法传入可选的第二个参数（作为归并起点值），则第一次迭代将从数组的第二项开始，因此传给归并函数的第一个参数是数组的第一项，第二个参数是数组的第二项。

  ```javascript
  let values = [1, 2, 3, 4, 5];
  let sum = values.reduce((prev, cur, index, array) => prev + cur);
  alert(sum); // 15
  
  sum = values.reduceRight(function (prev, cur, index, array) {
    return prev + cur;
  });
  alert(sum); // 15
  ```

  



## 6.3　定型数组

**定型数组（ typed array）**是 ECMAScript 新增的结构，目的是提升向原生库传输数据的效率。

实际上，JavaScript 并没有“TypedArray”类型，它所指的其实是一种特殊的包含数值类型的数组。为理解如何使用定型数组，有必要先了解一下它的用途。  

### 6.3.1 历史  

其目标是开发一套 JavaScript API，从而充分利用 3D 图形 API 和 GPU 加速，以便在`<canvas>`元素上渲染复杂的图形。  

1. WebGL  
   - JavaScript API 是基于 OpenGL ES（ OpenGL for Embedded Systems） 2.0 规范的。 OpenGL ES是 OpenGL 专注于 2D 和 3D 计算机图形的子集。这个新 API 被命名为 WebGL（ Web Graphics Library），于 2011 年发布 1.0 版。有了它，开发者就能够编写涉及复杂图形的应用程序，它会被兼容 WebGL 的浏览器原生解释执行。  
2. 定型数组  
   - CanvasFloatArray。这是一个提供JavaScript 接口的、 C 语言风格的浮点值数组。 JavaScript 运行时使用这个类型可以分配、读取和写入数组。这个数组可以直接传给底层图形驱动程序 API，也可以直接从底层获取到。最终， CanvasFloatArray变成了 Float32Array，也就是今天定型数组中可用的第一个“类型”。  

### 6.3.2 ArrayBuffer  

- Float32Array 实际上是一种“视图”，可以允许 JavaScript 运行时访问一块名为 ArrayBuffer 的预分配内存。 ArrayBuffer 是所有定型数组及视图引用的基本单位。  
- `ArrayBuffer()`是一个普通的 JavaScript 构造函数，可用于在内存中分配特定数量的字节空间。  
- ArrayBuffer 一经创建就不能再调整大小。不过，可以使用 slice()复制其全部或部分到一个新实例中。
- ArrayBuffer 某种程度上类似于 C++的 malloc()，但也有几个明显的区别。
  - malloc()在分配失败时会返回一个 null 指针。 ArrayBuffer 在分配失败时会抛出错误。
  - malloc()可以利用虚拟内存，因此最大可分配尺寸只受可寻址系统内存限制。 ArrayBuffer分配的内存不能超过 Number.MAX_SAFE_INTEGER（ 253 -1）字节。
  - malloc()调用成功不会初始化实际的地址。声明 ArrayBuffer 则会将所有二进制位初始化为 0。
  - 通过 malloc() 分配的堆内存除非调用 free()或程序退出，否则系统不能再使用。而通过声明 ArrayBuffer 分配的堆内存可以被当成垃圾回收，不用手动释放。
- 不能仅通过对 ArrayBuffer 的引用就读取或写入其内容。要读取或写入 ArrayBuffer，就必须通过视图。视图有不同的类型，但引用的都是 ArrayBuffer 中存储的二进制数据。  

### 6.3.3 DataView  

第一种允许你读写 ArrayBuffer 的视图是 DataView。这个视图专为文件 I/O 和网络 I/O 设计，其API 支持对缓冲数据的高度控制，但相比于其他类型的视图性能也差一些。 DataView 对缓冲内容没有任何预设，也不能迭代。  

必须在对已有的 ArrayBuffer 读取或写入时才能创建 DataView 实例。这个实例可以使用全部或部分 ArrayBuffer，且维护着对该缓冲实例的引用，以及视图在缓冲中开始的位置。  

```javascript
const buf = new ArrayBuffer(16);

// DataView 默认使用整个 ArrayBuffer
const fullDataView = new DataView(buf);
alert(fullDataView.byteOffset); // 0
alert(fullDataView.byteLength); // 16
alert(fullDataView.buffer === buf); // true

// 构造函数接收一个可选的字节偏移量和字节长度
// byteOffset=0 表示视图从缓冲起点开始
// byteLength=8 限制视图为前 8 个字节
const firstHalfDataView = new DataView(buf, 0, 8);
alert(firstHalfDataView.byteOffset); // 0
alert(firstHalfDataView.byteLength); // 8
alert(firstHalfDataView.buffer === buf); // true

// 如果不指定，则 DataView 会使用剩余的缓冲
// byteOffset=8 表示视图从缓冲的第 9 个字节开始
// byteLength 未指定，默认为剩余缓冲
const secondHalfDataView = new DataView(buf, 8);
alert(secondHalfDataView.byteOffset); // 8
alert(secondHalfDataView.byteLength); // 8
alert(secondHalfDataView.buffer === buf); // true
```

要通过 DataView 读取缓冲，还需要几个组件。

- 首先是要读或写的字节偏移量。可以看成 DataView 中的某种“地址”。
- DataView 应该使用 ElementType 来实现 JavaScript 的 Number 类型到缓冲内二进制格式的转换。
- 最后是内存中值的字节序。默认为大端字节序。  



1. **ElementType  **

   - DataView 对存储在缓冲内的数据类型没有预设。它暴露的 API 强制开发者在读、写时指定一个ElementType，然后 DataView 就会忠实地为读、写而完成相应的转换。  
   - ECMAScript 6 支持 8 种不同的 ElementType（见下表）。  

   ![image-20210712212850089](JavaScript高级程序设计第四版-笔记.assets/image-20210712212850089.png)

   - DataView 为上表中的每种类型都暴露了 get 和 set 方法，这些方法使用 byteOffset（字节偏移量）定位要读取或写入值的位置。类型是可以互换使用的，如下例所示：  

   ```javascript
   // 在内存中分配两个字节并声明一个 DataView
   const buf = new ArrayBuffer(2);
   const view = new DataView(buf);
   
   // 说明整个缓冲确实所有二进制位都是 0
   // 检查第一个和第二个字符
   alert(view.getInt8(0)); // 0
   alert(view.getInt8(1)); // 0
   
   // 检查整个缓冲
   alert(view.getInt16(0)); // 0
   
   // 将整个缓冲都设置为 1
   // 255 的二进制表示是 11111111（ 2^8 - 1）
   view.setUint8(0, 255);
   
   // DataView 会自动将数据转换为特定的 ElementType
   // 255 的十六进制表示是 0xFF
   view.setUint8(1, 0xFF);
   
   // 现在，缓冲里都是 1 了
   // 如果把它当成二补数的有符号整数，则应该是-1
   alert(view.getInt16(0)); // -1
   ```

   

2. **字节序  **

   - DataView 只支持两种约定：大端字节序和小端字节序。
     - 大端字节序也称为“网络字节序”，意思是最高有效位保存在第一个字节，而最低有效位保存在最后一个字节。
     - 小端字节序正好相反，即最低有效位保存在第一个字节，最高有效位保存在最后一个字节。  
   - JavaScript 运行时所在系统的原生字节序决定了如何读取或写入字节，但 DataView 并不遵守这个约定。
     - 对一段内存而言， DataView 是一个中立接口，它会遵循你指定的字节序。 
     - DataView 的所有 API 方法都以大端字节序作为默认值，但接收一个可选的布尔值参数，设置为 true 即可启用小端字节序。  

   ```javascript
   // 在内存中分配两个字节并声明一个 DataView
   const buf = new ArrayBuffer(2);
   const view = new DataView(buf);
   
   // 填充缓冲，让第一位和最后一位都是 1
   view.setUint8(0, 0x80); // 设置最左边的位等于 1
   view.setUint8(1, 0x01); // 设置最右边的位等于 1
   
   // 缓冲内容（为方便阅读，人为加了空格）
   // 0x8 0x0 0x0 0x1
   // 1000 0000 0000 0001
   // 按大端字节序读取 Uint16
   // 0x80 是高字节， 0x01 是低字节
   // 0x8001 = 2^15 + 2^0 = 32768 + 1 = 32769
   alert(view.getUint16(0)); // 32769
   
   // 按小端字节序读取 Uint16
   // 0x01 是高字节， 0x80 是低字节
   // 0x0180 = 2^8 + 2^7 = 256 + 128 = 384
   alert(view.getUint16(0, true)); // 384
   
   // 按大端字节序写入 Uint16
   view.setUint16(0, 0x0004);
   
   // 缓冲内容（为方便阅读，人为加了空格）
   // 0x0 0x0 0x0 0x4
   // 0000 0000 0000 0100
   alert(view.getUint8(0)); // 0
   alert(view.getUint8(1)); // 4
   
   // 按小端字节序写入 Uint16
   view.setUint16(0, 0x0002, true);
   
   // 缓冲内容（为方便阅读，人为加了空格）
   // 0x0 0x2 0x0 0x0
   // 0000 0010 0000 0000
   alert(view.getUint8(0)); // 2
   alert(view.getUint8(1)); // 0
   ```

3. **边界情形  **

   - DataView 完成读、写操作的前提是必须有充足的缓冲区，否则就会抛出 RangeError：  

     ```javascript
     const buf = new ArrayBuffer(6);
     const view = new DataView(buf);
     
     // 尝试读取部分超出缓冲范围的值
     view.getInt32(4);
     // RangeError
     
     // 尝试读取超出缓冲范围的值
     view.getInt32(8);
     // RangeError
     
     // 尝试读取超出缓冲范围的值
     view.getInt32(-1);
     // RangeError
     
     // 尝试写入超出缓冲范围的值
     view.setInt32(4, 123);
     // RangeError
     ```

     

   - DataView 在写入缓冲里会尽最大努力把一个值转换为适当的类型，后备为 0。如果无法转换，则抛出错误：  

     ```javascript
     const buf = new ArrayBuffer(1);
     const view = new DataView(buf);
     
     view.setInt8(0, 1.5);
     alert(view.getInt8(0)); // 1
     
     view.setInt8(0, [4]);
     alert(view.getInt8(0)); // 4
     
     view.setInt8(0, 'f');
     alert(view.getInt8(0)); // 0
     
     view.setInt8(0, Symbol()); // TypeError
     ```

     

### 6.3.4 定型数组  

定型数组是另一种形式的 ArrayBuffer 视图。

- 虽然概念上与 DataView 接近，但定型数组的区别在于，它特定于一种 ElementType 且遵循系统原生的字节序。

- 相应地，定型数组提供了适用面更广的API 和更高的性能。

- 设计定型数组的目的就是提高与 WebGL 等原生库交换二进制数据的效率。

- 由于定型数组的二进制表示对操作系统而言是一种容易使用的格式， JavaScript 引擎可以重度优化算术运算、按位运算和其他对定型数组的常见操作，因此使用它们速度极快。

- 创建定型数组的方式包括**读取已有的缓冲、使用自有缓冲、填充可迭代结构，以及填充基于任意类型的定型数组**。

- 另外，通过**`<ElementType>.from()`**和**`<ElementType>.of()`**也可以创建定型数组：  

  ```javascript
  // 创建一个 12 字节的缓冲
  const buf = new ArrayBuffer(12);
  // 创建一个引用该缓冲的 Int32Array
  const ints = new Int32Array(buf);
  // 这个定型数组知道自己的每个元素需要 4 字节
  // 因此长度为 3
  alert(ints.length); // 3
  
  // 创建一个长度为 6 的 Int32Array
  const ints2 = new Int32Array(6);
  // 每个数值使用 4 字节，因此 ArrayBuffer 是 24 字节
  alert(ints2.length); // 6
  // 类似 DataView，定型数组也有一个指向关联缓冲的引用
  alert(ints2.buffer.byteLength); // 24
  
  // 创建一个包含[2, 4, 6, 8]的 Int32Array
  const ints3 = new Int32Array([2, 4, 6, 8]);
  alert(ints3.length); // 4
  alert(ints3.buffer.byteLength); // 16
  alert(ints3[2]); // 6
  
  // 通过复制 ints3 的值创建一个 Int16Array
  const ints4 = new Int16Array(ints3);
  // 这个新类型数组会分配自己的缓冲
  // 对应索引的每个值会相应地转换为新格式
  alert(ints4.length); // 4
  alert(ints4.buffer.byteLength); // 8
  alert(ints4[2]); // 6
  
  // 基于普通数组来创建一个 Int16Array
  const ints5 = Int16Array.from([3, 5, 7, 9]);
  alert(ints5.length); // 4
  alert(ints5.buffer.byteLength); // 8
  alert(ints5[2]); // 7
  
  // 基于传入的参数创建一个 Float32Array
  const floats = Float32Array.of(3.14, 2.718, 1.618);
  alert(floats.length); // 3
  alert(floats.buffer.byteLength); // 12
  alert(floats[2]); // 1.6180000305175781
  ```

- 定型数组的构造函数和实例都有一个 **BYTES_PER_ELEMENT** 属性，返回该类型数组中每个元素的大小：  

  ```javascript
  alert(Int16Array.BYTES_PER_ELEMENT); // 2
  alert(Int32Array.BYTES_PER_ELEMENT); // 4
  
  const ints = new Int32Array(1),
  floats = new Float64Array(1);
  
  alert(ints.BYTES_PER_ELEMENT); // 4
  alert(floats.BYTES_PER_ELEMENT); // 8
  
  // 如果定型数组没有用任何值初始化，则其关联的缓冲会以 0 填充：
  const ints = new Int32Array(4);
  alert(ints[0]); // 0
  alert(ints[1]); // 0
  alert(ints[2]); // 0
  alert(ints[3]); // 0
  ```



1. **定型数组行为  **

   - 从很多方面看，定型数组与普通数组都很相似。定型数组支持如下操作符、方法和属性：

     - `[]`
     - `copyWithin()`
     - `entries()`  

     - `every()`
     - `fill()`
     - `filter()`
     - `find()`
     - `findIndex()`
     - `forEach()`
     - `indexOf()`
     - `join()`
     - `keys()`
     - `lastIndexOf()`
     - `length`
     - `map()`
     - `reduce()`
     - `reduceRight()`
     - `reverse()`
     - `slice()`
     - `some()`
     - `sort()`
     - `toLocaleString()`
     - `toString()`
     - `values()`  

   - 其中，返回新数组的方法也会返回包含同样元素类型（ element type）的新定型数组：  

     ```javascript
     const ints = new Int16Array([1, 2, 3]);
     const doubleints = ints.map(x => 2*x);
     alert(doubleints instanceof Int16Array); // true
     ```

   - 定型数组有一个 `Symbol.iterator` 符号属性，因此可以通过 `for..of` 循环和扩展操作符来操作  

2. **合并、复制和修改定型数组  **

   - **`set()`**

     - 从提供的**数组或定型数组**中把值复制到当前定型数组中指定的索引位置。

     ```javascript
     // 创建长度为 8 的 int16 数组
     const container = new Int16Array(8);
     
     // 把定型数组复制为前 4 个值
     // 偏移量默认为索引 0
     container.set(Int8Array.of(1, 2, 3, 4));
     console.log(container); // [1,2,3,4,0,0,0,0]
     
     // 把普通数组复制为后 4 个值
     // 偏移量 4 表示从索引 4 开始插入
     container.set([5,6,7,8], 4);
     console.log(container); // [1,2,3,4,5,6,7,8]
     
     // 溢出会抛出错误
     container.set([5,6,7,8], 7);
     // RangeError
     ```

   - **`subarray()`** 执行与 `set()` 相反的操作，

     - 它会基于从原始定型数组中复制的值返回一个新定型数组。
     - 复制值时的开始索引和结束索引是可选的：  

     ```javascript
     const source = Int16Array.of(2, 4, 6, 8);
     
     // 把整个数组复制为一个同类型的新数组
     const fullCopy = source.subarray();
     console.log(fullCopy); // [2, 4, 6, 8]
     
     // 从索引 2 开始复制数组
     const halfCopy = source.subarray(2);
     console.log(halfCopy); // [6, 8]
     
     // 从索引 1 开始复制到索引 3
     const partialCopy = source.subarray(1, 3);
     console.log(partialCopy); // [4, 6]
     
     // 定型数组没有原生的拼接能力， 但使用定型数组 API 提供的很多工具可以手动构建：
     // 第一个参数是应该返回的数组类型
     // 其余参数是应该拼接在一起的定型数组
     function typedArrayConcat(typedArrayConstructor, ...typedArrays) {
       // 计算所有数组中包含的元素总数
       const numElements = typedArrays.reduce((x, y) => (x.length || x) + y.length);
     
       // 按照提供的类型创建一个数组，为所有元素留出空间
       const resultArray = new typedArrayConstructor(numElements);
     
       // 依次转移数组
       let currentOffset = 0;
       typedArrays.map(x => {
         resultArray.set(x, currentOffset);
         currentOffset += x.length;
       });
       return resultArray;
     }
     
     const concatArray = typedArrayConcat(Int32Array,
       Int8Array.of(1, 2, 3),
       Int16Array.of(4, 5, 6),
       Float32Array.of(7, 8, 9));
     console.log(concatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
     console.log(concatArray instanceof Int32Array); // true
     ```

     

3. **下溢和上溢  **

   - 定型数组中值的下溢和上溢不会影响到其他索引，但仍然需要考虑数组的元素应该是什么类型。

     - 定型数组对于可以存储的每个索引只接受一个相关位，而不考虑它们对实际数值的影响。
     - 以下代码演示了如何处理下溢和上溢：  

     ```javascript
     // 长度为 2 的有符号整数数组
     // 每个索引保存一个二补数形式的有符号整数
     // 范围是-128（ -1 * 2^7） ~127（ 2^7 - 1）
     const ints = new Int8Array(2);
     
     // 长度为 2 的无符号整数数组
     // 每个索引保存一个无符号整数
     // 范围是 0~255（ 2^7 - 1）
     const unsignedInts = new Uint8Array(2);
     
     // 上溢的位不会影响相邻索引
     // 索引只取最低有效位上的 8 位
     unsignedInts[1] = 256; // 0x100
     console.log(unsignedInts); // [0, 0]
     unsignedInts[1] = 511; // 0x1FF
     console.log(unsignedInts); // [0, 255]
     
     // 下溢的位会被转换为其无符号的等价值
     // 0xFF 是以二补数形式表示的-1（截取到 8 位） ,
     // 但 255 是一个无符号整数
     unsignedInts[1] = -1 // 0xFF (truncated to 8 bits)
     console.log(unsignedInts); // [0, 255]
     
     // 上溢自动变成二补数形式
     // 0x80 是无符号整数的 128，是二补数形式的-128
     ints[1] = 128; // 0x80
     console.log(ints); // [0, -128]
     
     // 下溢自动变成二补数形式
     // 0xFF 是无符号整数的 255，是二补数形式的-1
     ints[1] = 255; // 0xFF
     console.log(ints); // [0, -1]
     ```

   - 除了 8 种元素类型，还有一种“夹板”数组类型： Uint8ClampedArray，不允许任何方向溢出。超出最大值 255 的值会被向下舍入为 255，而小于最小值 0 的值会被向上舍入为 0。  

   - 按照 JavaScript 之父 Brendan Eich 的说法：“Uint8ClampedArray 完全是 HTML5canvas 元素的历史留存。除非真的做跟 canvas 相关的开发，否则不要使用它。”  



## 6.4　Map

Map 是一种新的集合类型，为这门语言带来了真正的键/值存储机制。 Map 的大多数特性都可以通过 Object 类型实现，但二者之间还是存在一些细微的差异。  

### 6.4.1 基本 API  

- `const m = new Map();  `

- 如果想在创建的同时初始化实例，可以给 Map 构造函数传入一个可迭代对象，需要包含键/值对数组。

  - 可迭代对象中的每个键/值对都会按照迭代顺序插入到新映射实例中。

  ```javascript
  // 使用嵌套数组初始化映射
  const m1 = new Map([
    ["key1", "val1"],
    ["key2", "val2"],
    ["key3", "val3"]
  ]);
  alert(m1.size); // 3
  
  // 使用自定义迭代器初始化映射
  const m2 = new Map({
    [Symbol.iterator]: function* () {
      yield ["key1", "val1"];
      yield ["key2", "val2"];
      yield ["key3", "val3"];
    }
  });
  alert(m2.size); // 3
  
  // 映射期待的键/值对，无论是否提供
  const m3 = new Map([
    []
  ]);
  alert(m3.has(undefined)); // true
  alert(m3.get(undefined)); // undefined
  ```

- 初始化之后，可以使用 **`set()`** 方法再添加键/值对。

  - 另外，可以使用 **`get()`** 和 **`has()`**进行查询，
  - 可以通过 **`size`** 属性获取映射中的键/值对的数量，
  - 还可以使用 **`delete()`**和 **`clear()`** 删除值。  

  ```javascript
  const m = new Map();
  
  alert(m.has("firstName")); // false
  alert(m.get("firstName")); // undefined
  
  alert(m.size); // 0
  
  // set()方法返回映射实例，因此可以把多个操作连缀起来，包括初始化声明
  m.set("firstName", "Matt")
    .set("lastName", "Frisbie");
  
  alert(m.has("firstName")); // true
  alert(m.get("firstName")); // Matt
  alert(m.size); // 2
  
  m.delete("firstName"); // 只删除这一个键/值对
  
  alert(m.has("firstName")); // false
  alert(m.has("lastName")); // true
  alert(m.size); // 1
  
  m.clear(); // 清除这个映射实例中的所有键/值对
  
  alert(m.has("firstName")); // false
  alert(m.has("lastName")); // false
  alert(m.size); // 0
  ```

- 与 Object 只能使用数值、字符串或符号作为键不同， Map 可以使用任何 JavaScript 数据类型作为键。 

  - Map 内部使用 **SameValueZero** 比较操作（ ECMAScript 规范内部定义，语言中不能使用），基本上相当于使用严格对象相等的标准来检查键的匹配性。
  - 与 Object 类似，映射的值是没有限制的。 

- 与严格相等一样，在映射中用作键和值的对象及其他“集合”类型，在自己的内容或属性被修改时仍然保持不变。

  ```javascript
  const m = new Map();
  const objKey = {},
    objVal = {},
    arrKey = [],
    arrVal = [];
  m.set(objKey, objVal);
  m.set(arrKey, arrVal);
  objKey.foo = "foo";
  objVal.bar = "bar";
  arrKey.push("foo");
  arrVal.push("bar");
  console.log(m.get(objKey)); // {bar: "bar"}
  console.log(m.get(arrKey)); // ["bar"]
  
  // SameValueZero 比较也可能导致意想不到的冲突：
  // const m = new Map();
  const a = 0 / "", // NaN
    b = 0 / "", // NaN
    pz = +0,
    nz = -0;
  alert(a === b); // false
  alert(pz === nz); // true
  m.set(a, "foo");
  m.set(pz, "bar");
  alert(m.get(b)); // foo
  alert(m.get(nz)); // bar
  ```

  

### 6.4.2 顺序与迭代  

- 与 Object 类型的一个主要差异是， Map 实例会维护键值对的插入顺序，因此可以根据插入顺序执行迭代操作。

  - 映射实例可以提供一个迭代器（ Iterator），能以插入顺序生成`[key, value]`形式的数组。
  - 可以通过 `entries()`方法（或者 `Symbol.iterator` 属性，它引用 `entries()`）取得这个迭代器。

  ```javascript
  const m = new Map([
    ["key1", "val1"],
    ["key2", "val2"],
    ["key3", "val3"]
  ]);
  alert(m.entries === m[Symbol.iterator]); // true
  
  for (let pair of m.entries()) {
    alert(pair);
  }
  // [key1,val1]
  // [key2,val2]
  // [key3,val3]
  
  for (let pair of m[Symbol.iterator]()) {
    alert(pair);
  }
  // [key1,val1]
  // [key2,val2]
  // [key3,val3]
  ```

  

- 如果不使用迭代器，而是使用回调方式，则可以调用映射的 `forEach(callback, opt_thisArg)` 方法并传入回调，依次迭代每个键/值对。传入的回调接收可选的第二个参数，这个参数用于重写回调内部 this 的值。

  ```javascript
  const m = new Map([
    ["key1", "val1"],
    ["key2", "val2"],
    ["key3", "val3"]
  ]);
  
  m.forEach((val, key) => alert(`${key} -> ${val}`));
  // key1 -> val1
  // key2 -> val2
  // key3 -> val3
  
  
  // keys() 和 values() 分别返回以插入顺序生成键和值的迭代器：
  for (let key of m.keys()) {
    alert(key);
  }
  // key1
  // key2
  // key3
  for (let key of m.values()) {
    alert(key);
  }
  // value1
  // value2
  // value3
  ```

  

- 键和值在迭代器遍历时是可以修改的，但映射内部的引用则无法修改。当然，这并不妨碍修改作为键或值的对象内部的属性，因为这样并不影响它们在映射实例中的身份。

  ```javascript
  const m1 = new Map([
    ["key1", "val1"]
  ]);
  
  // 作为键的字符串原始值是不能修改的
  for (let key of m1.keys()) {
    key = "newKey";
    alert(key); // newKey
    alert(m1.get("key1")); // val1
  }
  const keyObj = {
    id: 1
  };
  const m = new Map([
    [keyObj, "val1"]
  ]);
  
  // 修改了作为键的对象的属性，但对象在映射内部仍然引用相同的值
  for (let key of m.keys()) {
    key.id = "newKey";
    alert(key); // {id: "newKey"}
    alert(m.get(keyObj)); // val1
  }
  alert(keyObj); // {id: "newKey"}
  ```

  

### 6.4.3 选择 Object 还是 Map  

对于多数 Web 开发任务来说，选择 Object 还是 Map 只是个人偏好问题，影响不大。不过，对于在乎内存和性能的开发者来说，对象和映射之间确实存在显著的差别。

1. **内存占用**
   - Object 和 Map 的工程级实现在不同浏览器间存在明显差异，但存储单个键/值对所占用的内存数量都会随键的数量线性增加。批量添加或删除键/值对则取决于各浏览器对该类型内存分配的工程实现。
   - 不同浏览器的情况不同，但给定固定大小的内存， Map 大约可以比Object 多存储 50%的键/值对。
2. **插入性能**
   - 向 Object 和 Map 中插入新键/值对的消耗大致相当，不过插入 Map 在所有浏览器中一般会稍微快一点儿。
   - 对这两个类型来说，插入速度并不会随着键/值对数量而线性增加。如果代码涉及大量插入操作，那么显然 Map 的性能更佳。
3. **查找速度**
   - 与插入不同，从大型 Object 和 Map 中查找键/值对的性能差异极小，但如果只包含少量键/值对，则 Object 有时候速度更快。在把 Object 当成数组使用的情况下（比如使用连续整数作为属性），浏览器引擎可以进行优化，在内存中使用更高效的布局。
   - 这对 Map 来说是不可能的。对这两个类型而言，查找速度不会随着键/值对数量增加而线性增加。如果代码涉及大量查找操作，那么某些情况下可能选择 Object 更好一些。
4. **删除性能**
   - 使用 delete 删除 Object 属性的性能一直以来饱受诟病，目前在很多浏览器中仍然如此。为此，出现了一些伪删除对象属性的操作，包括把属性值设置为 undefined 或 null。但很多时候，这都是一种讨厌的或不适宜的折中。
   - 而对大多数浏览器引擎来说， Map 的 delete()操作都比插入和查找更快。如果代码涉及大量删除操作，那么毫无疑问应该选择 Map。  

## 6.5　WeakMap

ECMAScript 6 新增的**“弱映射”（ WeakMap）**是一种新的集合类型，为这门语言带来了增强的键/值对存储机制。 

WeakMap 是 Map 的“兄弟”类型，其 API 也是 Map 的子集。 

WeakMap 中的 “weak”（弱），描述的是 JavaScript **垃圾回收程序对待“弱映射”中键的方式**。  

### 6.5.1 基本 API  

- `const wm = new WeakMap();  `

  - 弱映射中的**键**只能是 **Object 或者继承自 Object 的类型**，尝试使用非对象设置键会抛出TypeError。值的类型没有限制。  

- 如果想在初始化时填充弱映射，则构造函数可以接收一个可迭代对象，其中需要包含键/值对数组。

  - 可迭代对象中的每个键/值都会按照迭代顺序插入新实例中。

  ```javascript
  const key1 = {
      id: 1
    },
    key2 = {
      id: 2
    },
    key3 = {
      id: 3
    };
  
  // 使用嵌套数组初始化弱映射
  const wm1 = new WeakMap([
    [key1, "val1"],
    [key2, "val2"],
    [key3, "val3"]
  ]);
  alert(wm1.get(key1)); // val1
  alert(wm1.get(key2)); // val2
  alert(wm1.get(key3)); // val3
  
  // 初始化是全有或全无的操作
  // 只要有一个键无效就会抛出错误，导致整个初始化失败
  const wm2 = new WeakMap([
    [key1, "val1"],
    ["BADKEY", "val2"],
    [key3, "val3"]
  ]);
  // TypeError: Invalid value used as WeakMap key
  typeof wm2;
  
  // ReferenceError: wm2 is not defined
  // 原始值可以先包装成对象再用作键
  const stringKey = new String("key1");
  const wm3 = new WeakMap([
    stringKey, "val1"
  ]);
  alert(wm3.get(stringKey)); // "val1"
  ```

- 初始化之后可以使用 set() 再添加键/值对，可以使用 get() 和 has() 查询， 还可以使用 delete() 删除：  

  ```javascript
  const wm = new WeakMap();
  
  const key1 = {
      id: 1
    },
    key2 = {
      id: 2
    };
  alert(wm.has(key1)); // false
  alert(wm.get(key1)); // undefined
  
  // set()方法返回弱映射实例，因此可以把多个操作连缀起来，包括初始化声明：
  wm.set(key1, "Matt")
    .set(key2, "Frisbie");
  alert(wm.has(key1)); // true
  alert(wm.get(key1)); // Matt
  
  wm.delete(key1); // 只删除这一个键/值对
  alert(wm.has(key1)); // false
  alert(wm.has(key2)); // true
  ```

  

### 6.5.2 弱键  

WeakMap 中“weak”表示弱映射的键是“弱弱地拿着”的。意思就是，这些键不属于正式的引用，不会阻止垃圾回收。

但要注意的是，弱映射中值的引用可不是“弱弱地拿着”的。

**只要键存在，键/值对就会存在于映射中，并被当作对值的引用，因此就不会被当作垃圾回收**。  

```javascript
const wm = new WeakMap();
wm.set({}, "val");
```

- `set()` 方法初始化了一个新对象并将它用作一个字符串的键。因为没有指向这个对象的其他引用，所以当这行代码执行完成后，这个对象键就会被当作垃圾回收。然后，这个键/值对就从弱映射中消失了，使其成为一个空映射。在这个例子中，因为值也没有被引用，所以这对键/值被破坏以后，值本身也会成为垃圾回收的目标。  

```javascript
const wm = new WeakMap();
const container = {
  key: {}
};
wm.set(container.key, "val");

function removeReference() {
  container.key = null;
}
```

这一次， container 对象维护着一个对弱映射键的引用，因此这个对象键不会成为垃圾回收的目标。不过，如果调用了 `removeReference()`，就会摧毁键对象的最后一个引用，垃圾回收程序就可以把这个键/值对清理掉。

  

### 6.5.3 不可迭代键  

- 因为 WeakMap 中的键/值对任何时候都可能被销毁，所以没必要提供迭代其键/值对的能力。
- 当然，也用不着像 clear()这样一次性销毁所有键/值的方法。 WeakMap 确实没有这个方法。
- 因为不可能迭代，所以也不可能在不知道对象引用的情况下从弱映射中取得值。即便代码可以访问 WeakMap 实例，也没办法看到其中的内容。  
- WeakMap 实例之所以限制只能用对象作为键，是为了保证只有通过键对象的引用才能取得值。
- 如果允许原始值，那就没办法区分初始化时使用的字符串字面量和初始化之后使用的一个相等的字符串了。  



### 6.5.4 使用弱映射  

1. **私有变量  **

   - 弱映射造就了在 JavaScript 中实现真正私有变量的一种新方式。
     - 私有变量会存储在弱映射中，以对象实例为键，以私有成员的字典为值。

   ```javascript
   const wm = new WeakMap();
   
   class User {
     constructor(id) {
       this.idProperty = Symbol('id');
       this.setId(id);
     }
     setPrivate(property, value) {
       const privateMembers = wm.get(this) || {};
       privateMembers[property] = value;
       wm.set(this, privateMembers);
     }
     getPrivate(property) {
       return wm.get(this)[property];
     }
     setId(id) {
       this.setPrivate(this.idProperty, id);
     }
     getId() {
       return this.getPrivate(this.idProperty);
     }
   }
   
   const user = new User(123);
   alert(user.getId()); // 123
   user.setId(456);
   alert(user.getId()); // 456
   
   // 并不是真正私有的
   alert(wm.get(user)[user.idProperty]); // 456
   ```

   - 慧眼独具的读者会发现，对于上面的实现，外部代码只需要拿到对象实例的引用和弱映射，就可以取得“私有”变量了。为了避免这种访问，可以用一个闭包把 WeakMap 包装起来，这样就可以把弱映射与外界完全隔离开了：  

   ```javascript
   const User = (() => {
     const wm = new WeakMap();
     class User {
       constructor(id) {
         this.idProperty = Symbol('id');
         this.setId(id);
       }
       setPrivate(property, value) {
         const privateMembers = wm.get(this) || {};
         privateMembers[property] = value;
         wm.set(this, privateMembers);
       }
       getPrivate(property) {
         return wm.get(this)[property];
       }
       setId(id) {
         this.setPrivate(this.idProperty, id);
       }
       getId(id) {
         return this.getPrivate(this.idProperty);
       }
     }
     return User;
   })();
   
   const user = new User(123);
   alert(user.getId()); // 123
   user.setId(456);
   alert(user.getId()); // 456
   ```

   - 这样拿不到弱映射中的健，也就无法取得弱映射中对应的值。
   - 虽然这防止了前面提到的访问，但整个代码也完全陷入了 ES6 之前的闭包私有变量模式。  

2. **DOM 节点元数据  **

   - 因为 WeakMap 实例不会妨碍垃圾回收，所以非常适合保存关联元数据。

     - Map 例子：

     ```javascript
     const m = new Map();
     const loginButton = document.querySelector('#login');
     
     // 给这个节点关联一些元数据
     m.set(loginButton, {
       disabled: true
     });
     ```

     - 假设在上面的代码执行后，页面被 JavaScript 改变了，原来的登录按钮从 DOM 树中被删掉了。
     - **但由于映射中还保存着按钮的引用**，所以对应的 DOM 节点仍然会逗留在内存中，除非明确将其从映射中删除或者等到映射本身被销毁。  

   - 如果这里使用的是弱映射，如以下代码所示，**那么当节点从 DOM 树中被删除后，垃圾回收程序就可以立即释放其内存**（假设没有其他地方引用这个对象）：

     ```javascript
     const wm = new WeakMap();
     const loginButton = document.querySelector('#login');
     
     // 给这个节点关联一些元数据
     wm.set(loginButton, {
       disabled: true
     });
     ```

     

## 6.6　Set

ECMAScript 6 新增的 Set 是一种新集合类型，为这门语言带来集合数据结构。 Set 在很多方面都像是加强的 Map，这是因为它们的大多数 API 和行为都是共有的。  

### 6.6.1 基本 API  
### 6.6.2 顺序与迭代  
### 6.6.3 定义正式集合操作  
## 6.7　WeakSet
### 6.7.1 基本 API  
### 6.7.2 弱值  
### 6.7.3 不可迭代值  
### 6.7.4 使用弱集合  
## 6.8　迭代与扩展操作
## 6.9　小结
# 第7章　迭代器与生成器 
## 7.1　理解迭代
## 7.2　迭代器模式
### 7.2.1 可迭代协议  
### 7.2.2 迭代器协议  
### 7.2.3 自定义迭代器  
### 7.2.4 提前终止迭代器  
## 7.3　生成器
### 7.3.1 生成器基础  
### 7.3.2 通过 yield 中断执行  
### 7.3.3 生成器作为默认迭代器  
### 7.3.4 提前终止生成器  
## 7.4　小结
# 第8章　对象、类与面向对象编程
## 8.1　理解对象
### 8.1.1 属性的类型  
### 8.1.2 定义多个属性  
### 8.1.3 读取属性的特性  
### 8.1.4 合并对象  
### 8.1.5 对象标识及相等判定  
### 8.1.6 增强的对象语法  
### 8.1.7 对象解构  
## 8.2　创建对象
### 8.2.1 概述  
### 8.2.2 工厂模式  
### 8.2.3 构造函数模式  
### 8.2.4 原型模式  
### 8.2.5 对象迭代  
## 8.3　继承
### 8.3.1 原型链  
### 8.3.2 盗用构造函数  
### 8.3.3 组合继承  
### 8.3.4 原型式继承  
### 8.3.5 寄生式继承  
### 8.3.6 寄生式组合继承  
## 8.4　类
### 8.4.1 类定义  
### 8.4.2 类构造函数  
### 8.4.3 实例、原型和类成员  
### 8.4.4 继承  
## 8.5　小结
# 第9章　代理与反射
## 9.1　代理基础
### 9.1.1 创建空代理  
### 9.1.2 定义捕获器  
### 9.1.3 捕获器参数和反射 API  
### 9.1.4 捕获器不变式  
### 9.1.5 可撤销代理  
### 9.1.6 实用反射 API  
### 9.1.7 代理另一个代理  
### 9.1.8 代理的问题与不足  
## 9.2　代理捕获器与反射方法
### 9.2.1 get()  
### 9.2.2 set()  
### 9.2.3 has()  
### 9.2.4 defineProperty()  
### 9.2.5 getOwnPropertyDescriptor()  
### 9.2.6 deleteProperty()  
### 9.2.7 ownKeys()  
### 9.2.8 getPrototypeOf()  
### 9.2.9 setPrototypeOf()  
### 9.2.10 isExtensible()  
### 9.2.11 preventExtensions()  
### 9.2.12 apply()  
### 9.2.13 construct()  
## 9.3　代理模式
### 9.3.1 跟踪属性访问  
### 9.3.2 隐藏属性  
### 9.3.3 属性验证  
### 9.3.4 函数与构造函数参数验证  
### 9.3.5 数据绑定与可观察对象  
## 9.4　小结
# 第 10章　函数
## 10.1　箭头函数
## 10.2　函数名
## 10.3　理解参数
## 10.4　没有重载
## 10.5　默认参数值
## 10.6　参数扩展与收集
### 10.6.1 扩展参数  
### 10.6.2 收集参数  
## 10.7　函数声明与函数表达式
## 10.8　函数作为值
## 10.9　函数内部
### 10.9.1 arguments  
### 10.9.2 this  
### 10.9.3 caller  
### 10.9.4 new.target  
## 10.10　函数属性与方法
## 10.11　函数表达式
## 10.12　递归
## 10.13　尾调用优化
### 10.13.1 尾调用优化的条件  
### 10.13.2 尾调用优化的代码  
## 10.14　闭包
### 10.14.1 this 对象  
### 10.14.2 内存泄漏  
## 10.15　立即调用的函数表达式
## 10.16　私有变量
### 10.16.1 静态私有变量  
### 10.16.2 模块模式  
### 10.16.3 模块增强模式  
## 10.17　小结
# 第 11章　期约与异步函数
## 11.1　异步编程
### 11.1.1 同步与异步  
### 11.1.2 以往的异步编程模式  
## 11.2　期约
### 11.2.1 Promises/A+规范  
### 11.2.2 期约基础  
### 11.2.3 期约的实例方法  
### 11.2.4 期约连锁与期约合成  
### 11.2.5 期约扩展  
## 11.3　异步函数
### 11.3.1 异步函数  
### 11.3.2 停止和恢复执行  
### 11.3.3 异步函数策略  
## 11.4　小结
# 第 12章　BOM
## 12.1　window对象
### 12.1.1 Global 作用域  
### 12.1.2 窗口关系  
### 12.1.3 窗口位置与像素比  
### 12.1.4 窗口大小  
### 12.1.5 视口位置  
### 12.1.6 导航与打开新窗口  
### 12.1.7 定时器  
### 12.1.8 系统对话框  
## 12.2　location对象
### 12.2.1 查询字符串  
### 12.2.2 操作地址  
## 12.3　navigator对象
### 12.3.1 检测插件  
### 12.3.2 注册处理程序  
## 12.4　screen对象
## 12.5　history对象
### 12.5.1 导航  
### 12.5.2 历史状态管理  
## 12.6　小结
# 第 13章　客户端检测
## 13.1　能力检测
### 13.1.1 能力检测  
### 13.1.2 基于能力检测进行浏览器分析  
## 13.2　用户代理检测
### 13.2.1 用户代理的历史  
### 13.2.2 浏览器分析  
## 13.3　软件与硬件检测
### 13.3.1 识别浏览器与操作系统  
### 13.3.2 浏览器元数据  
### 13.3.3 硬件  
## 13.4　小结
# 第 14章　DOM
## 14.1　节点层级
### 14.1.1 Node 类型  
### 14.1.2 Document 类型  
### 14.1.3 Element 类型  
### 14.1.4 Text 类型  
### 14.1.5 Comment 类型  
### 14.1.6 CDATASection 类型  
### 14.1.7 DocumentType 类型  
### 14.1.8 DocumentFragment 类型  
### 14.1.9 Attr 类型  
## 14.2　DOM编程
### 14.2.1 动态脚本  
### 14.2.2 动态样式  
### 14.2.3 操作表格  
### 14.2.4 使用 NodeList  
## 14.3　MutationObserver接口
### 14.3.1 基本用法  
### 14.3.2 MutationObserverInit 与观察范围  
### 14.3.3 异步回调与记录队列  
### 14.3.4 性能、内存与垃圾回收  
## 14.4　小结
# 第 15章　DOM扩展
## 15.1　Selectors API
### 15.1.1 querySelector()  
### 15.1.2 querySelectorAll()  
### 15.1.3 matches()  
## 15.2　元素遍历
## 15.3　HTML5
### 15.3.1 CSS 类扩展  
### 15.3.2 焦点管理  
### 15.3.3 HTMLDocument 扩展  
### 15.3.4 字符集属性  
### 15.3.5 自定义数据属性  
### 15.3.6 插入标记  
### 15.3.7 scrollIntoView()  
## 15.4　专有扩展
### 15.4.1 children 属性  
### 15.4.2 contains()方法  
### 15.4.3 插入标记  
## 15.5　小结
# 第 16章　DOM2和DOM3
## 16.1　DOM的演进
### 16.1.1 XML 命名空间  
### 16.1.2 其他变化  
## 16.2　样式
### 16.2.1 存取元素样式  
### 16.2.2 操作样式表  
### 16.2.3 元素尺寸  
## 16.3　遍历
### 16.3.1 NodeIterator  
### 16.3.2 TreeWalker  
## 16.4　范围
### 16.4.1 DOM 范围  
### 16.4.2 简单选择  
### 16.4.3 复杂选择  
### 16.4.4 操作范围  
### 16.4.5 范围插入  
### 16.4.6 范围折叠  
### 16.4.7 范围比较  
### 16.4.8 复制范围  
### 16.4.9 清理  
## 16.5　小结
# 第 17章　事件
## 17.1　事件流
### 17.1.1 事件冒泡  
### 17.1.2 事件捕获  
### 17.1.3 DOM 事件流  
## 17.2　事件处理程序
### 17.2.1 HTML 事件处理程序  
### 17.2.2 DOM0 事件处理程序  
### 17.2.3 DOM2 事件处理程序  
### 17.2.4 IE 事件处理程序  
### 17.2.5 跨浏览器事件处理程序  
## 17.3　事件对象
### 17.3.1 DOM 事件对象  
### 17.3.2 IE 事件对象  
### 17.3.3 跨浏览器事件对象  
## 17.4　事件类型
### 17.4.1 用户界面事件  
### 17.4.2 焦点事件  
### 17.4.3 鼠标和滚轮事件  
### 17.4.4 键盘与输入事件  
### 17.4.5 合成事件  
### 17.4.6 变化事件  
### 17.4.7 HTML5 事件  
### 17.4.8 设备事件  
### 17.4.9 触摸及手势事件  
### 17.4.10 事件参考  
## 17.5　内存与性能
### 17.5.1 事件委托  
### 17.5.2 删除事件处理程序  
## 17.6　模拟事件
### 17.6.1 DOM 事件模拟  
### 17.6.2 IE 事件模拟  
## 17.7　小结
# 第 18章　动画与Canvas图形
## 18.1　使用requestAnimationFrame
### 18.1.1 早期定时动画  
### 18.1.2 时间间隔的问题  
### 18.1.3 requestAnimationFrame  
### 18.1.4 cancelAnimationFrame  
### 18.1.5 通过 requestAnimationFrame 节流  
## 18.2　基本的画布功能
## 18.3　2D绘图上下文
### 18.3.1 填充和描边  
### 18.3.2 绘制矩形  
### 18.3.3 绘制路径  
### 18.3.4 绘制文本  
### 18.3.5 变换  
### 18.3.6 绘制图像  
### 18.3.7 阴影  
### 18.3.8 渐变  
### 18.3.9 图案  
### 18.3.10 图像数据  
### 18.3.11 合成  
## 18.4　WebGL
### 18.4.1 WebGL 上下文  
### 18.4.2 WebGL 基础  
### 18.4.3 WebGL1 与 WebGL2  
## 18.5　小结
# 第 19章　表单脚本
## 19.1　表单基础
### 19.1.1 提交表单  
### 19.1.2 重置表单  
### 19.1.3 表单字段  
## 19.2　文本框编程
### 19.2.1 选择文本  
### 19.2.2 输入过滤  
### 19.2.3 自动切换  
### 19.2.4 HTML5 约束验证 API  
## 19.3　选择框编程
### 19.3.1 选项处理  
### 19.3.2 添加选项  
### 19.3.3 移除选项  
### 19.3.4 移动和重排选项  
## 19.4　表单序列化
## 19.5　富文本编辑
### 19.5.1 使用 contenteditable  
### 19.5.2 与富文本交互  
### 19.5.3 富文件选择  
### 19.5.4 通过表单提交富文本  
## 19.6　小结
# 第 20章　JavaScript API
## 20.1　Atomics与SharedArrayBuffer
### 20.1.1 SharedArrayBuffer  
### 20.1.2 原子操作基础  
## 20.2　跨上下文消息
## 20.3　Encoding API
### 20.3.1 文本编码  
### 20.3.2 文本解码  
## 20.4　File API与Blob API
### 20.4.1 File 类型  
### 20.4.2 FileReader 类型  
### 20.4.3 FileReaderSync 类型  
### 20.4.4 Blob 与部分读取  
### 20.4.5 对象 URL 与 Blob  
### 20.4.6 读取拖放文件  
## 20.5　媒体元素
### 20.5.1 属性  
### 20.5.2 事件  
### 20.5.3 自定义媒体播放器  
### 20.5.4 检测编解码器  
### 20.5.5 音频类型  
## 20.6　原生拖放
### 20.6.1 拖放事件  
### 20.6.2 自定义放置目标  
### 20.6.3 dataTransfer 对象  
### 20.6.4 dropEffect 与 effectAllowed  
### 20.6.5 可拖动能力  
### 20.6.6 其他成员  
## 20.7　Notifications API
### 20.7.1 通知权限  
### 20.7.2 显示和隐藏通知  
### 20.7.3 通知生命周期回调  
## 20.8　Page Visibility API
## 20.9　Streams API
### 20.9.1 理解流  
### 20.9.2 可读流  
### 20.9.3 可写流  
### 20.9.4 转换流  
### 20.9.5 通过管道连接流  
## 20.10　计时API
### 20.10.1 High Resolution Time API  
### 20.10.2 Performance Timeline API  
## 20.11　Web组件
### 20.11.1 HTML 模板  
### 20.11.2 影子 DOM  
### 20.11.3 自定义元素  
## 20.12　Web Cryptography API
### 20.12.1 生成随机数  
### 20.12.2 使用 SubtleCrypto 对象  
## 20.13　小结
# 第 21章　错误处理与调试
## 21.1　浏览器错误报告
### 21.1.1 桌面控制台  
### 21.1.2 移动控制台  
## 21.2　错误处理
### 21.2.1 try/catch 语句  
### 21.2.2 抛出错误  
### 21.2.3 error 事件  
### 21.2.4 错误处理策略  
### 21.2.5 识别错误  
### 21.2.6 区分重大与非重大错误  
### 21.2.7 把错误记录到服务器中  
## 21.3　调试技术
### 21.3.1 把消息记录到控制台  
### 21.3.2 理解控制台运行时  
### 21.3.3 使用 JavaScript 调试器  
### 21.3.4 在页面中打印消息  
### 21.3.5 补充控制台方法  
### 21.3.6 抛出错误  
## 21.4　旧版IE的常见错误
### 21.4.1 无效字符  
### 21.4.2 未找到成员  
### 21.4.3 未知运行时错误  
### 21.4.4 语法错误  
### 21.4.5 系统找不到指定资源  
## 21.5　小结
# 第 22章　处理XML
## 22.1　浏览器对XML DOM的支持
### 22.1.1 DOM Level 2 Core  
### 22.1.2 DOMParser 类型  
### 22.1.3 XMLSerializer 类型  
## 22.2　浏览器对XPath的支持
### 22.2.1 DOM Level 3 XPath  
### 22.2.2 单个节点结果  
### 22.2.3 简单类型结果  
### 22.2.4 默认类型结果  
### 22.2.5 命名空间支持  
## 22.3　浏览器对XSLT的支持
### 22.3.1 XSLTProcessor 类型  
### 22.3.2 使用参数  
### 22.3.3 重置处理器  
## 22.4　小结
# 第 23章　JSON
## 23.1　语法
### 23.1.1 简单值  
### 23.1.2 对象  
### 23.1.3 数组  
## 23.2　解析与序列化
### 23.2.1 JSON 对象  
### 23.2.2 序列化选项  
### 23.2.3 解析选项  
## 23.4　小结
# 第 24章　网络请求与远程资源
## 24.1　XMLHttpRequest对象
### 24.1.1 使用 XHR  
### 24.1.2 HTTP 头部  
### 24.1.3 GET 请求  
### 24.1.4 POST 请求  
### 24.1.5 XMLHttpRequest Level 2  
## 24.2　进度事件
### 24.2.1 load 事件  
### 24.2.2 progress 事件  
### 24.3.1 预检请求  
### 24.3.2 凭据请求  
## 24.3　跨源资源共享
### 24.3.1 预检请求  
### 24.3.2 凭据请求  
## 24.4　替代性跨源技术
### 24.4.1 图片探测  
### 24.4.2 JSONP  
## 24.5　Fetch API
### 24.5.1 基本用法  
### 24.5.2 常见 Fetch 请求模式  
### 24.5.3 Headers 对象  
### 24.5.4 Request 对象  
### 24.5.5 Response 对象  
### 24.5.6 Request、 Response 及 Body 混入  
## 24.6　Beacon API
## 24.7　Web Socket
### 24.7.1 API  
### 24.7.2 发送和接收数据  
### 24.7.2 发送和接收数据  
## 24.8　安全
## 24.9　小结
# 第 25章　客户端存储
## 25.1　cookie
### 25.1.1 限制  
### 25.1.2 cookie 的构成  
### 25.1.3 JavaScript 中的 cookie  
### 25.1.4 子 cookie  
### 25.1.5 使用 cookie 的注意事项  
## 25.2　Web Storage
### 25.2.1 Storage 类型  
### 25.2.2 sessionStorage 对象  
### 25.2.3 localStorage 对象  
### 25.2.4 存储事件  
### 25.2.5 限制  
## 25.3　IndexedDB
### 25.3.1 数据库  
### 25.3.2 对象存储  
### 25.3.3 事务  
### 25.3.4 插入对象  
### 25.3.5 通过游标查询  
### 25.3.6 键范围  
### 25.3.7 设置游标方向  
### 25.3.8 索引  
### 25.3.9 并发问题  
### 25.3.10 限制  
## 25.4　小结
# 第 26章　模块
## 26.1　理解模块模式
### 26.1.1 模块标识符  
### 26.1.2 模块依赖  
### 26.1.3 模块加载  
### 26.1.4 入口  
### 26.1.5 异步依赖  
### 26.1.6 动态依赖  
### 26.1.7 静态分析  
### 26.1.8 循环依赖  
## 26.2　凑合的模块系统
## 26.3　使用ES6之前的模块加载器
### 26.3.1 CommonJS  
### 26.3.2 异步模块定义  
### 26.3.3 通用模块定义  
### 26.3.4 模块加载器终将没落  
## 26.4　使用ES6模块
### 26.4.1 模块标签及定义  
### 26.4.2 模块加载  
### 26.4.3 模块行为  
### 26.4.4 模块导出  
### 26.4.5 模块导入  
### 26.4.6 模块转移导出  
### 26.4.7 工作者模块  
### 26.4.8 向后兼容  
## 26.5　小结
# 第 27章　工作者线程
## 27.1　工作者线程简介
### 27.1.1 工作者线程与线程  
### 27.1.2 工作者线程的类型  
### 27.1.3 WorkerGlobalScope  
## 27.2　专用工作者线程
### 27.2.1 专用工作者线程的基本概念  
### 27.2.2 专用工作者线程与隐式 MessagePorts  
### 27.2.3 专用工作者线程的生命周期  
### 27.2.4 配置 Worker 选项  
### 27.2.5 在 JavaScript 行内创建工作者线程  
### 27.2.6 在工作者线程中动态执行脚本  
### 27.2.7 委托任务到子工作者线程  
### 27.2.8 处理工作者线程错误  
### 27.2.9 与专用工作者线程通信  
### 27.2.10 工作者线程数据传输  
### 27.2.11 线程池  
## 27.3　共享工作者线程
### 27.3.1 共享工作者线程简介  
### 27.3.2 理解共享工作者线程的生命周期  
### 27.3.3 连接到共享工作者线程  
## 27.4　服务工作者线程
### 27.4.1 服务工作者线程基础  
### 27.4.2 服务工作者线程缓存  
### 27.4.3 服务工作者线程客户端  
### 27.4.4 服务工作者线程与一致性  
### 27.4.5 理解服务工作者线程的生命周期  
### 27.4.6 控制反转与服务工作者线程持久化  
### 27.4.7 通过 updateViaCache 管理服务文件缓存  
### 27.4.8 强制性服务工作者线程操作  
### 27.4.9 服务工作者线程消息  
### 27.4.10 拦截 fetch 事件  
### 27.4.11 推送通知  
## 27.5　小结
# 第 28章　最佳实践
## 28.1　可维护性
### 28.1.1 什么是可维护的代码  
### 28.1.2 编码规范  
### 28.1.3 松散耦合  
### 28.1.4 编码惯例  
## 28.2　性能
### 28.2.1 作用域意识  
### 28.2.2 选择正确的方法  
### 28.2.3 语句最少化  
### 28.2.4 优化 DOM 交互  
## 28.3　部署
### 28.3.1 构建流程  
### 28.3.2 验证  
### 28.3.3 压缩  
## 28.4　小结
# 附录A　ES2018和ES2019（图灵社区下载）

## A.1 异步迭代  

### A.1.1 创建并使用异步迭代器  





## A.2 对象字面量的剩余操作符和扩展操作符  





## A.3 Promise.prototype.finally()  





## A.4 正则表达式相关特性  







## A.5 数组打平方法  





## A.6 Object.fromEntries()  





## A.7 字符串修理方法  







## A.8 Symbol.prototype.description  





## A.9 可选的 catch 绑定  





## A.10 其他新增内容  







# 附录B　严格模式（图灵社区下载）

## B.1 选择使用  





## B.2 变量  





## B.3 对象  





## B.4 函数  





## B.5 this 强制转型  







## B.6 类与模块  





## B.7 其他变化  







# 附录C　JavaScript库和框架（图灵社区下载）

## C.1 框架  





## C.2 通用库  





## C.3 动画与特效  







# 附录D　JavaScript工具（图灵社区下载）

## D.1 包管理  



## D.2 模块加载器  





## D.3 模块打包器  





## D.4 编译/转译工具及静态类型系统  





## D.5 高性能脚本工具  





## D.6 编辑器  





## D.7 构建工具、自动化系统和任务运行器  





## D.8 代码检查和格式化  





## D.9 压缩工具  







## D.10 单元测试  





## D.11 文档生成器  