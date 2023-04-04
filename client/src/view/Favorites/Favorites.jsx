import React, { useEffect } from "react";
import style from "./Favorites.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite, newFavorites } from "../../redux/actions/index";
import { useAuth0 } from '@auth0/auth0-react';

const Favorites = () => {
    const { user, isAuthenticated } = useAuth0();
    const dispatch = useDispatch();
    let favoritesUser = useSelector(state => state?.userEmail[0]?.favorites?.map(elem => JSON.parse(elem)));
    let favorites = useSelector(state => state.favorites);

    const removeFavHandler = (id) => {
        dispatch(removeFavorite(id));
    };

    useEffect(() => {
      if (favoritesUser) {
        let finalFavorites = [...favorites, ...favoritesUser]
        let hash = {};
        finalFavorites = finalFavorites.filter(function(current) {
          let exists = !hash[current.id];
          hash[current.id] = true;
          return exists;
        });
        // console.log(finalFavorites);
        // console.log(finalFavorites);
        dispatch(newFavorites(finalFavorites));
      };
    }, []);

    return (
        
        <div className={style.background}>
            <h1 className={style.title}>Add here your favorite games</h1>

            {/* {isAuthenticated === true && favoritesUser?.length > 0 ?  
            <div className={style.containerAllCards}>
               {favorites.map((favorite, index) => { 
                return  <div className={style.containerCards} key={index}>
                         <div className={style.favoriteCard}>
                           <img src={favorite.image} alt="favorite-image" className={style.favoriteImage} />
                           <h2 className={style.favoriteName}>{favorite.name}</h2>
                           <button onClick={() => removeFavHandler(favorite.id)} className={style.trashButton}><i className="fas fa-trash"></i></button>
                         </div>
                       </div>          
                }) 
                }
            </div> : favorites.length ? 
            <div className={style.containerAllCards}>
               {favorites.map((favorite, index) => { 
                return  <div className={style.containerCards} key={index}>
                         <div className={style.favoriteCard}>
                           <img src={favorite.image} alt="favorite-image" className={style.favoriteImage} />
                           <h2 className={style.favoriteName}>{favorite.name}</h2>
                           <button onClick={() => removeFavHandler(favorite.id)} className={style.trashButton}><i class="fas fa-trash"></i></button>
                         </div>
                       </div>          
                }) 
                }
            </div> : <p className={style.favoriteEmpty}>No games were added to favorites</p>} */}

            {favorites.length ? 
               
            <div className={style.containerAllCards}>
               {favorites.map((favorite, index) => { 
                return  <div className={style.containerCards} key={index}>
                         <div className={style.favoriteCard}>
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