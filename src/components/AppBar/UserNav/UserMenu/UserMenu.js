import css from './UserMenu.module.scss';
import operations from 'redux/operations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function UserMenu() {
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
    <div className={css.UserMenu}>
      <p className={css.paragraph}>NickName</p>
      <button type="button" className={css.paragraph} onClick={userLogout}>
        Exit
      </button>
    </div>
  );
}
