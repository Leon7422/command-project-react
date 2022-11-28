import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img
          src={require('../../images/loader.gif')}
          width="250"
          alt="loader..."
        />
      </div>
    </div>
  );
};

export default Loader;
