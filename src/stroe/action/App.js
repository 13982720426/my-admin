import { setTokenKey, setUsernameKey, logout, router } from '../Type'
// 方法
import {
  setToken,
  setUsername,
  removeToken,
  removeUsername,
} from '@/utils/cookies'
import { Login } from '../../api/account'
import Router from '../../router'
export function setTokenAction(data) {
  setToken(data)
  return {
    type: setTokenKey,
    value: data,
  }
}

export function setUsernameAction(data) {
  setUsername(data)
  return {
    type: setUsernameKey,
    value: data,
  }
}
export function logoutAction(data) {
  removeToken()
  removeUsername()
  return {
    type: logout,
    value: '',
  }
}
export function updataRouter(data) {
  return {
    type: router,
    value: data,
  }
}

export function hasPermission(role, router) {
  if (router.role && router.role.length > 0) {
    return role.some((elem) => router.role.indexOf(elem) >= 0)
  }
}

//登录逻辑
export const accountLoginAction = (data) => (dispatch) => {
  return Login(data)
    .then((response) => {
      const data = response.data.data
      const role = data.role.split(',')
      //存储路由
      let routerArray = []
      if (role.includes('admin')) {
        routerArray = Router
      } else {
        routerArray = Router.filter((item) => {
          if (this.hasPermission(role, item)) {
            if (item.child && item.child.length > 0) {
              item.child = item.child.filter((child) => {
                if (this.hasPermission(role, child)) {
                  return child
                }
                return false
              })
              return item
            }
            return item
          }
          return false
        })
      }
      dispatch(updataRouter(routerArray))
      dispatch(setTokenAction(data.token))
      dispatch(setUsernameAction(data.username))
    })
    .catch((error) => {})
}
