import { useState } from 'react';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import Modal from 'components/Modal/Modal';
import DairyModal from 'components/DairyModal/DairyModal';
import css from './Home.module.scss';
import Animation from 'components/Animation/Animation';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  let [isModalOpened, setIsModalOpened] = useState(false);

  const toggleModal = () => {
    setIsModalOpened(!isModalOpened);
  };

  const closeModal = () => {
    setIsModalOpened(!isModalOpened);
    navigate('/register')
  }

  return (
    <section className={`${css['home__section']}`}>
      <div className={`container ${css['home__container']}`}>
        <div className={css.content}>
          <DailyCaloriesForm openModal={toggleModal} />
        </div>
        {isModalOpened ? (
          <Modal toggleModal={toggleModal} isOpen={isModalOpened} >
            <DairyModal toggleModal={closeModal}/>
          </Modal>
        ) : (
          ''
        )}
        <Animation />
      </div>
    </section>
  );
}
