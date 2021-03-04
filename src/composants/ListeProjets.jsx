import './ListeProjets.scss';
import dossTab from '../data/liste-projets.json';
import Projet from './Projet';

export default function ListeProjets() {
  return (
    <ul className="ListeProjets">
      {
        dossTab.map( 
          projet =>  <li><Projet key={projet.id} {...projet} /></li>
        )
      }
    </ul>
  );
}