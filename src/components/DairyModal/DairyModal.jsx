import styles from './DairyModal.module.scss';
import { useContextInfo } from 'components/dataContext/dataContext';

const DairyModal = () => {
  const { notAllowedProducts, dailyKcal } = useContextInfo();
  return (
    <>
      <h2 className={styles.title}>Your recommended daily calorie intake is</h2>
      <div className={styles.thumb}>
        <p className={styles.number}>
          <span className={styles.text}>{dailyKcal} kcal</span>
        </p>
        <p className={styles.subtitle}>Foods you should not eat</p>
        <ul className={styles.list}>
          {notAllowedProducts.map(item => (
            <li key={item} className={styles.item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DairyModal;
