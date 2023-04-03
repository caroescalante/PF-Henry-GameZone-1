import React, { useEffect } from "react";
import styles from "./PaymentSuccess.module.css";
import axios from "axios";
import { useSelector } from "react-redux"; 
   
function PaymentSuccess() {
  const email = useSelector(state => state.emailUser.email);

  useEffect(() => {
    axios.post("http://localhost:3001/payment/sendEmail", { email: email });
  }, []);

  return (
    <div className={styles.Background}>
        <div className={styles.containerCard}>
          <div className={styles.card}>
          <div className={styles.checkIcon}></div>
          <h1 className={styles.title}>Your payment has been successfully completed</h1>
          <h2 className={styles.text}> We will send you the token number to your email as soon as possible.</h2>
          <h3 className={styles.text2}>Thanks for your purchase!</h3>
          <a className={styles.button} href="/">Return to page</a>
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