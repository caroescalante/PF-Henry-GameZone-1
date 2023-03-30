import React from 'react';
import styles from './About.module.css';


const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
        <h2>Our Team</h2>
        <ul>
          <li>Carolina Escalante</li>
          <li>Fabrizio Ossola</li>
          <li>Pablo Alvarez</li>
          <li>Leonardo Guerrero</li>
          <li>Nahuel Castelar</li>
          <li>Yorlin Pazos</li>
        </ul>
        <h2>Technologies</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Express</li>
          <li>Mercado Pago</li>
          <li>PostgreSQL</li>
          <li>Auth0</li>
        </ul>
        <h2>Take a Tour</h2>
        <p>Watch our video tour to see our website in action!</p>
        <iframe title="Video Tour" width="560" height="315" src="https://www.youtube.com/watch?v=qFlEnsMfep4&t=546s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default About;

