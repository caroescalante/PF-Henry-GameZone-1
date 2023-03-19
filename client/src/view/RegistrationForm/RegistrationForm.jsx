import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import style from '../RegistrationForm/RegistrationForm.module.css';
import axios from 'axios';

const RegistrationForm = () => {

   
  const history = useHistory();

  const user = useSelector((state) => state.users);
  

  const [data, setData] = useState({
    name: "",
    surname: "",
    image: "",
    phone: "",
    password: "",
    rol: "",
    email: "",
    active: true,
  });

  

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  // const submitHandler = async (event) => {
    
  //   event.preventDefault();

  //   const userToUpdate = users.find((u) => u.email === data.email);

  //   if(userToUpdate) {    
  //   await axios.put(`http://localhost:3001/user/${userToUpdate.id}`, data);
  //   setData({
  //     name: "",
  //     suename: "",
  //     image: "",
  //     phone: "",
  //     password: "",
  //     rol: "",
  //     email: "",
  //     active: true,
  //   })
  //   alert("datos actualizados");
  //   history.push("/");
  //   }
  // };

  const submitHandler = async (event) => {
    event.preventDefault();
    await axios.post(`http://localhost:3001/user/${user.id}`, data);
    setData({
      name: "",
      surname: "",
      image: "",
      phone: "",
      email: "",
      estado: ""
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
                    <label>Names</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                      name="name"
                      value={data.name}
                      onChange={changeHandler}
                    ></input>
                  </div>
                  <div>
                    <label>Surnames</label>
                    <input
                      type="text"
                      placeholder="Enter your surname"
                      required
                      name="surname"
                      value={data.surname}
                      onChange={changeHandler}
                    ></input>
                  </div>
                  <div>
                    <label>Image</label>
                    <input
                      type="text"
                      placeholder="Paste link photo URL"
                      name="image"
                      value={data.image}
                      onChange={changeHandler}
                    ></input>
                  </div>
                  <div>
                    <label>Phone</label>
                    <input
                      type="text"
                      placeholder="Enter your phone"
                      required
                      name="phone"
                      value={data.phone}
                      onChange={changeHandler}
                    ></input>
                  </div>
                  <div>
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      name="email"
                      value={data.email}
                      onChange={changeHandler}
                    ></input>
                  </div>
                  <div>
                    <label>Estado</label>
                    <input
                      type="text"
                      placeholder="Enter your estado"
                      name="active"
                      value={data.active}
                      onChange={changeHandler}
                    ></input>
                  </div>
                  <div>
                    <label>Classification</label>
                    <input
                      type="text"
                      placeholder="Enter your rol"
                      name="rol"
                      value={data.rol}
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

// const submitHandler = async (event) => {
  //   event.preventDefault();
  
  //   const { email } = data;
  //   const userToUpdate = user.find((u) => u.email === email);
  
  //   if (userToUpdate) {
  //     const updatedUser = {
  //       ...userToUpdate,
  //       name: data.name || userToUpdate.name,
  //       suename: data.suename || userToUpdate.suename,
  //       image: data.image || userToUpdate.image,
  //       phone: data.phone || userToUpdate.phone,
  //       password: data.password || userToUpdate.password,
  //       rol: data.rol || userToUpdate.rol,
  //       active: data.active || userToUpdate.active,
  //     };
  //     await axios.put(`http://localhost:3001/user/${userToUpdate.id}`, updatedUser);
  //     alert("datos actualizados");
  //     history.push("/");
  //   }
  // };