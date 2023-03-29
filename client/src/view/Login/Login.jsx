import GoogleLogin from 'react-google-login'
import { gapi } from 'gapi-script';
import style from '../Login/Login.module.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';



const Login = () => {

  const history = useHistory();

  const clientID = "588823269366-10q37of6mm1ic18o1v4fmm9t2kplq6nb.apps.googleusercontent.com";

  const [user, setUser] = useState({});

  useEffect(()=> {

    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      })
    }
    gapi.load("client:auth2", start)
  },[])

  const changeHandler = () => {

  };

  const submitHandler = () => {

  }

  const onSuccess = (response) => {
    setUser(response.profileObj);
    history.push("/profile")

  }



    return (

      <div className={style.init}>
        <div className={style.value}>
          <div className={style.form}> 
            <form onSubmit={submitHandler}>

            <h2 className={style.text}>Login</h2>

            <div className={style.inputbox}>

            <ion-icon name="person-outline"></ion-icon>

              <input 
                className={style.inputbox2} 
                onChange={changeHandler}                             
                type="name" 
                name="name"
                required 
              />
              
              <label 
                className={style.label} 
                >User Name
              </label>

            </div>
    
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
                >Password
              </label>

            </div>

            
            <div className={style.forget}>

              <label htmlFor="remenber">
                
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

            <GoogleLogin
            className={style.google}
            clientId = {clientID} 
            buttonText = "Iniciar sesión" 
            onSuccess = { onSuccess }
            isSignedIn = { true } 
            to="/registration"
            cookiePolicy = { 'single_host_origin' } />


            <div className={user? "profile": "hidden"}>
              <h3>{user.name}</h3>
            </div>

            <div className={style.register}>

              <p>Don`t have a account <a href='/registration'>Register</a></p>

            </div>
            

            </form>
          </div>
        </div>
      </div>
      
  );
    
};

export default Login;





// import React, { useState, useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { getUsers } from '../../redux/actions';
// import style from '../Login/Login.module.css';
// import axios from 'axios';
// import Cookies from 'universal-cookie';
// import Swal from 'sweetalert2';
// import GoogleLogin from 'react-google-login'



// const Login = () => {

//   // const dispatch = useDispatch();
//   const users = useSelector((state) => state.users);
//   const history = useHistory();
//   const cookies = new Cookies();

//   const [data, setData] = useState({

//     name:"",
//     email: "",
//     password: ""
//   })

//   const changeHandler = (event) => {

//     const {name, value} = event.target;   
//     setData ({...data, [name]:value});   
//   }

//   const checkUser = useCallback(() => {
//     dispatch(getUsers());
//     return users.some(user => user.name === data.name || user .email === data.email || user.id );
//   }, [dispatch,getUsers, users, data.name, data.email, users.id]);

//   const checkPassword = useCallback(() => {
//     dispatch(getUsers());
//     return users.some(user => user.email === data.email && user.password !== data.password);
//   }, [dispatch, getUsers, users, data.email, data.password])


//   //iniciar sesion 
//   const submitHandler = async (event) => {
//     event.preventDefault();
//     const userExists = checkUser();
//     const correctKey = checkPassword();
//     if (userExists) {

//       const foundUser = users.find((user) => 
//           user.id || user.email || user.name || user.surname || user.image || user.phone || user.password || user.rol || user.active );

//         cookies.set('id', foundUser.id, {path: "/"});
//         cookies.set('name', foundUser.name, {path: "/"});
//         cookies.set('email', foundUser.email, {path: "/"});
//         cookies.set('surname', foundUser.surname, {path: "/"});
//         cookies.set('image', foundUser.image, {path: "/"});
//         cookies.set('phone', foundUser.phone, {path: "/"});
//         cookies.set('password', foundUser.password, {path: "/"});
//         cookies.set('rol', foundUser.rol, {path: "/"});
//         cookies.set('active', foundUser.active, {path: "/"});       

//       if(correctKey) {
//         // alert ("Incorrect password !");     
//       Swal.fire({
//       icon: 'error',
//       title: 'Oops...',
//       text: 'Incorrect password !',
//       backdrop: 'rgba(0, 0, 0, 0.8)',
//       confirmButtonText: 'Try again',
//       confirmButtonColor: '#FF0000',
//       confirmButtonTextColor: '#FFFFFF'
//       });
//         setData({email: "", password: ""});
        
//       } else {
        
//         history.push("/");
//         // alert (`Welcome ${data.name}`)
//         Swal.fire({
//           icon: 'success',
//           title: `¡Welcome ${data.name}!`,
//           text: 'Thank you for using our service.',
//           confirmButtonText: 'Ok',
//           confirmButtonColor: '#00FFFF',
//           backdrop: 'rgba(0, 0, 0, 0.5)',
//           timer: '5000'
//         });
//       }       
      
//     } else {
//       await axios.post('http://localhost:3001/user', data)
//       setData({
//         name:"",
//         email: "",
//         password: ""
//       })
//       history.push("/registration");
//     };
//   };

//   const responseGoogle = (response) => {
//     console.log(response);
//   };

//   return (
    
//       <div className={style.init}>
//         <div className={style.value}>
//           <div className={style.form}> 
//             <form onSubmit={submitHandler}>

//             <h2 className={style.text}>Login</h2>

//             <div className={style.inputbox}>

//             <ion-icon name="person-outline"></ion-icon>

//               <input 
//                 className={style.inputbox2} 
//                 onChange={changeHandler}                             
//                 type="name" 
//                 name="name"
//                 required 
//               />
              
//               <label 
//                 className={style.label} 
//                 >User Name
//               </label>

//             </div>
    
//             <div className={style.inputbox}>

//               <ion-icon name="mail-outline"></ion-icon>

//               <input 
//                 className={style.inputbox2} 
//                 onChange={changeHandler}                             
//                 type="email" 
//                 name="email"
//                 required 
//               />
              
//               <label 
//                 className={style.label} 
//                 >Email
//               </label>

//             </div>

//             <div className={style.inputbox}>

//               <ion-icon name="lock-closed-outline"></ion-icon>

//               <input 
//                 onChange={changeHandler}               
//                 className={style.inputbox2} 
//                 type="password"
//                 name="password"
//                 required
//               />

//               <label 
//                 className={style.label} 
//                 >Password
//               </label>

//             </div>

            
//             <div className={style.forget}>

//               <label htmlFor="remenber">
                
//               <input 
//                 type="checkbox"
//                 id="remenber"
//               />
//               Remenber Me  
//               <a className={style.a}>
//                 Forget Password
//               </a>
              
//               </label>

//             </div>
            

//             <button 
//             className={style.button} 
//             type="submit">
//             Log in
//             </button>

//             <GoogleLogin
//             clientId = "588823269366-10q37of6mm1ic18o1v4fmm9t2kplq6nb.apps.googleusercontent.com" 
//             buttonText = "Iniciar sesión" 
//             onSuccess = { responseGoogle } 
//             onFailure = { responseGoogle } 
//             cookiePolicy = { 'single_host_origin' } />

//             <div className={style.register}>

//               <p>Don`t have a account <a href='/registration'>Register</a></p>

//             </div>
            

//             </form>
//           </div>
//         </div>
//       </div>
      
//   );
// };

// export default Login;