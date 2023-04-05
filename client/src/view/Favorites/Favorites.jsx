import React, { useEffect } from "react";
import style from "./Favorites.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite, newFavorites } from "../../redux/actions/index";
import { useAuth0 } from '@auth0/auth0-react';

const Favorites = () => {
    const { user, isAuthenticated } = useAuth0();
    const dispatch = useDispatch();

    /***************************/
    const allUsers = useSelector(state => state.users);
    const data = () => {
      if (isAuthenticated && allUsers) return allUsers.find((u) => u.email === user.email);
      return null;
    };
    const findUser = data();
    /***************************/
    
    let favorites = useSelector(state => state.favorites);
    let favoritesUser = findUser?.favorites?.map(elem => JSON.parse(elem));

    const removeFavHandler = (id) => {
        dispatch(removeFavorite(id));
    };

    useEffect(() => {
      if (isAuthenticated) {
        if (favoritesUser) {
          let finalFavorites = [...favorites, ...favoritesUser]
          let hash = {};
          finalFavorites = finalFavorites.filter(function(current) {
            let exists = !hash[current.id];
            hash[current.id] = true;
            return exists;
          });
          dispatch(newFavorites(finalFavorites));
        };
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
                           <button onClick={() => removeFavHandler(favorite.id)} className={style.trashButton}><i className="fas fa-trash"></i></button>
                         </div>
                       </div>          
                }) 
                }
            </div> 
           : ( <div className={style.favoriteEmptyContainer}>
            <p className={style.favoriteEmpty}>No games were added to favorites</p>
            </div>) 
   }      
        </div>
    );
};

export default Favorites;