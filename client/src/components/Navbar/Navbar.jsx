import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../Image/logo.png";
import { clearDetail } from "../../redux/actions";

import Cookies from 'universal-cookie';
import { useHistory } from "react-router-dom";

const cookies = new Cookies();

const Navbar = () => {

    const history = useHistory();

    const closeSession = () => {

        cookies.remove('id', {path: "/"});
        cookies.remove('name', {path: "/"});
        cookies.remove('email', {path: "/"});
        history.push("/")

    }

    return (
        <div className={style.navbarContainer}>
            <Link to="/" className={style.image} onClick={() => clearDetail()}>
                <img src={logo} alt="init" width="300px" />
            </Link>

       

            <Link className={style.links} to="/create">
                <ion-icon size="large" name="game-controller-outline"></ion-icon>
            </Link>

            <Link className={style.links} to="/">
                <ion-icon size="large" name="cart-outline"></ion-icon>
            </Link>

            <Link className={style.links} to="/login">
                <ion-icon size="large" name="person-outline"></ion-icon>
            </Link>

            <h3 className={style.name}>{cookies.get("name")}</h3>

            <Link className={style.links} to="/" onClick={closeSession}>
                <ion-icon size="large" name="log-out-outline"></ion-icon>
            </Link>
        </div>
    );
};

export default Navbar;

// import React from "react";
// import style from "./Navbar.module.css";
// import { Link } from "react-router-dom";
// import logo from "../../Image/logo.png";
// import SearchBar from '../../components/Searchbar/Searchbar';
// import { clearDetail } from "../../redux/actions";

// import Cookies from 'universal-cookie';
// import { useHistory } from "react-router-dom";

// const cookies = new Cookies();

// const Navbar = () => {

//     const history = useHistory();

//     const closeSession = () => {

//         cookies.remove('id', {path: "/"});
//         cookies.remove('name', {path: "/"});
//         cookies.remove('email', {path: "/"});
//         history.push("/login")

//     }

//     return (
//         <div className={style.navbarContainer} >
//             <a href="/" className={style.image} onClick={clearDetail()}>
//                 <img
//                 src={logo}
//                 alt="init"
//                 width="300px"
//                 />
//             </a>

//             <SearchBar />

//             <Link className={style.links} to="/create">
//                 <ion-icon size="large" name="game-controller-outline"></ion-icon>            
//             </Link>

//             <Link className={style.links} to="/">
//                 <ion-icon size="large" name="cart-outline"></ion-icon>
//             </Link>

//             <Link className={style.links} to="/login">
//                 <ion-icon size="large" name="person-outline" ></ion-icon>
//             </Link>
            
//             <h3 className={style.name}>{cookies.get("name")}</h3>        
            
//             <Link className={style.links} onSubmit={closeSession}>
//                 <ion-icon size="large" name="log-out-outline"></ion-icon>
//             </Link>      


            
            

            
            
//         </div>
//     );
// };

// export default Navbar;