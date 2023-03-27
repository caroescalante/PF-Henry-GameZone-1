import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import style from '../RegistrationForm/RegistrationForm.module.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
// import { getUserUrlImage } from '../../redux/actions';
const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;
const UPLOAD_PRESET_NAME = import.meta.env.VITE_UPLOAD_PRESET_NAME;

const cookies = new Cookies();
// const dispatch = useDispatch()

const RegistrationForm = () => {

  const history = useHistory();

  const user = useSelector((state) => state.users);
  const image = useSelector((state)=> state.image)
  
  const [uploadedImageUrl, setUploadedImageUrl] = useState();


  const [data, setData] = useState({
    name: "",
    surname: "",
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
      phone: "",
      email: "",
      estado: "",
      rol:"",
      active: true,
    });
    history.push("/");
  };

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', UPLOAD_PRESET_NAME);
    
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          formData
        );
    
     setUploadedImageUrl(response.data.secure_url);
  };
  

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const [url, localUrl]= useState(uploadedImageUrl)


  
  return (
    <div className={style.user}>
      <div className={style.registration}>
        <div className={style.container}>
          <header>Update your data</header>
          <br />

         <div >
            <div {...getRootProps()} className={style.fields} >
               <input {...getInputProps()}/>
                 {uploadedImageUrl ? (
                  <img src={uploadedImageUrl} alt="Uploaded image" />
                 ) : (
                  <p>Drag and drop an image here or click to select an image</p>
                  )}
              </div>
          </div>

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
                  {/* <div>
                    <label>Estado</label>
                    <input
                      type="text"
                      value={data.active}
                      placeholder={cookies.get('active')}
                      name="active"                      
                      onChange={changeHandler}
                    ></input>
                  </div> */}
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
                  Fill in the data you want to update.
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