import React from "react";
import style from "./Favorites.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../../redux/actions/index";

const Favorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);

    const removeFavHandler = (id) => {
        dispatch(removeFavorite(id));
    };

    return (
        
        <div className={style.background}>
            {favorites.length ? favorites.map((favorite, index) => {
                return <div className={style.favoriteCard} key={index}>
                        <h2 className={style.favoriteName}>{favorite.name}</h2>
                        <img src={favorite.image} alt="favorite-image" className={style.favoriteImage} />
                    <div className={style.favoriteButton}>
                        <button  onClick={() => removeFavHandler(favorite.id)}>Remove</button>
                    </div>
                        </div>
                      
                    
            }) : <h3 className={style.favoriteEmpty}>No games were added to favorites</h3>}
        </div>
        
    );
};

export default Favorites;