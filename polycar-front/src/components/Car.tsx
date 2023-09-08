import CarProps from "../interface/CarProps";
import "../styles/car.scss";

function Car(props: CarProps) {
  const { marque, modele, annee, prixDeBase, image } = props;
  return (
    <div className="Car">
      <div className="card">
        <div id="CarContent">
          <img className="card-img-top" src={image} alt="Car image" />
          <div className="card-body">
            <div id="CarBody">
              <h5 className="card-title">
                <p id="CarMarque">{marque}</p>
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                <p id="CarModele">{modele}</p>
              </h6>
              <div className="card-text">
                <div id="CarAnnee">
                  <p>Commercialisation: {annee}</p>
                </div>
                <div id="CarPrix">
                  <p>Prix de base: {prixDeBase}€</p>
                </div>
              </div>
              <button className="btn btn-primary">See more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Car;
