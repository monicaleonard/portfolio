import './Entete.scss';
import Fade from 'react-reveal/Fade';

export default function Entete(){
    return(
        <div className="Entete">
            <Fade top>
                <div className="contenu">
                    <p className="logo" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>LOGO</p>
                    <a href="#_" className="email">leonardmonica17@gmail.com</a>
                </div>
            </Fade>
        </div>
    )
}