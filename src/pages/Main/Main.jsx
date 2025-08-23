import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList";
import { getNews, getCategory } from "../../api/apiNews";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";

const categories = [
  "All",
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

function Main() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const pageSize = 10;

  const fetchNews = async (currentPage) => {
    try {
      setLoading(true);
      const response = await getNews(currentPage, pageSize);
      if (response?.articles) {
        setNews(response.articles);
      } else {
        setNews([]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategory = async (category, currentPage) => {
    try {
      setLoading(true);
      const response = await getCategory(category, currentPage, pageSize);
      setNews(response?.articles ?? []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (category) {
      fetchCategory(category);
    } else {
      fetchNews(currentPage);
    }
  }, [category, currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pagination = (
    <Pagination
      totalPages={totalPages}
      handlePageClick={handlePageClick}
      handlePreviousPage={handlePreviousPage}
      handleNextPage={handleNextPage}
      currentPage={currentPage}
    />
  );

  return (
    <main className={styles.main}>
      {!loading && (
        <Categories
          categories={categories}
          onClick={setCategory}
          currentCategory={category}
        />
      )}

      {loading ? (
        <Skeleton count={1} type={"banner"} />
      ) : news.length > 0 ? (
        <NewsBanner item={news[0]} />
      ) : null}

      {!loading && <SearchNews category={category} onSearch={setCategory} />}

      {!loading && news.length > 0 && pagination}

      {loading ? (
        <Skeleton count={10} type={"item"} />
      ) : (
        <NewsList news={news} />
      )}

      {!loading && news.length > 0 && pagination}
    </main>
  );
}

export default Main;
