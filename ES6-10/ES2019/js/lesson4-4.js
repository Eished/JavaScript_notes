const data = {
  PortLand: '78/50',
  Dublin: '88/53',
  Lima: '32/54'
}

Object.defineProperty(data, 'Lima', {
  // 描述符
  enumerable: false,
  writable: false
})

data.Lima = '23/23'
console.log(Object.keys(data))
// 查询属性描述符
console.log(Object.getOwnPropertyDescriptors(data))
console.log(Object.getOwnPropertyDescriptor(data, 'Lima'))
