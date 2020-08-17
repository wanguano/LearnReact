import React, { PureComponent } from 'react'
import CommentInput from './components/CommentInput'
import CommentItem from './components/CommentItem'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      commentsList: [],
    }
  }
  render() {
    return (
      <div style={{ padding: '15px', width: '500px' }}>
        APP
        {this.state.commentsList.map((item, index) => {
          return (
            <CommentItem
              comment={item}
              key={item.id}
              removeComment={e => this.removeItem(index)}
            />
          )
        })}
        <CommentInput
          submitComment={commentInfo => this.submitComment(commentInfo)}
        />
      </div>
    )
  }

  // 提交评论
  submitComment(commentInfo) {
    this.setState({
      commentsList: [...this.state.commentsList, commentInfo],
    })
  }

  // 移除评论
  removeItem(index) {
    const comment= [...this.state.commentsList]
    comment.splice(index, 1)
    this.setState({
      commentsList: comment
    })
  }
}
