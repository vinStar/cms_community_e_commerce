import * as Types from '../actions/types';

const initialState = {
  isLoading: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case Types.IS_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case Types.FINISH_LOADING:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}
