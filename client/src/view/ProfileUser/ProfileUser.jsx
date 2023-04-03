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
        <div className={style.Background}>
            <div className={style.container}>
                 <div className={style.card}>
                    <h1 className={style.title}>Your Profile</h1>
                 <div className={style.containerData}>
                        { stateEmail.email && (
                    <div> 
                        <div className={style.containerImage}>
                            <img className={style.image} src={image} alt=""/>
                         </div>  
                            <br/>
                            <h2>Name: {name} </h2>
                            <br/>
                            <h2>Email: {email}</h2>
                            <br />
                            
                    </div>
                    )}
                    
                   
        
                    <div>
                        <Link to={"/update/" + email}>
                        <button className={style.iconRegisterButton}><i className="fas fa-edit"></i></button> 
                        </Link>

                     
                    </div>
                 </div>
                 </div>
            </div>
        </div>
    )  
};

export default ProfileUser;