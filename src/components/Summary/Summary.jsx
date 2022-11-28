import styles from './Summary.module.scss';
import { useContextInfo } from 'components/dataContext/dataContext';

const Summary = () => {
  const { productListInfo, notAllowedProducts } = useContextInfo();
  const summary = productListInfo?.payload?.daySummary;
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();

  today = dd + '-' + mm + '-' + yyyy;

  return (
    <div className={styles.summaryContainer}>
      <div>
        <h2 className={styles.header}>Summary for {summary?.date || today}</h2>
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
      <div className={styles.diet}>
        <h2 className={styles.header}>Food not recomended</h2>
        <ul className={styles.notAllowList}>
          {notAllowedProducts.map(item => (
            <li key={item} className={styles.notAllowItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Summary;
