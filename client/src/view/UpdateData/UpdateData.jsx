import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import style from './UpdateData.module.css';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { getUsers } from '../../redux/actions';

const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;
const UPLOAD_PRESET_NAME = import.meta.env.VITE_UPLOAD_PRESET_NAME;

const UpdateData = () => {

    const { isAuthenticated, user } = useAuth0();
    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.users);
    const [uploadedImageUrl, setUploadedImageUrl] = useState();   

    useEffect(() => {
      if(!isAuthenticated) {
        window.location.href = "/"
      } else {
        dispatch(getUsers());
      }
    }, [isAuthenticated])

    const dataUser = () => {
      if(isAuthenticated && allUsers) {
          return allUsers.find((u) => u.email === user.email); 
      }
          return null;
    };

    const users = dataUser();

    const { id, name, surname, image } = users ?? {};

    const [data, setData] = useState({
      name: name,
      surname: surname,
      image: image,    
    });
    
    const changeHandler = (event) => {
      const { name, value } = event.target;
      setData(prevData => ({ ...prevData, [name]: value }));
    };

    const onDrop = async (acceptedFiles) => {
      const file = acceptedFiles[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', UPLOAD_PRESET_NAME);

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          formData
        );
        setUploadedImageUrl(response.data.secure_url);
      
        await axios.put(`http://localhost:3001/user/${id}`, { ...data, image: uploadedImageUrl });
        setData({
          name: data.name,
          surname: data.surname,
          image: uploadedImageUrl
        });
      } catch (error) {
        console.error(error);
        alert("Error al cargar la imagen");
      }
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const submitHandler =  async (event) => {
      event.preventDefault();
      
      await axios.put(`http://localhost:3001/user/${id}`,{ ...data, image:uploadedImageUrl});
      setData({
        name: data.name,
        surname: data.surname,
        image: uploadedImageUrl     
    });
    
        window.location.href = "/";
    };
 
  
    return (
        <div className={style.Background}>
            <div className={style.registration}>
                <div className={style.container}>
                    <h1 className={style.title1}>Update your data</h1>
                    <br />

                <div>
                    <div {...getRootProps()} className={style.fields1} >
                        <input {...getInputProps()}/>
                        {uploadedImageUrl ? (
                        <div className={style.conteinerImg}>
                            <img 
                            src={uploadedImageUrl} 
                            alt="Uploaded image, please click on Record Data" 
                            className={style.img}/>
                        </div>
                        ) : (
                        <div className={style.drop}>
                          <p className={style.textDrop}>Click here to load an image</p>
                        </div>
                        )}
                    </div>
                    <br></br>
                    </div>

                    <form onSubmit={submitHandler}>
                    
                        <div className={style.detailsPersonal}>
                            <span className={style.title}>Personal Details</span>
                            <div className={style.fields}>
                                <div>
                                    <label>Name</label>
                                    <input
                                    type="text"
                                    value={data.name}
                                    placeholder={"Write your name"}
                                    name="name"                      
                                    onChange={changeHandler}
                                    />
                                </div>

                                <div>
                                    <label>Surname</label>
                                    <input
                                    type="text"
                                    value={data.surname}
                                    placeholder={"Write your surname"}
                                    name="surname"                      
                                    onChange={changeHandler}
                                    />
                                </div>
                  
                            </div>
                                <div className={style.containerButton}>
                                {/* <button className={style.button} type="submit">
                                Record Data
                                <ion-icon name="person-add-outline" className={style.icon}></ion-icon>
                                </button> */}
                                <button 
                                className={style.iconRegisterButton} 
                                type="submit"
                                >Record Data 
                                <p className={style.guion}>__</p>      
                                <i className="fas fa-user">  </i>
                                </button>
                            </div>
                        </div>
                    
                </form>
            </div>
        </div>
    </div>
  );
}

export default UpdateData;

{/* <div>
                    <label>Email</label>
                    <input

                      type="email"
                      value={data.email}
                      placeholder="Enter your email"
                      required
                      name="email"
                      onChange={changeHandler}
                    ></input>
                  </div> */}