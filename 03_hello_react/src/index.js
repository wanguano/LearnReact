// import React from 'react'
import ReactDOM from 'react-dom'
import React from 'react'
// import App from './App'
import App from './AppLearn'

// 为什么需要导入react
//  1.因为babel会将render第一个参数JSX语法转换为: React.createElement
ReactDOM.render(<App />, document.getElementById('root'))
