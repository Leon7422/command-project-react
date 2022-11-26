import styles from './Summary.module.scss';
import { useContextInfo } from 'components/dateContext/dateContext';

const Summary = () => {
  const { productListInfo } = useContextInfo();
  const summary = productListInfo?.payload?.daySummary;
  return (
    <div className={styles.summaryContainer}>
      <div>
        <h2 className={styles.header}>Summary for {summary?.date || 0}</h2>
        <ul className={styles.listInfo}>
          <li className={styles.listItem}>
            <span>Left</span>
            <span>{summary?.kcalLeft || 0} kcal</span>
          </li>
          <li className={styles.listItem}>
            <span>Consumed</span>
            <span>{summary?.kcalConsumed || 0} kcal</span>
          </li>
          <li className={styles.listItem}>
            <span>Daily rate</span>
            <span>{summary?.dailyRate || 0} kcal</span>
          </li>
          <li className={styles.listItem}>
            <span>% of normal</span>
            <span>
              {summary
                ? Math.round((summary.kcalConsumed / summary.dailyRate) * 100)
                : 0}{' '}
              %
            </span>
          </li>
        </ul>
      </div>
      <div>
        <h2 className={styles.header}>Food not recomended</h2>
        <p>
          All broths / decoctions, oily fish, caviar and meat, mushrooms,
          cereals (millet, barley, wheat)
        </p>
      </div>
    </div>
  );
};

export default Summary;
