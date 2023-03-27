import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, addFavorites } from "../../redux/actions";
import { useEffect } from "react";
import styles from './Detail.module.css';


export default function Detail(props){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getDetail(props.match.params.id))
    },[dispatch,props.match.params.id]);

    const myGame= useSelector((state)=> state.detail);

    const handleAddFavorite = () => {
        dispatch(addFavorites(props.match.params.id));
    };

    return (
        <div className={styles.Background}>
            <div className={styles.videogame}>
                <div className={styles.boxjuego}> 

                    {myGame ?<>
                    <h1 className={styles.namegame}> {myGame.name} </h1>
                    <button className={styles.buttonFavorites} onClick={handleAddFavorite}>Add to Favorites</button>
                    <button className={styles.buttonCart}onClick={handleAddFavorite}>Add to Cart</button>
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
// import React from 'react';
// import {useState, useEffect} from "react"
// import axios from "axios"
// import { useParams } from "react-router"
// import styles from './Detail.module.css'


// function VideogameDetail() {
//     const [videogame, setVideogame] = useState(null)
//     let {id} = useParams()
//     console.log('id detail', typeof(id));
//     console.log('id', id);
//     useEffect(() => {
//         axios.get(`http://localhost:3001/games${id}`)
//          .then((response) => {
//              setVideogame(response.data)
//          })
//     }, [id])
//     console.log('detalle juego', videogame);
//     return (
//         <div className={styles.videogame}>
//             <div className={styles.boxjuego}> 
//            {videogame ?<>
//             <h1 className={styles.namegame}> {videogame.name} </h1>
//             <div className={styles.containeRatRel}>
//               <h2 className={styles.rating}> Rating:{videogame.rating}</h2>
//               <h3 className={styles.released}> Released:{videogame.released}</h3>
//               </div>
//               <div className={styles.containImgGenPlat}>
//             <img className={styles.imag} src={videogame.background_image} alt="imagen" />  
            
//             <div className={styles.containergenresandplatforms} >
//             <h3 className={styles.descriptiontitle}>Genres</h3>
//              {videogame.genres?.map((genre) => {
//                return <h3 className={styles.genres}>{genre.name}</h3>
//              })}<br></br>
//              <h3 className={styles.descriptiontitle}>Platforms</h3>
//              {videogame.platforms?.map((platform) => {
//                return <h3 className={styles.genres}>{platform.name}</h3>
//              })}
//             </div>
//             </div>
//             <div>
//             <h3 className={styles.descriptiontitle}>Description</h3>
//             <h1 className={styles.description}> {videogame.description}</h1>
//             </div>
//             </> : 
//             <div>loading</div>
//            }
//          </div>
//         </div>
        
//       );
//   }
  
//   export default VideogameDetail;