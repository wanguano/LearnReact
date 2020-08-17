import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      username: '',
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleForm(e)}>
          <label htmlFor="username">用户名:</label>
          <input
            type="text"
            id="username"
            value={this.state.username}
            onChange={e => this.changeText(e)}
          />
          <input type="submit" value="提交" />
        </form>
      </div>
    )
  }

  handleForm(event) {
    event.preventDefault()

    console.log(this.state.username)
  }

  changeText(event) {
    this.setState({
      username: event.target.value,
    })
  }
}
