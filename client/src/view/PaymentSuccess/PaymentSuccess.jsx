import React from "react";
import styles from "./PaymentSuccess.module.css";
import ReactDOM from 'react-dom';



   
function PaymentSuccess() {
        return (
          <div className={styles.Background}>
            <div className={styles.card}>
            <h1>Su compra fue realizada con exito</h1>
            <h2> Le enviamos a su correo el numero de token</h2>
            <h3>detalles de su compra</h3>
            <p>Producto: </p>
            <p>Monto: $</p>
            <p>Fecha de pago:</p>
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