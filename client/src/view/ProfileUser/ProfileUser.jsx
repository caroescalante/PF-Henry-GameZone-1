import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./ProfileUser.module.css";
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';



const ProfileUser = () => {

  const { user, isAuthenticated } = useAuth0();
  const image = useSelector((state) => state.image)

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      setEmail(user.email);
    }
  }, [isAuthenticated, user.email]);

  

    return ( 
        <div className={style.user}>
            <div className={style.registration}>
                <div className={style.container}>
                     <header>Your Profile</header>
                     <br/>
  
                    <div>
                        { isAuthenticated && (
                        <div> 
                            <img src={user.picture} alt=""/>
                            <br/>
                            <h2>User Name: {user.name} </h2>
                            <br/>
                            <h2>Email: {email}</h2>
                            <br />
                        </div>
                        )}
                    </div>
                   
        
                    <div>
                        <Link className={style.links} to={"/update/" + email}>
                            <ion-icon size="large" name="create-outline"></ion-icon>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )  
};

export default ProfileUser;