import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import logo from "../../Image/logo.png";
import { clearDetail, emailUser } from "../../redux/actions";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import { useAuth0 } from "@Auth0/auth0-react";
import { useDispatch} from "react-redux";

const Navbar = () => {

    const { user, isAuthenticated } = useAuth0();
    const dispatch = useDispatch();
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
        if (isAuthenticated) {
          
            const result = async() => {
                const res = await dispatch(emailUser(user.email));

                const {name, email, rol, active} = res.payload.variable;
                console.log(name, email, rol, active);
            }
            result()
            }
    },[isAuthenticated, dispatch])

            
            
        //     if (result.payload.variable === true) {
        //       setUserData(result.payload.userData);
        //       console.log(result.payload.userData.rol);
             
        //   };
        //   fetchUserData();
        //   console.log(fetchUserData);
    //     }
    //   }, [dispatch, emailUser, isAuthenticated]);

    // console.log(userData);


  return (

    <div className={style.navbarContainer}>
      <Link to="/" className={style.image} onClick={clearDetail}>
        <img src={logo} alt="init" width="300px" />
      </Link>

      {isAuthenticated && userData === "admin" && (
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