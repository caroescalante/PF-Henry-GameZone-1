import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useAuth0} from '@Auth0/auth0-react';
import { Link } from 'react-router-dom';
import { clearDetail, cleanFavorites, clearUserEmail } from '../../redux/actions';
import style from './LogoutButton.module.css';
import axios from 'axios';

const LogoutButton = () => {
    const { user, isAuthenticated } = useAuth0();
    const favorites = useSelector(state => state.favorites);
    //const email = useSelector(state => state.emailUser?.email);
    const allUsers = useSelector(state => state.users);
    const dispatch = useDispatch();
    const {logout} = useAuth0();

    const data = () => {
        if (isAuthenticated && allUsers) return allUsers.find((u) => u.email === user.email);
        return null;
    };

    const finalUser = data();
    const email = finalUser?.email;

    useEffect(()=>{
        dispatch(clearDetail())
        dispatch(clearUserEmail())
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