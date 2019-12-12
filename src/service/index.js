import { Post, Get } from './http'
const baseUrl = "http://localhost:4008";
const apiMethod = {
  //用户登录
  userLogin(params) {
    return Post(`${baseUrl}/react-api/reactDoLogin`, params)
  },
}

export default apiMethod