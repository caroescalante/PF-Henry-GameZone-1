import React from "react";
import UserCard from '../../components/UserCard/UserCard'                                                                    
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from "react";
import { getUsers} from "../../redux/actions";
import styles from "../Users/Users.module.css"


const Users = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector(state => state.allUsers);
  const currentUsers = allUsers;

    useEffect(()=>{
         dispatch(getUsers());
    },[])

   return (
      <div>
                   
           <div>
          {currentUsers.length > 0 ?
              currentUsers?.map ((el) =>{
                  return(
                      <UserCard name={el.name} email={el.email} active={el.active} rol={el.rol} key={el.email} />
                  )}) : 
                  <div>
                      
                      <p className={styles.img} ><span className={styles.loader}></span></p>
                  </div>
          }
          </div>
      </div>
  );
  }

export default Users;
