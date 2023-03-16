import React from "react";
import CardsContainer from '../../components/CardsContainer/CardsContainer'
import Navbar from '../../components/Navbar/Navbar';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { getGames } from "../../redux/actions";
import styles from './Home.module.css';
import Paginated from "../../components/Paginated/Paginated";

const Home = () => {
    const dispatch = useDispatch();
    const allGames = useSelector(state => state.allGames);
    // const [orden, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [gamesPerPage, setGamesPerPage] = useState(9)
    const indexOfLastGame = currentPage * gamesPerPage // 10
    const indexOfFirstGame = indexOfLastGame - gamesPerPage // 0
    const currentGames = allGames.slice(indexOfFirstGame,indexOfLastGame)

     const paginado = (pageNumber) =>{
         setCurrentPage(pageNumber)
     }

      useEffect(()=>{
           dispatch(getGames());
      }, [])

    return (
        <div className={styles.home}>
            
          <div>
            <Paginated
             gamesPerPage={gamesPerPage}
             allGames={allGames.length}
             paginado={paginado}
            />
        </div>
             <div>
            {currentGames.length > 0 ?
                currentGames?.map ((el) =>{
                    return(
                        <CardsContainer name={el.name} image={el.image} id={el.id} rating={el.rating} key={el.id} />
                    )}) : <div>
                        <p>Search Game</p>
                        <span className={styles.loader}></span>
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