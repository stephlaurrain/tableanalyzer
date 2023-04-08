import React from "react";
import styles from "./Carousel.module.scss";
import { useState } from "react";
import left from "../../assets/images/leftcarousel.png";
import right from "../../assets/images/rightcarousel.png";

function LogementPage({ pictures }) {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className={`d-flex ${styles.containerCarousel}`}>
      {length > 1 && (
        <button className={styles.btnleft}>
          <img onClick={prevSlide} src={left} alt="flèche gauche" />
        </button>
      )}
      {length > 1 && (
        <button className={styles.btnright}>
          <img onClick={nextSlide} src={right} alt="flèche droite" />
        </button>
      )}

      {pictures.map((img, index) => {
        return (
          <div key={index}>
            {index === current && (
              <img
                src={img}
                alt="Photos du logement"
                className={styles.slideImage}
              />
            )}
            {index === current && length > 1 && (
              <div className={styles.number}>
                {current + 1}/{length}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default LogementPage;
