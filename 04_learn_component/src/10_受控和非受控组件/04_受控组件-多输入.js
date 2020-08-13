import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      valid: '',
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username"> 用户名: </label>
          {/* 受控组件 */}
          <input
            type="text"
            id="username"
            name="username"
            onChange={e => this.handleChange(e)}
            value={this.state.username}
          />
          <br />
          <label htmlFor="password"> 密码: </label>
          {/* 受控组件 */}
          <input
            type="text"
            id="password"
            name="password"
            onChange={e => this.handleChange(e)}
            value={this.state.password}
          />
          <br />
          <label htmlFor="valid"> 验证码: </label>
          {/* 受控组件 */}
          <input
            type="text"
            id="valid"
            name="valid"
            onChange={e => this.handleChange(e)}
            value={this.state.Valid}
          />
          <input type="submit" value="提交" />
        </form>
      </div>
    )
  }

  handleSubmit(event) {
    const { username, valid, password } = this.state
    event.preventDefault()
    console.log(username, valid, password)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  // handleUserName(event) {
  //   this.setState({
  //     username: event.target.value,
  //   })
  // }

  // handlePassword(event) {
  //   this.setState({
  //     password: event.target.value,
  //   })
  // }

  // handleValid(event) {
  //   this.setState({
  //     valid: event.target.value,
  //   })
  // }
}
