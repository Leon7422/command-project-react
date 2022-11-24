import { CalcNav } from './CalcNav/CalcNav';
import { UserMenu } from './UserMenu/UserMenu';
import css from './UserNav.module.scss';

export function UserNav() {
  return (
    <div className={css.UserNav}>
      <CalcNav />
      <UserMenu />
    </div>
  );
}