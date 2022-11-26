import './Accueil.scss';
import Fade from 'react-reveal/Fade';
import fond from '../images/bunny.jpg';
import logo from '../images/logo5.png';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Accueil() {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <div className="Accueil">
      <div className="imgPrincipale">
        <img src={fond} alt=""/>
      </div>
      <div style={{overflow: 'hidden'}}>
        <Fade top>
          <div className="navPrincipale">
            <div className="titre-entete">
              <img src={logo} className="logo-img" alt="logo" />
              <p>Monica Léonard</p>
            </div>
            <ul>
              <li><a href="#_" onClick={() => window.scrollTo({top: window.innerHeight*1.1, behavior: 'smooth'})}>À propos de moi</a></li>
              <li><a href="#_" onClick={() => window.scrollTo({top: window.innerHeight*2.3, behavior: 'smooth'})}>Mes projets</a></li>
              <li><span className="contact">leonardmonica17@gmail.com</span></li>
              <li className="liens" >
                <span className="github" onClick={() => openInNewTab('https://github.com/monicaleonard')}>    GitHub    </span>
                <span className="artstation" onClick={() => openInNewTab('https://www.artstation.com/creatorfreak')}>    Artstation    </span>
                </li>
            </ul>
          </div>
        </Fade>
      </div>
    </div>
  );
}
