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
      {/* <header>Registration</header> */}

        {/* <form action="#">
          <div className={style.formFirst}>

          </div>

        </form> */}
      

    </div>
  )
}

export default RegistrationForm