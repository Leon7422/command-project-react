import { useState } from 'react';

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
      <Modal toggleModal={toggleModal} isOpen={isModalOpened} />
    </div>
  );
}
