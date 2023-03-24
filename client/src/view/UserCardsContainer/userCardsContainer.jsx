import React from "react";
import styles from "../../components/CardsContainer/CardsContainer.module.css";

const userCardsContainer = ({ name, image, surname }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                    <img className={styles.image} src={image}/>
                        <div className={styles.containerData}>
                            <h3 className={styles.name}>{name}</h3>
                            <h4 className={styles.rating}>Surname: {surname}</h4>
                        </div>
                </div>
            </div>
        </div> );
};
export default userCardsContainer;



