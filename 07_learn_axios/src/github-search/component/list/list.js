import React, { PureComponent } from 'react'
import Item from './childComp/item'
export default class List extends PureComponent {
  render() {
    return (
      <div classNameName="row">
        <Item />
        <Item />
        <Item />
      </div>
    )
  }
}
