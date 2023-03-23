import React from "react";
import style from "./Favorites.module.css";
import { useSelector } from "react-redux";

const Favorites = () => {
    const favorites = useSelector(state => state.favorites);

    return (
        <div>
            {favorites.map(favorite => {
                return <div>
                    <h2>{favorite.name}</h2>
                    <img src={favorite.image} alt="favorite-image" className={style.favoriteImage} />
                    <hr />
                </div>
            })}
        </div>
    );
};

export default Favorites;