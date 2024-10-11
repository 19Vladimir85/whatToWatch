import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <div className={styles.menu}>
      <img className={styles.icon} src="images/logo.png" alt="logo" />
      <nav className={styles.menu_list}>
        <li className={styles.menu_item}>
        <Link to='/' className={styles.text}>Главная</Link>
        </li>
        <li className={styles.menu_item}>
          <Link to='/movie'>Фильмы</Link>
        </li>
        <li className={styles.menu_item}>
          <a className={styles.text} href="./">
            Сериалы
          </a>
        </li>
        <li className={styles.menu_item}>
          <a className={styles.text} href="./">
            Мультфильмы
          </a>
        </li>
        <li className={styles.menu_item}>
          <a className={styles.text} href="./">
            Избранное
          </a>
        </li>
        <li className={styles.menu_item}>
         <Link to='/movie/random' className={styles.text}>Случайный фильм</Link>
        </li>
      </nav>
    </div>
  );
}
