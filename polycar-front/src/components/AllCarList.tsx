import { useState } from "react";
import Car from "./Car";
import * as CarData from "../data/car-data-updated.json";

interface CarData {
  id: number;
  brand: string;
  model: string;
  carTypeId: number;
  carType: string;
  priceNew: number;
  priceUsed: number;
  cylinder: number;
  transmissionTypeId: number;
  transmissionTypeCode: string;
  transmissionType: string;
  transmission: string;
  gears: number;
  driveSystemId: number;
  driveSystemCode: string;
  driveSystem: string;
  fuelId: number;
  fuelCode: string;
  fuel: string;
  maxBioFuel: number;
  hasStartAndStop: boolean;
  cityFuel: number;
  cityCarbon: number;
  highwayFuel: number;
  highwayCarbon: number;
  combinedFuel: number;
  combinedCarbon: number;
  hasGuzzler: boolean;
  annualFuelCost: number;
  spendOnFiveYears: number;
  feRating: number;
  ghgRating: number;
  smogRating: number;
}

function AllCarList() {
  const [filterType, setFilterType] = useState("brand");
  const [filterValue, setFilterValue] = useState("");
  const cars = CarData.result.filter((car: CarData) => 
    car[filterType as keyof CarData].toLowerCase().includes(filterValue.toLowerCase())
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
          {filterValue === "" ? (
            `We have ${cars.length} cars in our database`
          ) : (
            `${cars.length} results for your search`
          )}
        </p>
        <div>
          <select value={filterType} onChange={handleFilterTypeChange}>
            <option value="brand">Brand</option>
            <option value="priceNew">Price</option>
            <option value="model">Model</option>
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
            brand={car.brand}
            model={car.model}
            priceNew={car.priceNew}
            priceUsed={car.priceUsed}
            cylinder={car.cylinder}
            transmission={car.transmission}
            gears={car.gears}
            maxBioFuel={car.maxBioFuel}
            hasStartStop={car.hasStartAndStop}
            cityFuel={car.cityFuel}
            cityCarbon={car.cityCarbon}
            highwayFuel={car.highwayFuel}
            highwayCarbon={car.highwayCarbon}
            combinedFuel={car.combinedFuel}
            combinedCarbon={car.combinedCarbon}
            hasGuzzler={car.hasGuzzler}
            annualFuelCost={car.annualFuelCost}
            spendOnFiveYears={car.spendOnFiveYears}
            feRating={car.feRating}
            ghgRating={car.ghgRating}
            smogRating={car.smogRating}
            image="https://via.placeholder.com/150"
          />
        ))}
      </div>
    </div>
  );
}

export default AllCarList;