// import { NavLink } from 'react-router-dom';
// import { IPerson } from 'types/types';
// import styles from './PersonList.module.css';
// import { wordDeclination } from '../../../utils/wordDeclination';

// interface IPersonList {
//   title: string;
//   showPersonsCount: number;
//   filmId?: number;
//   personList: IPerson[];
// }

// export const PersonList: React.FC<IPersonList> = ({
//   title,
//   showPersonsCount,
//   filmId,
//   personList,
// }) => {
//   return (
//     <div className={styles.list}>
//       <div className={styles.title}>{title}</div>
//       <div className={styles.personList}>
//         {personList.slice(0, showPersonsCount).map((item) => (
//           <div key={item.id}>{item.name}</div>
//         ))}
//       </div>
//       <NavLink to={`/actors?filmId=${filmId}`} className={styles.personAmount}>
//         {`${personList.length} ${wordDeclination(personList.length, [
//           'актер',
//           'актера',
//           'актеров',
//         ])}`}
//       </NavLink>
//     </div>
//   );
// };

import { NavLink } from 'react-router-dom';
import { IPerson } from 'types/types';
import styles from './PersonList.module.css';
import { wordDeclination } from '../../../utils/wordDeclination';

interface IPersonList {
  title: string;
  showPersonsCount: number;
  filmId: string;
  personList: IPerson[];
}

export const PersonList: React.FC<IPersonList> = ({
  title,
  showPersonsCount,
  filmId,
  personList,
}) => {
  console.log(filmId);
  return (
    <div className={styles.list}>
      <div className={styles.title}>{title}</div>
      <div className={styles.personList}>
        {personList.slice(0, showPersonsCount).map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>

      <NavLink
        to={`/actors?filmId=${filmId}`}
        className={styles.personAmount}
        aria-label={`Перейти к списку актёров фильма, в котором ${
          personList.length
        } ${wordDeclination(personList.length, [
          'актер',
          'актера',
          'актеров',
        ])}`}
      >
        {`${personList.length} ${wordDeclination(personList.length, [
          'актер',
          'актера',
          'актеров',
        ])}`}
      </NavLink>
    </div>
  );
};
