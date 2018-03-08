import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from './containers/PrivateRoute';
import Login from './containers/Login';
import Home from './containers/Home';
import * as storage from './utils/storage';
import {
  USER_ID,
  TOKEN
} from './constants';
import {
  setCurrentUser
} from './actions'

@connect(
  state => {
    return {
      isAuthenticated: state.auth.isAuthenticated
    }
  },
  dispatch => ({
    setCurrentUser: (user) => {
      return dispatch(setCurrentUser(user))
    }
  })
)
export default class Routes extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    setCurrentUser: PropTypes.func.isRequired
  }

  componentWillMount() {
    const userId = storage.getStorage(USER_ID)
    const token = storage.getStorage(TOKEN)

    if (userId && token) {
      this.props.setCurrentUser({
        userId,
        token
      })
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/signin" component={Login}/>
          <PrivateRoute exract component={Home}/>
        </Switch>
      </Router>
    )
  }
}
