import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.scss';

export function AuthNav() {
  return (
    <div className={css.AuthNav}>
      <NavLink to="/login" className={`${css['AuthNav-link']}`}>
        SIGN&nbsp;IN
      </NavLink>
      <NavLink to="/register" className={`${css['AuthNav-link']}`}>
        REGISTER
      </NavLink>
    </div>
  );
}