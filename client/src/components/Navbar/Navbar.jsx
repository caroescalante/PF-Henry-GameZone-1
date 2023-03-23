import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
import style from "./Navbar.module.css";
import logo from "../../Image/logo.png";
import { clearDetail } from "../../redux/actions";





const Navbar = () => {

    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();
    const cookies = new Cookies();

    useEffect(() =>{

        const name = cookies.get("name"); 
        if(name) {
            setUserName(name);
        }
    },[]);    

    const closeSession = () => {
        cookies.remove('id', 'name', 'email', { path: '/' });
        dispatch(clearDetail());
        setUserName("")
    }

    const isAdmin = cookies.get("rol") === "admin";

    return (
        <div className={style.navbarContainer}>
            <Link to="/" className={style.image} onClick={() => dispatch(clearDetail())}>
                <img src={logo} alt="init" width="300px" />
            </Link>

            {(userName && isAdmin) && (
            <>
            <Link className={style.links} to="/create">
                <ion-icon size="large" name="game-controller-outline"></ion-icon>
            </Link>

            <Link className={style.links} to="/registration">
                <ion-icon size="large" name="create-outline"></ion-icon>
            </Link>
            </>
            )}

            <Link className={style.links} to="/">
                <ion-icon size="large" name="diamond-outline"></ion-icon>
            </Link>

            <Link className={style.links} to="/">
                <ion-icon size="large" name="cart-outline"></ion-icon>
            </Link>           

            {userName? (
            <>
                <h3 className={style.name}>Hello {userName}!</h3>
                <Link className={style.links} to="/login" onClick={closeSession}>
                    <ion-icon size="large" name="log-out-outline"></ion-icon>
                </Link>
            </>
          ) : (
            <Link className={style.links} to="/login">
                <ion-icon size="large" name="person-outline"></ion-icon>
            </Link>
          )}
        
            
        </div>
    );
};

export default Navbar;


// console.log('id:'+ cookies.get('id'));
    // console.log('name:'+ cookies.get('name'));
    // console.log('email:'+ cookies.get('email'));
    // console.log('surname:'+ cookies.get('surname'));
    // console.log('image:'+ cookies.get('image'));
    // console.log('phone:'+ cookies.get('phone'));
    // console.log('password:'+ cookies.get('password'));
    // console.log('rol:'+ cookies.get('rol'));
    // console.log('active:'+ cookies.get('active'));