import * as Types from '../actions/types';
import isEmpty from 'lodash';

const initialState = {
  isAuthenticated: false,
  user: {}
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case Types.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      }
    default: return state
  }
}