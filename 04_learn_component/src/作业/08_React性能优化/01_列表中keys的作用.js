import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = { movies: [111, 222] }
  }
  render() {
    return (
      <ul>
        {this.state.movies.map((item, index) => {
          return <li key={item}>{item}</li>
        })}
        <button onClick={e => this.addMovie()}>添加电影</button>
      </ul>
    )
  }
  addMovie() {
    this.setState({
      movies: ['333', ...this.state.movies],
    })
  }
}
