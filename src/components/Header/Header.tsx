import styles from "./Header.module.css";
import { Menu } from "./Menu/Menu";
import { Search } from "../Search/Search";
import { Icon } from "../Icon/Icon";
import { Button } from "components/ui/Button/Button";

export function Header() {
  return (
    <div className={styles.header} >
      <Menu />
      <Search />
        <Button className={styles.header_btn}
        icon={<Icon id="author" className={styles.icon_author}/>}>Войти</Button>
      </div>
  );
}
