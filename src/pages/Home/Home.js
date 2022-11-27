import { useState } from 'react';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import Modal from 'components/Modal/Modal';
import css from './Home.module.scss';
import Animation from 'components/Animation/Animation';

export default function Home() {
  let [isModalOpened, setIsModalOpened] = useState(false);

  const toggleModal = () => {
    setIsModalOpened(!isModalOpened);
  };

  return (
    <section className={`${css['home__section']}`}>
      <div className={`container ${css['home__container']}`}>
        <div className={css.content}>
          <DailyCaloriesForm openModal={toggleModal} />
        </div>
        <Modal toggleModal={toggleModal} isOpen={isModalOpened} />
        <Animation />
      </div>
    </section>
  );
}
