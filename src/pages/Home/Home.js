import { useState } from 'react';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import Modal from 'components/Modal/Modal';
import css from './Home.module.scss';
import Animation from 'components/Animation/Animation';

export default function Home() {
  let [isModalOpened, setIsModalOpened] = useState(false);
  let [userInfo, setUserInfo] = useState({});

  const toggleModal = () => {
    setIsModalOpened(!isModalOpened);
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.currentTarget;
    setUserInfo({
      height: Number(form.height.value),
      age: Number(form.age.value),
      weight: Number(form.currentWeight.value),
      desiredWeight: Number(form.desiredWeight.value),
      bloodType: Number(form.bloodType.value),
    });
    if (
      form.height.value.length !== 0 &&
      form.age.value.length !== 0 &&
      form.currentWeight.value.length !== 0 &&
      form.desiredWeight.value.length !== 0 &&
      form.bloodType.value.length !== 0
    ) {
      toggleModal();
    }
  };

  return (
    <section className={`${css['home__section']}`}>
      <div className={`container ${css['home__container']}`}>
        <div className={css.content}>
          <DailyCaloriesForm handleSubmit={handleSubmit} />
        </div>
        {isModalOpened ? (
          <Modal
            toggleModal={toggleModal}
            isOpen={isModalOpened}
            fetchInfo={userInfo}
          />
        ) : (
          ''
        )}
        <Animation />
      </div>
    </section>
  );
}
