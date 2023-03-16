import React from "react";
import styles from "./CardsContainer.module.css";
import {Link} from 'react-router-dom';

const CardsContainer = ({ name, image, rating,id }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={image}/>
      <div className={styles.contenido}>
        <h3 className={styles.name}>{name}</h3>
        <h4>{rating}</h4>
          <Link to = {"/game/" + id} className={styles.more}>
            <p className={styles.textbutton}>
            More
            </p>
        </Link>
      </div>
    </div>
  );
};
export default CardsContainer;
