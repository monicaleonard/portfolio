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
              <img src={logo} className="logo-img" />
              <p>Monica Léonard</p>
            </div>
            <ul>
              <li><a href="#_" onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}>À propos de moi</a></li>
              <li><a href="#_" onClick={() => window.scrollTo({top: window.innerHeight*2, behavior: 'smooth'})}>Mes projets</a></li>
              <li><a href="#_" onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>Contactez-moi</a></li>
            </ul>
          </div>
        </Fade>
      </div>
    </div>
  );
}
