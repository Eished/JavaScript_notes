# 目录概要

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
       如果有任一操作数是 NaN，则返回 NaN；
       如果是 Infinity 加 Infinity，则返回 Infinity；
       如果是-Infinity 加-Infinity，则返回-Infinity；
       如果是 Infinity 加-Infinity，则返回 NaN；
       如果是+0 加+0，则返回+0；
       如果是-0 加+0，则返回+0；
       如果是-0 加-0，则返回-0。 
   2. 如果有一个操作数是字符串，则要应用如下规则：
       如果两个操作数都是字符串，则将第二个字符串**拼接**到第一个字符串后面；
       如果只有一个操作数是字符串，则将另一个操作数转换为字符串，再将两个字符串**拼接**在一起。
   3. 如果有任一操作数是对象、数值或布尔值，则调用它们的 toString()方法以获取字符串，然后再应用前面的关于字符串的规则。对于 undefined 和 null，则调用 String()函数，分别获取"undefined"和"null"。   
2. 减法操作符  
   1. 如果有任一操作数是字符串、布尔值、 null 或 undefined，则先在后台使用 `Number()`将其转换为数值，然后再根据前面的规则执行数学运算。如果转换结果是 NaN，则减法计算的结果是NaN。
   2. 如果有任一操作数是对象，则调用其 `valueOf()`方法取得表示它的数值。如果该值是 NaN，则减法计算的结果是 NaN。如果对象没有 `valueOf()`方法，则调用其`toString()`方法，然后再将得到的字符串转换为数值。  

### 3.5.7 关系操作符 

关系操作符执行比较两个值的操作，包括小于（ `<`）、大于（ `>`）、小于等于（ `<=`）和大于等于（ `>=`），用法跟数学课上学的一样。这几个操作符都返回布尔值。

1. 与 ECMAScript 中的其他操作符一样，在将它们应用到不同数据类型时也会发生类型转换和其他行为。
    如果操作数都是数值，则执行数值比较。
    如果操作数都是字符串，则逐个比较字符串中对应字符的编码。
    如果有任一操作数是数值，则将另一个操作数转换为数值，执行数值比较。
    如果有任一操作数是对象，则调用其 valueOf()方法，取得结果后再根据前面的规则执行比较。
   如果没有 valueOf()操作符，则调用 toString()方法，取得结果后再根据前面的规则执行比较。
    如果有任一操作数是布尔值，则将其转换为数值再执行比较。

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
       如果任一操作数是布尔值，则将其转换为数值再比较是否相等。 false 转换为 0， true 转换为 1。
       如果一个操作数是字符串，另一个操作数是数值，则尝试将字符串转换为数值，再比较是否相等。
       如果一个操作数是对象，另一个操作数不是，则调用对象的 valueOf()方法取得其原始值，再根据前面的规则进行比较。

   3. 在进行比较时，这两个操作符会遵循如下规则。
       null 和 undefined 相等。
       null 和 undefined 不能转换为其他类型的值再进行比较。
       如果有任一操作数是 NaN，则相等操作符返回 false，不相等操作符返回 true。记住：即使两个操作数都是 NaN，相等操作符也返回 false，因为按照规则， NaN 不等于 NaN。
       如果两个操作数都是对象，则比较它们是不是同一个对象。如果两个操作数都指向同一个对象，则相等操作符返回 true。否则，两者不相等。    

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

    乘后赋值（ `*=`）
    除后赋值（ `/=`）
    取模后赋值（ `%=`）
    加后赋值（ `+=`）
    减后赋值（ `-=`）
    左移后赋值（ `<<=`）
    右移后赋值（ `>>=`）
    无符号右移后赋值（ `>>>=`）  



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

break 和 continue 语句为执行循环代码提供了更严格的控制手段。其中， break 语句用于立即退
出循环，强制执行循环后的下一条语句。而 continue 语句也用于立即退出循环，但会再次从循环顶部开始执行。  

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

在这个例子中， outermost 标签标识的是第一个 for 语句。正常情况下，每个循环执行 10 次，意
味着 num++语句会执行 100 次，而循环结束时 console.log 的结果应该是 100。但是， break 语句带来了一个变数，即要退出到的标签。添加标签不仅让 break 退出（使用变量 j 的）内部循环，也会退出（使用变量 i 的）外部循环。当执行到 i 和 j 都等于 5 时，循环停止执行，此时 num 的值是 55。  

组合使用标签语句和 break、 continue 能实现复杂的逻辑，但也容易出错。注意标签要使用描述
性强的文本，而嵌套也不要太深。  



### 3.6.9 with 语句

警告：由于 with 语句影响性能且难于调试其中的代码，通常不推荐在产品代码中使用 with语句。



### 3.6.10 switch 语句  

switch 语句是与 if 语句紧密相关的一种流控制语句，从其他语言借鉴而来。 ECMAScript 中 switch
语句跟 C 语言中 switch 语句的语法非常相似 。

1. 首先，switch 语句**可以用于所有数据类型**（在很多语言中，它只能用于数值），因此可以使用字符串甚至对象。其次，**条件的值不需要是常量，也可以是变量或表达式。**  
2. 注意 switch 语句在比较每个条件的值时会**使用全等操作符**，因此不会强制转换数据类
   型（比如，字符串"10"不等于数值 10）。  



## 3.7　函数 80

函数对任何语言来说都是核心组件，因为它们可以封装语句，然后在任何地方、任何时间执行。
ECMAScript 中的函数使用 function 关键字声明，后跟一组参数，然后是函数体。  

1. 严格模式对函数也有一些限制：
    函数不能以 eval 或 arguments 作为名称；
    函数的参数不能叫 eval 或 arguments；
    两个命名参数不能拥有同一个名称。
   如果违反上述规则，则会导致语法错误，代码也不会执行。  

3.8　小结 82

# 第4章　变量、作用域与内存

## 4.1　原始值与引用值

1. ECMAScript 变量可以包含两种不同类型的数据：原始值和引用值。 原始值（ primitive value）就是最简单的数据， 引用值（ reference value）则是由多个值构成的对象。
2. 在把一个值赋给变量时， JavaScript 引擎必须确定这个值是原始值还是引用值。上一章讨论了 **6 种原始值**： `Undefined、 Null、 Boolean、 Number、 String 和 Symbol`。保存原始值的变量是按值（ by value）访问的，因为我们操作的就是存储在变量中的实际值。
3. **引用值是保存在内存中的对象**。与其他语言不同， JavaScript 不允许直接访问内存位置，因此也就不能直接操作对象所在的内存空间。在操作对象时，实际上操作的是对该对象的引用（reference）而非实际的对象本身。为此，保存引用值的变量是按引用（ by reference）访问的。  

### 4.1.1 动态属性

### 4.1.2 复制值  

### 4.1.3 传递参数  

### 4.1.4 确定类型  



## 4.2　执行上下文与作用域

### 4.2.1 作用域链增强  

### 4.2.2 变量声明  



## 4.3　垃圾回收

### 4.3.1 标记清理  

### 4.3.2 引用计数  

### 4.3.3 性能  

### 4.3.4 内存管理  



4.4　小结

# 第5章　基本引用类型

## 5.1　Date

### 5.1.1 继承的方法  

### 5.1.2 日期格式化方法  

### 5.1.3 日期/时间组件方法  



## 5.2　RegExp

### 5.2.1 RegExp 实例属性  

### 5.2.2 RegExp 实例方法  

### 5.2.3 RegExp 构造函数属性  

### 5.2.4 模式局限  



## 5.3　原始值包装类型

### 5.3.1 Boolean  

### 5.3.2 Number  

### 5.3.3 String  



## 5.4　单例内置对象

### 5.4.1 Global  

### 5.4.2 Math  



5.5　小结

# 第6章　集合引用类型

## 6.1　Object

## 6.2　Array

6.2.1 创建数组  

6.2.2 数组空位  

6.2.3 数组索引  

6.2.4 检测数组  

6.2.5 迭代器方法  

6.2.6 复制和填充方法  

6.2.7 转换方法  

6.2.8 栈方法  

6.2.9 队列方法  

6.2.10 排序方法  

6.2.11 操作方法  

6.2.12 搜索和位置方法  

6.2.13 迭代方法  

6.2.14 归并方法  



## 6.3　定型数组

6.3.1 历史  

6.3.2 ArrayBuffer  

6.3.3 DataView  

6.3.4 定型数组  



## 6.4　Map

6.4.1 基本 API  

6.4.2 顺序与迭代  

6.4.3 选择 Object 还是 Map  



## 6.5　WeakMap

6.5.1 基本 API  

6.5.2 弱键  

6.5.3 不可迭代键  

6.5.4 使用弱映射  



## 6.6　Set

6.6.1 基本 API  

6.6.2 顺序与迭代  

6.6.3 定义正式集合操作  



## 6.7　WeakSet

6.7.1 基本 API  

6.7.2 弱值  

6.7.3 不可迭代值  

6.7.4 使用弱集合  



## 6.8　迭代与扩展操作



6.9　小结

# 第7章　迭代器与生成器

## 7.1　理解迭代



## 7.2　迭代器模式

7.2.1 可迭代协议  

7.2.2 迭代器协议  

7.2.3 自定义迭代器  

7.2.4 提前终止迭代器  



## 7.3　生成器

7.3.1 生成器基础  

7.3.2 通过 yield 中断执行  

7.3.3 生成器作为默认迭代器  

7.3.4 提前终止生成器  



7.4　小结

# 第8章　对象、类与面向对象编程

## 8.1　理解对象

8.1.1 属性的类型  

8.1.2 定义多个属性  

8.1.3 读取属性的特性  

8.1.4 合并对象  

8.1.5 对象标识及相等判定  

8.1.6 增强的对象语法  

8.1.7 对象解构  



## 8.2　创建对象

8.2.1 概述  

8.2.2 工厂模式  

8.2.3 构造函数模式  

8.2.4 原型模式  

8.2.5 对象迭代  



## 8.3　继承

8.3.1 原型链  

8.3.2 盗用构造函数  

8.3.3 组合继承  

8.3.4 原型式继承  

8.3.5 寄生式继承  

8.3.6 寄生式组合继承  



## 8.4　类

8.4.1 类定义  

8.4.2 类构造函数  

8.4.3 实例、原型和类成员  

8.4.4 继承  



8.5　小结

# 第9章　代理与反射

## 9.1　代理基础

9.1.1 创建空代理  

9.1.2 定义捕获器  

9.1.3 捕获器参数和反射 API  

9.1.4 捕获器不变式  

9.1.5 可撤销代理  

9.1.6 实用反射 API  

9.1.7 代理另一个代理  

9.1.8 代理的问题与不足  



## 9.2　代理捕获器与反射方法

9.2.1 get()  

9.2.2 set()  

9.2.3 has()  

9.2.4 defineProperty()  

9.2.5 getOwnPropertyDescriptor()  

9.2.6 deleteProperty()  

9.2.7 ownKeys()  

9.2.8 getPrototypeOf()  

9.2.9 setPrototypeOf()  

9.2.10 isExtensible()  

9.2.11 preventExtensions()  

9.2.12 apply()  

9.2.13 construct()  



## 9.3　代理模式

9.3.1 跟踪属性访问  

9.3.2 隐藏属性  

9.3.3 属性验证  

9.3.4 函数与构造函数参数验证  

9.3.5 数据绑定与可观察对象  



9.4　小结

# 第 10章　函数

## 10.1　箭头函数

## 10.2　函数名

## 10.3　理解参数

## 10.4　没有重载

## 10.5　默认参数值

## 10.6　参数扩展与收集

10.6.1 扩展参数  

10.6.2 收集参数  



## 10.7　函数声明与函数表达式

## 10.8　函数作为值

## 10.9　函数内部

10.9.1 arguments  

10.9.2 this  

10.9.3 caller  

10.9.4 new.target  



## 10.10　函数属性与方法

## 10.11　函数表达式

## 10.12　递归

## 10.13　尾调用优化

10.13.1 尾调用优化的条件  

10.13.2 尾调用优化的代码  



## 10.14　闭包

10.14.1 this 对象  

10.14.2 内存泄漏  



## 10.15　立即调用的函数表达式

## 10.16　私有变量

10.16.1 静态私有变量  

10.16.2 模块模式  

10.16.3 模块增强模式  





10.17　小结

# 第 11章　期约与异步函数

## 11.1　异步编程

11.1.1 同步与异步  

11.1.2 以往的异步编程模式  



## 11.2　期约

11.2.1 Promises/A+规范  

11.2.2 期约基础  

11.2.3 期约的实例方法  

11.2.4 期约连锁与期约合成  

11.2.5 期约扩展  



## 11.3　异步函数

11.3.1 异步函数  

11.3.2 停止和恢复执行  

11.3.3 异步函数策略  



11.4　小结

# 第 12章　BOM

## 12.1　window对象

12.1.1 Global 作用域  

12.1.2 窗口关系  

12.1.3 窗口位置与像素比  

12.1.4 窗口大小  

12.1.5 视口位置  

12.1.6 导航与打开新窗口  

12.1.7 定时器  

12.1.8 系统对话框  



## 12.2　location对象

12.2.1 查询字符串  

12.2.2 操作地址  



## 12.3　navigator对象

12.3.1 检测插件  

12.3.2 注册处理程序  



## 12.4　screen对象

## 12.5　history对象

12.5.1 导航  

12.5.2 历史状态管理  



12.6　小结

# 第 13章　客户端检测

## 13.1　能力检测

13.1 能力检测  

13.1.2 基于能力检测进行浏览器分析  



## 13.2　用户代理检测

13.2.1 用户代理的历史  

13.2.2 浏览器分析  



## 13.3　软件与硬件检测

13.3.1 识别浏览器与操作系统  

13.3.2 浏览器元数据  

13.3.3 硬件  



13.4　小结

# 第 14章　DOM

## 14.1　节点层级

14.1.1 Node 类型  

14.1.2 Document 类型  

14.1.3 Element 类型  

14.1.4 Text 类型  

14.1.5 Comment 类型  

14.1.6 CDATASection 类型  

14.1.7 DocumentType 类型  

14.1.8 DocumentFragment 类型  

14.1.9 Attr 类型  



## 14.2　DOM编程

14.2.1 动态脚本  

14.2.2 动态样式  

14.2.3 操作表格  

14.2.4 使用 NodeList  



## 14.3　MutationObserver接口

14.3.1 基本用法  

14.3.2 MutationObserverInit 与观察范围  

14.3.3 异步回调与记录队列  

14.3.4 性能、内存与垃圾回收  



14.4　小结

# 第 15章　DOM扩展

## 15.1　Selectors API

15.1.1 querySelector()  

15.1.2 querySelectorAll()  

15.1.3 matches()  





## 15.2　元素遍历

## 15.3　HTML5

15.3.1 CSS 类扩展  

15.3.2 焦点管理  

15.3.3 HTMLDocument 扩展  

15.3.4 字符集属性  

15.3.5 自定义数据属性  

15.3.6 插入标记  

15.3.7 scrollIntoView()  



## 15.4　专有扩展

15.4.1 children 属性  

15.4.2 contains()方法  

15.4.3 插入标记  





15.5　小结

# 第 16章　DOM2和DOM3

## 16.1　DOM的演进

16.1.1 XML 命名空间  

16.1.2 其他变化  





## 16.2　样式

16.2.1 存取元素样式  

16.2.2 操作样式表  

16.2.3 元素尺寸  



## 16.3　遍历

16.3.1 NodeIterator  

16.3.2 TreeWalker  



## 16.4　范围

16.4.1 DOM 范围  

16.4.2 简单选择  

16.4.3 复杂选择  

16.4.4 操作范围  

16.4.5 范围插入  

16.4.6 范围折叠  

16.4.7 范围比较  

16.4.8 复制范围  

16.4.9 清理  





16.5　小结

# 第 17章　事件

## 17.1　事件流

17.1.1 事件冒泡  

17.1.2 事件捕获  

17.1.3 DOM 事件流  





## 17.2　事件处理程序

17.2.1 HTML 事件处理程序  

17.2.2 DOM0 事件处理程序  

17.2.3 DOM2 事件处理程序  

17.2.4 IE 事件处理程序  

17.2.5 跨浏览器事件处理程序  



## 17.3　事件对象

17.3.1 DOM 事件对象  

17.3.2 IE 事件对象  

17.3.3 跨浏览器事件对象  



## 17.4　事件类型

17.4.1 用户界面事件  

17.4.2 焦点事件  

17.4.3 鼠标和滚轮事件  

17.4.4 键盘与输入事件  

17.4.5 合成事件  

17.4.6 变化事件  

17.4.7 HTML5 事件  

17.4.8 设备事件  

17.4.9 触摸及手势事件  

17.4.10 事件参考  



## 17.5　内存与性能

17.5.1 事件委托  

17.5.2 删除事件处理程序  



## 17.6　模拟事件

17.6.1 DOM 事件模拟  

17.6.2 IE 事件模拟  



17.7　小结

# 第 18章　动画与Canvas图形

## 18.1　使用requestAnimationFrame

18.1.1 早期定时动画  

18.1.2 时间间隔的问题  

18.1.3 requestAnimationFrame  

18.1.4 cancelAnimationFrame  

18.1.5 通过 requestAnimationFrame 节流  



## 18.2　基本的画布功能





## 18.3　2D绘图上下文

18.3.1 填充和描边  

18.3.2 绘制矩形  

18.3.3 绘制路径  

18.3.4 绘制文本  

18.3.5 变换  

18.3.6 绘制图像  

18.3.7 阴影  

18.3.8 渐变  

18.3.9 图案  

18.3.10 图像数据  

18.3.11 合成  





## 18.4　WebGL

18.4.1 WebGL 上下文  

18.4.2 WebGL 基础  

18.4.3 WebGL1 与 WebGL2  





18.5　小结

# 第 19章　表单脚本

## 19.1　表单基础

19.1.1 提交表单  

19.1.2 重置表单  

19.1.3 表单字段  



## 19.2　文本框编程

19.2.1 选择文本  

19.2.2 输入过滤  

19.2.3 自动切换  

19.2.4 HTML5 约束验证 API  



## 19.3　选择框编程

19.3.1 选项处理  

19.3.2 添加选项  

19.3.3 移除选项  

19.3.4 移动和重排选项  





## 19.4　表单序列化





## 19.5　富文本编辑

19.5.1 使用 contenteditable  

19.5.2 与富文本交互  

19.5.3 富文件选择  

19.5.4 通过表单提交富文本  





19.6　小结

# 第 20章　JavaScript API

## 20.1　Atomics与SharedArrayBuffer

20.1.1 SharedArrayBuffer  

20.1.2 原子操作基础  





## 20.2　跨上下文消息



## 20.3　Encoding API

20.3.1 文本编码  

20.3.2 文本解码  



## 20.4　File API与Blob API

20.4.1 File 类型  

20.4.2 FileReader 类型  

20.4.3 FileReaderSync 类型  

20.4.4 Blob 与部分读取  

20.4.5 对象 URL 与 Blob  

20.4.6 读取拖放文件  





## 20.5　媒体元素

20.5.1 属性  

20.5.2 事件  

20.5.3 自定义媒体播放器  

20.5.4 检测编解码器  

20.5.5 音频类型  



## 20.6　原生拖放

20.6.1 拖放事件  

20.6.2 自定义放置目标  

20.6.3 dataTransfer 对象  

20.6.4 dropEffect 与 effectAllowed  

20.6.5 可拖动能力  

20.6.6 其他成员  





## 20.7　Notifications API

20.7.1 通知权限  

20.7.2 显示和隐藏通知  

20.7.3 通知生命周期回调  





## 20.8　Page Visibility API



## 20.9　Streams API

20.9.1 理解流  

20.9.2 可读流  

20.9.3 可写流  

20.9.4 转换流  

20.9.5 通过管道连接流  



## 20.10　计时API

20.10.1 High Resolution Time API  

20.10.2 Performance Timeline API  





## 20.11　Web组件

20.11.1 HTML 模板  

20.11.2 影子 DOM  

20.11.3 自定义元素  



## 20.12　Web Cryptography API

20.12.1 生成随机数  

20.12.2 使用 SubtleCrypto 对象  



20.13　小结

# 第 21章　错误处理与调试

## 21.1　浏览器错误报告

21.1.1 桌面控制台  

21.1.2 移动控制台  



## 21.2　错误处理

21.2.1 try/catch 语句  

21.2.2 抛出错误  

21.2.3 error 事件  

21.2.4 错误处理策略  

21.2.5 识别错误  

21.2.6 区分重大与非重大错误  

21.2.7 把错误记录到服务器中  







## 21.3　调试技术

21.3.1 把消息记录到控制台  

21.3.2 理解控制台运行时  

21.3.3 使用 JavaScript 调试器  

21.3.4 在页面中打印消息  

21.3.5 补充控制台方法  

21.3.6 抛出错误  





## 21.4　旧版IE的常见错误

21.4.1 无效字符  

21.4.2 未找到成员  

21.4.3 未知运行时错误  

21.4.4 语法错误  

21.4.5 系统找不到指定资源  





21.5　小结

# 第 22章　处理XML

## 22.1　浏览器对XML DOM的支持

22.1.1 DOM Level 2 Core  

22.1.2 DOMParser 类型  

22.1.3 XMLSerializer 类型  



## 22.2　浏览器对XPath的支持

22.2.1 DOM Level 3 XPath  

22.2.2 单个节点结果  

22.2.3 简单类型结果  

22.2.4 默认类型结果  

22.2.5 命名空间支持  



## 22.3　浏览器对XSLT的支持

22.3.1 XSLTProcessor 类型  

22.3.2 使用参数  

22.3.3 重置处理器  





22.4　小结

# 第 23章　JSON

## 23.1　语法

23.1.1 简单值  

23.1.2 对象  

23.1.3 数组  



## 23.2　解析与序列化

23.2.1 JSON 对象  

23.2.2 序列化选项  

23.2.3 解析选项  



23.4　小结

# 第 24章　网络请求与远程资源

## 24.1　XMLHttpRequest对象

24.1.1 使用 XHR  

24.1.2 HTTP 头部  

24.1.3 GET 请求  

24.1.4 POST 请求  

24.1.5 XMLHttpRequest Level 2  



## 24.2　进度事件

24.2.1 load 事件  

24.2.2 progress 事件  

24.3.1 预检请求  

24.3.2 凭据请求  



## 24.3　跨源资源共享

24.3.1 预检请求  

24.3.2 凭据请求  





## 24.4　替代性跨源技术

24.4.1 图片探测  

24.4.2 JSONP  



## 24.5　Fetch API

24.5.1 基本用法  

24.5.2 常见 Fetch 请求模式  

24.5.3 Headers 对象  

24.5.4 Request 对象  

24.5.5 Response 对象  

24.5.6 Request、 Response 及 Body 混入  



## 24.6　Beacon API





## 24.7　Web Socket

24.7.1 API  

24.7.2 发送和接收数据  

24.7.2 发送和接收数据  



## 24.8　安全





24.9　小结

# 第 25章　客户端存储

## 25.1　cookie

25.1.1 限制  

25.1.2 cookie 的构成  

25.1.3 JavaScript 中的 cookie  

25.1.4 子 cookie  

25.1.5 使用 cookie 的注意事项  



## 25.2　Web Storage

25.2.1 Storage 类型  

25.2.2 sessionStorage 对象  

25.2.3 localStorage 对象  

25.2.4 存储事件  

25.2.5 限制  



## 25.3　IndexedDB

25.3.1 数据库  

25.3.2 对象存储  

25.3.3 事务  

25.3.4 插入对象  

25.3.5 通过游标查询  

25.3.6 键范围  

25.3.7 设置游标方向  

25.3.8 索引  

25.3.9 并发问题  

25.3.10 限制  





25.4　小结

# 第 26章　模块

## 26.1　理解模块模式

26.1.1 模块标识符  

26.1.2 模块依赖  

26.1.3 模块加载  

26.1.4 入口  

26.1.5 异步依赖  

26.1.6 动态依赖  

26.1.7 静态分析  

26.1.8 循环依赖  





## 26.2　凑合的模块系统







## 26.3　使用ES6之前的模块加载器

26.3.1 CommonJS  

26.3.2 异步模块定义  

26.3.3 通用模块定义  

26.3.4 模块加载器终将没落  



## 26.4　使用ES6模块

26.4.1 模块标签及定义  

26.4.2 模块加载  

26.4.3 模块行为  

26.4.4 模块导出  

26.4.5 模块导入  

26.4.6 模块转移导出  

26.4.7 工作者模块  

26.4.8 向后兼容  





26.5　小结

# 第 27章　工作者线程

## 27.1　工作者线程简介

27.1.1 工作者线程与线程  

27.1.2 工作者线程的类型  

27.1.3 WorkerGlobalScope  





## 27.2　专用工作者线程

27.2.1 专用工作者线程的基本概念  

27.2.2 专用工作者线程与隐式 MessagePorts  

27.2.3 专用工作者线程的生命周期  

27.2.4 配置 Worker 选项  

27.2.5 在 JavaScript 行内创建工作者线程  

27.2.6 在工作者线程中动态执行脚本  

27.2.7 委托任务到子工作者线程  

27.2.8 处理工作者线程错误  

27.2.9 与专用工作者线程通信  

27.2.10 工作者线程数据传输  

27.2.11 线程池  





## 27.3　共享工作者线程

27.3.1 共享工作者线程简介  

27.3.2 理解共享工作者线程的生命周期  

27.3.3 连接到共享工作者线程  





## 27.4　服务工作者线程

27.4.1 服务工作者线程基础  

27.4.2 服务工作者线程缓存  

27.4.3 服务工作者线程客户端  

27.4.4 服务工作者线程与一致性  

27.4.5 理解服务工作者线程的生命周期  

27.4.6 控制反转与服务工作者线程持久化  

27.4.7 通过 updateViaCache 管理服务文件缓存  

27.4.8 强制性服务工作者线程操作  

27.4.9 服务工作者线程消息  

27.4.10 拦截 fetch 事件  

27.4.11 推送通知  





27.5　小结

# 第 28章　最佳实践

## 28.1　可维护性

28.1.1 什么是可维护的代码  

28.1.2 编码规范  

28.1.3 松散耦合  

28.1.4 编码惯例  



## 28.2　性能

28.2.1 作用域意识  

28.2.2 选择正确的方法  

28.2.3 语句最少化  

28.2.4 优化 DOM 交互  



## 28.3　部署

28.3.1 构建流程  

28.3.2 验证  

28.3.3 压缩  



28.4　小结

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