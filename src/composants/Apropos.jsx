import './Apropos.scss';
import Fade from 'react-reveal/Fade';

export default function Apropos(){
    return(
      <div  className="Apropos">
          <div className="contenu">
            <h2><span>À propos de moi</span></h2>
            <Fade left>
              <div className="gauche">
              <p>Bienvenue! Mon nom est <span>Monica Léonard</span></p>
              </div>
            </Fade>
            <Fade left delay={500}>
              <div className="milieu">
              <p>Je suis une étudiante en techniques d'intégration multimédia au Collège de Maisonneuve</p>
              </div>
            </Fade>
            <Fade right delay={1000}>
              <div className="droite">
              <p>Je suis autant passionnée par la programmation et le design que par les jeux vidéos</p>
              </div>
            </Fade>
        </div>
      </div>
    )
}