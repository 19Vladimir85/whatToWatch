import cx from "clsx";
import styles from "./FieldInfo.module.css"
interface IFieldInfo {
    name: string;
    children: React.ReactNode;
    className?: string; 
}
export const FieldInfo: React.FC<IFieldInfo> = ({name, children, className=""}) => {
    return <div className={cx(styles.field, className)}>
        <div className={styles.field__name}>{name}</div>
        <div className={styles.field__info}>{children}</div>
    </div>
}