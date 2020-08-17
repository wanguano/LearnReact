import React, { PureComponent } from 'react'

import { Comment, Avatar, Tooltip } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

export default class CommentItem extends PureComponent {
  render() {
    const { nickname, picture, dateTime, comment } = this.props.comment
    return (
      <div>
        <Comment
          author={<a href="/#">{nickname}</a>}
          avatar={<Avatar src={picture} alt={nickname}></Avatar>}
          content={<p>{comment}</p>}
          datetime={
            <Tooltip title={dateTime.format('YYYY-MM-DD')}>
              <span>{dateTime.fromNow()}</span>
            </Tooltip>
          }
          actions={[
            <span onClick={e => this.removeComment()}>
              <DeleteOutlined />
              删除
            </span>,
          ]}
        />
      </div>
    )
  }

  removeComment() {
    this.props.removeComment()
  }
}
