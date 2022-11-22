import { useState } from 'react';

import styles from './LoginForm.module.scss';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .min(6, 'Пошта має бути не менше 6 символів')
    .required("Обов'язкове поле")
    .email('Введено некоректно адресу ел.пошти'),
  password: yup
    .string()
    .min(5, 'Пароль має бути не менше 5 символів')
    .required("Обов'язкове поле"),
});

const initialValues = {
  email: '',
  password: '',
};

function LoginForm() {
  const [, setEmail] = useState('');
  const [, setPassword] = useState('');

  const handleSubmit = ({ email, password, resetForm }) => {
    setEmail(email);
    setPassword(password);

    resetForm({ email: '', password: '' });
  };

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.title__container}>
          <h3 className={styles.title}>Вхід</h3>
        </div>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <Form className={styles.form} autoComplete="off">
            <label className={styles.label}>
              Пошта *
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
              Пароль *
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
                <button type="submit" className={styles.button}>
                  Вхід
                </button>
              </li>
              <li className={styles.item}>
                <a href="./register">
                  <button type="button" className={styles.button__second}>
                    Реєстрація
                  </button>
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
