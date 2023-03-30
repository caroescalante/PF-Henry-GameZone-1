import React, { useState,useEffect } from 'react';
import { useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import style from './UpdateData.module.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { emailUser } from '../../redux/actions';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';

const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;
const UPLOAD_PRESET_NAME = import.meta.env.VITE_UPLOAD_PRESET_NAME;
const cookies = new Cookies();


const UpdateData = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const estadoEmail= useSelector((state)=>state.emailUser)
  const { email } = useParams();

  
  useEffect(() => {
    dispatch(emailUser(email));
    return () => {
      dispatch(getClean()); // limpia el state
    }
  }, [dispatch, email]);

  const { user, isAuthenticated } = useAuth0();
  
  const [uploadedImageUrl, setUploadedImageUrl] = useState();
  console.log(estadoEmail);

  const {
    image,
    name,
    password,
    phone,
    surname } = estadoEmail.variable;

  const [data, setData] = useState({
    name: name,
    surname: surname,
    image: image,
    phone: phone,
    email: estadoEmail.email,
    password: password
  });
  console.log(data.email);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
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
  
console.log(estadoEmail.email);
  const submitHandler =  async (event) => {
    event.preventDefault();
    await axios.put(`http://localhost:3001/user/${email}`, {...data, image: uploadedImageUrl});
    setData({
      name: "",
      surname: "",
      phone: "",
      email: email,
      password:""
    });
    history.push("/");
  };
  
  
  return (
    <div className={style.user}>
      <div className={style.registration}>
        <div className={style.container}>
          <header>Update your data</header>
          <br />

          <div>
            <div {...getRootProps()} className={style.fields} >
              <input {...getInputProps()}/>
              {uploadedImageUrl ? (
                <img src={uploadedImageUrl} alt="Uploaded image, please click on Record Data"  />
              ) : (
                <p>Drag and drop an image here or click to select an image</p>
              )}
            </div>
            <br></br>
          </div>

          <form onSubmit={submitHandler}>
            <div className={style.formFirst}>
              <div className={style.detailsPersonal}>
                <span className={style.title}>Personal Details</span>
                <div className={style.fields}>
                  <div>
                    <label>Name</label>
                    <input
                      type="text"
                      value={data.name}
                      placeholder={cookies.get('name')}
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
                      name="phone"                      
                      onChange={changeHandler}
                    ></input>
                  </div>
                  
                  <div>
                    <label>Email</label>
                    <input

                      type="email"
                      value={user.email}
                      placeholder="Enter your email"
                      required
                      name="email"
                      onChange={changeHandler}
                    ></input>
                  </div>
                  
                </div>
                <p className={style.note}>
                  Complete your email to save the changes.
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

export default UpdateData;

