import RegisterForm from 'components/RegisterForm/RegisterForm';
import styles from './Register.module.scss';
import Animation from 'components/Animation/Animation';

export default function Register() {
  return (
    <div className={styles.regPage}>
      <div className={`${styles['regPage__container']}`}>
        <RegisterForm />
        <Animation />
      </div>
    </div>
  );
}
