import { slide as Menu } from 'react-burger-menu';
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import css from './BurgerMenu.module.scss';
import burgerImg from '../../images/baseline-menu-24px.png';

export function BurgerMenu() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={css.burger}>
      <Menu
        noOverlay
        isOpen={isOpen}
        width={'100%'}
        customBurgerIcon={<img src={burgerImg} alt="three lines" />}
      >
        <div className={`burgerLink ${css.links}`}>
          <NavLink
            to="/diary"
            className={css.link}
            id="react-burger-cross-btn"
            onClick={closeModal}
            state={{ from: location }}
          >
            DIARY
          </NavLink>
          <NavLink
            to="/calculator"
            className={css.link}
            id="react-burger-cross-btn"
            onClick={closeModal}
            state={{ from: location }}
          >
            CALCULATOR
          </NavLink>
        </div>
      </Menu>
    </div>
  );
}
