import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { AuthNav } from './AuthNav/AuthNav';
import { UserNav } from './UserNav/UserNav';
// import selectors from 'redux/selectors';
import css from './AppBar.module.scss';

export function AppBar() {
  // const isLoggedIn = useSelector(selectors.getIsLoggedIn);

  return (
    <header className={css.header}>
      <section className={`${css['header__container']}`}>
        <div className={`${css['header__wrapper']}`}>
          <div className={css.logo}>
            {/* <Link className={`${css['logo__link']}`}></Link> */}
            <Link
              to="/"
              className={`${css['logo__link--registration']}`}
            ></Link>
          </div>
          <nav className={css.nav}>
            {/* {!isLoggedIn ? <AuthNav /> : <UserNav />} */}
            <AuthNav />
            <UserNav />
          </nav>
        </div>
      </section>
    </header>
  );
}
