import './Accueil.scss';
import Fade from 'react-reveal/Fade';
import fond from '../images/bunny.jpg';

export default function Accueil() {
  return (
    <div className="Accueil">
        <Fade left>
          <div className="imgPrincipale">
            <img src={fond} alt=""/>
          </div>
        </Fade>
        <Fade right>
          <div className="navPrincipale">
            <ul>
              <div><li><a>À propos de moi</a></li></div>
              <div><li><a>Mes projets</a></li></div>
              <div><li><a>Contactez-moi</a></li></div>
              
            </ul>
          </div>
        </Fade>
    </div>
  );
}
