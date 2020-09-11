import React, { PureComponent } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { Input } from 'antd'
import { Button } from 'antd'
import { Card } from 'antd'
import './style.css'
export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      todoList: ['待办清单1-Hook'],
      value: '',
    }
  }
  render() {
    return (
      <div className="todo">
        <Input
          placeholder="Todo List"
          style={{ width: '35%' }}
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
        />
        <Button type="default" onClick={e => this.addTodo()}>
          提交
        </Button>
        <Card title="Todo List" style={{ width: 300 }}>
          <TransitionGroup>
            {this.state.todoList.map((item, index) => {
              return (
                <CSSTransition timeout={3000} key={index} classNames="card">
                  <p>{item}</p>
                </CSSTransition>
              )
            })}
          </TransitionGroup>
        </Card>

        <hr />
      </div>
    )
  }

  addTodo() {
    const newTodoList = [...this.state.todoList, this.state.value]
    this.setState({ todoList: newTodoList })
    this.state.value = ''
  }
}
