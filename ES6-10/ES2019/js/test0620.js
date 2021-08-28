// for (const key in {
//     a: 1,
//     b: 2
//   }) {
//   console.log(key);
// }
// // a, b

// for (const value of [1, 2, 3, 4, 5]) {
//   console.log(value);
// }
// // 1, 2, 3, 4, 5

// console.log(
//   parseInt(),
//   parseInt(''),
//   parseInt('-123adsf'),
//   parseInt('-a123'),
//   parseInt('a123'));
// let num1 = parseInt("1234blue"); // 1234
// let num2 = parseInt(""); // NaN
// let num3 = parseInt("0xA"); // 10，解释为十六进制整数
// let num4 = parseInt(22.5); // 22
// let num5 = parseInt("70"); // 70，解释为十进制值
// let num6 = parseInt("0xf"); // 15，解释为十六进制整数
// let num7 = parseInt("11", 8); // 
// let num8 = parseFloat("11.11e11.11"); // ，解释为十进制整数
// console.log(num8);
// console.log("He said, \"hey.\"");
// let text = "This is the letter sigma: \u03a3.\r\b\t\u03a5\n\x41\u03a5\f"
// console.log(text);
// console.log(typeof num7.toString());
// console.log(String(num2));
// console.log(`${num1}???${num2}|||${num7}`);
// let a = '';
// let foo = {
//   toString: () => 'toString',
//   add: (a, b) => {
//     return a + b
//   },
//   append: () => a = a + `asc;`
// };
// console.log(`${foo}|||${foo.add(1,2)}|||${foo.append()}|||${foo.append()}|||${foo.append()}`);

// let a = 6;
// let b = 9;

// function zipTag(strings, ...expressions) {
//   let c = expressions.map((e, i) => {
//     return `${e}${strings[i + 1]}`;
//   });
//   //"" a + b = 15 ""
//   return strings[0] + c.join('');
// }

// let untaggedResult = `${ a } + ${ b } = ${ a + b }`;
// let taggedResult = zipTag `${ a } + ${ b } = ${ a + b }`;

// console.log(untaggedResult); // "6 + 9 = 15"
// console.log(taggedResult); // "6 + 9 = 15"

// let arr = [1, 2, 3, 4];
// arr.map((e, i) => {
//   console.log(++e, i);
// })

// // Unicode 示例
// // \u00A9 是版权符号
// console.log(`\u00A9`); // ©
// console.log(String.raw `\u00A9`); // \u00A9
// // 换行符示例
// console.log(`first line\nsecond line`);
// // first line
// // second line
// console.log(String.raw `first line\nsecond line`); // "first line\nsecond line"
// // 对实际的换行符来说是不行的
// // 它们不会被转换成转义序列的形式
// console.log(`first line
// second line`);
// // first line
// // second line
// console.log(String.raw `first line
// second line`);
// // first line
// // second line

// // 另外，也可以通过标签函数的第一个参数，即字符串数组的.raw 属性取得每个字符串的原始内容：
// function printRaw(strings) {
//   console.log('Actual characters:');
//   for (const string of strings) {
//     console.log(string);
//   }
//   console.log('Escaped characters;');
//   for (const rawString of strings.raw) {
//     console.log(rawString);
//   }
// }
// printRaw `\u00A9${ 'and' }\n`;
// // Actual characters:
// // ©
// //（换行符）
// // Escaped characters:
// // \u00A9
// // \n

// let s1 = Symbol('foo'),
//   s2 = Symbol('bar'),
//   s3 = Symbol('baz'),
//   s4 = Symbol('qux');
// let o = {
//   [s1]: 'foo val'
// };
// // 这样也可以： o[s1] = 'foo val';
// console.log(o);
// // {Symbol(foo): foo val}
// Object.defineProperty(o, s2, {
//   value: 'bar val'
// });
// console.log(o);
// // {Symbol(foo): foo val, Symbol(bar): bar val}
// Object.defineProperties(o, {
//   [s3]: {
//     value: 'baz val'
//   },
//   [s4]: {
//     value: 'qux val'
//   }
// });
// console.log(o);
// // {Symbol(foo): foo val, Symbol(bar): bar val,
// // Symbol(baz): baz val, Symbol(qux): qux val}

// // 创建对象：
// var person = {
//   firstName: "Bill",
//   lastName: "Gates",
//   id: 12345,
//   fullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// // 显示对象中的数据：
// console.log(person.fullName());

// console.log((0 > -1 ? 2 : 9));

// const obj = {
//   formhash: 999,
//   signday: 222,
//   reply: "感謝大大分享",
//   replyPage: "555-1-1",
//   func() {
//     console.log('function')
//   }
// };
// obj.formhash = '24134';
// Object.defineProperty(obj, 'age', {
//   value: '199',
//   writable: true,
//   enumerable: false,
//   configurable: true
// });
// console.log(obj);
// GM_setValue('obj', obj);
// console.log(GM_getValue('obj'));


// let array = [1, 2, 3, 4];
// console.log(a.forEach((value, index, arr) => console.log(value, index, arr))); //多出 undefined
// for (const key in a) {
//   const element = a[key];
//   console.log(key, element);
// }

// a.forEach(myFunction);

// function myFunction(value, index) {
//   console.log(value, index);
// }
// [1, 2, 3, 4, 5].forEach(function (i) {
//   if (i === 2) {
//     return;
//   } else {
//     console.log(i)
//   }
// })
// array.forEach(callback(currentVal, index, array) {
//   // do something
//   console.log('1');
// }, thisArg)
// let new_array = arr.map(function (v, i, arr) {
//   // Return element for new_array 
// } [, thisArg])

// let obj = {
//   x: 1,
//   y: 1,
//   hello: 1,
//   a: 0,
//   b: 0,
// }
// let obj4 = {
//   x: 1,
//   hello: 1,
//   y: 1,
//   b: 0,
//   a: 0,
// }
// let obj2 = {
//   x: 2,
//   hello: 3,
//   y: 2,
//   hello2: 3,
//   y4: 2,
// }
// let obj3 = {
//   x: 2,
//   y: 2,
// }
// console.log(compaObjKey(obj, obj4));

// function compaObjKey(a, b) {
//   let count = 0;
//   Object.keys(a).forEach(ea => {
//     Object.keys(b).forEach(eb => {
//       if (ea === eb) {
//         count++;
//       }
//     })
//   });
//   if (count == Object.keys(a).length) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function copyObj(target, source) {
//   Object.keys(source).forEach((key) => {
//     target[key] = source[key];
//   });
// }
// copyObj(obj, obj2)
// console.log(obj, compaObjKey(obj, obj2));

// let a = Object.keys(obj);
// const b = Object.keys(obj2);
// if (JSON.stringify(a) != JSON.stringify(b)) {
//   for (let i = 0; i < b.length; i++) {
//     if (a[i] == b[i]) {
//       obj[b[i]] = obj2[b[i]];
//       console.log(obj);
//     } else if (JSON.stringify(a).match(b[i])) {
//       obj[b[i]] = obj2[b[i]];
//     }
//   }
// }





// import JSZip from './jszip';

// const getFile = url => {
//   return new Promise((resolve, reject) => {
//     axios.get(url, {
//       responseType: "arraybuffer"
//     }).then(res => {
//       resolve(res.data);
//     }).
//     catch(err => {
//       reject(err.toString());
//     });
//   });
// };

// FileSaver.saveAs(blob, "hello world.txt");


// GM_xmlhttpRequest({
//   method: "GET",
//   url: "http://www.example.net/",
// headers: {
//   "User-Agent": "Mozilla/5.0", // If not specified, navigator.userAgent will be used.
//   "Accept": "text/html" // If not specified, browser defaults will be used.
// },
// responseType: "document",
//   onload: function (response) {
//     // Attempt to create responseXML, if absent, in supported browsers
//     var responseXML = response.responseXML;
// if (!responseXML) {
//   try {
//     responseXML = new DOMParser().parseFromString(response.responseText, "text/html");
//   } catch (err) {}
// }
//   }
// });

// GM_xmlhttpRequest({
//   method: "POST",
//   url: "http://www.example.net/login",
//   data: "username=johndoe&password=xyz123",
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded"
//   },
//   onload: function (response) {
//     if (response.responseText.indexOf("Logged in as") > -1)
//       location.href = "http://www.example.net/dashboard";
//   }
// });

// GM_download(url, name);

// 文件夹测试
// zip.file("Hello.txt", "Hello World\n");
// zip.folder("nested").file("hello.jpg", getFile(url));
// zip.folder("nested").file("hello2.jpg", getFile(url));
// zip.folder("nested").file("hello3.jpg", getFile(url));
// zip.generateAsync({
//   type: "blob"
// }).then(async (data) => {
//   FileSaver.saveAs(data, 'data')
// })


// var img = zip.folder("images");
// img.file("smile.gif", '../static/es2019.jpg', {
//   base64: true
// });

// zip.generateAsync({
//   type: "blob"
// }).then(function (content) {
//   // see FileSaver.js
//   saveAs(content, "example.zip");
// });

// getFile(url).then((fileData) => {
//   // 下载文件
//   const arrName = url.split('/');
//   let fileName = arrName[arrName.length - 1]; // 获取文件名
//   // 转码文件名, 上传的文件用decodeURIComponent转汉字
//   const endIndex = fileName.lastIndexOf('.');
//   const format = fileName.slice(endIndex);
//   const startName = fileName.slice(0, endIndex);
//   const newFileName = decodeURIComponent(startName) + format;
//   zip.file(newFileName, fileData, {
//     binary: true
//   }); // 逐个添加文件
//   // cache[newFileName] = fileData;
//   zip.generateAsync({
//       type: 'blob'
//     })
//     .then(async (content) => {
//       // 生成二进制流；利用file-saver保存文件
//       FileSaver.saveAs(
//         content,
//         `压缩文件.zip`
//       );
//     });
// });

// 批量下载
// import axios from 'axios'
// import JSZip from 'jszip'
// import FileSaver from 'file-saver'
// getFile = (url) => {
//   return new Promise((resolve, reject) => {
//     axios({
//       method: 'get',
//       url,
//       responseType: 'arraybuffer'
//     }).then(data => {
//       resolve(data.data)
//     }).catch(error => {
//       reject(error.toString())
//     })
//   })
// };

var FileSaver = require('./FileSaver');
var JSZip = require('./jszip');
const zip = new JSZip();

const getFile = (url) => {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest();
    // 避免 200 from disk cache
    url = url + `?r=${Math.random()}`;
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        resolve(); // 避免图片下载失败，导致批量导出失败
      }
    };
    xhr.send();
  });
}
const url = 'https://sf3-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/default.640d9a7.png';

// function makeGetRequest(url) {
//   return new Promise((resolve, reject) => {
//     GM_xmlhttpRequest({
//       method: "GET",
//       url: url,
//       onload: function(response) {
//         resolve(response.responseText);
//       },
//       onerror: function(error) {
//         reject(error);
//       }
//     });
//   });
// }

// 批量下载
const handleBatchDownload = async (selectImgList, nameArray) => {
  const data = selectImgList;
  const zip = new JSZip()
  const cache = {}
  const promises = []
  await data.forEach((item, index) => {
    const promise = getFile(item).then(data => { // 下载文件, 并存成ArrayBuffer对象
      const suffix = item.split(".");
      let file_name = nameArray[index] + '.' + suffix[suffix.length - 1]; // 获取文件名
      zip.file(file_name, data, {
        binary: true
      }) // 逐个添加文件
      cache[file_name] = data;
      console.log(data);
    })
    console.log(promise);
    promises.push(promise)
  })
  Promise.all(promises).then(() => {
    zip.generateAsync({
      type: "blob"
    }).then(content => { // 生成二进制流
      FileSaver.saveAs(content, "photo.zip") // 利用file-saver保存文件
    })
  })
};


const selectImgList = [url, 'https://sf3-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/article.acd26aa.png'];
const nameArray = ['掘金', '二维码'];
handleBatchDownload(selectImgList, nameArray);


// const zip = new JSZip();

// zip.file("Hello.txt", "Hello World\n");
// zip.generateAsync({
//   type: "blob"
// }).then(async (data) => {
//   saveAs(data, 'data')
// })


// function makeGetRequest(url) {
//   return new Promise((resolve, reject) => {
//     GM_xmlhttpRequest({
//       method: "GET",
//       url: url,
//       responseType: 'blob',
// synchronous: true,
//       onload: function (response) {
//         resolve(response);
//       },
//       onerror: function (error) {
//         reject(error);
//       }
//     });
//   });
// }

// makeGetRequest(url)