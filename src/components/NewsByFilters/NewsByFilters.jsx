import styles from "./styles.module.css";
import Categories from "../Categories/Categories";
import NewsList from "../NewsList/NewsList";
import { CATEGORIES } from "../../constants/constants";
import Search from "../Search/Search";
import { useCallback, useState } from "react";
import useFetch from "./../../helpers/hooks/useFetch";
import { getNews, getCategory } from "../../api/apiNews";
import { PAGE_SIZE } from "../../constants/constants";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import Slider from "../Slider/Slider";

function NewsByFilters() {
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

  return (
    <section className={styles.section}>
      {!isLoading && (
        <Slider>
          <Categories
            categories={CATEGORIES}
            onClick={setCategory}
            currentCategory={category}
          />
        </Slider>
      )}

      {!isLoading && <Search category={category} onSearch={setCategory} />}

      <PaginationWrapper
        top
        bottom
        totalPages={totalPages}
        handlePageClick={handlePageClick}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        currentPage={currentPage}
      >
        <NewsList isLoading={isLoading} news={data.articles ?? []} />
      </PaginationWrapper>
    </section>
  );
}

export default NewsByFilters;
