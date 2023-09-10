import CarProps from "../interface/CarProps";
import "../styles/car.scss";

function Car({ id, brand, model,fuel,carType,  image, ecoScore, annualFuelCost}: CarProps) {
  //we check if fuel has more than 10 characters
  if (fuel.length > 10) {
    //we cut the string to 10 characters
    fuel = fuel.substring(0, 9);
  }
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
        </div>
        <div className="CarPrix">
          
          <p>🚗 Car type : {carType}</p>
        </div>
        <div className="CarPrix">
          <p>⛽ Type de carburant: {fuel}</p>
        </div>
        <div className="CarPrix">
          <p>💰 Fuel/an: {annualFuelCost}€</p>
        </div>
        <div className="CarPrix">
          <p>🌍 Ecoscore: {ecoScore}/100</p>
        </div>
        <button className="btn btn-primary" onClick={ () => window.location.replace("/cars/" + id) }>Voir plus</button> 
      </div>
    </div>
  );
}

export default Car;