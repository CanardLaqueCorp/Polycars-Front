import Car from "./Car";
import { CarData } from "../interface/types";
import LoadingScreen from "./LoadingScreen";
import { useEffect, useState } from "react";

function AllCarList() {
  const [filterType, setFilterType] = useState("brand");
  const [filterValue, setFilterValue] = useState("");
  const [sortOrder, setSortOrder] = useState("ecoScore");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [cars, setCars] = useState<CarData[]>([]); //les voitures sont ici
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://cars.poly-api.fr/public/get/car/all/light")
      .then((response) => response.json())
      .then((data) => {
        setCars(data.result);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleFilterTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterType(e.target.value);
  };

  const handleFilterValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const handleSortDirectionChange = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const filteredCars = cars
    .filter((car: CarData) =>
      car[filterType as keyof CarData]
        .toString()
        .toLowerCase()
        .includes(filterValue.toLowerCase())
    )
    .sort((a: CarData, b: CarData) => {
      const direction = sortDirection === "asc" ? 1 : -1;
      if (sortOrder === "cylinder") {
        return direction * (b.cylinder - a.cylinder);
      } else if (sortOrder === "cityFuel") {
        return direction * (b.cityFuel - a.cityFuel);
      } else if (sortOrder === "highwayFuel") {
        return direction * (b.highwayFuel - a.highwayFuel);
      } else if (sortOrder === "combinedFuel") {
        return direction * (b.combinedFuel - a.combinedFuel);
      } else {
        return direction * (b.ecoScore - a.ecoScore); //si on n'applique pas de filtre, on trie par ecoScore
      }
    });

  return (
    <>
      {isLoading ? (
        <div className="LoadingScreenWrapper" style={{ height: "10" }}>
          <LoadingScreen />
        </div>
      ) : (
        <div className="AllCarListComponent">
          <div className="AllCarListHeader">
            <h1>Car List:</h1>
            <div className="numberOfResults">
              <p>
                {filterValue === ""
                  ? `We have ${filteredCars.length} cars in our database`
                  : `${filteredCars.length} results for your search`}
              </p>
            </div>
          </div>
          <div className="HeaderForm">
            <select value={filterType} onChange={handleFilterTypeChange}>
              <option value="brand">Brand</option>
              <option value="priceNew">Price</option>
              <option value="model">Model</option>
              <option value="fuel">Fuel</option>
              <option value="carType">Car Type</option>
              <option value="cylinder">Cylinders</option>
            </select>
            <input
              type="text"
              placeholder={`Enter your ${filterType}`}
              value={filterValue}
              onChange={handleFilterValueChange}
            />
            <button onClick={() => setFilterValue("")}>Reset</button>
            <select value={sortOrder} onChange={handleSortOrderChange}>
              <option value="ecoScore">Eco Score</option>
              <option value="cylinder">Number of Cylinders</option>
              <option value="cityFuel">City Fuel Efficiency</option>
              <option value="highwayFuel">Highway Fuel Efficiency</option>
              <option value="combinedFuel">Combined Fuel Efficiency</option>
            </select>
            <button onClick={handleSortDirectionChange}>
              {sortDirection === "asc" ? "Ascending" : "Descending"}
            </button>
          </div>
          <div className="AllCarList">
            {filteredCars.map((car) => {
              const imageUrl = `https://claq-dev.com/host/${car.id}.jpg`;
              return (
                <Car
                  key={car.id}
                  id={car.id}
                  brand={car.brand}
                  model={car.model}
                  carTypeId={car.carTypeId}
                  carType={car.carType}
                  priceNew={car.priceNew}
                  priceUsed={car.priceUsed}
                  cylinder={car.cylinder}
                  transmissionTypeId={car.transmissionTypeId}
                  transmissionTypeCode={car.transmissionTypeCode}
                  transmissionType={car.transmissionType}
                  transmission={car.transmission}
                  gears={car.gears}
                  driveSystemId={car.driveSystemId}
                  driveSystemCode={car.driveSystemCode}
                  driveSystem={car.driveSystem}
                  fuelId={car.fuelId}
                  fuelCode={car.fuelCode}
                  fuel={car.fuel}
                  maxBioFuel={car.maxBioFuel}
                  hasStartAndStop={car.hasStartAndStop}
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
                  ecoScore={car.ecoScore}
                  image={imageUrl}
                  views={car.views}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default AllCarList;
