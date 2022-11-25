import { AppBar } from 'components/AppBar/AppBar';
import DiaryAddProductForm from 'components/Diary/DiaryAddProductForm/DiaryAddProductForm';
import DiaryDateCalendar from 'components/Diary/DiaryDateCalendar/DiaryDateCalendar';
import DiaryProductList from 'components/Diary/DiaryProductList/DiaryProductList';
import Summary from 'components/Summary/Summary';
import { useState } from 'react';

import styles from './Calculator.module.scss';

export default function Calculator() {
  const [selected, setSelected] = useState(new Date());

  return (
    <div>
      <AppBar />
      <div className={styles.section}>
        <DiaryDateCalendar selected={selected} setSelected={setSelected} />
        <DiaryAddProductForm />
        <DiaryProductList />
      </div>
      <Summary />
    </div>
  );
}
