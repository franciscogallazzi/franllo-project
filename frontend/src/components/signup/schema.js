import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
    name: Yup.string()
      .min(1, 'roo short!')
      .max(50, 'too long!')
      .required('required'),
    lastname: Yup.string()
      .min(1, 'roo short!')
      .max(50, 'too long!')
      .required('required'),
    email: Yup.string()
      .email()
      .required('required'),
    password: Yup.string()
      .min(6, 'roo short!')
      .max(50, 'too long!')
      .required('required')
});