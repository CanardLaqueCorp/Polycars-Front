import { useState } from "react";
import Car from "./Car";
import * as CarData from "../data/fakeCarData.json";

function AllCarList() {
  const [filterMarque, setFilterMarque] = useState("");
  const cars = CarData.cars.filter((car) =>
    car.marque.toLowerCase().includes(filterMarque.toLowerCase())
  );

  return (
    <div className="AllCarListComponent">
      <div className="AllCarListHeader">
        <h1>Car List:</h1>
        <p>We have currently {cars.length} cars in our database</p>
        <input // Filter imput
          type="text"
          placeholder="Filter by marque"
          value={filterMarque}
          onChange={(e) => setFilterMarque(e.target.value)} // Set the filter value by the input value
        />
        
      </div>
      <div className="AllCarList">
        {cars.map((car) => (
          <Car
            key={car.id}
            id={car.id}
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