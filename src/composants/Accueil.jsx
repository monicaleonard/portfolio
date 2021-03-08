import './Accueil.scss';
import Fade from 'react-reveal/Fade';
import fond from '../images/bunny.jpg';

export default function Accueil() {
  return (
    <div className="Accueil">
      <div className="imgPrincipale">
        <img src={fond} alt=""/>
      </div>
      <div style={{overflow: 'hidden'}}>
        <Fade top>
          <div className="navPrincipale">
            <ul>
              <div><li><a href="#_" onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}>À propos de moi</a></li></div>
              <div><li><a href="#_" onClick={() => window.scrollTo({top: window.innerHeight*2, behavior: 'smooth'})}>Mes projets</a></li></div>
              <div><li><a href="#_" onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>Contactez-moi</a></li></div>
            </ul>
          </div>
        </Fade>
      </div>
    </div>
  );
}
