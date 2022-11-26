import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import Default from 'components/Summary/Default/Default';
import Summary from 'components/Summary/Summary';
import { AppBar } from 'components/AppBar/AppBar';
// import selectors from 'redux/selectors';
import Modal from 'components/Modal/Modal';
import css from './Home.module.scss';
import Animation from 'components/Animation/Animation';

export default function Home() {
  let [isModalOpened, setIsModalOpened] = useState(false);

  // const isLoggedIn = useSelector(selectors.getIsLoggedIn);

  const isLoggedIn = true;

  const toggleModal = () => {
    setIsModalOpened(!isModalOpened);
  };

  return (
    <section className={`${css['home__section']}`}>
      <div className={`container ${css['home__container']}`}>
        <AppBar />
        <div className={css.content}>
          <Outlet />
          {isLoggedIn ? <Summary /> : <Default />}
        </div>
        <Modal toggleModal={toggleModal} isOpen={isModalOpened} />
        <Animation />
      </div>
    </section>
  );
}
