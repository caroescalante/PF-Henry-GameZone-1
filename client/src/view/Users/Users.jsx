import React from "react";
import UserCard from "../../components/UserCard/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers, disableUser } from "../../redux/actions";
import styles from "./Users.module.css";

const Users = () => {
  const allUsers = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleDisableClick = (userId) => {
    dispatch(disableUser(userId));
  };

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
            {/* <button onClick={() => handleDisableClick(user.id)}>
              {user.active ? "Desactivar" : "Activar"}
            </button> */}

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
               <label className={styles.switch}>
                <h3 className={styles.client}>Client</h3>
                <h3 className={styles.admin}>Admin</h3>
                {/* <input onClick={() => handleDisableClick(user.id)} type="checkbox"/>
                {user.rol ? "" : ""} */}
                <span className={styles.slider}></span>
               </label> 
             </div>





{/* 
            <button className={styles.button}  onClick={() => handleDisableClick(user.id)}>
            {user.active ? "Desactivar" : "Activar"}
            </button> */}



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