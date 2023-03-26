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
        <div>
            {favorites.length ? favorites.map((favorite, index) => {
                return <div key={index}>
                    <h2>{favorite.name}</h2>
                    <img src={favorite.image} alt="favorite-image" className={style.favoriteImage} />
                    <button onClick={() => removeFavHandler(favorite.id)}>Remove</button>
                    <hr />
                </div>
            }) : <h3>No games were added to favorites</h3>}
        </div>
    );
};

export default Favorites;