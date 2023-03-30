import React from 'react';
import styles from './About.module.css';


const About = () => {
  const integrantes = [
    { nombre: "Carolina Escalante", linkedin: "https://www.linkedin.com/in/carolinaescalante/" },
    { nombre: "Fabrizio Ossola", linkedin: "https://www.linkedin.com/in/fabrizio-ossola/" },
    { nombre: "Pablo Alvarez", linkedin: "https://www.linkedin.com/in/pabloalvarez/" },
    { nombre: "Leonardo Guerrero", linkedin: "https://www.linkedin.com/in/leonardoguerrero/" },
    { nombre: "Nahuel Castelar", linkedin: "https://www.linkedin.com/in/nahuel-castelar/" },
    { nombre: "Yorlin Pazos", linkedin: "https://www.linkedin.com/in/yorlinpazos/" },
  ];
  const tecnologias = ["Javascript", "React", "Redux", "Express", "Mercado Pago", "Postgress", "Auth0"];
  return (
    <div className={styles.background}>
    <div className={styles.about}>
      <div className={styles.overlay}/>
      <div className={styles.content}>
        <h1 className={styles.titulo}>About Us</h1>
        <p className={styles.parrafo}>We are a team of passionate gamers who love to bring the latest and greatest games to you. Our goal is to provide a seamless shopping experience with a wide selection of games and easy checkout process.</p>
        <h3 className={styles.titulo2}>Our Team</h3>
      <ul className={styles.integrantes}>
        {integrantes.map((integrante) => (
          <li key={integrante.nombre}>
            {integrante.nombre} - <a href={integrante.linkedin}>LinkedIn</a>
          </li>
        ))}
      </ul>

      <h3 className={styles.titulo2}>Technologies</h3>
      <ul className={styles.tecnologias}>
        {tecnologias.map((tecnologia) => (
          <li key={tecnologia}>{tecnologia}</li>
        ))}
      </ul>  
      </div>
    </div>
    </div>
  );
};

export default About;

