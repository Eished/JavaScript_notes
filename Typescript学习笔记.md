# TypeScript 笔记

## 环境搭建

[How to Set Up a Node.js Project with TypeScript](https://blog.appsignal.com/2022/01/19/how-to-set-up-a-nodejs-project-with-typescript.html)

### 步骤一：安装依赖

```bash
mkdir typescript-project

cd typescript-project

npm i typescript --save-dev

npx tsc --init

nano tsconfig.json

npm install nodemon -D # 监视文件重启用
```

或者使用：

```bash
npm install -D ts-node # 合并`node` + `tsc`两个命令

# Execute a script as `node` + `tsc`.
ts-node script.ts
```

[nodemon](https://www.digitalocean.com/community/tutorials/workflow-nodemon)

Using these options, let’s create the command to satisfy the following scenario:

- watching the `server` directory
- specifying files with a `.ts` extension
- ignoring files with a `.test.ts` suffix
- executing the file (`server/server.ts`) with `ts-node`
- waiting for three seconds to restart after a file changes

`tsconfig.json`

```json
{
  // "extends": "@tsconfig/node16/tsconfig.json",
  "compilerOptions": {
    /* 基本选项 */
    "target": "ES6", // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "CommonJS", // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [], // 指定要包含在编译中的库文件
    "allowJs": true, // 允许编译 javascript 文件
    "checkJs": true, // 报告 javascript 文件中的错误
    "jsx": "preserve", // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true, // 生成相应的 '.d.ts' 文件
    // "sourceMap": true, // 生成相应的 '.map' 文件
    // "outFile": "./", // 将输出文件合并为一个文件
    "outDir": "./build", // 指定输出目录
    "rootDir": "./", // 用来控制输出目录结构 --outDir.
    "removeComments": true, // 删除编译后的所有的注释
    "noEmit": false, // 不生成输出文件
    "importHelpers": false, // 从 tslib 导入辅助工具函数
    "isolatedModules": false, // 将每个文件作为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    "strict": true, // 启用所有严格类型检查选项
    "noImplicitAny": true, // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true, // 启用严格的 null 检查
    "noImplicitThis": true, // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true, // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true, // 有未使用的变量时，抛出错误
    "noUnusedParameters": true, // 有未使用的参数时，抛出错误
    "noImplicitReturns": true, // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true, // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node", // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./", // 用于解析非相对模块名称的基目录
    "paths": {}, // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [], // 根文件夹列表，其组合内容表示项目运行时的结构内容
    // "typeRoots": [], // 包含类型声明的文件列表
    // "types": [], // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true, // 允许从没有设置默认导出的模块中默认导入。

    /* Source Map Options */
    // "sourceRoot": "./", // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    // "mapRoot": "./", // 指定调试器应该找到映射文件而不是生成文件的位置
    // "inlineSourceMap": true, // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    // "inlineSources": true, // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true, // 启用装饰器
    "emitDecoratorMetadata": true // 为装饰器提供元数据的支持
  },
  "include": ["./src"],
  "exclude": ["./node_modules"]
}

```

`package.json`

```json
{
  "name": "typescript",
  "version": "1.0.0",
  "description": "",
  "main": "build/src/index.js",
  "scripts": {
    "start": "nodemon src/index.ts"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^2.0.19",
    "ts-node": "^10.9.1",
    "typescript": "^4.7.4"
  }
}

```

`index.ts`

```typescript
const world = 'world'

export function hello(who: string = world): string {
  return `Hello ${who}! `
}

console.log(hello(world))

```

`nodemon.json`

```json
{
  "watch": ["src"],
  "ext": "ts",
  "ignore": ["*.test.ts"],
  "delay": "0",
  "execMap": {
    "ts": "ts-node"
  }
}

```



### 步骤二：启动项目

```typescript
const world = 'world';

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}
```

```bash
npx tsc # 编译

npx tsc -w  # watch mode

npm start # 自动编译和重启
```



### 步骤三：安装类型提示和代码格式化工具

This error occurs because the `lib` compiler option set in the [base configuration](https://www.npmjs.com/package/@tsconfig/node16) for Node.js v16 does not include the `dom` option, which contains type definitions for the `console` object and other browser-specific APIs. The error message above suggests adding the `dom` option to the `lib` property to fix the problem, but this is not the correct solution for a Node.js project.

The correct fix involves installing the [type definitions for Node.js APIs](https://www.npmjs.com/package/@types/node) so that the TypeScript compiler can understand and validate all the built-in Node.js APIs. Here's how:

```bash
npm install @types/node --save-dev
npm install @tsconfig/node16 --save-dev # 非必要
```

```bash
npm install eslint --save-dev
npm install @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

`.eslintrc.js`

```javascript
module.exports = {
  parser: '@typescript-eslint/parser', // 定义ESLint的解析器
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'], // 定义文件继承的子规范
  plugins: ['prettier'], // 定义了该eslint文件所依赖的插件
  env: {
    // 指定代码的运行环境
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    // 指定ESLint可以解析JSX语法
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
}

```

`.prettierrc.js`

```javascript
module.exports = {
  printWidth: 120, //一行的字符数，如果超过会进行换行，默认为80
  tabWidth: 2, //一个tab代表几个空格数，默认为80
  useTabs: false, //是否使用tab进行缩进，默认为false，表示用空格进行缩减
  singleQuote: true, //字符串是否使用单引号，默认为false，使用双引号
  semi: false, //行位是否使用分号，默认为true
  trailingComma: 'es5', //是否使用尾逗号，有三个可选值"<none|es5|all>"
  bracketSpacing: true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  arrowParens: 'always', // 箭头函数单个参数加分号
  bracketSameLine: true,
};

```



## 参考资料

一个基于 Go 与 Typescript 开发的看板开源软件：taskcafe (https://github.com/JordanKnott/taskcafe)。

支持对任务进行筛选过滤、打标签、添加截止日期、分配成员、制定流程等操作



#前端 #电子书 ：《深入理解 TypeScript (https://github.com/jkchao/typescript-book-chinese)》（TypeScript Deep Dive (https://github.com/basarat/typescript-book)）。

该书将从基础到深入，全面阐述 TypeScript 的各种魔法，并结合实际场景用例，让你更深入的理解 TypeScript



全栈 React.js、GraphQL、Postgres、TypeScript 入门模板 (https://github.com/braydenwerner/Wern-Fullstack-Template)

https://github.com/braydenwerner/Wern-Fullstack-Template