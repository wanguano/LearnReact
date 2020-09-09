import React, { PureComponent } from 'react'

import { Input } from 'antd'
import { Button } from 'antd'
import { Card } from 'antd'
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Input placeholder="Todo List" style={{ width: '35%' }} />
        <Button type="default">提交</Button>
        <Card
          title="Todo List"
          style={{ width: 300 }}
        >
          <p>Todo List</p>
        </Card>
      </div>
    )
  }
}
