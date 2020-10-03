import React from 'react'
import ReactDOM from 'react-dom'

// import { StoreContext } from './utils/context'
import { Provider } from 'react-redux'
import store from './store/store'
// import store from './view/store'// 待注释

import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
