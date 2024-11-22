import styles from './Menu.module.css';
import { Link } from 'react-router-dom';

interface IMenuItem {
  name: string;
  url: string;
}

const items: IMenuItem[] = [
  { name: 'Главная', url: '/' },
  { name: 'Фильмы', url: '/movie' },
  { name: 'Случайный фильм', url: '/movie/random' },
];

export function Menu() {
  return (
    <div className={styles.menu}>
      <img className={styles.icon} src="images/logo.png" alt="logo" />
      <nav className={styles.menu_list}>
        {items.map((el: IMenuItem) => (
          <li key={el.name} className={styles.menu_item}>
            <Link to={el.url} className={styles.text}>
              {el.name}
            </Link>
          </li>
        ))}
      </nav>
    </div>
  );
}
