import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { disableUser } from "../../redux/actions";
import styles from "./BannedUser.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const BannedUser = () => {
  const { user, isAuthenticated } = useAuth0();
  const allUsers = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser && !currentUser.active) {
      dispatch(disableUser(currentUser.id));
    }
  }, []);

  const getCurrentUser = () => {
    if (isAuthenticated && allUsers) {
      return allUsers.find((u) => u.email === user.email);
    }
    return null;
  };

  const currentUser = getCurrentUser();

  if (!currentUser || currentUser.active) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h1>You have been banned</h1>
      <p>Your account has been disabled by the administrator.</p>
    </div>
  );
};

export default BannedUser;


