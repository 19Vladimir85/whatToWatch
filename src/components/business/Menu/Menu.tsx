import styles from './Menu.module.css';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

interface IMenuItem {
  name: string;
  url: string;
}

const items: IMenuItem[] = [
  { name: 'Главная', url: '/' },
  { name: 'Фильмы', url: '/movie' },
  { name: 'Случайный фильм', url: '/movie/random' },
  { name: 'Любимые фильмы', url: '/favorite' },
];

export function Menu() {
  const isChecked = useSelector(
    (state: RootState) => state.themeReducer.isChecked
  );

  return (
    <div className={styles.menu}>
      <img className={styles.icon} src="images/logo.png" alt="logo" />
      <nav className={styles.menu_list}>
        {items.map((el: IMenuItem) => (
          <li key={el.name} className={styles.menu_item}>
            <NavLink
              to={el.url}
              className={({ isActive }) =>
                classNames(styles.text, isChecked ? 'light' : 'dark', {
                  [styles.isActive]: isActive,
                })
              }
            >
              {el.name}
            </NavLink>
          </li>
        ))}
      </nav>
    </div>
  );
}
