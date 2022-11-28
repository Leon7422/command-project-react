import { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import styles from './LoginForm.module.scss';
import Button from 'components/Button/Button';
import operations from 'redux/operations';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  email: yup
    .string()
    .min(6, '* Mail must be at least 6 characters')
    .required('* Required input field')
    .email('Invalid email address entered...'),
  password: yup
    .string()
    .min(5, '* Your password must be at least 5 characters long')
    .required('* Required input field'),
});

const initialValues = {
  email: '',
  password: '',
};

function LoginForm() {
  const [, setEmail] = useState('');
  const [, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = ({ email, password, resetForm }) => {
    setEmail(email);
    setPassword(password);

    dispatch(operations.login({ email, password }));
    navigate('/diary');

    resetForm({ email: '', password: '' });
  };

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.title__container}>
          <h3 className={styles.title}>Sign in</h3>
        </div>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <Form className={styles.form} autoComplete="off">
            <label className={styles.label}>
              Email *
              <Field
                className={styles.input}
                type="email"
                name="email"
                autoComplete="off"
                required
              />
              <ErrorMessage
                name="email"
                component="p"
                className={styles.error__message}
              />
            </label>

            <label className={styles.label}>
              Password *
              <Field
                className={styles.input}
                type="password"
                name="password"
                autoComplete="off"
                required
              />
              <ErrorMessage
                name="password"
                component="p"
                className={styles.error__message}
              />
            </label>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Button type={'submit'} text={'Login'} />
              </li>
              <li className={styles.item}>
                <a href="./register">
                  <Button
                    type={'button'}
                    text={'Register'}
                    className={'btn-second'}
                  />
                </a>
              </li>
            </ul>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default LoginForm;
