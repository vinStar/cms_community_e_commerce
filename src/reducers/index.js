import { combineReducers } from 'redux';
import {
  routerReducer
} from 'react-router-redux';
import auth from './auth';
import page from './page';
import users from './users';

export default combineReducers({
  auth,
  page,
  users,
  router: routerReducer
});
