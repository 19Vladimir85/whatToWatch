import { IPerson } from 'types/types';
import styles from './PersonList.module.css';
import { wordDeclination } from '../../../utils/wordDeclination';

interface IPersonList {
  title: string;
  showPersonsCount: number;
  filmId?: number;
  personList: IPerson[];
}

export const PersonList: React.FC<IPersonList> = ({
  title,
  showPersonsCount,
  filmId,
  personList,
}) => {
  return (
    <div className={styles.list}>
      <div className={styles.title}>{title}</div>
      <div className={styles.personList}>
        {personList.slice(0, showPersonsCount).map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
      <div className={styles.personAmount}>{`${
        personList.length
      } ${wordDeclination(personList.length, [
        'актер',
        'актера',
        'актеров',
      ])}`}</div>
    </div>
  );
};
