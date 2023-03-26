// import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
// import style from "./CreateGameForm.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { getGenres, getPlatforms } from "../../redux/actions/index";
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const validate = (form) => {
//   let errors = {};

//   if (!form.name) {
//     errors.name = "the name is required";
//   } else if (form.name.length < 3) {
//     errors.name = "the name must have at least 3 characters";
//   };

//   if (!form.image) {
//     errors.image = "the image is required";
//   } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(form.image)) {
//     errors.image = "the image must be a url";
//   };

//   if (!form.price) {
//     errors.price = "the price is required";
//   } else if (form.price < 0) {
//     errors.price = "price must be greater than 0";
//   } else if (!/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/.test(form.price)) {
//     errors.price = "price must be a number";
//   }; 

//   if (!form.rating) {
//     errors.rating = "the rating is required";
//   } else if (form.rating < 0 || form.rating > 5) {
//     errors.rating = "the rating must be between 0 and 5";
//   } else if (!/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/.test(form.rating)) {
//     errors.rating = "rating must be a number";
//   }; 

//   if (!/^(ftp|http|https):\/\/[^ "]+$/.test(form.website)) {
//     errors.website = "the website must be a url";
//   };

//   if (!/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/.test(form.released)) {
//     errors.released = "date must be in the format yyyy-mm-dd";
//   };

//   if (!form.description) {
//     errors.description = "the description is required";
//   };

//   if (form.genres.length === 0) {
//     errors.genres = "must have at least one gender";
//   };

//   if (!form.platforms.length) {
//     errors.platforms = "must have at least one platform";
//   };
//   return errors;
// };

// function CreateGameForm() {
//   const dispatch = useDispatch();
//   const platformsRaw = useSelector(state => state.platforms);
//   //const platformSelect=[{value: 'pruebaPlat', label: 'pruebaPlat'},{value: 'pruebaPlat1', label: 'pruebaPlat1'}];
//   const platformSelect=[];
//   platformsRaw.map((t)=> {platformSelect.push({ value: t.name, label: t.name })});
//   console.log('platforms', platformSelect);
//   const [selectedOptionP, setSelectedOptionP] = useState(null);
//   console.log('estad', selectedOptionP);
//   const genres = useSelector(state => state.genres);
//   //const genresSelect=[{value: 'pruebaGen', label: 'pruebaGen'},{value: 'pruebaGen1', label: 'pruebaGen1'}];
//   const genresSelect=[];
//   genres.map((t)=> {genresSelect.push({ value: t.name, label: t.name })});
//   console.log('genres', genresSelect);
//   const [selectedOptionG, setSelectedOptionG] = useState(null);
//   console.log('estad2', selectedOptionG);
//   const platforms = platformsRaw.map(platform => platform.name);

//   const [form, setForm] = useState({
//     name: "",
//     image: "",
//     price: "",
//     rating: "",
//     website: "",
//     released: "",
//     description: "",
//     genres: [],
//     platforms: [],
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     image: "",
//     price: "",
//     rating: "",
//     website: "",
//     released: "",
//     description: "",
//     genres: null,
//     platforms: null,
//   });

//   const [focus, setFocus] = useState({
//     name: "",
//     image: "",
//     price: "",
//     rating: "",
//     website: "",
//     released: "",
//     description: "",
//   });

//   const inputChangeHandler = (event) => {
//     const property = event.target.name;
//     const value = event.target.value;
//     const typeInput = event.target.type;
//     const idInput = event.target.id;

//     // if (typeInput === "checkbox") {
//     //   if (property === "genre") {
//     //     if (event.target.checked === true) {
//     //       setForm({...form, genres: [...form.genres, idInput]});
//     //       setErrors(validate({...form, genres: [...form.genres, idInput]}));
//     //     } else {
//           // setForm({...form, genres: form.genres.filter(elem => elem !== idInput)});
//           // setErrors(validate({...form, genres: form.genres.filter(elem => elem !== idInput)}));
//       //   };
//       // } else {
//       //   if (event.target.checked === true) {
//       //     setForm({...form, platforms: [...form.platforms, idInput]});
//       //     setErrors(validate({...form, platform: [...form.platforms, idInput]}));
//       //   } else {
//           // setForm({...form, platforms: form.platforms.filter(elem => elem !== idInput)});
//           // setErrors(validate({...form, platforms: form.platforms.filter(elem => elem !== idInput)}));
//     //     };
//     //   };
//     // } else {
//       setForm({ ...form, [property]: value });
//       setErrors(validate({ ...form, [property]: value }));
//     // };
//   };

//   const focusHandler = (event) => {
//     const property = event.target.name;

//     setFocus({ ...focus, [property]: property });
//   };

//   const submitHandler = (event) => {
//     console.log(event);
//     const genresFinal=[];
//     selectedOptionG.map((t)=> {genresFinal.push(t.value)});
//     console.log('en el submit genres', genresFinal);
//     const platformsFinal=[];
//     selectedOptionP.map((t)=> {platformsFinal.push(t.value)});
//     console.log('en el submit platforms', platformsFinal);
//     let finalForm = { ...form };
//     finalForm = { ...finalForm, genres: genresFinal };
//     finalForm = { ...finalForm, platforms: platformsFinal };
//     console.log('submit', finalForm);
//     if (finalForm.website === "") finalForm = { ...finalForm, website: null };
//     if (finalForm.released === "") finalForm = { ...finalForm, released: null };
//     event.preventDefault();
//     // axios.post("http://localhost:3001/videogames", finalForm).then(alert("Videogame created successfully"));
//     // location.reload();
//                               //*A partir de aqui es el código de la modal alert*//

//     axios.post("http://localhost:3001/videogames", finalForm)
//     .then(() => {
//         Swal.fire({
//             title: 'Success!',
//             text: 'The video game has been created successfully.',
//             icon: 'success',
//             backdrop: 'rgba(0, 0, 0, 0.7)',
//             confirmButtonText: 'OK'
//         }).then(() => {
//             location.reload();
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     });
//   };

//   useEffect(() => {
//     setErrors(validate(form));
//     dispatch(getGenres());
//     dispatch(getPlatforms());
//   }, [setErrors, validate, form]);

//   return (
//   <div className={style.game}>
//     <form className={style.backgroundImage}onSubmit={submitHandler}>
//       <div className={style.container}>
//       <h3 className={style.title} >Create your Videogame </h3>
//         <div className={style.containerInputs}>
//         <div className={style.containerInputs1}>
//         <div className={style.fields}>
//           <label htmlFor="name">Name</label>
//           <input type="text" name="name" placeholder="Name..." value={form.name} onChange={inputChangeHandler} onFocus={focusHandler}  />
//          {errors.name && focus.name && <p className={style.errorText}>{errors.name}</p>}
//         </div>
//         <div className={style.fields}>
//           <label htmlFor="description">Description</label>
//           <input type="text" name="description" placeholder="Description..." value={form.description} onChange={inputChangeHandler} onFocus={focusHandler} />
//          {errors.description && focus.description && <p className={style.errorText}>{errors.description}</p>}
//         </div>
//         <label className={style.price} htmlFor="price">$</label>
//         <div className={style.fields}>
//           <label htmlFor="price">Price</label>
//           <input type="number" name="price" placeholder=" Price..." value={form.price} onChange={inputChangeHandler} onFocus={focusHandler} />
//          {errors.price && focus.price && <p className={style.errorText}>{errors.price}</p>}
//         </div>
//         <div className={style.fields}>
//           <label htmlFor="rating">Rating</label>
//           <input type="number" name="rating" placeholder="Rating..." value={form.rating} onChange={inputChangeHandler} onFocus={focusHandler} />
//          {errors.rating && focus.rating && <p className={style.errorText}>{errors.rating}</p>}
//         </div>
//          </div>
//          <div className={style.containerInputs2}>
//         <div className={style.fields}>
//           <label htmlFor="website">Website</label>
//           <input type="text" name="website" placeholder="Website..." value={form.website} onChange={inputChangeHandler} onFocus={focusHandler}  />
//          {errors.website && focus.website && <p className={style.errorText}>{errors.website}</p>}
//         </div>
//         <div className={style.fields}>
//           <label htmlFor="released">Released</label>
//           <input type="date" name="released" placeholder="Released..." value={form.released} onChange={inputChangeHandler} onFocus={focusHandler}  />
//          {errors.released && focus.released && <p className={style.errorText}>{errors.released}</p>}
//         </div>
//         <div className={style.fields}>
//           <label htmlFor="image">Image</label>
//           <input type="text" name="image" placeholder="Image..." value={form.image} onChange={inputChangeHandler} onFocus={focusHandler}  />
//          {errors.image && focus.image && <p className={style.errorText}>{errors.image}</p>} 
//         </div>
//          </div>
//          </div>
//       <h3 className={style.subTitle}>Select one or more genres</h3>
//          <Select
//          isMulti
//         defaultValue={selectedOptionG}
//         onChange={setSelectedOptionG}
//         options={genresSelect}
//       />
//       {/* {selectedOptionP!== null && <p className={style.errorText}>{errors.genres}</p>}  */}
//       <h3 className={style.subTitle}>Select one or more platforms</h3>
//        <Select
//        isMulti
//         defaultValue={selectedOptionP}
//         onChange={setSelectedOptionP}
//         options={platformSelect}
//       />
//         {/* <h3 className={style.subTitle}>Select one or more genres</h3>
//         <div className={style.genresContainer}>
//           {genres.map((genre, index) => {
//             return (
//               <div key={index} className={style.checkboxContainer}>
//                 <label className={style.labelCheckbox} htmlFor={genre.name}> { genre.name }  </label>
//                 <input type="checkbox" name="genre" id={genre.name} onChange={inputChangeHandler} className={style.checkboxInput} />
//                </div>);
//           })}
//         </div> */}

        
//         {/* <h3 className={style.subTitle}>Select one or more platforms</h3>
//         <div className={style.platformsContainer}>
//           {platforms.map((platform, index) => {
//             return (
//               <div key={index} className={style.checkboxContainer}>
//                 <label className={style.labelCheckbox} htmlFor= {platform}>   { platform }  </label>
//                 <input type="checkbox" name="platform" id={platform} onChange={inputChangeHandler} className={style.checkboxInput} />
//               </div>
//             );
//           })}
//         </div> */}
//       <div className={style.containerButton}>
//         <button type="submit"  className={style.button} disabled={
//           (errors.name || errors.image || errors.price || errors.rating || errors.description) ? true : false}>Submit
//         </button>
//         </div>
//       </div>
//     </form>
//    </div>
//   );
// };

// export default CreateGameForm;

import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import style from "./CreateGameForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getPlatforms } from "../../redux/actions/index";
import axios from 'axios';
import Swal from 'sweetalert2';

const validate = (form) => {
  let errors = {};

  if (!form.name) {
    errors.name = "the name is required";
  } else if (form.name.length < 3) {
    errors.name = "the name must have at least 3 characters";
  };

  if (!form.image) {
    errors.image = "the image is required";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(form.image)) {
    errors.image = "the image must be a url";
  };

  if (!form.price) {
    errors.price = "the price is required";
  } else if (form.price < 0) {
    errors.price = "price must be greater than 0";
  } else if (!/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/.test(form.price)) {
    errors.price = "price must be a number";
  }; 

  
  

  if (!/^(ftp|http|https):\/\/[^ "]+$/.test(form.website)) {
    errors.website = "the website must be a url";
  };

  if (!/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/.test(form.released)) {
    errors.released = "date must be in the format yyyy-mm-dd";
  };

  if (!form.description) {
    errors.description = "the description is required";
  };

  if (form.genres.length === 0) {
    errors.genres = "must have at least one gender";
  };

  if (!form.platforms.length) {
    errors.platforms = "must have at least one platform";
  };
  return errors;
};

function CreateGameForm() {
  const dispatch = useDispatch();
  const platformsRaw = useSelector(state => state.platforms);
  //const platformSelect=[{value: 'pruebaPlat', label: 'pruebaPlat'},{value: 'pruebaPlat1', label: 'pruebaPlat1'}];
  const platformSelect=[];
  platformsRaw.map((t)=> {platformSelect.push({ value: t.name, label: t.name })});
  console.log('platforms', platformSelect);
  const [selectedOptionP, setSelectedOptionP] = useState(null);
  console.log('estad', selectedOptionP);
  const genres = useSelector(state => state.genres);
  //const genresSelect=[{value: 'pruebaGen', label: 'pruebaGen'},{value: 'pruebaGen1', label: 'pruebaGen1'}];
  const genresSelect=[];
  genres.map((t)=> {genresSelect.push({ value: t.name, label: t.name })});
  console.log('genres', genresSelect);
  const [selectedOptionG, setSelectedOptionG] = useState(null);
  console.log('estad2', selectedOptionG);
  const platforms = platformsRaw.map(platform => platform.name);

  const [form, setForm] = useState({
    name: "",
    image: "",
    price: "",
    rating: 0,
    website: "",
    released: "",
    description: "",
    genres: [],
    platforms: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    image: "",
    price: "",
    website: "",
    released: "",
    description: "",
    genres: null,
    platforms: null,
  });

  const [focus, setFocus] = useState({
    name: "",
    image: "",
    price: "",
    rating: 0,
    website: "",
    released: "",
    description: "",
  });

  const inputChangeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    const typeInput = event.target.type;
    const idInput = event.target.id;

    // if (typeInput === "checkbox") {
    //   if (property === "genre") {
    //     if (event.target.checked === true) {
    //       setForm({...form, genres: [...form.genres, idInput]});
    //       setErrors(validate({...form, genres: [...form.genres, idInput]}));
    //     } else {
          // setForm({...form, genres: form.genres.filter(elem => elem !== idInput)});
          // setErrors(validate({...form, genres: form.genres.filter(elem => elem !== idInput)}));
      //   };
      // } else {
      //   if (event.target.checked === true) {
      //     setForm({...form, platforms: [...form.platforms, idInput]});
      //     setErrors(validate({...form, platform: [...form.platforms, idInput]}));
      //   } else {
          // setForm({...form, platforms: form.platforms.filter(elem => elem !== idInput)});
          // setErrors(validate({...form, platforms: form.platforms.filter(elem => elem !== idInput)}));
    //     };
    //   };
    // } else {
      setForm({ ...form, [property]: value });
      setErrors(validate({ ...form, [property]: value }));
    // };
  };

  const focusHandler = (event) => {
    const property = event.target.name;

    setFocus({ ...focus, [property]: property });
  };

  const submitHandler = (event) => {
    console.log(event);
    const genresFinal=[];
    selectedOptionG.map((t)=> {genresFinal.push(t.value)});
    console.log('en el submit genres', genresFinal);
    const platformsFinal=[];
    selectedOptionP.map((t)=> {platformsFinal.push(t.value)});
    console.log('en el submit platforms', platformsFinal);
    let finalForm = { ...form };
    finalForm = { ...finalForm, genres: genresFinal };
    finalForm = { ...finalForm, platforms: platformsFinal };
    console.log('submit', finalForm);
    if (finalForm.website === "") finalForm = { ...finalForm, website: null };
    if (finalForm.released === "") finalForm = { ...finalForm, released: null };
    event.preventDefault();
    // axios.post("http://localhost:3001/videogames", finalForm).then(alert("Videogame created successfully"));
    // location.reload();
                              //A partir de aqui es el código de la modal alert//

    axios.post("http://localhost:3001/videogames", finalForm)
    .then(() => {
        Swal.fire({
            title: 'Success!',
            text: 'The video game has been created successfully.',
            icon: 'success',
            backdrop: 'rgba(0, 0, 0, 0.7)',
            confirmButtonText: 'OK'
        }).then(() => {
            location.reload();
        });
    })
    .catch((error) => {
        console.log(error);
    });
  };

  useEffect(() => {
    setErrors(validate(form));
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, [setErrors, validate, form]);

  return (
  <div className={style.game}>
    <form className={style.backgroundImage}onSubmit={submitHandler}>
      <div className={style.container}>
      <h3 className={style.title} >Create your Videogame </h3>
        <div className={style.containerInputs}>
        <div className={style.containerInputs1}>
        <div className={style.fields}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Name..." value={form.name} onChange={inputChangeHandler} onFocus={focusHandler}  />
         {errors.name && focus.name && <p className={style.errorText}>{errors.name}</p>}
        </div>
        <div className={style.fieldsD}>
          <label htmlFor="description">Description</label>
          <input type="text" name="description" placeholder="Description..." value={form.description} onChange={inputChangeHandler} onFocus={focusHandler} />
         {errors.description && focus.description && <p className={style.errorText}>{errors.description}</p>}
        </div>
        <label className={style.price} htmlFor="price">$</label>
        <div className={style.fields}>
          <label htmlFor="price">Price</label>
          <input type="number" name="price" placeholder=" Price..." value={form.price} onChange={inputChangeHandler} onFocus={focusHandler} />
         {errors.price && focus.price && <p className={style.errorText}>{errors.price}</p>}
        </div>
        
         </div>
         <div className={style.containerInputs2}>
        <div className={style.fields}>
          <label htmlFor="website">Website</label>
          <input type="text" name="website" placeholder="Website..." value={form.website} onChange={inputChangeHandler} onFocus={focusHandler}  />
         {errors.website && focus.website && <p className={style.errorText}>{errors.website}</p>}
        </div>
        <div className={style.fieldsR}>
          <label htmlFor="released">Released</label>
          <input type="date" name="released" placeholder="Released..." value={form.released} onChange={inputChangeHandler} onFocus={focusHandler}  />
         {errors.released && focus.released && <p className={style.errorText}>{errors.released}</p>}
        </div>
        <div className={style.fields}>
          <label htmlFor="image">Image</label>
          <input type="text" name="image" placeholder="Image..." value={form.image} onChange={inputChangeHandler} onFocus={focusHandler}  />
         {errors.image && focus.image && <p className={style.errorText}>{errors.image}</p>} 
        </div>
         </div>
         </div>
      <h3 className={style.subTitle}>Select one or more genres</h3>
         <Select
         isMulti
        defaultValue={selectedOptionG}
        onChange={setSelectedOptionG}
        options={genresSelect}
      />
      {/* {selectedOptionP!== null && <p className={style.errorText}>{errors.genres}</p>}  */}
      <h3 className={style.subTitle}>Select one or more platforms</h3>
       <Select
       isMulti
        defaultValue={selectedOptionP}
        onChange={setSelectedOptionP}
        options={platformSelect}
      />
        {/* <h3 className={style.subTitle}>Select one or more genres</h3>
        <div className={style.genresContainer}>
          {genres.map((genre, index) => {
            return (
              <div key={index} className={style.checkboxContainer}>
                <label className={style.labelCheckbox} htmlFor={genre.name}> { genre.name }  </label>
                <input type="checkbox" name="genre" id={genre.name} onChange={inputChangeHandler} className={style.checkboxInput} />
               </div>);
          })}
        </div> */}

        
        {/* <h3 className={style.subTitle}>Select one or more platforms</h3>
        <div className={style.platformsContainer}>
          {platforms.map((platform, index) => {
            return (
              <div key={index} className={style.checkboxContainer}>
                <label className={style.labelCheckbox} htmlFor= {platform}>   { platform }  </label>
                <input type="checkbox" name="platform" id={platform} onChange={inputChangeHandler} className={style.checkboxInput} />
              </div>
            );
          })}
        </div> */}
      <div className={style.containerButton}>
        <button type="submit"  className={style.button} disabled={
          (errors.name || errors.image || errors.price  || errors.description) ? true : false}>Submit
        </button>
        </div>
      </div>
    </form>
   </div>
  );
};

export default CreateGameForm;