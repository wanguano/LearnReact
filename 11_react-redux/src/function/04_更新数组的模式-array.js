const numbers = [1, 2, 3]

// 数组的添加 adding
let index = numbers.indexOf(2)
const add = [
  // 返回index"之前"的元素
  ...numbers.slice(0, index),
  4,
  ...numbers.slice(index),
]

// 数组的移除 removing
const remove = numbers.filter(n => n !== 2)

// 数组的更新 updating
const update = numbers.map(n => (n === 2 ? 20 : n))
