import React from "react";
import styles from "./CardsContainer.module.css";
import { useDispatch } from "react-redux";
import { addToCart, addFavorites } from '../../redux/actions/index.js'
import { Link } from "react-router-dom";


const CardsContainer = ({ name, image, price, id }) => {
  const dispatch = useDispatch(); 
  

  const handleAddToCart = () => {
    dispatch(addToCart(id)); // llamar a la acción para agregar al carrito y pasarle el id del juego
  }

  const handleAddFavorite = () => {
    dispatch(addFavorites(id));
  };

return (


  <div className={styles.card}>
    <div className={styles.cardInner}>
      
      <div className={styles.cardFront}>
        <img className={styles.image} src={image}/>
        <div className={styles.containerData}>
          <h3 className={styles.name}>{name}</h3>
          <h4 className={styles.rating}>${price.toLocaleString('es-ES')}</h4>
          
          
        
        </div>
        
      </div>
      <div className={styles.cardBack}>
        <Link to={`game/${id}`} className={styles.more}>Click here for more details</Link>
      <div className={styles.buttomContainer}>  
        <button   onClick={handleAddToCart} className={styles.buttomAddCart}>Add to Cart</button>
        {/* <button className={styles.heart}></button> */}
        <button className={styles.buttomAddFavorites} onClick={handleAddFavorite}>Add to Favorites</button>
      </div>
      </div>

    </div>
   </div>


);
};
export default CardsContainer;
