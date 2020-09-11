import React, { useState, createContext } from 'react'
// import CounterHook from './02_useState使用/03_useState-补充'
// import ClassCountTitleChange from './03_useEffect使用/01_class实现title的修改'
// import HookCounterTitleChange from './03_useEffect使用/02_useEffect的hook实现'
// import EffectHookCancelDemo from './03_useEffect使用/03_useEffect模拟订阅和取消订阅'
// import MultiEffectHookDemo from './03_useEffect使用/04_多个useEffect一起使用'
import UseContextDemo from './04_useContext使用/useContext使用'
import Home from './05_useReducer使用/home'
import Profile from './05_useReducer使用/profile'
import CallBackHomeDemo from './06_useCallback/01_useCallBack不能进行的性能优化'
import CallBackHomeDemo2 from './06_useCallback/02_useCallbac进行的性能优化'
import MemoHookDemo1 from './07_useMemo使用/01_useMemon复杂计算的应用'
import MemoHookDemo2 from './07_useMemo使用/02_useMenmo传入子组件应用类型'
// import MultiHookState from './02_useState使用/02_复杂状态的修改'
// import CounterClass from './01_体验Hooks/01_counter-class'
// import CounterHook from './01_体验Hooks/02_counter-hook'
// import CounterHook from './01_体验Hooks/03_counter-hook'

export const User = createContext()
export const Theme = createContext()

export default function App() {
  const [show, setShow] = useState(true)
  return (
    <div>
      {/* 1.Hook初体验 */}
      {/* <CounterClass/> */}
      {/* <CounterHook /> */}

      {/* 2.useState使用 */}
      {/* <CounterHook /> */}
      {/* <MultiHookState /> */}

      {/* 3.useEffect使用 */}
      {/* <ClassCountTitleChange /> */}
      {/* <HookCounterTitleChange /> */}
      {/* {show && <EffectHookCancelDemo />} */}
      {/* <MultiEffectHookDemo /> */}

      {/* 4.useContext使用 */}
      {/* <User.Provider value={{ name: 'kobe', age: 18 }}>
        <Theme.Provider value={{ ThemeName: 'blue' }}>
          <UseContextDemo />
        </Theme.Provider>
      </User.Provider> */}

      {/* 5.useReducer使用 */}
      {/* <Home />
      <Profile /> */}

      {/* 6.useCallback使用 */}
      {/* <CallBackHomeDemo /> */}
      {/* <CallBackHomeDemo2 /> */}

      {/* 7.useMemo使用 */}
      {/* <MemoHookDemo1 /> */}
      <MemoHookDemo2 />
      {/* <button onClick={() => setShow(!show)}>切换</button> */}
    </div>
  )
}
