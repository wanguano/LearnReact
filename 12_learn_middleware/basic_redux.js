// redux基本使用
// 核心概念:
//    store: 单一数据源
//    action: 修改state
//    redux: 将action描述的修改和store进行联合

// 1.导入
// node.js -> commonJS
const redux = require('redux')

const initState = { counter: 0 }

// reducer 纯函数:不能修改传递的state
function reducer(state = initState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 }
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 }
    case 'ADD_COUNTER':
      return { ...state, counter: state.counter + action.num }
    case 'SUB_COUNTER':
      return { ...state, counter: state.counter - action.num }
    default:
      return state
  }
}

// store 参数放一个reducer
const store = redux.createStore(reducer)

// action
const action1 = { type: 'INCREMENT' }
const action2 = { type: 'DECREMENT' }
const action3 = { type: 'ADD_COUNTER', num: 2 }
const action4 = { type: 'SUB_COUNTER', num: 12 }

// 订阅store的修改
store.subscribe(() => {
  console.log('state发生了改变: ', store.getState().counter)
})

// 派发action
store.dispatch(action1)
store.dispatch(action2)
store.dispatch(action3)
store.dispatch(action4)
