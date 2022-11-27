import css from './UserMenu.module.scss';
import operations from 'redux/operations';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import selectors from 'redux/selectors';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';

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
      <p className={css.paragraph}>{useSelector(selectors.getUserName)}</p>
      <button type="button" className={css.button} onClick={userLogout}>
        Exit
      </button>
      <BurgerMenu />
    </div>
  );
}
