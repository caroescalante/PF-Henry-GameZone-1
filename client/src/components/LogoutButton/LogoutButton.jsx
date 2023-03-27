import {useAuth0} from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import style from './LogoutButton.module.css';

const LogoutButton = () => {
    
    const {logout} = useAuth0();

    return (
        <Link className={style.login} onClick={() => logout()} to="">
            <ion-icon size="large" name="log-out-outline"></ion-icon>
        </Link>
    );
};

export default LogoutButton