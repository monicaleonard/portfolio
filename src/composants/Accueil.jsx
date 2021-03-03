import './Accueil.scss';
import Fade from 'react-reveal/Fade';
import fond from '../images/bunny.jpg';

export default function Accueil() {
  return (
    <div className="Accueil">
        <Fade left>
          <div className="rRFade">
            <img src={fond} alt=""/>
          </div>
        </Fade>
        <Fade right>
          <div className="navPrincipale">
            <ul>
              <li>À propos de moi</li>
              <li>Mes projets</li>
              <li>Contactez-moi</li>
            </ul>
          </div>
        </Fade>
    </div>
  );
}
