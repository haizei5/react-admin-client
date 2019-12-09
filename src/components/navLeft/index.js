import React, { Component } from 'react'


class NavLeft extends Component {
  render() {
    const src = "../../src/assent/images/logo.png"
    return (
      <div>
        <div>
          <img alt="logo" src={src} />
          <span>React Mall</span>
        </div>
      </div>
    )
  }
}

export default NavLeft