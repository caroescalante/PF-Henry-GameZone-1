import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import s from "./Searchbar.module.css"
import { searchByName, getGames } from '../../redux/actions/index.js';
import Swal from 'sweetalert2';

function SearchBar(props) {  
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const searchError = useSelector(state => state.searchError);

    function onInputChange(event) {
        setName(event.target.value);
    }

    function onSubmit(event) {
        event.preventDefault();
        if (name.trim() !== "") {            //El user ingresó algo en el input?
          dispatch(searchByName(name));
        } else {
          dispatch(getGames());              // si el input está vacio cuando intente buscar, trae todos los juegos.
        }
        props.setCurrentPage(1);             // establezco pagina actual en 1
        setName("");                         // limpio el input una vez se busca algo.
    }

    function onKeyDown(event) {
        if (event.key === "Enter") {
            onSubmit(event);
        }
    }

    useEffect(() => {
        if (searchError) {
            Swal.fire({
                html: '<div style="max-height: 450px;"><img src="https://th.bing.com/th/id/R.3a99edb590b04351599a12c400aa294b?rik=TVlBsEI1Zi6S3w&amp;pid=ImgRaw&amp;r=0" alt="Custom image" class="custom-image-class" style="width:100%;height:100%;" /><br><br><p style="color:white;">The wanted videogame name does not exist, please try with other name.</p></div>',
                background: '#000000',
                backdrop: 'rgba(0, 0, 0, 0.8)',
                confirmButtonColor: '#ff0000',
                confirmButtonText: 'Try again',
            });
        }
    }, [searchError]);

 
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