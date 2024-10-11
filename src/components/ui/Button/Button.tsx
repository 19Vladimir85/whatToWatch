import cx from "clsx";
import styles from "./Button.module.css"

interface IButton {
  className?: string;
  children: React.ReactNode;
  onClick?: ()=>void;
  icon?: React.ReactElement;
}
export const Button: React.FC<IButton> = ({ className="", children, onClick, icon }) => {
  return (
    <div className={cx(styles.button, className)} onClick={onClick}>
      {icon && <div className={styles.icon}>{icon}</div>}
      {children}
    </div>
  );
}
