import './Accueil.scss';
import Fade from 'react-reveal/Fade';
import fond from '../images/bunny.jpg';
import logo from '../images/logo5.png';

export default function Accueil() {
  return (
    <div className="Accueil">
      <div className="imgPrincipale">
        <img src={fond} alt=""/>
      </div>
      <div style={{overflow: 'hidden'}}>
        <Fade top>
          <div className="navPrincipale">
            <div className="titre-entete">
              <img src={logo} className="logo-img" alt="logo" />
              <p>Monica Léonard</p>
            </div>
            <ul>
              <li><a href="#_" onClick={() => window.scrollTo({top: window.innerHeight*1.1, behavior: 'smooth'})}>À propos de moi</a></li>
              <li><a href="#_" onClick={() => window.scrollTo({top: window.innerHeight*2.3, behavior: 'smooth'})}>Mes projets</a></li>
              <li><span className="contact">leonardmonica17@gmail.com</span></li>
            </ul>
          </div>
        </Fade>
      </div>
    </div>
  );
}
