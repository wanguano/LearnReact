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
import RefHookDemo01 from './08_useRef/01_useRef引用DOM'
import RefHookDemo02 from './08_useRef/02_useRef引用其他数据'
import RefHookDemo03 from './08_useRef/03_useRef引用其他数据'
import ForwardDemo from './09_useLmperativeHandle/01_回顾forwardRef的用法'
import ImperativeHandleDemo from './09_useLmperativeHandle/02_useImperativeHandle'
import LayoutEffectCountChange from './10_useLayoutEffect/02_useLayoutEffect的count修改'
import EffectCountChange from './10_useLayoutEffect/02_useLayoutEffect的count修改'
import CustomLiftHookDemo from './11_自定义Hook/01_认识自定义Hook'
import CustomUserHook from './11_自定义Hook/02_自定义Hook练习-Context共享'
import CustomScrollPositionHook from './11_自定义Hook/03_自定义Hooks练习-获取滚动位置'
import CustomLocalStore from './11_自定义Hook/04_自定义Hook练习-localstore'
// import MultiHookState from './02_useState使用/02_复杂状态的修改'
// import CounterClass from './01_体验Hooks/01_counter-class'
// import CounterHook from './01_体验Hooks/02_counter-hook'
// import CounterHook from './01_体验Hooks/03_counter-hook'

export const User = createContext()
export const UserContext = createContext()
export const TokenContext = createContext()
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
      {/* <MemoHookDemo2 /> */}

      {/* 8.useRef */}
      {/* <RefHookDemo01 /> */}
      {/* <RefHookDemo02 /> */}
      {/* <RefHookDemo03 /> */}

      {/* 9.imperative */}
      {/* <ForwardDemo /> */}
      {/* <ImperativeHandleDemo /> */}

      {/* 10.useLayoutEffect */}
      {/* <EffectCountChange /> */}
      {/* <LayoutEffectCountChange /> */}

      {/* 11自定义Hook */}
      {/* {show && <CustomLiftHookDemo />} */}
      {/* <UserContext.Provider value={{ name: 'jane', age: 18 }}>
        <TokenContext.Provider value={'f151c5w15'}>
          <CustomUserHook />
        </TokenContext.Provider>
      </UserContext.Provider> */}
      {/* <CustomScrollPositionHook /> */}
      <CustomLocalStore />
      <button onClick={() => setShow(!show)}>切换</button>
    </div>
  )
}
