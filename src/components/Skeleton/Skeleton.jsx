import styles from "./styles.module.css";

function Skeleton({ count = 10, type = "banner", direction = "column" }) {
  const items = Array(count)
    .fill()
    .map((_, index) => (
      <li
        key={index}
        className={type === "banner" ? styles.banner : styles.item}
      ></li>
    ));

  return (
    <ul className={direction === "column" ? styles.columnList : styles.rowList}>
      {items}
    </ul>
  );
}

export default Skeleton;
