import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import logo from "../../Image/logo.png";
import { clearDetail } from "../../redux/actions";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import { useAuth0 } from "@Auth0/auth0-react";

const Navbar = () => {      

    const {user, isAuthenticated} = useAuth0();

    return (
        <div className={style.navbarContainer}>

            <Link to="/" className={style.image} onClick={() => clearDetail()}>
                <img src={logo} alt="init" width="300px" />
            </Link>

            <Link className={style.links} to="/create">
                <ion-icon size="large" name="game-controller-outline"></ion-icon>
            </Link>


            <Link className={style.links} to="/favorites">
                <ion-icon size="large" name="heart-outline"></ion-icon>
            </Link>

            <Link className={style.links} to="/cart">
                <ion-icon size="large" name="cart-outline"></ion-icon>
            </Link>
            
            {isAuthenticated &&
            
            <Link className={style.links} to="/profile">
                {user.name}
            </Link>
            }

            {isAuthenticated ?
                <LogoutButton className={style.links}/>
            :
                <LoginButton className={style.links}/>
            }
            

            
            
        </div>
    );
};

export default Navbar;