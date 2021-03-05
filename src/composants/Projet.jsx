import './Projet.scss';
import Fade from 'react-reveal/Fade';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default function Projet({id, titre, details, info}) {

  return (
    <div className="Projet">
      <Fade left >
      <div className="couverture">
        <a href={`#img-${id}`}>{titre}</a>
        <p>{details}</p>
      </div>
      </Fade>
      <div >
        <a href="#_" className="lightbox" id={`img-${id}`}>
          <a href="#_"><HighlightOffIcon href="#_" className="fermerP" id={`img-${id}`} /></a>
          <img src={`images-projets/${id}.png`} alt={titre}/>
        </a>
        <div className="info">
          <p>{info}</p>
        </div>
      </div>
      
      
    </div>
  );
}