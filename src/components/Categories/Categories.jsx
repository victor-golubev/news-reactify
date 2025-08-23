import styles from "./styles.module.css";

function Categories({ categories, onClick, currentCategory }) {
  const handleClick = (category) => {
    if (category === "All") {
      onClick("");
    } else {
      onClick(category);
    }
  };
  return (
    <ul className={styles.categories}>
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
