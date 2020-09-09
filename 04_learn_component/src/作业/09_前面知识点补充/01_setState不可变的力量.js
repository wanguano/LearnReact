import React, { PureComponent, Component } from 'react'

export default class App extends Component {
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
          {this.state.friends.map(item => {
            return (
              <li key={item.name}>
                姓名: {item.name} 年龄: {item.age}
              </li>
            )
          })}
          <button onClick={e => this.insetDate()}>添加新数据</button>
        </ul>
      </div>
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.friends !== nextState.friends) {
      return true
    } else {
      console.log(
        '不进行render',
        this.state.friends !== nextState.friends,
        this.state.friends
      )
      return false
    }
  }

  insetDate() {
    // 错误的做法: 不能直接修改state
    // 如果是继承自Component,在进行ShouldComponentUpdate优化时
    // 数据是可以更改但是界面是不会进行渲染的,因为你同步修改了state
    // 在进行对比时,最新的state是相同的,不会进行render
    // const newFriend = this.state.friends
    // newFriend.push({ name: 'jean', age: 18 })
    // this.setState({
    //   friends: newFriend,
    // })
    // 正确的做法: 将state数据源进行浅拷贝
    const newFriend = [...this.state.friends]
    newFriend.push({ name: 'luck', age: 18 })
    this.setState({
      friends: newFriend,
    })
  }
}
