import DisplayStats from "./displayStats";
import LoadingScreen from "./LoadingScreen";
import { useState, useEffect } from "react";

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
  ecoScore: number;
}

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
      {/* Pass the extracted variables as props to DisplayStats */}
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