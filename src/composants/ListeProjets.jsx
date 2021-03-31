import './ListeProjets.scss';
import dossTab from '../data/liste-projets.json';
import Projet from './Projet';

export default function ListeProjets() {
  return (
    <div>
      <ul className="ListeProjets">
        <h2><span>Les projets</span></h2>
        {
          dossTab.map( 
            projet =>  <li><Projet key={projet.id} {...projet} /></li>
          )
        }
      </ul>
    </div>
  );
}