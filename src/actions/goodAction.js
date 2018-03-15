import utils from '../utils';
import {
  LOAD_GOODS,
  RECEIVE_GOODS,
  CREATE_GOOD,
} from './types';
import {
  authError,
  createSuccess,
  createFailure
} from './index';
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

function addGood(adminId, token, good) {
  return async (dispatch) => {
    try {
      dispatch(createGood())
      const res = await goodService.create(
        adminId,
        token,
        100000,
        good.goodName,
        good.price,
        good.originalPrice,
        5,
        good.spec,
        good.origin,
        good.image.file
      )
      console.log(res)
      dispatch(createSuccess())
    } catch (err) {
      if (err.response === undefined) {
        const errorMessage = '服务器错误，请稍后再试'
        return dispatch(authError(errorMessage))
      }
      if (err.response.status === 401) {
        const errorMessage = '您的登录已过期，请重新登录'
        return dispatch(authError(errorMessage))
      }
      if (err.response.status === 400) {
        const errorMessage = err.response.data.message
        return dispatch(createFailure(errorMessage))
      }
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
