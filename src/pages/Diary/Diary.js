import { useState } from 'react';

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
            <DairyModal/>
          </Modal>
        ) : (
          ''
        )}
      </div>
    </section>
  );
}
