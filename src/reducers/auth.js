import * as Types from '../actions/types';
import { isEmpty } from 'lodash';

const initialState = {
  error: '',
  isAuthenticated: false,
  user: {}
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case Types.SET_CURRENT_USER:
      return {
        ...state,
        error: '',
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      }
    case Types.AUTH_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default: return state
  }
}
