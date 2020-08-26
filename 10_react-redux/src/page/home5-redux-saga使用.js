import React, { PureComponent } from 'react'
import {
  addAction,
  increment,
  changeBannersAction,
  changeRecommendAction,
  fetchHomeData,
} from '../store/actionCreators'
import { connect } from 'react-redux'

class Home extends PureComponent {
  componentDidMount() {
    this.props.getHomeData()
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数: {this.props.counter}</h2>
        <button onClick={() => this.props.increment()}>+1</button>
        <button onClick={() => this.props.addNumber(5)}>+5</button>
        <hr />
      </div>
    )
  }
}

// 定义组件依赖的state和dispatch
const mapStateToProps = state => ({
  counter: state.counter,
})

const mapDispatchToProps = dispatch => ({
  increment() {
    dispatch(increment())
  },
  addNumber(num) {
    dispatch(addAction(num))
  },
  changeBanners(banners) {
    dispatch(changeBannersAction(banners))
  },
  changeRecommend(recommend) {
    dispatch(changeRecommendAction(recommend))
  },
  getHomeData() {
    dispatch(fetchHomeData)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
