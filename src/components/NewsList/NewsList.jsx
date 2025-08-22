import NewsItem from "../NewsItem/NewsItem";
import styles from "./styles.module.css";

function NewsList({ news }) {
  return (
    <ul className={styles.list}>
      {news.map((item, i) => (
        <NewsItem item={item} key={i} />
      ))}
    </ul>
  );
}

export default NewsList;
