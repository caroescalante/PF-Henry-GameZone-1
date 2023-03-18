import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../Image/logo.png";
import SearchBar from '../../components/Searchbar/Searchbar';
import { clearDetail } from "../../redux/actions";

const Navbar = () => {
    return (
        <div className={style.navbarContainer} >
            <a href="/" className={style.image} onClick={clearDetail()}>
                <img
                src={logo}
                alt="init"
                width="300px"
                />
            </a>

            <SearchBar />

            <Link className={style.links} to="/create">
                <ion-icon size="large" name="game-controller-outline"></ion-icon>            
            </Link>

            <Link className={style.links} to="/">
                <ion-icon size="large" name="cart-outline"></ion-icon>
            </Link>
           
            <Link className={style.links} to="/login">
                <ion-icon size="large" name="person-outline" ></ion-icon>
            </Link>

            
            

            
            
        </div>
    );
};

export default Navbar;