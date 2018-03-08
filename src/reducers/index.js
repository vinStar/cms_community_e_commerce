import { combineReducers } from 'redux';
import {
  routerReducer
} from 'react-router-redux';
import auth from './auth';
import page from './page';

export default combineReducers({
  auth,
  page,
  router: routerReducer
});
