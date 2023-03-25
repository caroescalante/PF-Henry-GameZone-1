import React from "react";
import styles from "./PaymentFailure.module.css";
import { Link } from "react-router-dom";

export default function PaymentFailure (){
    return(
        <div className={styles.Background}>
            <div className={styles.text}>
                
                
                
            
                
                <h2 className={styles.text2}>Failed Transaction!</h2>
                
            
                
                <h3>There is an error on your card.<br/>Your bank has rejected our attempt to authorize your card,<br/> please contact them for more information.</h3>
                
            
                <Link to="/" className={styles.button} >
                    Return to page
                </Link>
            </div>
        </div>
    )
}