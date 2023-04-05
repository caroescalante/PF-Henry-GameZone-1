import React, { useEffect } from "react";
import styles from "./PaymentSuccess.module.css";
import axios from "axios";
import { Link } from "react-router-dom"; 
import { useAuth0 } from "@auth0/auth0-react";

function PaymentSuccess() {

const { user, isAuthenticated } = useAuth0(); 

   useEffect(() => {
    if(isAuthenticated){
    axios.post("/payment/sendEmail", { email: user.email });
  }}, [isAuthenticated]);

  return (
    <div className={styles.Background}>
        <div className={styles.containerCard}>
          <div className={styles.card}>
            <div className={styles.checkIcon}></div>
            <h1 className={styles.title}>Your payment has been successfully completed</h1>
            <h2 className={styles.text}> We will send you the token number to your email as soon as possible.</h2>
            <h3 className={styles.text2}>Thanks for your purchase!</h3>
            <Link to="/" className={styles.button}>Return to page</Link>
          </div>
        </div>
    </div>
  );
};

export default PaymentSuccess;


// const PaymentData = {
//     client: 'Juan Perez',
//     amount: 1000,
//     date: '2023-03-30'
// };
