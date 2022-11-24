import styles from './Button.module.scss';

const Button = ({ text, type, openModal }) => {
  return (
    <button type={type} className={styles.btn} onClick={openModal}> 
      {text}
    </button>
  );
};

export default Button;
