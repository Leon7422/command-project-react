import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import css from './BurgerMenu.module.scss';

export function BurgerMenu() {
  const showSettings = event => {
    event.preventDefault();
    this.setState({ areMenusOpen: false });
  };
  return (
    <div className={css.burger}>
      <Menu noOverlay width={768}>
        <div className={css.links}>
          <Link to="/diary" className={css.link} id="react-burger-cross-btn">
            DIARY
          </Link>
          <Link
            to="/calculator"
            className={css.link}
            id="react-burger-cross-btn"
          >
            CALCULATOR
          </Link>
        </div>
      </Menu>
    </div>
  );
}
