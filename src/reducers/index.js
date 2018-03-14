import { combineReducers } from 'redux';
import {
  routerReducer
} from 'react-router-redux';
import auth from './auth';
import users from './users';
import goods from './goods';

export default combineReducers({
  auth,
  users,
  goods,
  router: routerReducer
});
