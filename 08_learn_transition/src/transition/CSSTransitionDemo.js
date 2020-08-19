import React, { PureComponent } from 'react'

import { CSSTransition } from 'react-transition-group'
import { Card } from 'antd'
const { Meta } = Card

export default class CSSTransitionDemo extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isShow: true,
    }
  }
  render() {
    const { isShow } = this.state
    return (
      <div>
        <button onClick={e => this.setState({ isShow: !isShow })}>
          显示/隐藏
        </button>
          {/* timeout: 是控制添加class或unmountOnExit的时间 */}
        <CSSTransition
          in={this.state.isShow}
          classNames="card"
          timeout={300}
          appear={true}
          unmountOnExit 
          onEnter={el => console.log('开始进入')}
          onEntering={el => console.log('开始进入')}
          onEntered={el => console.log('进入完成')}
          onExit={el => console.log('开始退出')}
          onExiting={el => console.log('正在退出')}
          onExited={el => console.log('退出完成')}
        >
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </CSSTransition>
      </div>
    )
  }
}
