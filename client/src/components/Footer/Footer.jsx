import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
    return(
        <div>

            <script src="https://kit.fontawesome.com/bd2e6ad733.js" crossorigin="anonymous"></script>

            <footer class="footer">
            
            <div class="divFirst">
    
                <a href="/">
                <img src="src/image/logo.png" alt="init" width="300px"/>
                </a> 

                <div class="linkFooter">
                    <a href="/"> Home </a>
                    <a href="/about"> About </a>
                    <a href="/news"> News </a>
                    <a href="/contact"> Contact us </a>
                </div>
                
            </div>

            <div class="networks">
                <a href="#" class="fa fa-github"></a>
            </div>

            <div class="copy">
                <p>© 2023 Copyright: Henry-GameZone - All rights reserved.</p>
            </div>

            </footer>

            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </div>
    );
};

export default Footer;