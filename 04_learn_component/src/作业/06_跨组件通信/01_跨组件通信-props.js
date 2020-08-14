import React, { Component } from 'react'
// a -> b -> c
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'jean',
      age: 18,
      height: 1.88,
    }
  }
  render() {
    return (
      <div>
        <Profile {...this.state} />
      </div>
    )
  }
}

function Profile(props) {
  console.log(props)
  return (
    // <ProfileHeader name={props.name} age={props.age} height={props.height} />
    <ProfileHeader {...props} />
  )
}

function ProfileHeader(props) {
  return <h2>{props.name + ' ' + props.age + ' ' + props.height}</h2>
}
