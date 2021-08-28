// 类
class Student {
    constructor(name, number) {
        this.name = name
        this.number = number
        // this.gender = 'male'
    }
    sayHi() {
        console.log(
            `姓名 ${this.name} ，学号 ${this.number}`
        )
        // console.log(
        //     '姓名 ' + this.name + ' ，学号 ' + this.number
        // )
    }
    // study() {

    // }
}

// 通过类 new 对象/实例
const xialuo = new Student('夏洛', 100)
console.log(xialuo.name)
console.log(xialuo.number)
xialuo.sayHi()

const madongmei = new Student('马冬梅', 101)
console.log(madongmei.name)
console.log(madongmei.number)
madongmei.sayHi()
