import axios from 'axios';
import * as Constants from '../constants';
import utils from '../utils';
import * as Types from './types';

function setCurrentUser(user) {
  return {
    type: Types.SET_CURRENT_USER,
    user
  }
}

function authError(error) {
  return {
    type: Types.AUTH_ERROR,
    payload: error
  }
}

function rememberUser() {
  return {
    type: Types.REMEMBER_USER
  }
}

function unRememberUser() {
  return {
    type: Types.UN_REMEMBER_USER
  }
}

function doLoading() {
  return {
    type: Types.IS_LOADING
  }
}

function finishLoading() {
  return {
    type: Types.FINISH_LOADING
  }
}

function signin(username, password) {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${Constants.API}/tokens`, utils.postData({
        username,
        password
      }))
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
      if (err.response.status === 404 && err.response.data.code === -1001) {
        const errorMessage = err.response.data.message
        return dispatch(authError(errorMessage))
      }
    }
  }
}

function signout() {
  return dispatch => {
    utils.removeStorage(Constants.TOKEN)
    dispatch(setCurrentUser({}))
  }
}

export {
  doLoading,
  finishLoading,
  setCurrentUser,
  signin,
  signout,
  rememberUser,
  unRememberUser,
  authError
}
