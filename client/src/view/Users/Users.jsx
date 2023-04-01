import React from "react";
import userCardsContainer from '../UserCardsContainer/userCardsContainer'                                                                    
import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/Searchbar/Searchbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { getUsers, orderByName} from "../../redux/actions";
import styles from '../Home/Home.module.css';
import Paginated from "../../components/Paginated/Paginated";

const Community = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector(state => state.allUsers);
  const [orden, setOrden] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage, setUsersPerPage] = useState(8)
  const indexOfLastUser = currentPage * usersPerPage // 10
  const indexOfFirstUser = indexOfLastUser - usersPerPage // 0
  const currentUsers = allUsers.slice(indexOfFirstUser,indexOfLastUser)

  const currentPageColor =  currentPage



    useEffect(()=>{
         dispatch(getUsers());
    },[])
    
    function handleOrderName(e){
      e.preventDefault();
      dispatch(orderByName(e.target.value));
      setCurrentPage(1);
      setOrden(`Ordenado ${e.target.value}`);
  }
    function handleSearch() {
    setCurrentPage(1);
  }

   const paginado = (pageNumber) =>{
       setCurrentPage(pageNumber)
   } 
   return (
      <div className={styles.home}>

         
        <div>
          <Paginated
           usersPerPage={usersPerPage}
           allUsers={allUsers.length}
           paginado={paginado}
           currentPageColor={currentPageColor}
          />
      </div>
      
      <div className={styles.search}>
      <SearchBar  setCurrentPage={handleSearch}/>
      </div>

          <select onChange={(e) => handleOrderName(e)} className={styles.filter}>
                   <option value='All'>Alphabetical Order</option>
                   <option value= 'Asc' >Ascending Alphabetical Order</option>
                  <option value= 'Desc'>Descending Alphabetical Order</option>
          </select>
                   
           <div>
          {currentUsers.length > 0 ?
              currentUsers?.map ((el) =>{
                  return(
                      <userCardsContainer name={el.name} image={el.image} surname={el.surnmae} key={el.name} />
                  )}) : 
                  <div>
                      
                      <p className={styles.img} ><span className={styles.loader}></span></p>
                  </div>
          }
          </div>
          <Paginated
           usersPerPage={usersPerPage}
           allUsers={allUsers.length}
           paginado={paginado}
           currentPageColor={currentPageColor}
          />
      </div>
  );
  }


 

export default Community;