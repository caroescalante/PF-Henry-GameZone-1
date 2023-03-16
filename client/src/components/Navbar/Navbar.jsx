import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../Image/logo.png";
import SearchBar from '../../components/Searchbar/Searchbar';

const Navbar = () => {
    return (
        <div className={style.navbarContainer}>
            <a href="/" className={style.image}>
                <img
                src={logo}
                alt="init"
                width="300px"
                />
            </a>

            <SearchBar />
            
            <Link className={style.links} to="/login">LOGIN</Link>

            
            
        </div>
    );
};

export default Navbar;