import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import logo from "../../Image/logo.png";
import { clearDetail, emailUserE } from "../../redux/actions";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import { useAuth0 } from "@Auth0/auth0-react";
import { useDispatch, useSelector} from "react-redux";

const Navbar = () => {

    const { user, isAuthenticated } = useAuth0(); 
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuthenticated && user) {
          dispatch(emailUserE(user.email));
        }
    }, [dispatch, isAuthenticated, user]);
    
    const users = useSelector((state) => state.userEmail)
    const rolUser = users?.[0]?.rol;

    console.log(rolUser);

    // if(isAuthenticated) {
    //     const data = async () => await dispatch(emailUserE(user.email))
    //     return data.data
    // }

    
    // const rolUser = users[0].rol; 

    // console.log(users);

  return (

    <div className={style.navbarContainer}>
      <Link to="/" className={style.image} onClick={clearDetail}>
        <img src={logo} alt="init" width="300px" />
      </Link>

      {isAuthenticated && rolUser === "admin" && (
        <Link className={style.links} to="/create">
          <ion-icon size="large" name="game-controller-outline"></ion-icon>
        </Link>
        )}

      <Link className={style.links} to="/favorites">
        <ion-icon size="large" name="heart-outline"></ion-icon>
      </Link>

      <Link className={style.links} to="/cart">
        <ion-icon size="large" name="cart-outline"></ion-icon>
      </Link>

      {isAuthenticated && (
        <Link className={style.links} to="/profile">
          {user.name}
        </Link>
      )}

      {isAuthenticated ? (
        <LogoutButton className={style.links} />
      ) : (
        <LoginButton className={style.links} />
      )}
    </div>
  );
};

export default Navbar;


// import React, { useCallback, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import style from "./Navbar.module.css";
// import logo from "../../Image/logo.png";
// import { clearDetail, getUsers } from "../../redux/actions";
// import LoginButton from "../LoginButton/LoginButton";
// import LogoutButton from "../LogoutButton/LogoutButton";
// import { useAuth0 } from "@Auth0/auth0-react";
// import { useDispatch, useSelector } from "react-redux";

// const Navbar = () => {      

//     const {user, isAuthenticated} = useAuth0();

//     const dispatch = useDispatch();

//     const [userRol, setUserRol] = useState(null);

//     const users = useSelector((state) => state.users);

//     const checkUser = useCallback(() => {
//         dispatch(getUsers());
//         return users.some(u => u.email === (user.email));
//     }, [dispatch,getUsers, users, user.email]);

    
    

//     useEffect(() => {

//         if(isAuthenticated) {
//         const userExists = checkUser();

//             if(userExists) {

//                 const userRol = users.find(u => u.email === user.email).rol;
//                 setUserRol(userRol);
//             }
//         }
//     },[isAuthenticated, user, users, checkUser])
    

    

//     return (
//         <div className={style.navbarContainer}>

//             <Link to="/" className={style.image} onClick={clearDetail}>
//                 <img src={logo} alt="init" width="300px" />
//             </Link>

//             {isAuthenticated && userRol === "admin" && (
//             <Link className={style.links} to="/create">
//                 <ion-icon size="large" name="game-controller-outline"></ion-icon>
//             </Link>
//             )}


//             <Link className={style.links} to="/favorites">
//                 <ion-icon size="large" name="heart-outline"></ion-icon>
//             </Link>

//             <Link className={style.links} to="/cart">
//                 <ion-icon size="large" name="cart-outline"></ion-icon>
//             </Link>
            
//             {isAuthenticated &&(            
//             <Link className={style.links} to="/profile">
//                 {user.name}
//             </Link>
//             )}

//             {isAuthenticated ?(
//                 <LogoutButton className={style.links}/>
//             ):(
//                 <LoginButton className={style.links}/>
//             )}        

//         </div>
//     );
// };

// export default Navbar;





///********* */

// if(isAuthenticated) {
//   console.log(user.email);
//}
//   const dispatch = useDispatch();

//   const [userRol, setUserRol] = useState(null);

//   const users = useSelector((state) => state.users);

//   const checkUser = useCallback(() => {
//     dispatch(getUsers());
//     return users.some((u) => u.email === user.email);
//   }, [dispatch, getUsers, users, user.email]);

//   useEffect(() => {
//     if (isAuthenticated) {
//       const userExists = checkUser();
//       if (userExists) {
//         const userRol = users.find((u) => u.email === user.email)?.rol;
//         setUserRol(userRol);
//       }
//     }
//   }, [isAuthenticated, user, users, checkUser]);