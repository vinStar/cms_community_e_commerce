import utils from '../utils';
import {
  ADMIN_ID,
  TOKEN
} from '../constants';
import * as Types from './types';
import authService from '../services/authService';
import userService from '../services/userService';
import {
  loadGoods,
  receiveGoods,
  fetchGoods,
  createGood,
  addGood
} from './goodAction';
import {
  fetchCategories
} from './categoryAction';

function setCurrentUser(admin) {
  return {
    type: Types.SET_CURRENT_USER,
    admin
  }
}

function authError(error) {
  utils.removeStorage(ADMIN_ID)
  utils.removeStorage(TOKEN)
  return {
    type: Types.AUTH_ERROR,
    payload: error
  }
}

function createSuccess() {
  return {
    type: Types.CREATE_SUCCESS
  }
}

function createFailure() {
  return {
    type: Types.CREATE_FAILURE
  }
}

function fetchToken() {
  return {
    type: Types.FETCH_TOKEN
  }
}

function signin(username, password) {
  return async (dispatch) => {
    try {
      dispatch(fetchToken())

      const res = await authService.post(username, password)

      if (res.status === 201 && res.data.code === 100) {
        const token = res.data.data.token
        const adminId = res.data.data.userId
        console.log(token)
        console.log(adminId)
        console.log(666)

        utils.setStorage(TOKEN, token)
        utils.setStorage(ADMIN_ID, adminId)

        return dispatch(setCurrentUser({
          adminId,
          token
        }))
      }
    } catch (err) {
      if (err.response === undefined) {
        const errorMessage = '服务器错误，请稍后再试'
        return dispatch(authError(errorMessage))
      }

      if (err.response.status === 404 && err.response.data.code === -1001) {
        const errorMessage = err.response.data.message
        return dispatch(authError(errorMessage))
      }
    }
  }
}

function signout() {
  return dispatch => {
    utils.removeStorage(TOKEN)
    dispatch(setCurrentUser({}))
  }
}

function loadUsers() {
  return {
    type: Types.LOAD_USERS
  }
}

function receiveUsers(users) {
  return {
    type: Types.RECEIVE_USERS,
    users
  }
}

function fetchUsers(adminId, token) {
  return async (dispatch) => {
    try {
      dispatch(loadUsers())
      const res = await userService.all(adminId, token)
      return dispatch(receiveUsers(res.data.data))
    } catch (err) {
      if (err.response === undefined) {
        const errorMessage = '服务器错误，请稍后再试'
        return dispatch(authError(errorMessage))
      }
      if (err.response.status === 401) {
        const errorMessage = '您的登录已过期，请重新登录'
        return dispatch(authError(errorMessage))
      }
    }
  }
}


export {
  createSuccess,
  createFailure,
  setCurrentUser,
  fetchToken,
  signin,
  signout,
  authError,
  fetchUsers,
  loadGoods,
  fetchGoods,
  receiveGoods,
  createGood,
  addGood,
  fetchCategories
}
