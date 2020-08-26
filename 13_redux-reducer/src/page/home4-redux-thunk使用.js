import React, { PureComponent } from 'react'
import {
  addAction,
  increment,
  changeBannersAction,
  changeRecommendAction,
  getHomeDate,
} from '../store/actionCreators'
// import { connect } from '../utils/connect'
import { connect } from 'react-redux'
// import axios from 'axios'

class Home extends PureComponent {
  componentDidMount() {
    // 发送网络请求:将异步请求的数据保存在redux
    // axios({
    //   url: 'http://123.207.32.32:8000/home/multidata',
    // }).then(value => {
    //   const data = value.data.data
    //   // 通过props来提交dispatch保存data
    //   this.props.changeBanners(data.banner.list)
    //   this.props.changeRecommend(data.recommend.list)
    //   console.log(this.props)
    // })
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
    // dispatch(函数)
    dispatch(getHomeDate)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
