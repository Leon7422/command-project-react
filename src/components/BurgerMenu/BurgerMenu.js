import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import css from './BurgerMenu.module.scss';
import burgerImg from '../../images/baseline-menu-24px.png';

export function BurgerMenu() {
  return (
    <div className={css.burger}>
      <Menu
        noOverlay
        width={'100%'}
        customBurgerIcon={<img src={burgerImg} alt="three lines" />}
      >
        <div className={`burgerLink ${css.links}`}>
          <NavLink to="/diary" className={css.link} id="react-burger-cross-btn">
            DIARY
          </NavLink>
          <NavLink
            to="/calculator"
            className={css.link}
            id="react-burger-cross-btn"
          >
            CALCULATOR
          </NavLink>
        </div>
      </Menu>
    </div>
  );
}
