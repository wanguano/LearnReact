import React, { PureComponent } from 'react'

// import axios from 'axios'

import request from './request'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      productList: [],
    }
  }

  async componentDidMount() {
    // 发送网络请求
    // this.setState({
    //   productList: [...this.state.productList, 'res']
    // })

    // 1.发送get请求
    // axios({
    //   method: 'get', // 默认get请求,default -> get
    //   url: 'http://httpbin.org/get',
    //   params: {
    //     name: 'jane',
    //     age: 18,
    //   },
    // })
    //   .then(value => {
    //     console.log(value)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })

    // // 2.发送post请求
    // axios({
    //   method: 'post',
    //   url: 'http://httpbin.org/post',
    //   data: {
    //     name: 'postman',
    //     age: 22,
    //   },
    // }).then(console.log)

    // 3.使用get发送请求
    // axios
    //   .get('http://httpbin.org/get', {
    //     params: {
    //       name: 'jane',
    //       age: 18,
    //       gender: '女',
    //     },
    //   })
    //   .then(console.log)

    // 4.使用post发送请求
    // axios
    //   .post('http://httpbin.org/post', { name: 'post', age: 18 })
    //   .then(console.log)

    // 5.async / await -> try..catch
    // try {
    //   const res = await axios({
    //     url: 'http://httpbin.org/get',
    //     params: { name: 'jane', age: 18 },
    //   })
    //   console.log(res)
    // } catch (error) {
    //   console.log(error)
    // }

    // 6.axios.all
    // const request1 = axios({
    //   url: '/get',
    //   params: { name: 'jane', age: 18 },
    // })

    // const request2 = axios({
    //   url: '/post',
    //   data: { name: 'postman', age: 20 },
    //   method: 'post',
    // })
    // // 只有全部请求成功,才会回调then,本质是promise.all
    // axios.all([request1, request2]).then(([res1, res2]) => {
    //   console.log(res1, res2)
    // })

    // const p1 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(1)
    //   }, 1000)
    // })

    // const p2 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(2)
    //   }, 2000)
    // })

    // Promise.all([p1, p2]).then(([res1, res2]) => {
    //   console.log(res1, res2)
    // })

    // 8.创建新的实例
    // const instance1 = axios.create({
    //   baseURL: "http://coderwhy.xyz",
    //   params: { name: 'jane', age: 18 },
    //   timeout: 5000,
    // })

    // const instance2 = axios.create({
    //   baseURL: "http://baidu.xyz",
    //   timeout: 5000,
    // })

    // 9.请求拦截和响应拦截
    // 请求拦截
    // axios.interceptors.request.use(
    //   config => {
    //     // 1.发送网络请求时,在界面中间显示 loading 组件

    //     // 2.某一些请求必须携带token, 如果没有携带, 那么直接跳转到登录页面

    //     // 3.params/data序列化的操作
    //     console.log('请求被拦截')
    //   },
    //   err => {
    //     console.log(err)
    //   }
    // )

    // // 响应拦截
    // axios.interceptors.response.use(
    //   res => {
    //     return res.data
    //   },
    //   err => {
    //     if (err && err.response) {
    //       switch (err.response.status) {
    //         case 400:
    //           console.log('请求错误')
    //           break
    //         case 401:
    //           console.log('未授权访问')
    //           break
    //         default:
    //           console.log('其他错误信息')
    //       }
    //     }
    //   }
    // )

    // 10.封装请求测试
    request({
      url: '/get',
      params: {
        name: 'why',
        age: 18,
      },
    }).then(console.log)
  }

  render() {
    return <div>App</div>
  }
}
