import DiaryAddProductForm from 'components/Diary/DiaryAddProductForm/DiaryAddProductForm';
import DiaryDateCalendar from 'components/Diary/DiaryDateCalendar/DiaryDateCalendar';
import DiaryProductList from 'components/Diary/DiaryProductList/DiaryProductList';

import styles from './Calculator.module.scss';

export default function Calculator() {
  return (
    <div>
      <div className={styles.section}>
        <DiaryDateCalendar />
        <DiaryAddProductForm />
        <DiaryProductList />
      </div>
    </div>
  );
}
