import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../redux/operations';

import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import styles from './RegisterForm.module.scss';
import Button from 'components/Button/Button';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, '* The name must be at least 2 characters')

    .required('* Required input field'),
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
  name: '',
  email: '',
  password: '',
};

function RegisterForm() {
  const [, setName] = useState('');
  const [, setEmail] = useState('');
  const [, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    setName(name);
    setEmail(email);
    setPassword(password);

    dispatch(operations.register({ userName: name, email, password }));
    console.log('====================================');
    console.log({ userName: name, email, password });
    console.log('====================================');
    resetForm({ name: '', email: '', password: '' });
  };

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.title__container}>
          <h1 className={styles.title}>Register</h1>
        </div>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <Form className={styles.form} autoComplete="off">
            <label className={styles.label}>
              Name *
              <Field
                className={styles.input}
                type="text"
                name="name"
                autoComplete="off"
                required
              />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error__message}
              />
            </label>

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
                component="div"
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
                component="div"
                className={styles.error__message}
              />
            </label>

            <ul className={styles.list}>
              <li className={styles.item}>
                <a href="./login">
                  <Button type={'button'} text={'Login'} />
                </a>
              </li>
              <li className={styles.item}>
                <Button type={'submit'} text={'Register'} />
              </li>
            </ul>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default RegisterForm;
