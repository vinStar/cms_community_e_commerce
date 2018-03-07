import axios from 'axios';
import * as Constants from '../constants';
import utils from '../utils';
import * as Types from './types';

export function setCurrentUser(user) {
  return {
    type: Types.SET_CURRENT_USER,
    user
  }
}

export function authError(error) {
  return {
    type: Types.AUTH_ERROR,
    payload: error
  }
}

export function rememberUser() {
  return {
    type: Types.REMEMBER_USER
  }
}

export function unRememberUser() {
  return {
    type: Types.UN_REMEMBER_USER
  }
}

export function login(username, password) {
  let formData = new FormData()
  formData.append('username', username)
  formData.append('password', password)
  return async (dispatch) => {
      try {
        const res = await axios.post(`${Constants.API}/tokens`, formData)
        if (res.status === 200 && res.data.code === 100) {
          const token = res.data.data.token
          const userId = res.data.data.userId
          utils.setStorage(Constants.TOKEN, token)
          utils.setStorage(Constants.USER_ID, userId)
          return dispatch(setCurrentUser({
            userId,
            token
          }))
        }
      } catch (err) {
        dispatch(authError(err))
      }
  }
}

export function logout() {
  return dispatch => {
    utils.removeStorage(Constants.TOKEN)
    dispatch(setCurrentUser({}))
  }
}
