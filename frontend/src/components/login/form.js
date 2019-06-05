import React from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const LoginForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
    /* and other goodies */
  }) => (
    <Form style={{ width: '100%' }} onSubmit={handleSubmit} noValidate>

        <FormGroup>
            <Label for="email">Email</Label>
            <Input 
                type="email" 
                name="email" 
                placeholder="" 
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}/>
            {errors.email && touched.email && (<small className="form-text text-danger" >{errors.email}</small>)}
        </FormGroup>

        <FormGroup>
            <Label for="password">Password</Label>
            <Input 
                type="password" 
                name="password" 
                placeholder="" 
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}/>
            {errors.password && touched.password && (<small className="form-text text-danger" >{errors.password}</small>)}
        </FormGroup>

        <FormGroup check>
            <Label check>
                <Input 
                    type="checkbox"
                    name="rememberMe"
                    checked={values.rememberMe}
                    value={values.rememberMe}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                Remember me
            </Label>
        </FormGroup>

        <br/>

        <Button type="submit" size="md" style={{ width: '100%' }} >Login</Button>
        
        <a href="./#" className="float-right">Forgot Password?</a>

    </Form>
)

export default LoginForm;