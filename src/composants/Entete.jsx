import './Entete.scss';
import Fade from 'react-reveal/Fade';
import logo from '../images/logo5.png';

export default function Entete(){
    return(
        <div className="Entete">
            <Fade top>
                <div className="contenu">
                    <p className="logo" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}><img src={logo} className="logo-img" alt="logo" /></p>
                    <div>
                        <a href="#_" onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}>À propos de moi</a>
                        <a href="#_" onClick={() => window.scrollTo({top: window.innerHeight*2, behavior: 'smooth'})}>Mes projets</a>
                    </div>
                </div>
            </Fade>
        </div>
    )
}