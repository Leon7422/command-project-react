import css from './UserMenu.module.scss';
import operations from 'redux/operations';

export function UserMenu() {
  return (
    <div className={css.UserMenu}>
      <p className={css.paragraph}>NickName</p>
      <button
        type="button"
        className={css.paragraph}
        onClick={operations.logOut}
      >
        Exit
      </button>
    </div>
  );
}
