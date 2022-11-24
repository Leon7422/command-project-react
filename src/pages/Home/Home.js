import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar } from 'components/AppBar/AppBar';
// import Summary from 'components/Summary/Summary';
import Modal from "components/Modal/Modal";

import css from './Home.module.scss';

export default function Home() {
  let [isModalOpened, setIsModalOpened] = useState(false);

  const toggleModal = () => {
    setIsModalOpened(!isModalOpened);
  }

  return (
    <section className={`${css['home__section']}`}>
      {/* <button type='button' onClick={toggleModal}>Open modal</button> */}
      <div className={`container ${css['home__container']}`}>
        <AppBar />
        <div className={css.content}>
          <Outlet />
          {/* <Summary /> */}
        </div>
        <Modal toggleModal={toggleModal} isOpen={isModalOpened}/>
      </div>
    </section>
  )
}
