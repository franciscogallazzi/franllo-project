import React from 'react';

import { Formik } from 'formik';

import LoginForm from './form';

import { LoginSchema } from './schema';

const initialValues = {
    email: '',
    password: '',
    rememberMe: true
}

class Login extends React.Component {

    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values, { setSubmitting }) {
        this.props.onLoginHandle(values.email, values.password)
    }

    render() {
        
        
        return (
            <Formik
                initialValues={initialValues}
                onSubmit={this.onSubmit}
                validationSchema={LoginSchema}
                component={LoginForm} />
        )
    }
}

export default Login;