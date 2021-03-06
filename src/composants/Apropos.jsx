import './Apropos.scss';
import Fade from 'react-reveal/Fade';

export default function Apropos(){
    return(
      <div  className="Apropos">
          <div className="contenu">
          <Fade left>
            <p className="gauche">Hey</p>
          </Fade>
          <Fade right>
            <p className="droite">Un peu plus de moi</p>
          </Fade>
        </div>
      </div>
    )
}