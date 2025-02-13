import styles from './Chip.module.css';
import cn from 'clsx';

interface IChip {
  title: string;
  checked?: boolean;
  onClick: (item: string, checked: boolean) => void;
  className?: string;
}

export const Chip: React.FC<IChip> = ({
  title,
  checked = false,
  onClick,
  className,
}) => {
  const handleChange = (event) => {
    onClick(title, event.target.checked);
  };

  return (
    <div className={styles.chips}>
      <input
        className={styles.chips__input}
        id={title}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <label
        className={cn(styles.chips__button, { [styles.isChecked]: checked })}
        htmlFor={title}
      >
        {title}
      </label>
    </div>
  );
};
