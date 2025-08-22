import { formateDate } from "../../helpers/formatDate";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>News reactify</h1>
      <p className={styles.date}>{formateDate(new Date())}</p>
    </header>
  );
}

export default Header;
