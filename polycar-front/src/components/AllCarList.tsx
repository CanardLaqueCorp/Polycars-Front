import Car from "./Car";
import { CarData } from "../interface/types";
import LoadingScreen from "./LoadingScreen";
import { useEffect, useState } from "react";

function AllCarList() {
  const [filterType, setFilterType] = useState("brand");
  const [filterValue, setFilterValue] = useState("");
  const [sortOrder, setSortOrder] = useState("ecoScore");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [cars, setCars] = useState<CarData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0); // New state variable for the current page

  const carsPerPage = 18; // Define how many cars to show per page

  //we get the params from the url
  //let param = useParams<any>();
  //alert(param[1]);
  //let path = "https://cars.poly-api.fr/public/search/car/light?" + param[1];

  useEffect(() => {
    // Get the current URL
    const url = window.location.href;

    // Create a new URL object
    const urlObj = new URL(url);

    // Get the parameters from the URL
    const params = new URLSearchParams(urlObj.search);

    // Get each parameter
    const brand = params.get("brand");
    const cartype = params.get("cartype");
    const startandstop = params.get("startandstop");
    const gears = params.get("gears");
    const minPrice = params.get("minPrice");
    const maxPrice = params.get("maxPrice");
    const transmission = params.get("transmission");
    const drivesystem = params.get("drivesystem");
    const cylinder = params.get("cylinder");
    const fuel = params.get("fuel");

    // Check if all parameters are empty
    const allParamsEmpty = [
      brand,
      cartype,
      startandstop,
      gears,
      minPrice,
      maxPrice,
      transmission,
      drivesystem,
      cylinder,
      fuel,
    ].every((param) => !param);

    // Construct the path using the parameters from the URL, or use the base URL if all parameters are empty
    let path = allParamsEmpty
      ? "https://cars.poly-api.fr/public/search/car/light?"
      : `https://cars.poly-api.fr/public/search/car/light?brand=${brand}&cartype=${cartype}&startandstop=${startandstop}&gears=${gears}&minPrice=${minPrice}&maxPrice=${maxPrice}&transmission=${transmission}&drivesystem=${drivesystem}&cylinder=${cylinder}&fuel=${fuel}`;

    fetch(path)
      .then((response) => response.json())
      .then((data) => {
        setCars(data.result || []);
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
    ? cars
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
        })
        .slice(currentPage * carsPerPage, (currentPage + 1) * carsPerPage)
    : [];

  let content;

  if (isLoading) {
    content = (
      <div className="LoadingScreenWrapper" style={{ height: "10" }}>
        <LoadingScreen />
      </div>
    );
  } else if (cars && cars.length > 0) {
    content = (
      <div className="AllCarListComponent">
        <div className="AllCarListHeader">
          <h1>Car List:</h1>
          <div className="numberOfResults">
            <p>
              {filterValue === ""
                ? `Displaying the first ${filteredCars.length} results of our ${cars.length} cars`
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
                cityFuelMetric={car.cityFuelMetric}
                highwayFuelMetric={car.highwayFuelMetric}
                combinedFuelMetric={car.combinedFuelMetric}
                cityCarbonMetric={car.cityCarbonMetric}
                highwayCarbonMetric={car.highwayCarbonMetric}
                combinedCarbonMetric={car.combinedCarbonMetric}
                annualFuelCostEuro={car.annualFuelCostEuro}
                spendOnFiveYearsEuro={car.spendOnFiveYearsEuro}
                unit={car.unit}
              />
            );
          })}
        </div>
      </div>
    );
  } else
    content = (
      <div>
        <h1>Sorry but...</h1>
        <h2>We couldn't find any car matching your search criteria</h2>
        <h3>Please try again</h3>
        <p>
          You can go back to the home page by clicking on the logo on the top or
          just <a href="/">here</a>
        </p>
      </div>
    );

  return (
    <>
      {content}
      {currentPage > 0 && (
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className="PreviousPage"
        >
          Previous Page
        </button>
      )}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        className="NextPage"
      >
        Next Page
      </button>{" "}
    </>
  );
}

export default AllCarList;
