import React from "react";
import styles from "./PaymentFailure.module.css";
import { Link } from "react-router-dom";

export default function PaymentFailure (){
    return(
        <div className={styles.Background}>
            <div>
            <img src="../../Image/paymentFailure" alt="payment failure"/>
            </div>
            
            <div>
            <h2>Failed Transaction!</h2>
            </div>
            
            <div>
            <h3>There is an error on your card.<br/>Your bank has rejected our attempt to authorize your card,<br/> please contact them for more information.</h3>
            </div>
            
            <Link to="/"  >
                Return to page
            </Link>
        </div>
    )
}