import './Appli.scss';
import Accueil from './Accueil.jsx';
import Entete from './Entete.jsx';
import Pied2Page from './Pied2Page';
import Apropos from './Apropos';
import ListeProjets from './ListeProjets';

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
        <Apropos />
        <Apropos />
        <Apropos />
        <ListeProjets />
      <Pied2Page />
    </div>
  );
}
