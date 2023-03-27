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

  const newUser = () => {

  }

  if (isLoading) {

    return <div>Loading ...</div>;

  }

  return isAuthenticated && (
    <div className={style.container}>
      <div className={style.form}>
        <img src={user.picture} alt="User profile" />
        <div className={style.content}>
          <h1 className={style.letter}>{user.given_name}</h1>
          <h2>{user.family_name}</h2>
          <h3>Email: {user.email}</h3>
          <h4>{user["https://dev-pat1xvma3icsva0m.us.auth0.com/api/v2/"]}</h4>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;