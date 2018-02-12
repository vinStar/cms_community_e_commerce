import axios from 'axios';
import * as Constants from '../constants';
import utils from '../utils';
import * as Types from './types';

export function setCurrentUser(user) {
  return {
    type: types.SET_CURRENT_USER,
    user
  }
}

export function login(user) {
  return async (dispatch) => {
    const res = await axios.post(`${Constants.API}/tokens`, user)
    const token = res.data.token
    const userId = res.data.userId
    utils.setStorage(Constants.TOKEN, token)
    dispatch(setCurrentAdmin({
      userId,
      token
    }))
  }
}

export function logout() {
  return dispatch => {
    utils.removeStorage(Constants.TOKEN)
    dispatch(setCurrentUser({}))
  }
}
