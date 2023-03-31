import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, addFavorites,addToCart } from "../../redux/actions";
import { useEffect } from "react";
import styles from './Detail.module.css';


export default function Detail(props){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getDetail(props.match.params.id))
    },[dispatch,props.match.params.id]);

    const myGame= useSelector((state)=> state.detail);
    const handleAddFavorite = () => {
        // dispatch(addFavorites(props.match.params.id));
        dispatch(addFavorites(myGame.id));
    };

    const handleAddToCart= () => {
        dispatch(addToCart(myGame.id));
    };

    return (
        <div className={styles.Background}>
            <div className={styles.videogame}>
                <div className={styles.boxjuego}> 

                    {myGame ?<>
                    <h1 className={styles.namegame}> {myGame.name} </h1>
                    <button className={styles.buttonFavorites} onClick={handleAddFavorite}>Add to Favorites</button>
                    <button className={styles.buttonCart}onClick={handleAddToCart}>Add to Cart</button>
                    <div className={styles.starIcon}></div>              
                    
                    <div className={styles.containeRatRel}>   
                        <h2 className={styles.rating}> {myGame.rating}</h2>
                        <h3 className={styles.released}> Launch {myGame.released}</h3>
                        <h3 className={styles.price}> $ {myGame.price}</h3>
                    </div> 
                    
                    <div className={styles.containerWebsite}>
                    {/* <Link to={myGame.website} className={styles.website}>{myGame.website}</Link> */}
                    <a href={myGame.website} target="_blank" className={styles.website}>{myGame.website}</a> 
                    </div>

                    <img className={styles.imag} src={myGame.image} alt="imagen" />  

                    <div className={styles.containGenPlat}>
            
                        <div className={styles.containergenresandplatforms} >
                            <h3 className={styles.descriptiontitle}>Genres:</h3>
                            <h3 className={styles.genres}>{myGame.genres}</h3>
                            <br></br>
                            <h3 className={styles.descriptiontitlePlatform}>Available for:</h3>              
                            <h3 className={styles.platforms}>{myGame.platforms}</h3>              
                        </div>

                    </div>

                    <div className={styles.descriptionContainer}>
                        {/* <h3 className={styles.}>Description</h3> */}
                        <h1 className={styles.description}> {myGame.description}</h1>
                    </div>

                    </> : 

                    <span className={styles.loader}></span>
                    }
                </div>
            </div>
        {/* <Link to= '/'   style={{ textDecoration: 'none' }}>
            <button className='buttonpage10'>Return</button>
        </Link> */}
        </div>
    )
};
