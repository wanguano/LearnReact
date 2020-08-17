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
      return false
    }
  }

  insetDate() {
    // 不能直接修改state
    //   const newFriend = this.state.friends
    //   newFriend.push({ name: 'jean', age: 18 })
    //   this.setState({
    //     friends: newFriend,
    //   })
    const newFriend = [...this.state.friends]
    newFriend.push({ name: 'jean', age: 18 })
    this.setState({
      friends: newFriend,
    })
  }
}
