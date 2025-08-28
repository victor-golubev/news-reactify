import { cloneElement, useRef } from "react";
import styles from "./styles.module.css";

function Slider({ children, step = 100 }) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= step;
  };
  const scrollRight = () => {
    sliderRef.current.scrollLeft += step;
  };

  return (
    <>
      <div className={styles.slider}>
        <button className={styles.arrow} onClick={scrollLeft}>
          {"<"}
        </button>
        {cloneElement(children, { ref: sliderRef })}
        <button className={styles.arrow} onClick={scrollRight}>
          {">"}
        </button>
      </div>
    </>
  );
}

export default Slider;
