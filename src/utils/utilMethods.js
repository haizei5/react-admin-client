// 公共方法
import store from 'store'

const Methods = {
  setStorage(key, params) {
    store.set(key, params)
  },
  getStorage(key) {
    return store.get(key)
  },
  removeStorage(key) {
    store.remove(key)
  }
}


export default Methods