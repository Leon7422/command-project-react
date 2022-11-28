import DiaryAddProductForm from 'components/Diary/DiaryAddProductForm/DiaryAddProductForm';
import DiaryDateCalendar from 'components/Diary/DiaryDateCalendar/DiaryDateCalendar';
import DiaryProductList from 'components/Diary/DiaryProductList/DiaryProductList';
import MobileModal from 'components/Diary/MobileModal/MobileModal';
import Modal from 'components/Modal/Modal';
import Summary from 'components/Summary/Summary';
import { UserNavMob } from 'components/UserNavMob/UserNavMob';
import { useState } from 'react';

import styles from './Calculator.module.scss';

export default function Calculator() {
  let [isModalOpened, setIsModalOpened] = useState(false);

  const toggleModal = () => {
    setIsModalOpened(!isModalOpened);
  };
  return (
    <section className={styles.section}>
      <div className={`${styles['calculator__container']}`}>
        <div className={styles.calendar}>
          <UserNavMob />
          <DiaryDateCalendar />
          <DiaryAddProductForm />
          <DiaryProductList />
          <button
            type="button"
            onClick={() => setIsModalOpened(true)}
            className={styles.buttonPlus}
          ></button>
        </div>
        <Summary />
        <Modal toggleModal={toggleModal} isOpen={isModalOpened}>
          <MobileModal closeModal={setIsModalOpened} />
        </Modal>
      </div>
    </section>
  );
}
