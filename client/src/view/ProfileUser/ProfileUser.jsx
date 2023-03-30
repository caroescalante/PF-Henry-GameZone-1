import React, { useEffect } from "react";
import style from "./ProfileUser.module.css";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { emailUser } from "../../redux/actions";



const ProfileUser = () => {

  const stateEmail = useSelector((state) => state.emailUser)

  const dispatch = useDispatch();

  const {
    name,
    email,
    image,
    surname,
    phone } = stateEmail.variable;

    useEffect(() => {
        dispatch(emailUser(stateEmail.email))
    }, [dispatch, stateEmail.email])



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