import DiaryAddProductForm from 'components/Diary/DiaryAddProductForm/DiaryAddProductForm';
import DiaryDateCalendar from 'components/Diary/DiaryDateCalendar/DiaryDateCalendar';
import DiaryProductList from 'components/Diary/DiaryProductList/DiaryProductList';
import Summary from 'components/Summary/Summary';

import styles from './Calculator.module.scss';

export default function Calculator() {
  return (
    <div className={styles.section}>
      <div className={styles.calendar}>
        <DiaryDateCalendar />
        <DiaryAddProductForm />
        <DiaryProductList />
      </div>
      <Summary />
    </div>
  );
}
