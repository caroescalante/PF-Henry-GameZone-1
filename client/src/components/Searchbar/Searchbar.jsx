import React ,{useState}from 'react';
import { useDispatch } from "react-redux";
import s from "./Searchbar.module.css"
import { searchByName } from '../../redux/actions/index.js';

function SearchBar() {  
    let dispatch = useDispatch()
    const [name, setName] = useState("")

    function onInputChange(event) {
         setName(event.target.value)
    }

    function onSubmit(event) {
         event.preventDefault()
         dispatch(searchByName(name))
     }

     return (
        <div className={s.searchBar}>
           
                    <input className={s.input} type="text" onChange={onInputChange} placeholder="Videogame name" />
                    <button className={s.button} type="submit" onClick={onSubmit} >Search</button>
                
        </div>
      );
  }
  
  export default SearchBar;


