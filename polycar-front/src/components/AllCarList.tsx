import Car from "./Car";
import * as CarData from "../data/fakeCarData.json";

function AllCarList() {
  const cars = CarData.cars;
  return (
    <div className="AllCarList">
      {cars.map((car) => (
        <Car
          marque={car.marque}
          modele={car.modele}
          annee={car.annee}
          prixDeBase={car.prixDeBase}
        />
      ))}
    </div>
  );
}

export default AllCarList;
