import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList";
import { getNews } from "../../api/apiNews";

function Main() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        console.log(response.articles);
        setNews(response.articles);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {loading ? (
        "Loading..."
      ) : news.length > 0 ? (
        <NewsBanner item={news[0]} />
      ) : null}
      <NewsList news={news} />
    </main>
  );
}

export default Main;
