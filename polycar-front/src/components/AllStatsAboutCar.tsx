import DisplayStats from "./displayStats";
import * as dataOfTheCar from "../data/car-first-data.json";


function AllStatsAboutCar() {
  //on récupère l'id de la voiture dans l'url
  const idOfCar: string = window.location.href.split("/")[4];
  //on récupère les données de la voiture en utilisant getAllCarData
  console.log("coucou");
  //on recupère les données de toutes la voiture correspondant à l'id
  const data=dataOfTheCar.result.filter((car) => car.id === parseInt(idOfCar));
  console.log(data);
  //on récupère les données de la voiture
  const carData = data[0];
  const marque: string = carData.brand;
  const model: string = carData.model;
  /// ...

  return (
    <div>
      <h1>Stats about car</h1>
      <DisplayStats idOfCar={marque} />
    </div>
  );
}

export default AllStatsAboutCar;