// 正则后面加 s 增强点的匹配能力 \
// 四字节字符则加 u, ES6中已经讲过
// console.log(/foo.bar/s.test('foo\nbar'))
// console.log(/foo.bar/.test('foo\nbar'))

// // 是否启用 dotAll 模式
// const re = /foo.bar/sgiu
// console.log(re.dotAll)
// // 查看修饰符
// console.log(re.flags)

// 命名分组捕获
// // console.log('12-2019-06-07'.match(/(\d{4})-(\d{2})-(\d{2})/))

// const t = '12-2019-06-07'.match(/(?<year>\d{4})-(?<mouth>\d{2})-(?<day>\d{2})/)
// // console.log(t[1])
// // console.log(t[2])
// // console.log(t[3])
// console.log(t)
// console.log(t.groups.year, t.groups.mouth, t.groups.day)

// 先行断言
let test = 'hello world'
console.log(test.match(/hello(?=\sworld)/))
// 后行断言
console.log(test.match(/(?<=hello\s)world/))

// 1. 请把 `'$foo %foo foo'`字符串中前面是$符号的foo 替换成bar
const re = /(?<=\$)foo/
let str = '$foo %foo foo'
// console.log(re.test(str))
str = str.replace(re, 'bar')
console.log(str)

// 2. 请提取 `'$1 is worth about ￥123'`
const re2 = /(?<=\$)\d/
let str2 = '$1 is worth about ￥123'
str2 = str2.match(re2)
console.log(str2)
