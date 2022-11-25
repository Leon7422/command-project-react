import LoginForm from 'components/LoginForm/LoginForm';
import styles from './Login.module.scss';

export default function Login() {
  return (
    <div className={styles.logPage}>
      <LoginForm />
    </div>
  );
}
