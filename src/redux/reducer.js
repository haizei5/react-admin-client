import * as User from './action-types'



let defaultState = {
  userLogin: {
    isLogin: false
  }
}


export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case User.USERLOGIN:
      return {
        userLogin: action.userLogin
      }
    default:
      return state
  }
}