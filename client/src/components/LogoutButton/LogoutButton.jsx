import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {useAuth0} from '@Auth0/auth0-react';
import { Link } from 'react-router-dom';
import { clearDetail } from '../../redux/actions';
import style from './LogoutButton.module.css';

const LogoutButton = () => {
    
    const dispatch = useDispatch();
    const {logout} = useAuth0();

    useEffect(()=>{
        dispatch(clearDetail())
   },[])
    

    return (
        <Link className={style.login} onClick={() => logout()} to="">
            <ion-icon size="large" name="log-out-outline"></ion-icon>
        </Link>
    );
};

export default LogoutButton