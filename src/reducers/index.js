import { combineReducers } from 'redux';
import {
  routerReducer
} from 'react-router-redux';
import auth from './auth';
import users from './users';
import goods from './goods';
import categories from './categories';
import service from './service';

export default combineReducers({
  auth,
  users,
  goods,
  categories,
  service,
  router: routerReducer
});
