import React, { useEffect } from "react";
import style from "./ProfileUser.module.css";
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import {useAuth0} from '@auth0/auth0-react';

const ProfileUser = () => {

    const { isAuthenticated } = useAuth0();
    const user = useSelector((state) => state.userEmail[0]);

    useEffect(() => {
        if(!isAuthenticated || !user) {
          window.location.href = "/"
        }
    })

    
    const { name, email, image } = user;

    return ( 
       
        <div className={style.Background}>
            <div className={style.container}>
                <div>
                       
                    <h1 className={style.title}>Your Profile</h1>
                        { user&& (
                        <div > 
                            <img className={style.image} src={image || " "} alt=""/>
                            <br/>
                            <h2 className={style.name}>Name: {name || " "} </h2>
                            <br/>
                            <h2 className={style.email}>Email: {email || " "}</h2>
                        </div>
                        )}                  
                        
                        <div>
                        <Link to={"/update/"}>
                            <button className={style.iconRegisterButton}><i className="fas fa-edit"></i></button> 
                        </Link>                     
                        </div>
                    </div>
                </div>
            </div>
       
        
    )  
};

export default ProfileUser;