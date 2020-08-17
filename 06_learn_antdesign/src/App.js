import React, { PureComponent } from 'react'

// import className from 'classnames'

import JMButton from './components/recommend/CpnChildren/JMButton'
/* cSpell:disable */
import { Button, DatePicker } from 'antd'

import moment from 'moment'

import { PoweroffOutlined } from '@ant-design/icons'

export default class App extends PureComponent {
  render() {
    const loadings = true
    const monthFormat = 'YYYY/MM/DD'
    return (
      <>
        <JMButton />
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
        <br />
        <Button
          type="primary"
          loading={loadings[0]}
          onClick={() => this.enterLoading(0)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => this.enterLoading(1)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => this.enterLoading(2)}
        />
        <DatePicker
          defaultValue={moment('2015/01', monthFormat)}
          format={monthFormat}
          picker="month"
          allowClear={false}
        />
      </>
    )
  }
}

// export default class App extends PureComponent {
//   constructor(props) {
//     super(props)

//     this.state = {
//       isActive: true,
//     }
//   }
//   render() {
//     const isActive = this.state
//     const isBar = true
//     const warnClass = 'warn'
//     const errorClass = 'error'

//     return (
//       <div>
//         {/* 原生React添加class方法 */}
//         <h2 className="foo bar baz title">我是标题1</h2>
//         <h2 className={'title ' + (isActive ? 'active' : '')}>我是标题2</h2>
//         <h2 className={['title', isActive ? 'active' : ''].join(' ')}>我是标题3</h2>

//         {/* classNames库添加class */}
//         <h2 className="foo bar active title">我是标题4</h2>
//         <h2 className={className('foo', 'bar', 'bgz')}>我是标题5</h2>
//         <h2 className={className({ active: isActive, bar: isBar }, 'title', 'bgz')}>
//           我是标题6
//         </h2>
//         <h2 className={className('foo', 'bgz', warnClass, {active: isActive})}>我是标题7</h2>
//         <h2 className={className(['active', 'title', {'bar': isBar}])}>我是标题8</h2>
//       </div>
//     )
//   }
// }
