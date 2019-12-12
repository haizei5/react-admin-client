import Axios from 'axios'
import { message } from 'antd';
import { Route, Redirect } from 'react-router-dom'

var toastObj = null
var instance = Axios.create({})//创建axios实例
instance.defaults.timeout = 20000;  //配置全局axios,timeout
instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers.post['Accept'] = 'application/json';
/* 
   提示方法
   禁止点击蒙蔽层，点击2秒后自动关闭 */
const tip = msg => {
  message.error(msg)
}
/** 
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  window.location.href = decodeURI(`${window.location.protocol}//${window.location.host}/login`)
}

/* 请求失败错误统一处理 
   @params {Number} status 请求失败的状态码
*/
const errorStatus = (status, other) => {
  //状态码判断
  switch (status) {
    //401:未登录状态，跳转登录页
    case 401:
      toLogin();
      break;
    //403:token 过期 --清除token并跳转登录页
    case 403:
      tip('登录过期，请重新登录');
      setTimeout(() => {
        toLogin();
      }, 1000);
      break;
    case 404:
      tip('请求资源不存在');
      break;
    case 405:
      tip('请求参数有误');
      break;
    case 500:
      tip('请求失败');
      break;
    default:
      tip('网关超时，服务器请求失败');

  }
}

//request 请求拦截器
instance.interceptors.request.use(
  config => {
    debugger;
    // if (localStorage.getItem("token") != null) {
    //   let vToken = JSON.parse(localStorage.getItem("token")).token;
    //   config.headers['X-Auth-Token'] = vToken;
    // }
    // console.log(this.$store.state.timeObj)
    console.log(config)
    return config
  }, err => {
    return Promise.reject(err)
  }


);

//response 响应拦截器
instance.interceptors.response.use(
  res => {
    if (res.status === 200) {
      return Promise.resolve(res)
    } else {
      return Promise.reject(res)
    }
  }, err => {
    const { response } = err;
    console.log(err);
    if (response) {
      //请求已发出，却不是2xx范围内
      errorStatus(response.status, response.data);
      return Promise.reject(response)
    } else {
      // // 处理断网的情况
      // // eg:请求超时或断网时，更新state的network状态
      // // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      // store.commit('changeNetwork', false);
      tip('网关超时，服务器请求失败')
    }
  }
);

//post请求
export const Post = (url, params) => {
  return new Promise((resolve, reject) => {
    instance.post(url, JSON.stringify(params)).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
//get请求
export const Get = (url, params) => {
  return new Promise((resolve, reject) => {
    instance.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}