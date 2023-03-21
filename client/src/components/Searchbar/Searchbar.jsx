import React ,{useState}from 'react';
import { useDispatch } from "react-redux";
import s from "./Searchbar.module.css"
import { searchByName, getGames } from '../../redux/actions/index.js';

function SearchBar(props) {  
    let dispatch = useDispatch()
    const [name, setName] = useState("")

    function onInputChange(event) {
        setName(event.target.value)
    }

    // function onSubmit(event) {
    //     event.preventDefault()
    //     dispatch(searchByName(name))
    // }

    function onSubmit(event) {
        event.preventDefault();
        if (name.trim() !== "") {   //El user ingresó algo en el input?
          dispatch(searchByName(name));
        } else {
          dispatch(getGames());  // si el input está vacio cuando intente buscar, trae todos los juegos.
        }
        props.setCurrentPage(1);  // establezco pagina actual en 1
        setName("");              // limpio el input una vez se busca algo.
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

