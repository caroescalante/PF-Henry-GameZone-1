// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import style from '../RegistrationForm/RegistrationForm.module.css';

function RegistrationForm() {

  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.users);
  // const history = useHistory();

  // const [data, setData] = useState({

  //   name: "",
  //   suename: "",
  //   image: "",
  //   phone: "",
  //   password: "",
  //   rol: "",
  //   email: "",
  //   active: true,

  // });

  // const changeHandler = (event) => {

  //   const {name, value} = event.target;
  //   setData ({...data, [name]: value});
  // };

  // const submitHandler = async (event) => {
    
  //   event.preventDefault();
    
  //   await axios.post(`http://localhost:3001/user${id}`, data)
  // };
  

  return (

    <div className={style.user}>
      <div className={style.registration}>
        <div className={style.container}>

          <header>Registration</header>

            <form action="#">
              <div className={style.formFirst}>             
                <div className={style.detailsPersonal}>

                  <span className={style.title}>Personal Details</span>

                  <div className={style.fields}>

                  <div>
                    <label>Names</label>
                    <input 
                    type="text" 
                    placeholder="Enter your name" 
                    required
                    ></input>
                  </div>

                  <div>
                    <label>Surnames</label>
                    <input 
                    type="text" 
                    placeholder="Enter your surname" 
                    required></input>
                  </div>

                  <div>
                    <label>Image  </label>
                    <input 
                    type="text" 
                    placeholder="Paste link photo URL" 
                    required></input>
                  </div>

                  <div>
                    <label>Phone</label>
                    <input 
                    type="text" 
                    placeholder="Enter your phone" 
                    required></input>
                  </div>

                  <div>
                    <label>Email</label>
                    <input 
                    type="text" 
                    placeholder="Enter your email" 
                    required></input>
                  </div>

                  <div>
                    <label>Estado</label>
                    <input 
                    type="email" 
                    placeholder="Enter your estado" 
                    required></input>
                  </div>

                  <div>
                    <label>Classification</label>
                    <input 
                    type="text" 
                    placeholder="Enter your rol" 
                    required></input>
                  </div>

                  <div>
                    <label>Password</label>
                    <input 
                    type="password" 
                    placeholder="Enter your password" 
                    required></input>
                  </div>                

                  </div>

                  <p className={style.note}>
                    If you are already registered and want to update your data, just fill in the data you want to update.
                  </p>

                  <div className={style.containerButton}>
                    <button 
                    className={style.button}>
                    Record Data
                    <ion-icon name="person-add-outline"></ion-icon>
                    </button>
                  </div>

                </div>
              </div>
            </form>      
        </div>
      </div>
    </div>
  )
}

export default RegistrationForm