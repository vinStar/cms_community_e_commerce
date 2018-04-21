import {
  LOAD_ORDERS,
  RECEIVE_ORDERS
} from '../actions/types';

const initialState = {
  isFetchingOrders: false,
  orders: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_ORDERS: {
      return {
        ...state,
        isFetchingOrders: true
      }
    }
    case RECEIVE_ORDERS: {
      return {
        ...state,
        isFetchingOrders: false,
        orders: action.payload
      }
    }
    default:
      return state
  }
}
