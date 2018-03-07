import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import PrivateRoute from './containers/PrivateRoute';
import Login from './containers/Login';
import Home from './containers/Home';

export default class Routes extends React.Component {
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
