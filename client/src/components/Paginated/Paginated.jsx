import React from 'react'
import styles from "../Paginated/Paginated.module.css";

const Paginated = ({gamesPerPage, allGames,paginado,currentPageColor}) =>{
  const pageNumbers = []

  for (let i = 0; i <= Math.ceil(allGames/gamesPerPage)-1; i++){
      pageNumbers.push(i+1)
  }

  return (
      <nav className={styles.buttons}>
          <ul >
            
               {pageNumbers && 
              pageNumbers.map(number =>(
                  <li  key={number} className={styles.buttonpage0}>
                  <button className={number === currentPageColor? styles.currentPageColor : styles.button} onClick={()=> paginado(number)}> {number}</button>
                  </li>
              ))}
            
          </ul>
      </nav>
  )
}
export default Paginated;