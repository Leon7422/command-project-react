import styles from './UserBar.module.scss';

const UserBar = () => {
  const check = false;
  return (
    <div className={styles.bar}>
      {!check && <button type="button" className={styles.buttonBack}></button>}
      <div className={styles.userBar}>
        {' '}
        <p className={styles.userName}>USERNAME</p>
        <button className={styles.userBtnExit} type="button">
          Exit
        </button>
      </div>
    </div>
  );
};

export default UserBar;
