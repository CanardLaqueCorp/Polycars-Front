import CarProps from "../interface/CarProps";
import "../styles/car.scss";

function Car({ id, brand, model, image }: CarProps) {
  return (
    <div className="Car card">
      <div className="carHeader">
        <img className="card-img-top" src={image} alt="Car image" />
        <h5 className="card-title">
          <p className="CarMarque">{brand}</p>
          <p className="CarModele">{model}</p>
        </h5>
      </div>
      <div className="card-body">
        <div className="CarAnnee">
          <p>Commercialisation: 1789</p>
        </div>
        <div className="CarPrix">
          <p>Prix de base: 420.69€</p>
        </div>
        <div className="CarPrix">
          <p>DEBUG ID: {id} Lea</p>
        </div>


        <button className="btn btn-primary" onClick={ () => window.location.replace("/cars/" + id) }>Voir plus</button> 
      </div>
    </div>
  );
}

export default Car;