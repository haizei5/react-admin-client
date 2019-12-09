import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './view/Login'
import Home from './view/Home'
import PrivateRoute from './routers/PrivateRoute'


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    )
  }
}

export default App