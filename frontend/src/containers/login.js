import Login from '../components/login/login';

import {
    requestLogin

} from '../redux/actions/auth';

import {connect} from 'react-redux';

import {withRouter} from 'react-router-dom'

const mapStateToProps = (state) => {
    console.log("State", state);
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

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login))