import './ListeProjets.scss';
import dossTab from '../data/liste-Projets.json';
import Projet from './Projet';

export default function ListeProjets() {
  return (
    <ul className="ListeProjets">
      {
        dossTab.map( 
          Projet =>  <li><Projet key={Projet.id} {...Projet} /></li>
        )
      }
    </ul>
  );
}