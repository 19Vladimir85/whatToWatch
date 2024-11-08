import cx from 'clsx';
import styles from './Button.module.css';
import { IButton } from 'types/types';

// export interface IButton {
//   className?: string;
//   children: React.ReactNode;
//   onClick?: () => void;
//   icon?: React.ReactElement;
// }
export const Button: React.FC<IButton> = ({
  className = '',
  children,
  onClick,
  icon,
}) => {
  return (
    <div
      tabIndex={0}
      role="button"
      className={cx(styles.button, className)}
      onClick={onClick}
    >
      {icon && <div className={styles.icon}>{icon}</div>}
      {children}
    </div>
  );
};
