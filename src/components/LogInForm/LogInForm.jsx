import { useDispatch } from 'react-redux';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { logIn } from 'redux/auth/authOperation';
import { AuthLogInForm } from './LogInForm.styled';

const schema = Yup.object({
  email: Yup.string().email().required('Invalid email'),
  password: Yup.string().min(8).required('Invalid password'),
});
const initialValues = { email: '', password: '' };

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    dispatch(logIn(value));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <AuthLogInForm autoComplete="off">
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
        <button type="submit">LogIn</button>
      </AuthLogInForm>
    </Formik>
  );
};
