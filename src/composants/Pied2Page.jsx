import './Apropos.scss';
import Fade from 'react-reveal/Fade';

export default function Apropos(){
    return(
        <div style={{overflow: 'hidden'}}>
        <Fade bottom></Fade>
        <div  className="Apropos">
          <h1>Merci</h1>
          <p>Design et programmation par Monica Léonard</p>
        </div>
      </div>
    )
}