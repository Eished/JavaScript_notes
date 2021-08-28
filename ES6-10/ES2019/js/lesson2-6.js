// const s = 'a_aa_aaa_aa_a'
// const r1 = /a+/g
// const r2 = /a+/y
// console.log(r1.exec(s))
// console.log(r2.exec(s))
// console.log(r1.exec(s))
// console.log(r2.exec(s))

// unicode u修饰符 大于 \uffff
let s = '𠮷'
let s2 = '\uD842\uDF87'

console.log(/^\uD842/.test(s2))
console.log(/^\uD842/u.test(s2)) // 无法匹配

console.log(/^.$/.test(s)) // 无法匹配
console.log(/^.$/u.test(s)) // 正确匹配, 使用 "." 大于两个字节要加 u

console.log(/^\u{20BB7}$/u.test(s))
console.log(/^\u{61}$/u.test('a')) // 使用码点时，加 u 才能匹配 \u

console.log(/𠮷{2}/u.test('𠮷𠮷')) // 加 u 才能匹配，所有中文都加 u

console.log(/[a-z]/i.test('\u212A'))
console.log(/[a-z]/iu.test('\u212A'))
