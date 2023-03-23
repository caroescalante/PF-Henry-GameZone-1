import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import style from '../RegistrationForm/RegistrationForm.module.css';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const RegistrationForm = () => {

  const history = useHistory();

  const user = useSelector((state) => state.users);
  
  const [data, setData] = useState({
    name: "",
    surname: "",
    image: "",
    phone: "",
    rol: "",
    email: "",
    active: true,
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    await axios.put(`http://localhost:3001/user/${cookies.get('id')}`, data);
    setData({
      name: "",
      surname: "",
      image: "",
      phone: "",
      email: "",
      estado: "",
      rol:"",
      active: true,
    });
    history.push("/");
  };
  
  return (
    <div className={style.user}>
      <div className={style.registration}>
        <div className={style.container}>
          <header>Registration</header>
          <form onSubmit={submitHandler}>
            <div className={style.formFirst}>
              <div className={style.detailsPersonal}>
                <span className={style.title}>Personal Details</span>
                <div className={style.fields}>
                <div>
                    <label>Number User</label>
                    <input
                      type="text"
                      value={cookies.get('id')}
                      required
                      name="id"                      
                      onChange={changeHandler}
                    ></input>
                  </div>
                  <div>
                    <label>Names</label>
                    <input
                      type="text"
                      value={data.name}
                      placeholder={cookies.get('name')}
                      required
                      name="name"                      
                      onChange={changeHandler}
                    ></input>
                  </div>
                  <div>
                    <label>Surname</label>
                    <input
                      type="text"
                      value={data.surname}
                      placeholder={cookies.get('surname')}
                      required
                      name="surname"                      
                      onChange={changeHandler}
                    ></input>
                  </div>
                  <div>
                    <label>Image</label>
                    <input
                      type="text"
                      value={data.image}
                      placeholder={cookies.get('image')}
                      name="image"                      
                      onChange={changeHandler}
                    ></input>
                  </div>
                  <div>
                    <label>Phone</label>
                    <input
                      type="text"
                      value={data.phone}
                      placeholder={cookies.get('phone')}
                      required
                      name="phone"                      
                      onChange={changeHandler}
                    ></input>
                  </div>
                  <div>
                    <label>Email</label>
                    <input
                      type="email"
                      value={cookies.get('email')}
                      placeholder="Enter your email"
                      required
                      name="email"
                      onChange={changeHandler}
                    ></input>
                  </div>
                  <div>
                    <label>Estado</label>
                    <input
                      type="text"
                      value={data.active}
                      placeholder={cookies.get('active')}
                      name="active"                      
                      onChange={changeHandler}
                    ></input>
                  </div>
                  <div>
                    <label>Classification</label>
                    <input
                      type="text"
                      value={data.rol}
                      placeholder={cookies.get('rol')}
                      name="rol"                      
                      onChange={changeHandler}
                    ></input>
                  </div>
                  
                </div>
                <p className={style.note}>
                  If you are already registered and want to update your data, just fill in the data you want to update.
                </p>
                <div className={style.containerButton}>
                  <button className={style.button} type="submit">
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
  );
}

export default RegistrationForm;

  //   console.log('id:'+ cookies.get('id'));
  //   console.log('name:'+ cookies.get('name'));
  //   console.log('email:'+ cookies.get('email'));
  //   console.log('surname:'+ cookies.get('surname'));
  //   console.log('image:'+ cookies.get('image'));
  //   console.log('phone:'+ cookies.get('phone'));
  //   console.log('password:'+ cookies.get('password'));
  //   console.log('rol:'+ cookies.get('rol'));
  //   console.log('active:'+ cookies.get('active'));