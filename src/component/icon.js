import styles from "./icon.module.css";
export default function Icon({ name, cls, onClick }) {
  let iconPath = `/images/icons.svg#${name}`;
  const classNames = cls
    ? `${styles.icon__element} ${cls}`
    : `${styles.icon__element}`;

  return (
    <span id={name} className={styles.icon} onClick={onClick}>
      <svg className={classNames}>
        <use xlinkHref={iconPath}></use>
      </svg>
    </span>
  );
}
