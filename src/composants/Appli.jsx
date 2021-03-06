import './Appli.scss';
import Accueil from './Accueil.jsx';
import Entete from './Entete.jsx';
import Pied2Page from './Pied2Page';
import Apropos from './Apropos';
import ListeProjets from './ListeProjets';

export default function Appli() {
  return (
    <div className="Appli">
        <Accueil />
        <Entete />
        <Apropos />
        <ListeProjets />
      <Pied2Page />
    </div>
  );
}
