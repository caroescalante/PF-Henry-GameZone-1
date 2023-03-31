import React, { useEffect, useState } from "react";
import { useAuth0 } from '@Auth0/auth0-react';
import CardsContainer from '../../components/CardsContainer/CardsContainer'
import SearchBar from '../../components/Searchbar/Searchbar';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Home.module.css';
import Paginated from "../../components/Paginated/Paginated";
import axios from "axios";
import { 
  getGames, 
  getGenres, 
  filterByGenres, 
  getPlatforms, 
  filterByPlatforms,
  orderByName,
  orderByRating,
  orderByPrice,
  clearDetail, 
  emailUser
} from "../../redux/actions";


const Home = () => {

    const dispatch = useDispatch();
    const allGames = useSelector(state => state.allGames);
    const { user, isAuthenticated } = useAuth0();
    const genres = useSelector((state) => state.genres);
    const platforms = useSelector((state) => state.platforms);

    const [orden, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [gamesPerPage, setGamesPerPage] = useState(9)
    const indexOfLastGame = currentPage * gamesPerPage // 10
    const indexOfFirstGame = indexOfLastGame - gamesPerPage // 0
    const currentGames = allGames.slice(indexOfFirstGame,indexOfLastGame)

    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    } 

    const currentPageColor =  currentPage      
    
    useEffect(() => {
        dispatch(getGenres());
    },[] );

    useEffect(() => {
        dispatch(getPlatforms());
    },[] );

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

    function handleSearch() {
        setCurrentPage(1);
    }

    useEffect(() => {
      if (isAuthenticated) {
        const db = async () => await dispatch(emailUser(user.email));
        db().then((result) => {
          const userExists = result.payload.variable;
    
          if (!userExists) {
            axios
              .post(`http://localhost:3001/user/`, { name: user.name, email: user.email })
              .then((result) => {
                if (result.data.userCreated) {
                  // usuario creado correctamente
                } else {
                  // usuario ya existe en la base de datos
                }
              });
          } else {
            // email ya existe en la base de datos
          }
        });
      }
    }, [dispatch, emailUser, isAuthenticated]);

    return (
        <div className={styles.home}>           
            <div>
                <Paginated
                gamesPerPage={gamesPerPage}
                allGames={allGames.length}
                paginado={paginado}
                currentPageColor={currentPageColor}
                />
            </div>
        <div className={styles.search}>
            <SearchBar  setCurrentPage={handleSearch}/>
        </div>
      
            <select onChange={(e) => handleGenreFilter(e)} className={styles.filter}>
                     <option value='All'>All Genres</option>
                    {genres.map((gen, index) => {
                        return <option key={index} value={gen.name}>{gen.name}</option>;
                     })}
            </select> 
            
            <select onChange={(e) => handlePlatformFilter(e)} className={styles.filter}>
                     <option value='All'>All Platforms</option>
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
                        <CardsContainer name={el.name} image={el.image} id={el.id} price={el.price} key={el.id} />
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
             currentPageColor={currentPageColor}
            />
        </div>
    );
};
export default Home;

    // useEffect(() => {
    //   if (isAuthenticated) {
    //     const db = async () => await dispatch(emailUser(user.email));
    //     db().then((result) => {
    //       if (result.payload.variable === true) {
    //         Swal.fire({
    //           html: '<div style="max-height: 450px;"><Link to="/registration"> Hola, mundo</Link> <br><br><p style="color:white;">porfa funcioná</p></div>',
    //           background: '#000000',
    //           backdrop: 'rgba(0, 0, 0, 0.8)',
    //           confirmButtonColor: '#ff0000',
    //           confirmButtonText: 'GO!',
    //         })
    //         .then(result => {
    //           if(result){
    //             history.push("/registration/")
    //           } else {return('esto es una poronga')}
    //         })
    //       }
    //     });
    //   }
    // }, [dispatch, emailUser, isAuthenticated, estadoEmail.email, history ]);
