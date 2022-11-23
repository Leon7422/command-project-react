import css from './UserMenu.module.scss';

export function UserMenu() {
  return (
    <div className={css.UserMenu}>
      <p className={css.paragraph}>NickName</p>
      <p className={css.paragraph}>Exit</p>
    </div>
  );
}