import Car from "./Car";
import * as CarData from "../data/fakeCarData.json";

function AllCarList() {
  const cars = CarData.cars;
  return (
    <div className="AllCarListComponent">
      <div className="AllCarListHeader">
        <h1>Car List:</h1>
        <p>We have currently {cars.length} cars in our database</p>
      </div>
      <div className="AllCarList">
        {cars.map((car) => (
          <Car
            marque={car.marque}
            modele={car.modele}
            annee={car.annee}
            prixDeBase={car.prixDeBase}
            image={car.image}
          />
        ))}
      </div>
    </div>
  );
}

export default AllCarList;
