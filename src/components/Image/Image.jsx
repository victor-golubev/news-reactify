import styles from "./styles.module.css";

function Image({ image }) {
  return (
    <div className={styles.wrapper}>
      {image ? <img src={image} alt="news" className={styles.image} /> : null}
    </div>
  );
}

export default Image;
