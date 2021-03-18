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
              <img src={`images-projets/${id}.png`} alt={titre}/>
              {titre}
            </a>
            <p>{details}</p>
          </div>
        </Fade>
      </div>
      <div >
        <a href="#_" className="lightbox" id={`img-${id}`}>
          <HighlightOffIcon className="fermerP" />
          <video src={`videos-projets/${id}.mp4`} alt={titre} controls/>
          <div href="#_"  className="moreinfo">
          <p className="info">{info}</p>
            <HelpOutlineIcon className="pointInter" />
          </div>
        </a>
      </div>
    </div>
  );
}