import styles from "./styles.module.css";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";

function NewsItem({ item, key }) {
  return (
    <li key={key} className={styles.item}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${item.urlToImage})` }}
      ></div>
      <div className={styles.info}>
        <h3 className={styles.title}>
          <a href={item.url} target="_blank">
            {item.title}
          </a>
        </h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.publishedAt)} by {item.author}
        </p>
      </div>
    </li>
  );
}

export default NewsItem;
