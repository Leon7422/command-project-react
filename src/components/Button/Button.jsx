import styles from './Button.module.scss';

const Button = ({ text, type, openModal, className = 'btn' }) => {
  return (
    <button type={type} className={styles[className]} onClick={openModal}>
      {text}
    </button>
  );
};

export default Button;
