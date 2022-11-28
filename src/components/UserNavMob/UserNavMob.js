import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import selectors from 'redux/selectors';
import operations from 'redux/operations';
import css from './UserNavMob.module.scss';
import { useEffect, useState } from 'react';

export function UserNavMob() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkHref = location.pathname;
  const [previousPage, setPreviousPage] = useState();

  useEffect(() => {
    if (backLinkHref === '/calculator') {
      setPreviousPage('/diary');
    } else if (backLinkHref === '/diary') {
      setPreviousPage('/calculator');
    }
  }, [backLinkHref]);

  const userLogout = () => {
    dispatch(
      operations.logOut({
        username: { name: null, email: null, password: null },
      })
    );
    navigate('/login');
  };
  return (
    <div className={`${css['user__navigation']}`}>
      <div className={css.btnThumb}>
        <Link to={previousPage} className={css.btnClose} />
      </div>
      <div className={`${css.bar}`}>
        <p className={css.paragraph}>{useSelector(selectors.getUserName)}</p>
        <button type="button" className={css.button} onClick={userLogout}>
          Exit
        </button>
      </div>
    </div>
  );
}
