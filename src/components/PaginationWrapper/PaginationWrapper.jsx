import styles from "./styles.module.css";
import Pagination from "../../components/Pagination/Pagination";

function PaginationWrapper({ top, bottom, children, ...paginationProps }) {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
}

export default PaginationWrapper;
