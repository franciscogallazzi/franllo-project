import React from 'react';
import Login from '../containers/login';
import SignUp from '../components/signup/signup';

import { Container, Row, Col } from 'reactstrap';

import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";

import {Redirect} from 'react-router-dom'

import { connect } from 'react-redux';



const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated
    }
}

const AuthPage = ({isAuthenticated, location}) => {

    let { from } = location.state || { from: { pathname: "/" } };
    if (isAuthenticated) return <Redirect to={from} />;

    return (<Container fluid={true}>
        <Row>
            <Col
                md="7"
                style={{ backgroundColor: '#393e46', height: "100vh" }}
                className="d-flex justify-content-center align-items-center">
                <img src="/img/logo.png" className="img-fluid" style={{maxHeight:'70%'}} alt="logo"/>
            </Col>
            <Col
                md="5"
                style={{ height: "100vh" }}
                className="d-flex justify-content-center align-items-center">
                <Col xs={11}>

                    <Router>
                        <div>
                            <Route path="/login" component={Login} />
                            <Route path="/sign-up" component={SignUp} />
                        </div>
                    </Router>
                    
                    
                </Col>
            </Col>
        </Row>
    </Container>
)

}
    



export default connect(mapStateToProps)(AuthPage);