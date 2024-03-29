// 华为机试
// https://www.nowcoder.com/exam/oj/ta?page=1&tpId=37&type=37

console.time('time')
function test1() {
  const line = 'hello nowcoder'
  const tokens = line.split(' ')
  console.log(tokens[tokens.length - 1].length)
}

let text = ''
function test2(line) {
  if (!text) {
    text = line
  } else {
    const reg = new RegExp(line, 'gi')
    console.log(text.match(reg)?.length ?? 0)
  }
}
// test2('ABCabc')
// test2('A')

let total = 0
const set = new Set()
function test3(line) {
  if (total === 0) {
    total = line
  } else {
    set.add(line)
  }
}
// test3(4)
// test3(123)
// test3(2)
// test3(27)
// test3(2)
// test3(1)
// Array.from(set)
//   .sort((a, b) => a - b)
//   .forEach((s) => console.log(s))

function test4() {
  let line = '123456789123456789123456789123456789123456789'
  // for (let i = 0; i <= parseInt((line.length - 1) / 8); i++) {
  //   let str = line.slice(i * 8, i * 8 + 8)
  //   if (str.length < 8) {
  //     str = str + '0'.repeat(8 - str.length)
  //     // str = str.padEnd(8, '0')
  //   }
  //   console.log(str)
  // }
  let str = line + '00000000'
  for (let i = 8; i < str.length; i += 8) {
    console.log(str.substring(i - 8, i))
  }
}
// test4()

function test5(number) {
  console.log(parseInt(number, 16))
  console.log(Number(number))
  console.log(number.toString(10))
}
// test5('0xAA')

function test6() {
  let num = 180
  const arr = []
  for (let i = 2; i * i <= num; i++) {
    while (num % i === 0) {
      console.log(num, i)
      arr.push(i)
      num = num / i
    }
  }
  if (num > 1) {
    arr.push(num)
  }
  console.log(arr.join(' '))
}
// test6()

function test7(num) {
  console.log(Number(num).toFixed(0))
}
// test7('5.5')
// test7('5.4')
// test7('2.499')

const obj8 = {}
function test8(str) {
  const strs = str.split(' ')
  if (strs[1]) {
    const value = obj8[strs[0]]
    if (value) {
      obj8[strs[0]] = Number(strs[1]) + Number(value)
    } else {
      obj8[strs[0]] = strs[1]
    }
  }
}
// test8('4')
// test8('3 4')
// test8('0 1')
// test8('1 2')
// test8('0 2')
// test8('0 2')
// Object.entries(map)
//   .sort(([ak], [bk]) => ak - bk)
//   .forEach(([k, v]) => console.log(k, v))

function test9(str) {
  console.log([...new Set([...str].reverse())].join(''))
  // console.log([...new Set(str)].reverse().join(''))
}
// test9('9876673')

function test10(str) {
  // const map10 = new Map()
  // for (let i = 0; i < str.length; i++) {
  //   const s = str[i]
  //   const value = map10.get(s)
  //   map10.set(s, value)
  // }
  // console.log(map10.size)
  console.log(new Set([...str]).size)
}
// test10('abc')
// test10('aaa')

function test11(str) {
  console.log([...str].reverse().join(''))
}
// test11('1516000')

function test12(str) {
  console.log([...str].reverse().join(''))
}
// test12('abcd')

function test13(str) {
  const strs = str.split(' ')
  console.log(strs.reverse().join(' '))
}
// test13('I am a boy')

const arr14 = []
let count14
function test14(str) {
  if (!count14) {
    count14 = str
  } else {
    arr14.push(str)
  }
}
// test14('9')
// test14('cap')
// test14('too')
// test14('boot')
// arr14.sort().forEach((a) => console.log(a))

function test15(str) {
  console.log(parseInt(str, 10).toString(2).match(/1/g).length)
}
// test15('5')

function shoppingCart() {
  let items16 = []
  let n
  let m
  let id = 1
  function test16(str) {
    const strs = str.split(' ')
    const q = strs[2]
    if (q === undefined) {
      n = strs[0]
      m = strs[1]
    } else {
      const v = strs[0]
      const p = strs[1]
      items16.push([v, p, q, id])
      id++
    }
  }
  test16('1000 5')
  // test16('20 3 5')
  // test16('20 3 5')
  // test16('10 3 0')
  // test16('10 2 0')
  // test16('10 1 0')
  test16('800 2 0')
  test16('400 5 1')
  test16('300 5 1')
  test16('400 3 0')
  test16('500 2 0')
  // 分类
  // subItems16.forEach((si) => {
  //   // console.log(si)
  //   const index = mainItems16.findIndex((mi) => mi[3] == si[2])
  //   mainItems16[index].childs.push(si)
  // })
  // 穷举购物车
  function getAllSubsets(arr) {
    const subsets = [[]]
    for (const item of arr) {
      const newSubsets = subsets.map((subset) => {
        // console.log(subset, 'subset')
        return [...subset, item]
      })
      subsets.push(...newSubsets)
    }
    return subsets
  }
  items16 = getAllSubsets(items16)
  // console.log(subsets)

  // 穷举结果
  let results = []
  items16 = items16.filter((sbs) => {
    if (sbs.length == 0) {
      return true
    } else if (sbs.length == 1) {
      if (sbs[0][0] < n) {
        return true
      }
    }
    let isParentIn = true
    const childs = sbs.filter((sb) => sb[2] != 0)
    if (childs.length) {
      isParentIn = childs.every((s) => sbs.some((b) => b[3] == s[2]))
    }
    if (isParentIn) {
      return true
    }
  })

  items16 = items16.forEach((sbs) => {
    let totalPrice = 0
    let satisfaction = 0
    sbs.forEach((item) => {
      totalPrice += Number(item[0])
      satisfaction += Number(item[0]) * Number(item[1])
      // console.log(item)
    })
    // console.log(sbs)

    if (totalPrice <= n) {
      // console.log(totalPrice)
      results.push(satisfaction)
    }
  })
  items16 = undefined
  // console.log(results)
  results = results.sort((a, b) => b - a)

  console.log(results[0])
}

console.timeEnd('time')
