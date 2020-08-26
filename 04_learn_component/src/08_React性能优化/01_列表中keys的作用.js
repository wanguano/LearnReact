import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: ['星际穿越', '大话西游', '盗梦空间']
    }
  }
  render() {
    return (
      <div>
        <h2>电影列表</h2>
        <ul>
          {
          this.state.movies.map((item, index) => {
            return <li key={item}>{item}</li>
          })
          }
        </ul>
        <button onClick={e => this.insertMovie()}>添加电影</button>
      </div>
    )
  }

  insertMovie() {
    // 1.如果你是在最后填添加一个元素,React在进行diff差异同层级对比时,不会有任何问题
    // this.setState({
    //   movies: [...this.state.movies, '中国机长']
    // })
    // 2.但是你如果是在最前面添加一个元素,React在进行diff差异同层级对比时,会将进行全部替换,而不是复用,这个时候需要用到key
    this.setState({
      movies: ['中国机长', ...this.state.movies]
    })
  }
}
