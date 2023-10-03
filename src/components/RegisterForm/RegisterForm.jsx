import { useDispatch } from 'react-redux';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { register } from 'redux/auth/authOperation';
import { AuthRegisterForm } from './RegisterForm.styled';

const schema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Invalid name'),
  email: Yup.string().email().required('Invalid email'),
  password: Yup.string().min(8).required('Invalid password'),
});

const initialValues = { name: '', email: '', password: '' };

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    dispatch(register(value));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <AuthRegisterForm autoComplete="off">
        <label>
          <p>Name</p>
          <Field type="text" name="name" placeholder="First and last name" />
          <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
        </label>
        <label>
          <p> Email</p>
          <Field type="email" name="email" placeholder="Your email" />
          <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
        </label>
        <label>
          <p> Password</p>
          <Field type="password" name="password" placeholder="Your password" />
          <ErrorMessage
            name="password"
            component="div"
            style={{ color: 'red' }}
          />
        </label>
        <button type="submit">Sign up</button>
      </AuthRegisterForm>
    </Formik>
  );
};
