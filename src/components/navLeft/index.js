import React, { Component } from 'react'
import './left.scss'


class NavLeft extends Component {
  render() {
    const src = "assets/images/logo.png"
    return (
      <div id="leftNav">
        <div className="left-title">
          <img alt="logo" src={src} />
          <span>React Mall</span>
        </div>
      </div>
    )
  }
}

export default NavLeft