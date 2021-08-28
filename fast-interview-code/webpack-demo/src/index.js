console.log('index js')

// 导入
import { fn, name } from './fn'
fn()
console.log('name is ', name)

// 箭头函数
const sum = (a, b) => a + b
const result = sum(10, 20)
console.log(result)

// class
class People {
    constructor(name) {
        this.name = name
    }
    sayHi() {
        console.log(`${this.name} say hi`)
    }
}
const zhangsan = new People('张三')
console.log(zhangsan.sayHi())
