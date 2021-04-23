import { setTokenKey, setUsernameKey, logout, router } from '../Type'
// 方法
import {
  setToken,
  setUsername,
  removeToken,
  removeUsername,
} from '@/utils/cookies'

import { Login } from '../../api/account'

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

export function updateRouter(data) {
  return {
    type: router,
    value: data,
  }
}

//登录逻辑
export const accountLoginAction = (data) => (dispatch) => {
  Login(data)
    .then((response) => {
      console.log(response)
      dispatch(updateRouter(111))
    })
    .catch((error) => {})

  console.log(data)
}
