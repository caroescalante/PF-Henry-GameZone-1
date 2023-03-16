import React, { useState } from 'react';
import style from "./CreateGameForm.module.css";

const validate = () => {
  let errors = {};

};

function CreateGameForm() {
  const [form, setForm] = useState({
    name: "",
    image: "",
    price: "",
    rating: "",
    website: "",
    released: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    image: "",
    price: "",
    rating: "",
    website: "",
    released: "",
    description: "",
  });

  const inputChangeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Name..." value={form.name} onChange={inputChangeHandler} className={style.inputName} />
        </div>

        <div>
          <label htmlFor="image">Image</label>
          <input type="text" name="image" placeholder="Image..." value={form.image} onChange={inputChangeHandler} />
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input type="number" name="price" placeholder="Price..." value={form.price} onChange={inputChangeHandler} />
        </div>

        <div>
          <label htmlFor="rating">Rating</label>
          <input type="number" name="rating" placeholder="Rating..." value={form.rating} onChange={inputChangeHandler} />
        </div>

        <div>
          <label htmlFor="website">Website</label>
          <input type="text" name="website" placeholder="Website..." value={form.website} onChange={inputChangeHandler} />
        </div>

        <div>
          <label htmlFor="released">Released</label>
          <input type="text" name="released" placeholder="Released..." value={form.released} onChange={inputChangeHandler} />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input type="text" name="description" placeholder="Description..." value={form.description} onChange={inputChangeHandler} />
        </div>

        <button type='submit'>Submit</button>
      </form>

    </div>
  );
};

export default CreateGameForm;