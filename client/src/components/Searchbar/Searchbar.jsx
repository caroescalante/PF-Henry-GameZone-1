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

    function onKeyDown(event) {
        if (event.key === "Enter") { //Revisa si el user presiono enter con el input activo, si es asi se llama al onsubmit
            onSubmit(event)
        }
    }

    return (
        <div className={s.searchBar}>
            <input
                className={s.input}
                type="text"
                placeholder="Videogame name"
                value={name}
                onChange={onInputChange}
                onKeyDown={onKeyDown}
            />
            <button className={s.button} type="submit" onClick={onSubmit}>Search</button>
        </div>
    );
}
  
export default SearchBar;

