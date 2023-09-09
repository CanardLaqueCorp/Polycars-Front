import CarProps from "../interface/CarProps";
import "../styles/car.scss";

function Car({ marque, modele, annee, prixDeBase, image }: CarProps) {
  return (
    <div className="Car card">
      <div className="carHeader">
        <img className="card-img-top" src={image} alt="Car image" />
        <h5 className="card-title">
          <p className="CarMarque">{marque}</p>
          <p className="CarModele">{modele}</p>
        </h5>
      </div>
      <div className="card-body">
        <div className="CarAnnee">
          <p>Commercialisation: {annee}</p>
        </div>
        <div className="CarPrix">
          <p>Prix de base: {prixDeBase}€</p>
        </div>
        <button className="btn btn-primary">See more</button>
      </div>
    </div>
  );
}

export default Car;