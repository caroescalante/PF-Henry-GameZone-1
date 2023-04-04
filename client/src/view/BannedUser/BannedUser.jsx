import React from "react";
import styles from "./BannedUser.module.css";

const BannedUser = () => {
  return (
    <div className={styles.container}>
      <h1>You have been banned</h1>
      <p>Your account has been disabled by the administrator.</p>
    </div>
  );
};

export default BannedUser;