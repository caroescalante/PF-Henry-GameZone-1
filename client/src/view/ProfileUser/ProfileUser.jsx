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
            <div>
                <div className={style.container}>
                        <header className={style.title}>Your Profile</header>
                     <br/>
  
                    <div className={style.containerData}>
                        { stateEmail.email && (
                            <div> 
                            <img className={style.image} src={image} alt=""/>
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
                    
                   
        
                    <div>
                        <Link to={"/update/" + email}>
                        <button className={style.iconRegisterButton}><i class="fas fa-edit"></i></button> 
                        </Link>

                     
                    </div>
                </div>
                </div>
            </div>
        </div>
    )  
};

export default ProfileUser;