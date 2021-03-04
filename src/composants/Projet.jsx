import './Projet.scss';
export default function Projet({id, titre, info}) {
  return (
    <article className="Projet">
      <div className="couverture">
        <img src={`images-projets/${id}.png`} alt={titre}/>
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p>{info}</p>
      </div>
      
    </article>
  );
}