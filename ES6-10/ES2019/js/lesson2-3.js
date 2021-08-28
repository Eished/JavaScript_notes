// let Animal = function (type) {
//   this.type = type
// }

// Animal.prototype.eat = function () {
//   console.log('you are eatting food hello');
// }
// let dog = new Animal('food')
// let cat = new Animal('fish')

// console.log(dog)
// console.log(cat)

// // 修改实例对象原型链上的方法
// cat.constructor.prototype.eat = function () {
//   console.log('error')
// }
// dog.eat()
// cat.eat()

// class Animal {
//   constructor(type) {
//     this.type = type
//   }
//   eat() {
//     console.log('i am food')
//   }
// }

// let dog = new Animal('food')
// let cat = new Animal('fish')

// console.log(dog)
// console.log(cat)

// // 修改实例对象原型链上的方法
// cat.constructor.prototype.eat = function () {
//   console.log('error')
// }
// dog.eat()
// cat.eat()

// console.log(typeof Animal)

// let _age = 4
// class Animal {
//   constructor(type) {
//     this.type = type
//   }
//   get age() {
//     return _age
//   }
//   set age(val) {
//     if (val < 7 && val > 4) {
//       _age = val
//     } else {
//       console.log("err")
//     }
//   }
//   eat() {
//     console.log('i am food')
//   }
// }
// let dog = new Animal
// dog.age = 52
// console.log(dog.age)

// ES5
// let Animal2 = function (type) {
//   this.type = type
// }
// Animal2.prototype.eat = function () {
//   Animal2.walk()
//   console.log('you are eatting food hello');
// }
// Animal2.walk = function () {
//   console.log('i am walking');
// }
// let dog = new Animal2('dog')
// dog.eat()

// ES6 专有语法定义静态方法
// class Animal {
//   constructor(type) {
//     this.type = type
//   }
//   eat() {
//     Animal.walk()
//     console.log('i am food')
//   }
//   static walk() {
//     console.log('i am flying');
//   }
// }
// let dog = new Animal('dog')
// dog.eat()

// 继承类
// ES5
// let Animal = function (type) {
//   this.type = type
// }
// Animal.prototype.eat = function () {
//   Animal.walk()
//   console.log('you are eatting food hello');
// }
// Animal.walk = function () {
//   console.log('i am walking');
// }

// let Dog = function (type) {
//   // 初始化父类的构造函数
//   Animal.call(this, type)
//   this.run = function () {
//     console.log('runnig');
//   }
// }
// Dog.prototype = Animal.prototype

// let dog = new Dog('dog')
// dog.run()
// dog.eat()
// console.log(dog.type);

// ES6
class Animal {
  constructor(type) {
    this.type = type
  }
  eat() {
    Animal.walk()
    console.log('i am food')
  }
  static walk() {
    console.log('i am flying');
  }
}
class Dog extends Animal {
  constructor(type) {
    super(type)
    this.age = 2
  }
}
let dog = new Dog('dog')
dog.eat()