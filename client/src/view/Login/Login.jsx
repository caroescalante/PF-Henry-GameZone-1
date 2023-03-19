import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUsers } from '../../redux/actions';
import style from '../Login/Login.module.css';
import axios from 'axios';

const Login = () => {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const history = useHistory();

  const [cleanEmail, setCleanEmail] = useState('');
  const [cleanPassword, setCleanPassword] = useState('');

  const [data, setData] = useState({

    email: "",
    password: ""

  })

  const changeHandler = (event) => {

    const {name, value} = event.target;   
    setData ({...data, [name]:value});
  }

  const checkUser = useCallback(() => {
    dispatch(getUsers());
    return users.some(user => user.email === data.email );
  }, [dispatch, getUsers, users, data.email]);

  const checkPassword = useCallback(() => {
    dispatch(getUsers());
    return users.some(user => user.email === data.email && user.password !== data.password);
  }, [dispatch, getUsers, users, data.email, data.password])

  const submitHandler = async (event) => {
    event.preventDefault();
    const userExists = checkUser();
    const correctKey = checkPassword();
    if (userExists) {
      if(correctKey) {
        alert ("Incorrect password !");
        setCleanEmail('');
        setCleanPassword('');
      } else {
        history.push("/");
      }        
    } else {
      await axios.post('http://localhost:3001/user', data)
      setData({
        email: "",
        password: ","
      })
      history.push("/registration");
    };
  };

  return (
    
      <div className={style.init}>
        <div className={style.value}>
          <div className={style.form}> 
            <form onSubmit={submitHandler}>

            <h2 className={style.text}>Login</h2>
    
            <div className={style.inputbox}>

              <ion-icon name="mail-outline"></ion-icon>

              <input 
                className={style.inputbox2} 
                onChange={changeHandler}                             
                type="email" 
                name="email"
                required 
              />
              
              <label 
                className={style.label} 
                for="email"
                >Email
              </label>

            </div>

            <div className={style.inputbox}>

              <ion-icon name="lock-closed-outline"></ion-icon>

              <input 
                onChange={changeHandler}               
                className={style.inputbox2} 
                type="password"
                name="password"
                required
              />

              <label 
                className={style.label} 
                for="password"
                >Password
              </label>

            </div>

            
            <div className={style.forget}>

              <label for="remenber">
                
              <input 
                type="checkbox"
                id="remenber"
              />
              Remenber Me  
              <a className={style.a}>
                Forget Password
              </a>
              
              </label>

            </div>
            

            <button 
            className={style.button} 
            type="submit">
            Log in
            </button>

            <div className={style.register}>

              <p>Don`t have a account <a href='/registration'>Register</a></p>

            </div>
            

            </form>
          </div>
        </div>
      </div>
      
  )
};

export default Login;