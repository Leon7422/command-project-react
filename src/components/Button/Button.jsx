import styles from './Button.module.scss'

const Button =  ({text, type}) => {
    return (
        <button type={type} className={styles.btn}>{text}</button>
    );
};

export default Button;