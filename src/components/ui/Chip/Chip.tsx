import { useEffect, useState } from 'react';
import styles from './Chip.module.css';

interface IChip {
  title: string;
  checked?: boolean;
  onClick: (item: string, checked: boolean) => void;
}

export const Chip: React.FC<IChip> = ({ title, checked = false, onClick }) => {
  const [selected, setSelected] = useState(checked);

  useEffect(() => {
    setSelected(checked);
  }, [checked]);

  const handleChange = (event) => {
    setSelected(event.target.checked);
    onClick(title, event.target.checked);
  };

  return (
    <div className={styles.chips}>
      <input
        className={styles.chips__input}
        id={title}
        type="checkbox"
        checked={selected}
        onChange={handleChange}
      />
      <label className={styles.chips__button} htmlFor={title}>
        {title}
      </label>
    </div>
  );
};
