import { CarProps } from "../interface/props";
import { Navigate } from "react-router-dom";
import "../styles/car.scss";
import { useState } from "react";

function Car({
  id,
  brand,
  model,
  fuel,
  carType,
  image,
  ecoScore,
  annualFuelCost,
}: CarProps) {
  const [navigate, setNavigate] = useState(false); // New state variable

  //we check if fuel has more than 10 characters
  if (fuel.length > 10) {
    //we cut the string to 10 characters
    fuel = fuel.substring(0, 9);
  }

  if (navigate) {
    return <Navigate to={"/car/" + id} />; // Render Navigate component when navigate is true
  }

  return (
    <div className="Car card">
      <div className="carHeader">
        <img className="card-img-top" src={image} alt="Car image" />
        <h5 className="card-title">
          <p className="CarMarque">
            {brand === "HYUNDAI MOTOR COMPANY" ? "Hyundai" : brand}
          </p>
          <p className="CarModele">{model}</p>
        </h5>
      </div>
      <div className="card-body">
        <div className="CarAnnee"></div>
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
        <button
          className="btn btn-primary"
          onClick={() => setNavigate(true)} // Set navigate to true when button is clicked
        >
          Voir plus
        </button>
      </div>
    </div>
  );
}

export default Car;
