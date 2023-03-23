import React from "react";
import styles from "./CardsContainer.module.css";
import {Link} from 'react-router-dom';
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const CardsContainer = ({ name, image, price, id }) => {
return (


  <div className={styles.card}>
    <div className={styles.cardInner}>
      
      <div className={styles.cardFront}>
        <img className={styles.image} src={image}/>
        <div className={styles.containerData}>
          <h3 className={styles.name}>{name}</h3>
          <h4 className={styles.rating}>{price}</h4>
          
          
        
        </div>
        
      </div>
      <div className={styles.cardBack}>
        <Link to={"/game/" + id} className={styles.enlace}>
        <p className={styles.more}>Click here for more details</p>  
        </Link>
        <button className={styles.buttomAddCart}>Add to Cart</button>
        <button className={styles.buttomAddFavorites}>Add to Favorites</button>
      </div>

    </div>
   </div>


);
};
export default CardsContainer;
