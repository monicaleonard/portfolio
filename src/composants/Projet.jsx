import './Projet.scss';
import Fade from 'react-reveal/Fade';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default function Projet({id, titre, details, info}) {

  return (
    <div className="Projet">
      <div style={{overflow: 'hidden'}}>
        <Fade left >
          <div className="couverture">
            <a href={`#img-${id}`}>
              {titre}
            </a>
            <p>{details}</p>
          </div>
        </Fade>
      </div>
      <div >
        <a href="#_" className="lightbox" id={`img-${id}`}>
          <HighlightOffIcon className="fermerP" />
          <video src={`medias-projets/${id}.mp4`} alt={titre} controls/>
          <p className="info">{info}</p>
        </a>
      </div>
    </div>
  );
}