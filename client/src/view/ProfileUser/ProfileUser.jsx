import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./ProfileUser.module.css";
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';


const ProfileUser = () => {
  const { user, isAuthenticated } = useAuth0();
  const image = useSelector((state) => state.image)


    return ( <div className={style.user}>
            <div className={style.registration}>
                <div className={style.container}>
                     <header>Your Profile</header>
                     <br />
  
                    <div>
                         { isAuthenticated && (
                            <div> 
                                <img src={image} />
                                {console.log(image)}
                                 <br />
                                <h2>User Name: {user.name} </h2>
                                <br />
                                <h2>Email: {user.email}</h2>
                                <br />
                            </div>
                         )}
                    </div>
                   
        
                <div>
                    <Link className={style.links} to={"/registration/" + user.email}>
                        <ion-icon size="large" name="create-outline"></ion-icon>
                    </Link>
                </div>
                </div>
                </div>
                </div>
           )

  
};

export default ProfileUser;