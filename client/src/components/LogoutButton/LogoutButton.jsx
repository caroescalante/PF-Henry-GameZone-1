import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useAuth0} from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { clearDetail } from '../../redux/actions';
import style from './LogoutButton.module.css';
import axios from 'axios';

const LogoutButton = () => {
    const favorites = useSelector(state => state.favorites);
    const userId = useSelector(state => state.emailUser?.variable?.id);

    const dispatch = useDispatch();
    const {logout} = useAuth0();

    useEffect(()=>{
        dispatch(clearDetail())
   },[])
    
   const logoutButtonHandler = async () => {
        //if (userId) await axios.put(`http://localhost:3001/user/favorites/${userId}`, favorites);
        logout();
   };

    return (
        <Link className={style.login} onClick={logoutButtonHandler} to="">
            <ion-icon size="large" name="log-out-outline"></ion-icon>
        </Link>
    );
};

export default LogoutButton