import './Projet.scss';
import Fade from 'react-reveal/Fade';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

export default function Projet({id, titre, details, info}) {

  return (
    <div className="Projet">
      <div style={{overflow: 'hidden'}}>
        <Fade left >
          <div className="couverture">
            <a href={`#img-${id}`}>
              {titre}
              <img src={`portfolio/images-projets/${id}.png`} alt={titre}/>
            </a>
            <p>{details}</p>
          </div>
        </Fade>
      </div>
      <div >
        <a href="#_" className="lightbox" id={`img-${id}`}>
          <a href="#_"><HighlightOffIcon href="#_" className="fermerP" id={`img-${id}`} /></a>
          <video src={`portfolio/videos-projets/${id}.mp4`} alt={titre} controls/>
          <a href="#_"  className="moreinfo">
          <p className="info">{info}</p>
            <HelpOutlineIcon className="pointInter" />
          </a>
        </a>
      </div>
    </div>
  );
}