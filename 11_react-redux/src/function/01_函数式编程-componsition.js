// lodash
import { compose, pipe } from 'lodash/fp'
// 做法1:将字符串拼接成标签
// 缺点: 没有复用性
let input = ' javaScript  '
// const output = '<div>' + input.trim() + '</div>'
// wrap.toLowerCase()

// 做法2:使用函数完成
// 缺点: 函数调用层级太深,不易读
// const trim = str => str.trim()
// const wrapDiv = (type, str) => `<${type}>${str}</${type}>`
// const toLowerCase = str => str.toLowerCase()
// const result = toLowerCase(wrapDiv(trim(input)))
// console.log(result)

// 做法3:使用函数完成(借用lodash库)
const trim = str => str.trim()
const wrapDiv = type => str => `<${type}>${str}</${type}>`
const toLowerCase = str => str.toLowerCase()
// 每个函数的返回值,都会成为下一个函数的参数值
// pipe(fn,fn,fn)
const transform = pipe(trim, toLowerCase, wrapDiv('span'))
console.log(transform(input))
