import * as utils from '../utils';
import {
  ADMIN_ID,
  TOKEN
} from '../constants';
import * as Types from './types';
import authService from '../services/authService';
import userService from '../services/userService';
import {
  setCurrentUser,
  authError,
  signin,
  signout
} from './authAction';
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

function service() {
  return {
    type: Types.SERVICE
  }
}

function serviceSuccess() {
  return {
    type: Types.SERVICE_SUCCESS
  }
}

function serviceFailure(errorMessage) {
  return {
    type: Types.SERVICE_FAILURE,
    payload: errorMessage
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
  service,
  serviceSuccess,
  serviceFailure,
  setCurrentUser,
  signin,
  signout,
  authError,
  fetchUsers,
  loadGoods,
  fetchGoods,
  receiveGoods,
  createGood,
  addGood,
  fetchCategories,
}
