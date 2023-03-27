import React from "react";
import styles from "./PaymentSuccess.module.css";
import ReactDOM from 'react-dom';



   
function PaymentSuccess() {
        return (
          <div className={styles.Background}>
            <div className={styles.card}>
            <div className={styles.checkIcon}></div>
            <h1 className={styles.title}>Your payment has been successfully completed</h1>
            <h2 className={styles.text}> We will send you the token number to your email as soon as possible.</h2>
            <h3 className={styles.text2}>Thanks for your purchase!</h3>
            <a className={styles.button} href="/">Return to page</a>
            </div>
          </div>
        );

    }
    const PaymentData = {
        client: 'Juan Perez',
        amount: 1000,
        date: '2023-03-30'
      };
      
      ReactDOM.render(
        <PaymentSuccess 
          client={PaymentData.user} 
          amount={PaymentData.TotalAmount} 
          date={PaymentData.date} 
        />,
        document.getElementById('root')
      );


export default PaymentSuccess;