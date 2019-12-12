import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
const { SubMenu } = Menu


class CustomMenu extends Component {
  state = {
    theme: "dark"
  }
  renderMenus = ({ title, icon, key }) => {
    return (
      <Menu.Item key={key}>
        <Link to={key}>
          {icon && <Icon type={icon} />}
          <span>{title}</span>
        </Link>
      </Menu.Item>
    )
  }
  renderSubMenus = ({ title, icon, key, subs }) => {
    return (
      <SubMenu key={key} title={
        <span>
          {icon && <Icon type={icon} />}
          <span>{title}</span>
        </span>
      }>
        {subs && subs.map(item => {
          return item.subs && item.subs.length > 0 ? this.renderSubMenus(item) : this.renderMenus(item)
        })}
      </SubMenu>
    )
  }
  render() {
    console.log(this.props.menus)
    return (
      <Menu
        theme={this.state.theme}
        mode="inline"
      >
        {
          this.props.menus && this.props.menus.map(item => {
            return item.subs && item.subs.length > 0 ? this.renderSubMenus(item) : this.renderMenus(item)
          })
        }
      </Menu>
    )
  }
}


export default CustomMenu