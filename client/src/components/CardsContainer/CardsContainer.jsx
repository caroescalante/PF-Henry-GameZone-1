import React from "react";
import styles from "./CardsContainer.module.css";
import {Link} from 'react-router-dom';
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const CardsContainer = ({ name, image, rating,id }) => {
return (
<Link to={"/game/" + id} >
<div className={styles.card}>
<div className={styles.cardInner}>
<div className={styles.cardFront}>
<img className={styles.image} src={image}/>
<div className={styles.containerData}>
<h3 className={styles.name}>{name}</h3>
<h4 className={styles.rating}>Rating: {rating}</h4>
</div>
</div>
<div className={styles.cardBack}>
<p className={styles.more}>Click here for more details</p> 
</div>
</div>
</div>
</Link>
);
};
export default CardsContainer;
