import React from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const SignUpForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
    /* and other goodies */
  }) => (
    <Form id="sign-up" style={{ width: '100%' }} onSubmit={handleSubmit} noValidate autoComplete={"off"}>

        <FormGroup>
            <Label for="name">Name</Label>
            <Input 
                id="name"
                type="text" 
                name="name" 
                placeholder="" 
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete={"off"}/>
            {errors.name && touched.name && (<small className="form-text text-danger" >{errors.name}</small>)}
        </FormGroup>

        <FormGroup>
            <Label for="lastname">Last Name</Label>
            <Input
                id="lastname"
                type="text" 
                name="lastname" 
                placeholder="" 
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete={"off"}/>
            {errors.lastname && touched.lastname && (<small className="form-text text-danger" >{errors.lastname}</small>)}
        </FormGroup>

        <FormGroup>
            <Label for="email">Email</Label>
            <Input 
                id="email"
                type="email" 
                name="email" 
                placeholder="" 
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete={"off"}/>
            {errors.email && touched.email && (<small className="form-text text-danger" >{errors.email}</small>)}
        </FormGroup>

        <FormGroup>
            <Label for="password">Password</Label>
            <Input 
                id="password"
                type="password" 
                name="password" 
                placeholder="" 
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete={"new-password"}/>
            {errors.password && touched.password && (<small className="form-text text-danger" >{errors.password}</small>)}
        </FormGroup>

        <Button type="submit" size="md" style={{ width: '100%' }} >Sign Up</Button>

    </Form>
)

export default SignUpForm;