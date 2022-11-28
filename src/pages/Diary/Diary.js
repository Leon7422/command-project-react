/* import { useState } from 'react';

import Summary from 'components/Summary/Summary';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import { UserNavMob } from 'components/UserNavMob/UserNavMob';
import Modal from 'components/Modal/Modal';
import DairyModal from 'components/DairyModal/DairyModal';
import css from './Diary.module.scss';

export default function Diary() {
  let [isModalOpened, setIsModalOpened] = useState(false);
  const toggleModal = () => {
    setIsModalOpened(!isModalOpened);
  };

  return (
    <section className={css.diary}>
      <div className={`${css['diary__container']}`}>
        <div className={css.wrapper}>
          <UserNavMob />
        </div>
        <DailyCaloriesForm openModal={toggleModal} />
        <Summary />
        {isModalOpened ? (
          <Modal toggleModal={toggleModal} isOpen={isModalOpened}>
            <DairyModal />
          </Modal>
        ) : (
          ''
        )}
      </div>
    </section>
  );
} */
import DiaryAddProductForm from 'components/Diary/DiaryAddProductForm/DiaryAddProductForm';
import DiaryDateCalendar from 'components/Diary/DiaryDateCalendar/DiaryDateCalendar';
import DiaryProductList from 'components/Diary/DiaryProductList/DiaryProductList';
import MobileModal from 'components/Diary/MobileModal/MobileModal';
import Modal from 'components/Modal/Modal';
import Summary from 'components/Summary/Summary';
import { UserNavMob } from 'components/UserNavMob/UserNavMob';
import { useState } from 'react';

import styles from './Diary.module.scss';

export default function Diary() {
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
