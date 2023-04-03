import React, { useEffect } from "react";
import style from "./ProfileUser.module.css";
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import {useAuth0} from '@Auth0/auth0-react';

const ProfileUser = () => {

    const { isAuthenticated } = useAuth0();

    useEffect(() => {
        if(!isAuthenticated) {
          window.location.href = "/"
        }
    })

    const user = useSelector((state) => state.userEmail[0]);
    const { name, email, image } = user;

    return ( 
       
        <div className={style.user}>
            <div>
                <div className={style.container}>
                    <header className={style.title}>Your Profile</header>
                    <br/>
  
                    <div className={style.containerData}>
                        { user&& (
                        <div> 
                            <img className={style.image} src={image || " "} alt=""/>
                            <br/>
                            <h2>Name: {name || " "} </h2>
                            <br/>
                            <h2>Email: {email || " "}</h2>
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
        </div>
        
    )  
};

export default ProfileUser;