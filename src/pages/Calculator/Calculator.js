import DiaryAddProductForm from 'components/Diary/DiaryAddProductForm/DiaryAddProductForm';
import DiaryDateCalendar from 'components/Diary/DiaryDateCalendar/DiaryDateCalendar';
import DiaryProductList from 'components/Diary/DiaryProductList/DiaryProductList';
import Summary from 'components/Summary/Summary';
import { UserNavMob } from 'components/UserNavMob/UserNavMob';

import styles from './Calculator.module.scss';

export default function Calculator() {
  return (
    <section className={styles.section}>
      <div className={`${styles['calculator__container']}`}>
        <div className={styles.calendar}>
          <UserNavMob />
          <DiaryDateCalendar />
          <DiaryAddProductForm />
          <DiaryProductList />
        </div>
        <Summary />
      </div>
    </section>
  );
}
