import './Projet.scss';
import SortIcon from '@material-ui/icons/Sort';
import MoreVertIcon from '@material-ui/icons/MoreVert';
export default function Projet({id, titre, couleur, dateModif}) {
  return (
    <article className="Projet">
      <div className="couverture">
        <span className="deplacer">Déplacer</span>
        <SortIcon/>
        <img src={`images-Projets/${id}.png`} alt={titre}/>
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p>{dateModif}</p>
      </div>
      <button className="btn">Modifier</button>
      <MoreVertIcon className="btnMVI" />
    </article>
  );
}