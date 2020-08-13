import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      friends: [
        { name: 'kobe', age: 18 },
        { name: 'jean', age: 23 },
        { name: 'lisa', age: 28 },
      ],
    }
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.friends.map((item, index) => {
            return (
              <li key={item.name}>
                姓名: {item.name} 年龄: {item.age}
                <button onClick={e => this.incrementAge(index)}>age+1</button>
              </li>
            )
          })}
          <button onClick={e => this.insetDate()}>添加新数据</button>
        </ul>
      </div>
    )
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.friends !== nextState.friends) {
  //     return true
  //   }
  //   return false
  // }

  insetDate() {
    //#region
    // state不可变性: 为什么是不可变性的呢?
    // 1.在开发中不能这么做: 为什么可添加进去数据呢?因为你当前进行的是将state引用地址进行了赋值操作,当你newFriend.push的时候,已经往state进行了修改了,之后再通过state进行重复赋值,之后render渲染了
    // 但是有个问题: 当你做了性能优化时: https://gitee.com/xmkm/cloudPic/raw/master/img/20200813161143.png
    // 记住一点: 不能修改state中的值
    // const newFriend = this.state.friends
    // newFriend.push({ name: 'jack', age: 18 })
    // this.setState({
    //   friends: newFriend,
    // })
    //#endregion
    // 2.在开发中推荐: 将引用地址中的数据,进行浅拷贝一份,新开辟的地址
    // https://gitee.com/xmkm/cloudPic/raw/master/img/20200813162149.png
    const newFriend = [...this.state.friends]
    newFriend.push({ name: 'jack', age: 18 })
    this.setState({
      friends: newFriend,
    })
  }

  incrementAge(index) {
    // 1.开发中不能这么操作
    // this.state.friends[index].age += 1
    // this.setState({
    //   friends: this.state.friends,
    // })
    const newFriend = [...this.state.friends]
    newFriend[index].age += 1
    this.setState({
      friends: newFriend
    })
  }
}
