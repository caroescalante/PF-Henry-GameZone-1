import React, { useState, useEffect } from "react";
import { useAuth0 } from "@Auth0/auth0-react";
import style from "./ProfileUser.module.css";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { emailUser } from "../../redux/actions";



const ProfileUser = () => {

  const { user, isAuthenticated } = useAuth0();
  const stateEmail = useSelector((state) => state.emailUser)
  console.log(stateEmail);

  const dispatch = useDispatch();
//   const [email, setEmail] = useState("");

const {
    name,
    email,
    image,
    surname,
    phone } = stateEmail.variable;

    useEffect(() => {
        dispatch(emailUser(stateEmail.email))
    }, [dispatch, stateEmail.email])

//   useEffect(() => {
//     if (isAuthenticated) {
//       setEmail(user.email);
//     }
//   }, [isAuthenticated, user.email]);



  console.log(stateEmail);

    return ( 
        <div className={style.user}>
            <div className={style.registration}>
                <div className={style.container}>
                     <header>Your Profile</header>
                     <br/>
  
                    <div>
                        { stateEmail.email && (
                        <div> 
                            <img src={image} alt=""/>
                            <br/>
                            <h2>Name: {name} </h2>
                            <br/>
                            <h2>Surname: {surname}</h2>
                            <br />
                            <h2>Email: {email}</h2>
                            <br />
                            <h2>Phone: {phone}</h2>
                            <br />
                        </div>
                        )}
                    </div>
                   
        
                    <div>
                        <Link className={style.links} to={"/update/" + email}>
                            <ion-icon size="large" name="create-outline"></ion-icon>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )  
};

export default ProfileUser;