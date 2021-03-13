import './Pied2Page.scss';
import Fade from 'react-reveal/Fade';

export default function Pied2Page(){
    return(
      <div  className="Pied2Page">
        <div style={{overflow: 'hidden'}}>
          <Fade bottom>
            <div className="contenu">
              <h1>Merci</h1>
              <p>Vous pouvez voir plus de moi sur</p>
              <p>LinkedIn</p>
              <p>Ou me contacter par email :</p>
              <p>leonardmonica17@gmail.com</p>
              <p>Design et programmation par Monica Léonard</p>
            </div>
          </Fade>
        </div>
      </div>
    )
}