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
    <div>
      {allUsers ? (
        allUsers.map((user) => (
          <div key={user.id}>
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              active={user.active}
              rol={user.rol}
            />
            {/* <button onClick={() => handleDisableClick(user.id)}>
              {user.active ? "Desactivar" : "Activar"}
            </button> */}
            <button onClick={() => handleDisableClick(user.id)}>
            {user.active ? "Desactivar" : "Activar"}
            </button>
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
  );
};

export default Users;