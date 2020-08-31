// 在函数式编程中
// 1.是不能直接修改对象的属性
// 2.如果需要要修改,是将其拷贝一份,进行修改
const person = {
  name: 'Kobe',
  address: {
    country: 'China',
    city: 'Beijing',
  },
}
// person.name='kobe' 在函数式编程中不能直接修改对象的属性

// 做法1: Object.assign(newObj, copyObj, {newProperties: newVal})
// const updated = Object.assign({}, person, { name: 'jane', age: 18 })
// console.log(updated)

// 做法2: 展开... 浅拷贝
// const updated = { ...person, name: 'Jane' }
// updated.age = 18
// updated.address.city = 'Shanghai'
// console.log(updated)
// 有一个问题: 当被浅拷贝的对象中有有一个属性对象时,此时修改该属性时
// 两个对象的address属性都会被修改,因为浅拷贝的对象中指向的是同一个地址
// console.log(person)

// 解决方案: 解决浅拷贝问题,将拷贝的对象的属性"再进行属性展开"
const updated = {
  ...person,
  name: 'Jane',
  // 将拷贝的对象的属性"再进行属性展开"
  address: {
    ...person.address,
    city: 'ShangHai',
  },
}
console.log(person)
