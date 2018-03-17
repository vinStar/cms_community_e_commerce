import {
  LOAD_CATEGORIES,
  FINISH_CATEGORIES
} from '../actions/types';

const initialState = {
  categories: [],
  isFetching: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_CATEGORIES:
      console.log(111)
      return {
        ...state,
        isFetching: true
      }
    case FINISH_CATEGORIES:
      console.log(222)
      return {
        ...state,
        isFetching: false,
        categories: action.payload
      }
    default:
      return state
  }
}
