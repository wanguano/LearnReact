import React, { PureComponent } from 'react'

import { Input, Button } from 'antd'
import moment from 'moment'

export default class CommentInput extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      comment: '',
    }
  }
  render() {
    return (
      <div>
        <Input.TextArea
          value={this.state.comment}
          onChange={e => this.handleChange(e)}
        />
        <Button onClick={e => this.addComment()}>提交</Button>
      </div>
    )
  }
  // 处理表单更改
  handleChange(event) {
    this.setState({
      comment: event.target.value,
    })
  }

  // 添加评论
  addComment() {
    // 定义评论信息
    const commentInfo = {
      id: moment().valueOf(),
      picture: 'https://s1.ax1x.com/2020/05/07/Ymn0sS.png',
      nickname: 'jane',
      dateTime: moment(),
      comment: this.state.comment,
    }

    // 调用父组件方法
    this.props.submitComment(commentInfo)

    // 清空文本
    this.setState({
      comment: '',
    })
  }
}
