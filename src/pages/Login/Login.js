import LoginForm from 'components/LoginForm/LoginForm';
import styles from './Login.module.scss';
import Animation from 'components/Animation/Animation';

export default function Login() {
  return (
    <div className={styles.logPage}>
      <LoginForm />
      <Animation />
    </div>
  );
}
