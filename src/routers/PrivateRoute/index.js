import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Methods from '../../utils/utilMethods'
const PrivateRoute = ({ component: TagComponent, ...rest }) => {
  class Authentication extends Component {
    render() {
      let isLogin = this.props.isLogin ? this.props.isLogin : Methods.getStorage('isLogin') ? Methods.getStorage('isLogin') : false
      return (<Route {...rest} render={(props) => (
        isLogin ? <TagComponent {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )} />)
    }
  }
  const AuthenticationContainer = connect(state => ({
    isLogin: state.userLogin.isLogin
  }))(Authentication);
  return <AuthenticationContainer />;
}

export default PrivateRoute