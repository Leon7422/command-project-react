import { useState } from 'react';

import Summary from 'components/Summary/Summary';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import Modal from 'components/Modal/Modal';
import css from './Diary.module.scss';

export default function Diary() {
  let [isModalOpened, setIsModalOpened] = useState(false);

  const toggleModal = () => {
    setIsModalOpened(!isModalOpened);
  };

  return (
    <div className={css.diary}>
      <DailyCaloriesForm openModal={toggleModal} />
      <Summary />
      <Modal toggleModal={toggleModal} isOpen={isModalOpened} />
    </div>
  );
}
