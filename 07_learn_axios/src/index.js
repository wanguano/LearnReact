import React from 'react'
import ReactDOM from 'react-dom'
// 1.learn axios
// import axios from 'axios'
// import App from './App'

// 2.github search

import App from './github-search/App'

// 7.默认配置
// axios.defaults.baseURL = 'http://httpbin.org'
// axios.defaults.timeout = 3000
// axios.defaults.headers['token'] = 'cjcoiwikjcokcw'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
