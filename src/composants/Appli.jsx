import './Appli.scss';
import Accueil from './Accueil.jsx';
import Entete from './Entete.jsx';
import Pied2Page from './Pied2Page';

export default function Appli() {
  const height = window.innerHeigth;
  return (
    <div className="Appli">
      {height > height*2
      ? <Entete />
      : console.log(window.innerHeight)
    }
        <Accueil />
        <Entete />
      <Pied2Page />
    </div>
  );
}
