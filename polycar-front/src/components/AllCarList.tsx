import { useState } from "react";
import Car from "./Car";
import * as CarData from "../data/fakeCarData.json";

function AllCarList() {
  const [filterType, setFilterType] = useState("marque");
  const [filterValue, setFilterValue] = useState("");
  const cars = CarData.cars.filter((car: {[key: string]: string}) => 
    car[filterType].toLowerCase().includes(filterValue.toLowerCase())
  );

  const handleFilterTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterType(e.target.value);
  };

  const handleFilterValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  return (
    <div className="AllCarListComponent">
      <div className="AllCarListHeader">
        <h1>Car List:</h1>
        <p>
          {filterValue === "" ? ( //le ? est un if et le : est un else, comme en python
            `We have ${cars.length} cars in our database`
          ) : (
            `${cars.length} results for your search`
          )}
        </p>
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
          <button onClick={() => setFilterValue("")}>Reset</button>
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