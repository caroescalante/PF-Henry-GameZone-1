import React from "react";
import styles from "./BannedUser.module.css";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import { useAuth0 } from '@Auth0/auth0-react'

const BannedUser = () => {
  return (
   <div className={styles.Background}>
      <div className={styles.container}>
        <h1 className={styles.title}>YOU HAVE BEEN </h1>
        <p className={styles.subtitle}>your account has been disabled by the administrator, contact us</p>
      </div>
      <div className={styles.login}>
        <LogoutButton />
      </div>
   </div>
  );
};

export default BannedUser;