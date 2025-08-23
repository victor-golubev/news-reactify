import styles from "./styles.module.css";

function Skeleton({ count = 1, type = "banner" }) {
  const items = Array(count)
    .fill()
    .map((_, index) => (
      <li
        key={index}
        className={type === "banner" ? styles.banner : styles.item}
      ></li>
    ));

  return <ul className={count > 1 ? styles.list : ""}>{items}</ul>;
}

export default Skeleton;
