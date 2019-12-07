import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../src/view/login'
import PrivateRoute from '../src/routers/PrivateRoute'


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/" component={Login} />
      </Switch>
    )
  }
}

export default App