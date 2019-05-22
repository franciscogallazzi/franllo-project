import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required('required'),
    password: Yup.string()
      .min(6, 'roo short!')
      .max(50, 'too long!')
      .required('required')
});