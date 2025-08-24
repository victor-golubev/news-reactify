import styles from "./styles.module.css";
import { useEffect, useRef } from "react";

function Categories({ categories, onClick, currentCategory }) {
  const categoriesRef = useRef(null);

  useEffect(() => {
    const container = categoriesRef.current;

    const handleScroll = (event) => {
      event.preventDefault();
      container.scrollLeft += event.deltaY;
    };

    container.addEventListener("wheel", handleScroll);

    return () => container.removeEventListener("wheel", handleScroll);
  }, []);

  const handleClick = (category) => {
    if (category === "All") {
      onClick("");
    } else {
      onClick(category);
    }
  };

  return (
    <ul className={styles.categories} ref={categoriesRef}>
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

export default Categories;
