import React from "react";
import {Link} from 'react-router-dom'
import { useAuth0 } from "@Auth0/auth0-react";
import style from "../../components/Navbar/Navbar.module.css"
import styles from './ProfileUser.module.css'

const ProfileUser = () => {

    const {user, isAuthenticated} = useAuth0();

    return (
        <div className={styles.user}>
            <div className={styles.registration}>
                <div className={styles.container}>
                     <header>Your Profile</header>
                     <br />
  
                    <div>
                         { isAuthenticated && (
                            <div> 
                                <img src={user.picture} />
                                <br />
                                <h2>User Name: {user.name} </h2>
                                <br />
                                <h2>Email: {user.email}</h2>
                                <br />
                            </div>
                         )}
                    </div>
                   
        
                <div>
                    <Link className={style.links} to="/registration">
                        <ion-icon size="large" name="create-outline"></ion-icon>
                    </Link>
                </div>
                </div>
           

            </div>
        </div>
        
    )
}

export default ProfileUser;