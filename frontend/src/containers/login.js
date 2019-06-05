import React from 'react'

import Login from '../components/login/login';

import {
  Button

} from 'reactstrap';

import {
    requestLogin

} from '../redux/actions/auth';

import {connect} from 'react-redux';

import {withRouter, Link} from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
      requestLogin: state.auth.requestLogin,
      isAuthenticated: state.auth.isAuthenticated
    }
  }

const mapDispatchToProps = (dispatch, {history}) => {
    return {
      onLoginHandle: (email, password) => {
        dispatch(
          requestLogin(email, password, history)
            
        )
      }
    }
  }

const ConnectedLogin = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Login));

const LoginView = () => (
  <div> 
    <Link to="/sign-up">
      <Button outline style={{marginBottom:'100px'}}>Sign Up</Button>
    </Link>
   
    <ConnectedLogin />
  </div>
)

export default LoginView;
