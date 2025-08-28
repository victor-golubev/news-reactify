import styles from "./styles.module.css";
import BannersList from "../BannersList/BannersList";
import useFetch from "./../../helpers/hooks/useFetch";
import { useCallback } from "react";
import { getNews } from "../../api/apiNews";
import { LATEST_NEWS_PAGE_SIZE } from "../../constants/constants";

function LatestNews({ fetchFunction }) {
  const latestNewsFetch = useCallback(
    () => getNews(1, LATEST_NEWS_PAGE_SIZE),
    []
  );
  const { data, error, isLoading } = useFetch(latestNewsFetch);

  return (
    <section className={styles.section}>
      <BannersList banners={data.articles} isLoading={isLoading} />
    </section>
  );
}

export default LatestNews;
