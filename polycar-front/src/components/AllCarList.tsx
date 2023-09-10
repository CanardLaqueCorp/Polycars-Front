import { useState } from "react";
import Car from "./Car";
import * as CarData from "../data/fakeCarData.json";

function AllCarList() {
  const [filterType, setFilterType] = useState("marque");
  const [filterValue, setFilterValue] = useState("");
  const cars = CarData.cars.filter((car: {[key: string]: string}) => 
    car[filterType].toLowerCase().includes(filterValue.toLowerCase())
);

const handleFilterTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => { //on doit préciser le type de l'event, sinon il ne sait pas ce qu'il y a dedans
  setFilterType(e.target.value);
};

const handleFilterValueChange = (e: React.ChangeEvent<HTMLInputElement>) => { //idem
  setFilterValue(e.target.value);
};
return (
  <div className="AllCarListComponent">
    <div className="AllCarListHeader">
      <h1>Car List:</h1>
      <p>We have currently {cars.length} cars in our database</p>
      <div>
        <select value={filterType} onChange={handleFilterTypeChange}>
          <option value="marque">Marque</option>
          <option value="prixDeBase">Price</option>
          <option value="modele">Modele</option>
        </select>
        <input
          type="text"
          placeholder={`Enter your ${filterType}`}
          value={filterValue}
          onChange={handleFilterValueChange}
        />
      </div>
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