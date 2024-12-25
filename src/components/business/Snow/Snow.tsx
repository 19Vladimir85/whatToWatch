import styles from './Snow.module.css';

export const Snow: React.FC = () => {
  const snowflakes = new Array(50).fill(0);
  return (
    <div className={styles['snowflakes-box']}>
      {snowflakes.map((el, i) => (
        <div key={i} className={styles.snowflake}></div>
      ))}
    </div>
  );
};
