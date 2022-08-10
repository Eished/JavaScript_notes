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
const world = 'world'

export function hello(who: string = world): string {
  return `Hello ${who}! `
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
npm i prettier eslint-plugin-prettier eslint-config-prettier -D
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
}
```

## @types

毫无疑问，[DefinitelyTyped](https://github.com/borisyankov/DefinitelyTyped) 是 TypeScript 最大的优势之一，社区已经记录了 90% 的顶级 JavaScript 库。

```
npm install @types/jquery --save-dev
```

可以看出，对于某些团队而言，拥有允许全局使用的定义是一个问题。因此，你可以通过配置 `tsconfig.json` 的 `compilerOptions.types` 选项，引入有意义的类型：

```json
{
  "compilerOptions": {
    "types": ["jquery"]
  }
}
```

如上例所示，通过配置 `compilerOptions.types: [ "jquery" ]` 后，只允许使用 `jquery` 的 `@types` 包，即使这个人安装了另一个声明文件，比如 `npm install @types/node`，它的全局变量（例如 `process`）也不会泄漏到你的代码中，直到你将它们添加到 tsconfig.json 类型选项。

## 数据类型

### 数字类型枚举与数字类型

数字类型枚举，允许我们将数字类型或者其他任何与数字类型兼容的类型赋值给枚举类型的实例。

```ts
enum Color {
  Red,
  Green,
  Blue,
}

let col = Color.Red
col = 0 // 有效的，这也是 Color.Red
```

## `--lib` 选项

有时，你想要解耦编译目标（即生成的 JavaScript 版本）和环境库支持之间的关系。例如对于 Promise，你的编译目标是 `--target es5`，但是你仍然想使用它，这时，你可以使用 `lib` 对它进行控制。

### config.json

```json
"compilerOptions": {
    "lib": ["dom", "es6"]
}
```

## 捕获键的名称

`keyof` 操作符能让你捕获一个类型的键。例如，你可以使用它来捕获变量的键名称，在通过使用 `typeof` 来获取类型之后：

```ts
const colors = {
  red: 'red',
  blue: 'blue',
}

type Colors = keyof typeof colors

let color: Colors // color 的类型是 'red' | 'blue'
color = 'red' // ok
color = 'blue' // ok
color = 'anythingElse' // Error
```

这允许你很容易地拥有像字符串枚举+常量这样的类型，如上例所示。

## Utility Types

[实用工具类型](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#实用工具类型)

TypeScript 提供一些工具类型来帮助常见的类型转换。这些类型是全局可见的。

### [`Partial`](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#partialtype)

构造类型`Type`，并将它所有的属性设置为可选的。它的返回类型表示输入类型的所有子类型。

#### [例子](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#例子)

```typescript
interface Todo {
  title: string
  description: string
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
}

const todo2 = updateTodo(todo1, {
  description: 'throw out trash',
})
```

### [`Readonly`](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#readonlytype)

构造类型`Type`，并将它所有的属性设置为`readonly`，也就是说构造出的类型的属性不能被再次赋值。

#### [例子](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#例子-1)

```typescript
interface Todo {
  title: string
}

const todo: Readonly<Todo> = {
  title: 'Delete inactive users',
}

todo.title = 'Hello' // Error: cannot reassign a readonly property
```

这个工具可用来表示在运行时会失败的赋值表达式（比如，当尝试给[冻结对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)的属性再次赋值时）。

#### [`Object.freeze`](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#objectfreeze)

```typescript
function freeze<T>(obj: T): Readonly<T>
```

### [`Record`](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#recordkeys-type)

构造一个类型，其属性名的类型为`K`，属性值的类型为`T`。这个工具可用来将某个类型的属性映射到另一个类型上。

#### [例子](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#例子-2)

```typescript
interface PageInfo {
  title: string
}

type Page = 'home' | 'about' | 'contact'

const x: Record<Page, PageInfo> = {
  about: { title: 'about' },
  contact: { title: 'contact' },
  home: { title: 'home' },
}
```

### [`Pick`](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#picktype-keys)

从类型`Type`中挑选部分属性`Keys`来构造类型。

#### [例子](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#例子-3)

```typescript
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}
```

Pick enum

```typescript
enum KeysToBePickedFrom {
  KEY_ONE = 'Key One',
  KEY_TWO = 'Key Number Two',
  KEY_THREE = 'Another key n. 3',
  LAST_KEY = 'Here is the last Key',
}

type PickKey<T, K extends keyof T> = Extract<keyof T, K>

type Picked_KeysOfEnum = PickKey<typeof KeysToBePickedFrom, 'KEY_ONE' | 'LAST_KEY'>

interface KeysPickedForType {
  keyone: Picked_KeysOfEnum
}

const picks: KeysPickedForType = {
  keyone: 'KEY_ONE', //  KEY_ONE | LAST_KEY
}
```

### [`Omit`](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#omittype-keys)

从类型`Type`中获取所有属性，然后从中剔除`Keys`属性后构造一个类型。

#### [例子](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#例子-4)

```typescript
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = Omit<Todo, 'description'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}
```

### [`Exclude`](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#excludetype-excludedunion)

从类型`Type`中剔除所有可以赋值给`ExcludedUnion`的属性，然后构造一个类型。

#### [例子](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#例子-5)

```typescript
type T0 = Exclude<'a' | 'b' | 'c', 'a'> // "b" | "c"
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'> // "c"
type T2 = Exclude<string | number | (() => void), Function> // string | number
```

### [`Extract`](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#extracttype-union)

从类型`Type`中提取所有可以赋值给`Union`的类型，然后构造一个类型。

#### [例子](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#例子-6)

```typescript
type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'> // "a"
type T1 = Extract<string | number | (() => void), Function> // () => void
```

### [`NonNullable`](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#nonnullabletype)

从类型`Type`中剔除`null`和`undefined`，然后构造一个类型。

#### [例子](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#例子-7)

```typescript
type T0 = NonNullable<string | number | undefined> // string | number
type T1 = NonNullable<string[] | null | undefined> // string[]
```

### [`Parameters`](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#parameterstype)

由函数类型`Type`的参数类型来构建出一个元组类型。

#### [例子](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#例子-8)

```ts
declare function f1(arg: { a: number; b: string }): void

type T0 = Parameters<() => string>
//    []
type T1 = Parameters<(s: string) => void>
//    [s: string]
type T2 = Parameters<<T>(arg: T) => T>
//    [arg: unknown]
type T3 = Parameters<typeof f1>
//    [arg: { a: number; b: string; }]
type T4 = Parameters<any>
//    unknown[]
type T5 = Parameters<never>
//    never
type T6 = Parameters<string>
//   never
//   Type 'string' does not satisfy the constraint '(...args: any) => any'.
type T7 = Parameters<Function>
//   never
//   Type 'Function' does not satisfy the constraint '(...args: any) => any'.
```

### [`ConstructorParameters`](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#constructorparameterstype)

由构造函数类型来构建出一个元组类型或数组类型。 由构造函数类型`Type`的参数类型来构建出一个元组类型。（若`Type`不是构造函数类型，则返回`never`）。

#### [例子](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#例子-9)

```ts
type T0 = ConstructorParameters<ErrorConstructor>
//    [message?: string | undefined]
type T1 = ConstructorParameters<FunctionConstructor>
//    string[]
type T2 = ConstructorParameters<RegExpConstructor>
//    [pattern: string | RegExp, flags?: string | undefined]
type T3 = ConstructorParameters<any>
//   unknown[]

type T4 = ConstructorParameters<Function>
//    never
// Type 'Function' does not satisfy the constraint 'new (...args: any) => any'.
```

### [`ReturnType`](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#returntypetype)

由函数类型`Type`的返回值类型构建一个新类型。

#### [例子](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#例子-10)

```
type T0 = ReturnType<() => string>;  // string
type T1 = ReturnType<(s: string) => void>;  // void
type T2 = ReturnType<(<T>() => T)>;  // {}
type T3 = ReturnType<(<T extends U, U extends number[]>() => T)>;  // number[]
type T4 = ReturnType<typeof f1>;  // { a: number, b: string }
type T5 = ReturnType<any>;  // any
type T6 = ReturnType<never>;  // any
type T7 = ReturnType<string>;  // Error
type T8 = ReturnType<Function>;  // Error
```

### [`InstanceType`](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#instancetypetype)

由构造函数类型`Type`的实例类型来构建一个新类型。

#### [例子](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#例子-11)

```typescript
class C {
  x = 0
  y = 0
}

type T0 = InstanceType<typeof C> // C
type T1 = InstanceType<any> // any
type T2 = InstanceType<never> // any
type T3 = InstanceType<string> // Error
type T4 = InstanceType<Function> // Error
```

### [`Required`](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#requiredtype)

构建一个类型，使类型`Type`的所有属性为`required`。 与此相反的是[`Partial`](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#partialtype)。

#### [例子](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#例子-12)

```typescript
interface Props {
  a?: number
  b?: string
}

const obj: Props = { a: 5 } // OK

const obj2: Required<Props> = { a: 5 } // Error: property 'b' missing
```

### [`ThisParameterType`](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#thisparametertypetype)

从函数类型中提取 [this](http://www.patrickzhong.com/TypeScript/zh/handbook/functions.html#this参数) 参数的类型。 若函数类型不包含 `this` 参数，则返回 [unknown](http://www.patrickzhong.com/TypeScript/zh/handbook/basic-types.html#unknown) 类型。

#### [例子](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#例子-13)

```ts
function toHex(this: Number) {
  return this.toString(16)
}

function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n)
}
```

### [`OmitThisParameter`](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#omitthisparametertype)

从`Type`类型中剔除 [`this`](http://www.patrickzhong.com/TypeScript/zh/handbook/functions.html#this参数) 参数。 若未声明 `this` 参数，则结果类型为 `Type` 。 否则，由`Type`类型来构建一个不带`this`参数的类型。 泛型会被忽略，并且只有最后的重载签名会被采用。

#### [例子](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#例子-14)

```ts
function toHex(this: Number) {
  return this.toString(16)
}

const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5)

console.log(fiveToHex())
```

### [`ThisType`](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#thistypetype)

这个工具不会返回一个转换后的类型。 它做为上下文的[`this`](http://www.patrickzhong.com/TypeScript/zh/handbook/functions.html#this)类型的一个标记。 注意，若想使用此类型，必须启用`--noImplicitThis`。

#### [例子](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#例子-15)

```typescript
// Compile with --noImplicitThis

type ObjectDescriptor<D, M> = {
  data?: D
  methods?: M & ThisType<D & M> // Type of 'this' in methods is D & M
}

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {}
  let methods: object = desc.methods || {}
  return { ...data, ...methods } as D & M
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx // Strongly typed this
      this.y += dy // Strongly typed this
    },
  },
})

obj.x = 10
obj.y = 20
obj.moveBy(5, 5)
```

上面例子中，`makeObject`参数里的`methods`对象具有一个上下文类型`ThisType<D & M>`，因此`methods`对象的方法里`this`的类型为`{ x: number, y: number } & { moveBy(dx: number, dy: number): number }`。

在`lib.d.ts`里，`ThisType<T>`标识接口是个简单的空接口声明。除了在被识别为对象字面量的上下文类型之外，这个接口与一般的空接口没有什么不同。

### [操作字符串的类型](http://www.patrickzhong.com/TypeScript/zh/reference/utility-types.html#操作字符串的类型)

为了便于操作模版字符串字面量，TypeScript 引入了一些能够操作字符串的类型。 更多详情，请阅读[模版字面量类型](http://www.patrickzhong.com/TypeScript/zh/handbook-v2/type-manipulation/template-literal-types.html#固有字符串操作类型)。

## [三斜线指令](http://www.patrickzhong.com/TypeScript/zh/reference/triple-slash-directives.html#三斜线指令)

三斜线指令是包含单个 XML 标签的单行注释。 注释的内容会做为编译器指令使用。

三斜线指令*仅*可放在包含它的文件的最顶端。 一个三斜线指令的前面只能出现单行或多行注释，这包括其它的三斜线指令。 如果它们出现在一个语句或声明之后，那么它们会被当做普通的单行注释，并且不具有特殊的涵义。

`/// <reference path="..." />`指令是三斜线指令中最常见的一种。 它用于声明文件间的*依赖*。

三斜线引用告诉编译器在编译过程中要引入的额外的文件。

当使用`--out`或`--outFile`时，它也可以做为调整输出内容顺序的一种方法。 文件在输出文件内容中的位置与经过预处理后的输入顺序一致。

## 参考资料

Typescript 手册

https://www.typescriptlang.org/docs/handbook/

中文版：http://www.patrickzhong.com/TypeScript

一个基于 Go 与 Typescript 开发的看板开源软件：taskcafe (https://github.com/JordanKnott/taskcafe)。

支持对任务进行筛选过滤、打标签、添加截止日期、分配成员、制定流程等操作

#前端 #电子书 ：《深入理解 TypeScript (https://github.com/jkchao/typescript-book-chinese)》（TypeScript Deep Dive (https://github.com/basarat/typescript-book)）。

该书将从基础到深入，全面阐述 TypeScript 的各种魔法，并结合实际场景用例，让你更深入的理解 TypeScript

全栈 React.js、GraphQL、Postgres、TypeScript 入门模板 (https://github.com/braydenwerner/Wern-Fullstack-Template)

https://github.com/braydenwerner/Wern-Fullstack-Template
