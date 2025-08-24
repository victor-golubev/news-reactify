import styles from "./styles.module.css";
import { useEffect, useState, useCallback } from "react";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList";
import { getNews, getCategory } from "../../api/apiNews";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import SearchNews from "../../components/SearchNews/SearchNews";
import { CATEGORIES, PAGE_SIZE } from "../../constants/constants";
import useFetch from "../../helpers/hooks/useFetch";

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
      {!isLoading && (
        <Categories
          categories={CATEGORIES}
          onClick={setCategory}
          currentCategory={category}
        />
      )}

      <NewsBanner
        isLoading={isLoading}
        item={data.articles?.length > 0 ? data.articles[0] : null}
      />

      {!isLoading && <SearchNews category={category} onSearch={setCategory} />}

      {!isLoading && data.articles?.length > 0 && pagination}

      <NewsList isLoading={isLoading} news={data.articles ?? []} />

      {!isLoading && data.articles?.length > 0 && pagination}
    </main>
  );
}

export default Main;
