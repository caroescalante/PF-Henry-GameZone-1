import React from "react";
import UserCard from "../../components/UserCard/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers, disableUser, changeRolUser } from "../../redux/actions";
import styles from "./Users.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const Users = () => {
  // const allUsers = useSelector((state) => state.allUsers);
  const { user, isAuthenticated } = useAuth0();
  const allUsers = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleDisableClick = (userId) => {
    dispatch(disableUser(userId));
  };

  const handleRolClick = (userId) => {
    dispatch(changeRolUser(userId));
  };


  // Función para obtener el usuario actual
  const getCurrentUser = () => {
  if (isAuthenticated && allUsers) {
    return allUsers.find((u) => u.email === user.email);
      }
    return null;
  };


  const admin = true;
  const client = false; 

  const currentUser = getCurrentUser();


  return (
    <div className={styles.Background}>
     
      <div className={styles.containerUser}>
       <h1 className={styles.title}  >User control panel </h1>
      {allUsers ? (
        allUsers.map((user) => (
          <div className={styles.user} key={user.id}>
            <UserCard className={styles.data}
              key={user.id}
               name={user.name}  
               email={user.email} 
               active={user.active} 
               rol={user.rol}
            />
            <div className={styles.containerButton}>
                <label className={styles.switch}>
                 <h3 className={styles.ennabled}>Ennabled</h3>
                 <h3 className={styles.disabled}>Disabled</h3>
                 <input    onClick={() => handleDisableClick(user.id)} type="checkbox"/>
                 {user.active ? "" : ""}
                 <span className={styles.slider}></span>
                </label>
            </div>
            <div className={styles.containerButton2}>
               <label className={styles.switch2}>
                <h3 className={styles.client}>Client</h3>
                <h3 className={styles.admin}>Admin</h3>
                <input onClick={() => handleRolClick(user.id)} type="checkbox"/>
                {user.rol ? "" : ""}
                <span className={styles.slider2}></span>
               </label> 
             </div>
          </div>
        ))
        ) : (
          <div>
          <p className={styles.img}>
            <span className={styles.loader}></span>
          </p>
        </div>
      )}
      </div>
      
    </div>
  );
};

export default Users;
