import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList";
import { getNews } from "../../api/apiNews";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";

function Main() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const pageSize = 10;

  useEffect(() => {
    const fetchNews = async (currentPage) => {
      try {
        setLoading(true);
        const response = await getNews(currentPage, pageSize);
        console.log(response.articles);
        setNews(response.articles);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > totalPages) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className={styles.main}>
      {loading ? (
        <Skeleton count={1} type={"banner"} />
      ) : news.length > 0 ? (
        <NewsBanner item={news[0]} />
      ) : null}

      {!loading && news.length > 0 && (
        <Pagination
          totalPages={totalPages}
          handlePageClick={handlePageClick}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
          currentPage={currentPage}
        />
      )}

      {loading ? (
        <Skeleton count={10} type={"item"} />
      ) : (
        <NewsList news={news} />
      )}

      {!loading && news.length > 0 && (
        <Pagination
          totalPages={totalPages}
          handlePageClick={handlePageClick}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
          currentPage={currentPage}
        />
      )}
    </main>
  );
}

export default Main;
