// 使用redux
const redux = require('redux')
// 1.存储中心管理的状态 state
const defaultState = {
  counter: 0,
}

// 2.定义reducer纯函数,不能依赖或修改外部的state
// 传递state和action 更改view中的依赖的state (不能直接修改state)
function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 }
    case 'DECREMENT':
      return { ...state, counter: state.counter + 1 }
    case 'ADD_NUM':
      return { ...state, counter: state.counter + action.num }
    case 'SUB_NUM':
      return { ...state, counter: state.counter - action.num }
    default:
      return state
  }
}

// 3.创建store来进行管理
const store = redux.createStore(reducer)

// 6.订阅state的变化
store.subscribe(() => {
  console.log('发生了变化: ', store.getState())
})

// 4.action通过dispatch来修改state
const incrementAction = () => ({ type: 'INCREMENT' })
const decrementAction = () => ({ type: 'DECREMENT' })
const addNumAction = num => ({ type: 'ADD_NUM', num })
const subNumAction = num => ({ type: 'SUB_NUM', num })

// 5.通过dispatch分派action 传递对象,根据type属性(描述),来修改action,使修改state变得可追踪可控制
store.dispatch(incrementAction())
store.dispatch(decrementAction())
store.dispatch(addNumAction(10))
store.dispatch(subNumAction(5))
