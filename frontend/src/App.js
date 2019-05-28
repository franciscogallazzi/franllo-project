import React from 'react';
import './App.css';
import AuthPage from './pages/auth';
import MainPage from './pages/main';
import PrivateRoute from './containers/private-route';

import {verifyToken} from './redux/actions/auth'

import {connect} from 'react-redux'

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    isTokenVerified: state.auth.isTokenVerified
  }
}

const mapDispatchToProps = (dispatch, {history}) => {
  return {
    verifyToken: (userId, token) => {
      dispatch(
        verifyToken(userId, token)
          
      )
    }
  }
}


class App extends React.Component {

  componentDidMount(){
    
    let token = localStorage.getItem("token");
    let userId = localStorage.getItem("userId");

    this.props.verifyToken(userId, token);

  }

  render(){
    if (! this.props.isTokenVerified) return null
    return (
      <Router>
        <div>
          <PrivateRoute path="/" exact component={MainPage} />
          <PrivateRoute path="/boards" component={MainPage} />
          <Route path="/login" exact component={AuthPage} />
          <Route path="/sing-up" exact component={AuthPage} />
        </div>
      </Router>
    );
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
