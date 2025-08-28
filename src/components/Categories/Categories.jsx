import styles from "./styles.module.css";
import { forwardRef, useEffect, useRef } from "react";

const Categories = forwardRef(
  ({ categories, onClick, currentCategory }, ref) => {
    const categoriesRef = useRef(null);

    return (
      <ul className={styles.categories} ref={categoriesRef} ref={ref}>
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => handleClick(category)}
              className={
                styles.category +
                " " +
                (category === currentCategory ||
                (currentCategory === "" && category === "All")
                  ? styles.active
                  : "")
              }
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    );
  }
);

export default Categories;
