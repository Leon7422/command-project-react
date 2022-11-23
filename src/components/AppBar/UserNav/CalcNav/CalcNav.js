import { NavLink } from 'react-router-dom';
import css from './CalcNav.module.scss';

export function CalcNav() {
  return (
    <div className={css.CalcNav}>
      <NavLink to="/diary" className={`${css['CalcNav-link']}`}>
        DIARY
      </NavLink>
      <NavLink to="/calculator" className={`${css['CalcNav-link']}`}>
        CALCULATOR
      </NavLink>
    </div>
  );
}