import NewsItem from "../NewsItem/NewsItem";
import styles from "./styles.module.css";
import withSkeleton from "../../helpers/hoc/withSkeleton";

function NewsList({ news }) {
  return (
    <ul className={styles.list}>
      {news.map((item, index) => (
        <NewsItem item={item} key={index} />
      ))}
    </ul>
  );
}

const NewsListWithSkeleton = withSkeleton(NewsList, "item", 10);

export default NewsListWithSkeleton;
