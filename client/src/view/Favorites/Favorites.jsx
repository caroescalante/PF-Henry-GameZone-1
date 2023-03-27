import React from "react";
import style from "./Favorites.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../../redux/actions/index";
// import { render } from "react-dom";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Favorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);

    const removeFavHandler = (id) => {
        dispatch(removeFavorite(id));
    };

    return (
        
        <div className={style.background}>
            <div className={style.containerAllCards}>
            {favorites.length ? favorites.map((favorite, index) => {
                return <div className={style.containerCards}>
                        <div className={style.favoriteCard} key={index}>
                         <img src={favorite.image} alt="favorite-image" className={style.favoriteImage} />
                        <h2 className={style.favoriteName}>{favorite.name}</h2>
                        <div className={style.favoriteButton}>
                          <button onClick={() => removeFavHandler(favorite.id)} className={style.trashButton}><i class="fas fa-trash"></i></button>
                        </div>
                        </div>
                </div>          
                  
            }) : <h3 className={style.favoriteEmpty}>No games were added to favorites</h3>}
            </div>  
        </div>
        
    );
};

export default Favorites;