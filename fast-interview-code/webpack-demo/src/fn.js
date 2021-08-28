// export function fn() {
//     console.log('fn')
// }
// export const name = 'b'

function fn() {
    console.log('fn')
}
const name = 'b'

export {  // 注意这里不能有 default ！！！
    fn,
    name
}