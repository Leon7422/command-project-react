import RegisterForm from 'components/RegisterForm/RegisterForm';
import { AppBar } from 'components/AppBar/AppBar';
import styles from './Register.module.scss';
import Animation from 'components/Animation/Animation';

export default function Register() {
  return (
    <div className={styles.regPage}>
      <AppBar />
      <RegisterForm />
      <Animation />
    </div>
  );
}
