import React from 'react';

import { Formik } from 'formik';

import SignUpForm from './form';

import { SignUpSchema } from './schema';

import userService from '../../services/user'

const initialValues = {
    name: '',
    lastname: '',
    email: '',
    password: ''
}

class SignUp extends React.Component {

    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values, { setSubmitting }) {
        userService.create(values)
            .then(response => {
                console.log("data", response.data)
            })
            .catch(err => {
                console.log("err", err);
            })
    }

    render() {
        
        
        return (
            <Formik
                initialValues={initialValues}
                onSubmit={this.onSubmit}
                validationSchema={SignUpSchema}
                component={SignUpForm} />
        )
    }
}

export default SignUp;