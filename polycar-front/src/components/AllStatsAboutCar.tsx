import DisplayStats from "./displayStats";
import LoadingScreen from "./LoadingScreen";
import { useState, useEffect } from "react";
import { CarData } from "../interface/types";

function AllStatsAboutCar() {
  // Get the car ID from the URL
  const idOfCar: string = window.location.href.split("/")[4];
  const [carData, setCarData] = useState<CarData | null>(null);


  useEffect(() => {
    fetch(`https://cars.poly-api.fr/public/get/car/${idOfCar}`)
      .then((response) => response.json())
      .then((carData) => setCarData(carData.result))
      .then(() => console.log(carData))
      .catch((error) => console.error(error));
  }, []);

  const [units, setUnits] = useState("metric");

  useEffect(() => {
    localStorage.setItem("units", units);
  }, [units]);

  const switchUnits = () => {
    if (units === "metric") {
      setUnits("imperial");
    } else {
      setUnits("metric");
    }
  };


  if (!carData) {
    return <LoadingScreen />;
  }

  // Destructure the carData object to extract its properties
  const {
    id,
    brand,
    model,
    carType,
    carTypeId,
    priceNew,
    priceUsed,
    cylinder,
    transmissionType,
    transmissionTypeId,
    transmissionTypeCode,
    transmission,
    gears,
    driveSystem,
    driveSystemId,
    driveSystemCode,
    fuel,
    fuelId,
    fuelCode,
    maxBioFuel,
    hasStartAndStop,
    cityFuel,
    cityCarbon,
    highwayFuel,
    highwayCarbon,
    combinedFuel,
    combinedCarbon,
    hasGuzzler,
    annualFuelCost,
    spendOnFiveYears,
    feRating,
    ghgRating,
    smogRating,
    ecoScore,
  } = carData;

  return (
    <div>
      <button
        onClick={switchUnits}
        className="switch-units"
      >
        Click to switch units
      </button>
      


      <DisplayStats
        id={id}
        brand={brand}
        model={model}
        carType={carType}
        carTypeId={carTypeId}
        priceNew={priceNew}
        priceUsed={priceUsed}
        cylinder={cylinder}
        transmissionType={transmissionType}
        transmissionTypeId={transmissionTypeId}
        transmissionTypeCode={transmissionTypeCode}
        transmission={transmission}
        gears={gears}
        driveSystem={driveSystem}
        driveSystemId={driveSystemId}
        driveSystemCode={driveSystemCode}
        fuel={fuel}
        fuelId={fuelId}
        fuelCode={fuelCode}
        maxBioFuel={maxBioFuel}
        hasStartAndStop={hasStartAndStop}
        cityFuel={cityFuel}
        cityCarbon={cityCarbon}
        highwayFuel={highwayFuel}
        highwayCarbon={highwayCarbon}
        combinedFuel={combinedFuel}
        combinedCarbon={combinedCarbon}
        hasGuzzler={hasGuzzler}
        annualFuelCost={annualFuelCost}
        spendOnFiveYears={spendOnFiveYears}
        feRating={feRating}
        ghgRating={ghgRating}
        smogRating={smogRating}
        ecoScore={ecoScore}
      />
    </div>
  );
}

export default AllStatsAboutCar;
