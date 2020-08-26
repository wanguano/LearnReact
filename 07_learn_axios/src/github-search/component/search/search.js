import React, { PureComponent } from 'react'

export default class Search extends PureComponent {
  render() {
    return (
      <div>
        <input type="text" placeholder="enter the name you search" />
        &nbsp;<button>Search</button>
      </div>
    )
  }
}
