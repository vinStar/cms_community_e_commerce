import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Route,
  Redirect
} from 'react-router-dom';

const PrivateRoute = ({ component: ComposedComponent, ...rest}) => {

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated
    }
  }

  @connect(
    state => {
      return {
        isAuthenticated: state.auth.isAuthenticated
      }
    }
  )
  class Authentication extends React.Component {
    static propTypes = {
      isAuthenticated: PropTypes.bool.isRequired
    }

    handleRender = () => {
      console.log(this.props)
      if(this.props.isAuthenticated) {
        return (
          <ComposedComponent {...this.props} />
        )
      } else {
        return (
          <Redirect
            to={{
              pathname: '/signin',
              state: {
                from: this.props.location,
                message: '请您先登录，谢谢！'
              }
            }}
          />
        )
      }
    }

    render() {
      return (
        <Route {...rest} render={this.handleRender} />
      )
    }
  }

  return <Authentication />
}

export default PrivateRoute
