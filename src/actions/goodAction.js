import utils from '../utils';
import {
  LOAD_GOODS,
  RECEIVE_GOODS,
  CREATE_GOOD,
  CREATE_SUCCESS
} from './types';
import { authError } from './index';
import goodService from '../services/goodService';

function loadGoods() {
  return {
    type: LOAD_GOODS
  }
}

function receiveGoods(goods) {
  return {
    type: RECEIVE_GOODS,
    goods
  }
}

function createGood() {
  return {
    type: CREATE_GOOD
  }
}

function fetchGoods(adminId, token, pageNum) {
  return async (dispatch) => {
    try {
      dispatch(loadGoods())
      const res = await goodService.all(adminId, token, pageNum)
      return dispatch(receiveGoods(res.data.data))
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

function addGood(good) {
  return async (dispatch) => {
    try {
      console.log(good)
    } catch (err) {

    }
  }
}

export {
  loadGoods,
  receiveGoods,
  fetchGoods,
  createGood,
  addGood
}
