import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import selectors from 'redux/selectors';
import operations from 'redux/operations';
import css from './UserNavMob.module.scss';

export function UserNavMob() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        {/* <button type="button" className={css.btnClose}></button> */}
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
