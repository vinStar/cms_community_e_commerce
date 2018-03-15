import {
  LOAD_GOODS,
  RECEIVE_GOODS,
  CREATE_GOOD,
  CREATE_SUCCESS,
  CREATE_FAILURE,
} from '../actions/types';

const initialState = {
  isFetching: false,
  isUploading: false,
  goods: [],
  message: '',
  pageNum: 1,
  pages: 1,
  total: 1
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_GOODS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_GOODS:
      return {
        ...state,
        isFetching: false,
        goods: action.goods.list,
        pages: action.goods.pages,
        pageNum: action.goods.pageNum,
        total: action.goods.total
      }
    case CREATE_GOOD:
      return {
        ...state,
        isUploading: true
      }
    case CREATE_SUCCESS:
      return {
        ...state,
        isUploading: false
      }
    case CREATE_FAILURE:
      return {
        ...state,
        isUploading: false,
        message: action.message
      }
    default:
      return state
  }
}
