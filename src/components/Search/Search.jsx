import { useState } from "react";
import styles from "./styles.module.css";

function Search({ category, onSearch }) {
  const [value, setValue] = useState(category);

  const handleSearch = () => {
    onSearch(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(value);
    }
  };

  return (
    <div className={styles.searchWrapper}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter a category"
        className={styles.searchInput}
      />
      <button className={styles.searchButton} onClick={handleSearch}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="16"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z" />
        </svg>
      </button>
    </div>
  );
}

export default Search;
