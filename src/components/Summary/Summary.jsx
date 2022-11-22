import styles from './Summary.module.scss';

const Summary = () => {
  return (
    <div className={styles.summaryContainer}>
      <h2 className={styles.header}>Summary for 22.11.2022</h2>
      <ul className={styles.listInfo}>
        <li className={styles.listItem}>
          <span>Left</span>
          <span>000 kcal</span>
        </li>
        <li className={styles.listItem}>
          <span>Consumed</span>
          <span>000 kcal</span>
        </li>
        <li className={styles.listItem}>
          <span>Daily rate</span>
          <span>000 kcal</span>
        </li>
        <li className={styles.listItem}>
          <span>n% of normal</span>
          <span>000 kcal</span>
        </li>
      </ul>
      <h2 className={styles.header}>Food not recomended</h2>
      <p>
        All broths / decoctions, oily fish, caviar and meat, mushrooms, cereals
        (millet, barley, wheat)
      </p>
    </div>
  );
};

export default Summary;
