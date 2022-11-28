import styles from './DairyModal.module.scss';

const DairyModal = () => (
  <>
    <h2 className={styles.title}>Your recommended daily calorie intake is</h2>
    <div className={styles.thumb}>
      <p className={styles.number}>
        <span className={styles.text}>kcal</span>
      </p>
      <p className={styles.subtitle}>Foods you should not eat</p>
      <ol className={styles.list}>
        <li className={styles.item}></li>
      </ol>
    </div>
  </>
);

export default DairyModal;
