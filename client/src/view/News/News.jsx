import React from "react";
import style from "./News.module.css";
import {useSelector } from 'react-redux';


const News = () => {

    const allGames = useSelector(state => state.allGamesOriginal);
    let allGames2 = []
    allGames.sort(function (a, b) {
        if (a.released < b.released) return  1;
        if (b.released < a.released) return  -1;
        return 0;
    });
    allGames2.push(allGames[0]);
    allGames2.push(allGames[1]);
    allGames2.push(allGames[2]);
    allGames2.push(allGames[3]);
    allGames2.push(allGames[4]);
    allGames2.push(allGames[5]);
    


    return (

        <div className={style.background}>
            <div className={style.containerCards}>
                <h1 className={style.titulo}>Last Games</h1>
            {allGames2.length > 0 ?
                allGames2?.map ((el) =>{
                    return(
                                <div key={el.id} className={style.card} >
                        <div className={style.info}>
                            <p>{el.name}</p>
                            <p>{el.released}</p>
                            <p>{el.description}</p>
                            </div>
                            <img className={style.imag} src={el.image}/>

                        </div>
                    )}) : 
                    <div>
                        
                        <p className={style.img} ><span className={style.loader}></span></p>
                    </div>
            }

            </div>

        </div>
    )
}
export default News;