import { useState } from 'react';
import styles from './Chip.module.css';
import { IChip } from 'types/types';

// export interface IChip {
//   title: string;
//   checked?: boolean;
//   onClick: (item: string, checked: boolean) => void;
// }

export const Chip: React.FC<IChip> = ({ title, checked = false, onClick }) => {
  const [selected, setSelected] = useState(checked);

  const handleChange = (event) => {
    setSelected(event.target.checked);
    onClick(title, event.target.checked);
  };

  return (
    <div className={styles.chips}>
      <input
        id={title}
        type="checkbox"
        checked={selected}
        onChange={handleChange}
      />
      <label htmlFor={title}>{title}</label>
    </div>
  );
};
