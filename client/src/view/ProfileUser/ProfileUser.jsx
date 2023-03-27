import React from "react";
import { useAuth0 } from "@Auth0/auth0-react";
// import style from "../Favorites/Favorites.module.css"

// const ProfileUser = () => {

//     const {user, isAuthenticated} = useAuth0();

//     // return (
//         // <div>
//         // {JSON.stringify(user)}
//         // </div>
//         return isAuthenticated && (
//             <div className={style.container}>
//               <div className={style.form}>
//                 <img src={user.picture} alt="User profile" />
//                 <div className={style.content}>
//                   <h1 className={style.letter}>{user.given_name}</h1>
//                   <h2>{user.family_name}</h2>
//                   <h3>Email: {user.email}</h3>
//                   <h4>{user.user_metadata?.rol}</h4>
//                 </div>
//               </div>
//             </div>
//           );
// };

// export default ProfileUser;
import style from "../Favorites/Favorites.module.css";

const ProfileUser = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();


    return (
        <div className={style.user}>
            <div className={style.registration}>
                <div className={style.container}>
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
                    <Link className={style.links} to={"/registration/" + user.email}>
                        <ion-icon size="large" name="create-outline"></ion-icon>
                    </Link>
                </div>
                </div>
           

            </div>
        </div>
        
    )
}

export default ProfileUser;