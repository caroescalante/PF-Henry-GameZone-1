import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../Image/logo.png";
import { clearDetail } from "../../redux/actions";
import { useDispatch } from 'react-redux';

import Cookies from 'universal-cookie';

const cookies = new Cookies();

const Navbar = () => {

    const dispatch = useDispatch();

    // console.log('id:'+ cookies.get('id'));
    // console.log('name:'+ cookies.get('name'));
    // console.log('email:'+ cookies.get('email'));
    // console.log('surname:'+ cookies.get('surname'));
    // console.log('image:'+ cookies.get('image'));
    // console.log('phone:'+ cookies.get('phone'));
    // console.log('password:'+ cookies.get('password'));
    // console.log('rol:'+ cookies.get('rol'));
    // console.log('active:'+ cookies.get('active'));

    const closeSession = () => {

        cookies.remove('id', {path: "/"});
        cookies.remove('name', {path: "/"});
        cookies.remove('email', {path: "/"});
        dispatch(clearDetail());

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

            
            <Link className={style.links} to="/login" onClick={closeSession}>
                <ion-icon size="large" name="log-out-outline"></ion-icon>
            </Link>
            
        </div>
    );
};

export default Navbar;