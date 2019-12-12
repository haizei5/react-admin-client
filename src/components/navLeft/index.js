import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import CustomMenu from '../customMenu'
import menus from '../../routers/config/config'
import './left.scss'


class NavLeft extends Component {
  render() {
    const src = require('../../assent/images/logo.png')
    return (
      <div id="leftNav">
        <div className="left-title">
          <img alt="logo" src={src} />
          <span>React Mall</span>
        </div>
        <CustomMenu menus={menus} />
      </div>
    )
  }
}

export default NavLeft