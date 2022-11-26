import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { AppBar } from 'components/AppBar/AppBar';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import Modal from 'components/Modal/Modal';

import css from './Home.module.scss';

export default function Home() {
  let [isModalOpened, setIsModalOpened] = useState(false);

  const toggleModal = () => {
    setIsModalOpened(!isModalOpened);
  };

  let dailyRate = '';
  let notAllowed = [];
  const response = useSelector(state => state.rate.user);
  //state.rate.user
  console.log(response);

  useEffect(() => {
    dailyRate = response.dailyRate;
    notAllowed = response.notAllowedProducts;
  }, [response]);

  // console.log(dailyRate);
  // console.log(notAllowed);

  return (
    <section className={`${css['home__section']}`}>
      <div className={`container ${css['home__container']}`}>
        <AppBar />
        <div className={css.content}>
          <DailyCaloriesForm openModal={toggleModal} />
          <Outlet />
        </div>
        <Modal toggleModal={toggleModal} isOpen={isModalOpened}
         rate={dailyRate} products={notAllowed}/>
      </div>
    </section>
  );
}
