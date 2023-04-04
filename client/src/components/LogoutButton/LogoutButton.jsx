import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useAuth0} from '@Auth0/auth0-react';
import { Link } from 'react-router-dom';
import { clearDetail, cleanFavorites } from '../../redux/actions';
import style from './LogoutButton.module.css';
import axios from 'axios';

const LogoutButton = () => {
    const favorites = useSelector(state => state.favorites);
    const email = useSelector(state => state.emailUser?.email);

    const dispatch = useDispatch();
    const {logout} = useAuth0();

    useEffect(()=>{
        dispatch(clearDetail())
   },[])
    
   const logoutButtonHandler = () => {
        axios.post(`http://localhost:3001/user/favorites/${email}`, {favorites: favorites});
        dispatch(cleanFavorites());
        logout();
   };

    return (
        <Link className={style.login} onClick={logoutButtonHandler} to="">
            <ion-icon size="large" name="log-out-outline"></ion-icon>
        </Link>
    );
};

export default LogoutButton