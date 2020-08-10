import React from 'react'
// export default class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       message: 'hello react component',
//       count: 0,
//     }
//   }

//    为什么需要导入 react?
//    因为babel将JSX会转换成 React.createElement 函数时,其中会调用React.createElement
//   render() {
//     return (
//       <div>
//         <h2>{this.state.message}</h2>
//         <div>{this.state.count}</div>
//       </div>
//     )
//   }
// }

/**
 * 函数式组件特点:
 *  1.没有this对象
 *  2.没有内部状态
 */
export default function App() {
  return (
    <div>
      <h2>hello react component</h2>
      <button>+1</button>
    </div>
  )
}
