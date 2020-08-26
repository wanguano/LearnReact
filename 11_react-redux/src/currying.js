// 柯里化函数:传递两次个参数相加,要求只能传递一个函数只能传一个参数
function sum(a) {
  return function (b) {
    return a + b
  }
}
// 改造箭头函数
const sum2 = a => b => a + b
sum(1)(5)
