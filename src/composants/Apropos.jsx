import './Apropos.scss';
import Fade from 'react-reveal/Fade';

export default function Apropos(){
    return(
      <div  className="Apropos">
          <div className="contenu">
          <Fade left>
            <div className="gauche">
            <p>Étudiante en techniques d'intégration multimédia au Collège de Maisonneuve</p>
            </div>
          </Fade>
          <Fade right>
            <div className="droite">
            <p>Je suis autant passionnée par l'art, les jeux vidéo et les animaux que la technologie</p>
            </div>
          </Fade>
        </div>
      </div>
    )
}