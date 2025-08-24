import styles from "./styles.module.css";
import { useEffect, useState, useCallback } from "react";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList";
import { getNews, getCategory } from "../../api/apiNews";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import useFetch from "../../helpers/hooks/useFetch";
import LatestNews from "../../components/LatestNews/LatestNews";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";
import { PAGE_SIZE } from "../../constants/constants";

function Main() {
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  const fetchFunction = useCallback(() => {
    return category
      ? getCategory(category, currentPage, PAGE_SIZE)
      : getNews(currentPage, PAGE_SIZE);
  }, [category, currentPage]);

  const { data, error, isLoading } = useFetch(fetchFunction);

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
      <LatestNews isLoading={isLoading} banners={data.articles} />

      <NewsByFilters
        isLoading={isLoading}
        data={data}
        category={category}
        setCategory={setCategory}
        pagination={pagination}
      />
    </main>
  );
}

export default Main;
