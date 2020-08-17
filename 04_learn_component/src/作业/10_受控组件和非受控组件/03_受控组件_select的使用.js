import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      fruits: 'banana',
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleForm(e)}>
          <select
            value={this.state.fruits}
            onChange={e => this.handleSelect(e)}
          >
            <option value="apple">苹果</option>
            <option value="orange">橘子</option>
            <option value="banana">香蕉</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    )
  }

  handleForm(event) {
    event.preventDefault()

    console.log(this.state.fruits)
  }

  handleSelect(event) {
    this.setState({
      fruits: event.target.value,
    })
  }
}
