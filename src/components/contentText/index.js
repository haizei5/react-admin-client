import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import PrivateRoute from '../../routers/PrivateRoute'
import Manager from '../../view/Manager'
import Classification from '../../view/Classification'
import './content.scss'

class ContentText extends React.Component {
  render() {
    return (
      <div className="context">
        <Switch>
          <PrivateRoute exact path="/home" component={Manager} />
          <PrivateRoute exact path="/home/general" component={Classification} />
          <Redirect exact from='/' to='/home' />
        </Switch>
      </div>
    )
  }
}

export default ContentText