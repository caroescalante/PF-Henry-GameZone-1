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
            {favorites.length ? 
               
            <div className={style.containerAllCards}>
               {favorites.map((favorite, index) => { 
                return  <div className={style.containerCards}>
                         <div className={style.favoriteCard} key={index}>
                           <img src={favorite.image} alt="favorite-image" className={style.favoriteImage} />
                           <h2 className={style.favoriteName}>{favorite.name}</h2>
                           <button onClick={() => removeFavHandler(favorite.id)} className={style.trashButton}><i class="fas fa-trash"></i></button>
                         </div>
                       </div>          
                }) 
                }
            </div> 
           : (<p className={style.favoriteEmpty}>No games were added to favorites</p>) 
   }
        </div>
        
    );
};

export default Favorites;