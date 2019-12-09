import * as User from './action-types'

//更改用户登录状态
export const saveUserLogin = (userLogin) => {
  return {
    type: User.USERLOGIN,
    userLogin
  }
}

