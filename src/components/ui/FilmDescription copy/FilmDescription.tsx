import styles from './FilmDescription.module.css';
import cx from 'clsx';

export interface IDescription {
  title: string;
  desc: Record<string, string>;
  poster: string;
}

interface IFieldInfo {
  name: string;
  children: React.ReactNode;
  className?: string;
}

const FieldInfo: React.FC<IFieldInfo> = ({
  name,
  children,
  className = '',
}) => {
  return (
    <div className={cx(styles.field, className)}>
      <div className={styles.field__name}>{name}</div>
      <div className={styles.field__info}>{children}</div>
    </div>
  );
};

export const Description: React.FC<IDescription> = ({
  title,
  desc,
  poster,
}) => {
  const noPoster = `${process.env.PUBLIC_URL}/images/noposter.jpg`;
  return (
    <div className={styles.film}>
      <img
        src={poster ? poster : noPoster}
        alt=""
        className={styles.film__poster}
      />
      <div className={styles.film__info}>
        <div className={styles.title}>{title}</div>
        {Object.entries(desc).map(([key, data]) => (
          <FieldInfo key={key} name={key}>
            {data}
          </FieldInfo>
        ))}
      </div>
    </div>
  );
};
