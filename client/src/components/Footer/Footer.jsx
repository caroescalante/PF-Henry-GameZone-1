import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom"
import logo from "../../Image/logo.png";

const Footer = () => {
    return(
        <div>
            <footer className={style.footer}>
            
            <div className={style.divFirst}>
    
                <Link to="/"><img src={logo} alt="init" width="300px"/></Link>

            <div className={style.linkFooter}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/news">News</Link>
                <Link to="/community">Community</Link>
            </div>

            <div className={style.networks}>
                <Link to="/" className="fa fa-github"></Link>
            </div>
                
            </div>

            <div className={style.copy}>
                <p>© 2023 Copyright: Henry-GameZone - All rights reserved.</p>
            </div>

            </footer>
        </div>
    );
};

export default Footer;