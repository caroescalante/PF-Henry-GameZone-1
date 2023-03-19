import React from "react";
import CardsContainer from '../../components/CardsContainer/CardsContainer'
import Navbar from '../../components/Navbar/Navbar';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { getGames, getGenres, filterByGenres, getPlatforms, filterByPlatforms,orderByName,orderByRating,orderByPrice,clearDetail} from "../../redux/actions";
import styles from './Home.module.css';
import Paginated from "../../components/Paginated/Paginated";

const Home = () => {
    const dispatch = useDispatch();
    const allGames = useSelector(state => state.allGames);
    const [orden, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [gamesPerPage, setGamesPerPage] = useState(8)
    const indexOfLastGame = currentPage * gamesPerPage // 10
    const indexOfFirstGame = indexOfLastGame - gamesPerPage // 0
    const currentGames = allGames.slice(indexOfFirstGame,indexOfLastGame)

    const genres = useSelector((state) => state.genres);
    useEffect(() => {
      dispatch(getGenres());
    },[] );

    const platforms = useSelector((state) => state.platforms);
    useEffect(() => {
      dispatch(getPlatforms());
    },[] );

     const paginado = (pageNumber) =>{
         setCurrentPage(pageNumber)
     }

      useEffect(()=>{
           dispatch(getGames());
           dispatch(clearDetail())
      },[])
      
      
    function handleGenreFilter(e) {
        dispatch(filterByGenres(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
      }

      
    function handlePlatformFilter(e) {
        dispatch(filterByPlatforms(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
      }
      function handleOrderName(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
    }
    function handleOrderRating(e){
      e.preventDefault();
      dispatch(orderByRating(e.target.value));
      setCurrentPage(1);
      setOrden(`Ordenado ${e.target.value}`);
    }
    function handleOrderPrice(e){
      e.preventDefault();
      dispatch(orderByPrice(e.target.value));
      setCurrentPage(1);
      setOrden(`Ordenado ${e.target.value}`);
    }


    return (
        <div className={styles.home}>

           
          <div>
            <Paginated
             gamesPerPage={gamesPerPage}
             allGames={allGames.length}
             paginado={paginado}
            />
        </div>
      
            <select onChange={(e) => handleGenreFilter(e)} className={styles.filter}>
                     <option value='All'>All</option>
                    {genres.map((gen, index) => {
                        return <option key={index} value={gen.name}>{gen.name}</option>;
                     })}
            </select> 

            
            <select onChange={(e) => handlePlatformFilter(e)} className={styles.filter}>
                     <option value='All'>All</option>
                    {platforms.map((plat, index) => {
                        return <option key={index} value={plat.name}>{plat.name}</option>;
                     })}
            </select>
            <select onChange={(e) => handleOrderName(e)} className={styles.filter}>
                     <option value='All'>Alphabetical Order</option>
                     <option value= 'Asc' >Ascending Alphabetical Order</option>
                    <option value= 'Desc'>Descending Alphabetical Order</option>
            </select>
             <select onChange={(e) => handleOrderRating(e)} className={styles.filter}>
                     <option value='All'>Rating Order</option>
                     <option value= 'Asc' >Ascending Rating Order</option>
                    <option value= 'Desc'>Descending Rating Order</option>
            </select>
            <select onChange={(e) => handleOrderPrice(e)} className={styles.filter}>
                     <option value='All'>Price Order</option>
                     <option value= 'Asc' >Ascending Price Order</option>
                    <option value= 'Desc'>Descending Price Order</option>
            </select>
                     
             <div>
            {currentGames.length > 0 ?
                currentGames?.map ((el) =>{
                    return(
                        <CardsContainer name={el.name} image={el.image} id={el.id} rating={el.rating} key={el.id} />
                    )}) : 
                    <div>
                        
                        <p className={styles.img} ><span className={styles.loader}></span></p>
                    </div>
            }
            </div>
            <Paginated
             gamesPerPage={gamesPerPage}
             allGames={allGames.length}
             paginado={paginado}
            />
        </div>
    );
};
export default Home;

