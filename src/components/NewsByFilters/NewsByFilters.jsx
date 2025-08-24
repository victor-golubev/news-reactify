import styles from "./styles.module.css";
import Categories from "../Categories/Categories";
import NewsList from "../NewsList/NewsList";
import { CATEGORIES } from "../../constants/constants";
import Search from "../Search/Search";

function NewsByFilters({ isLoading, data, category, setCategory, pagination }) {
  return (
    <section className={styles.section}>
      {!isLoading && (
        <Categories
          categories={CATEGORIES}
          onClick={setCategory}
          currentCategory={category}
        />
      )}

      {!isLoading && <Search category={category} onSearch={setCategory} />}

      {!isLoading && data.articles?.length > 0 && pagination}

      <NewsList isLoading={isLoading} news={data.articles ?? []} />

      {!isLoading && data.articles?.length > 0 && pagination}
    </section>
  );
}

export default NewsByFilters;
