interface Props {
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
  fuelDetail: string;

  }
  
  function DisplayStats({ id, model, carType, priceNew, priceUsed, cylinder, transmissionType, gears, driveSystem, fuel, fuelDetail, maxBioFuel, hasStartAndStop, cityFuel, cityCarbon, highwayFuel, highwayCarbon, combinedFuel, combinedCarbon, hasGuzzler, annualFuelCost, spendOnFiveYears, feRating, ghgRating,smogRating, ecoScore  }: Props) {
    return (
      <div>
        <h1>Stats about car</h1>
        <ul>
          <li>id: {id}</li>
          <li>model: {model}</li>
          <li>carType: {carType}</li>
          <li>priceNew: {priceNew}</li>
          <li>priceUsed: {priceUsed}</li>
          <li>cylinder: {cylinder}</li>
          <li>transmissionType: {transmissionType}</li>
          <li>gears: {gears}</li>
          <li>driveSystem: {driveSystem}</li>
          <li>fuel: {fuel}</li>
          <li>fuelDetail: {fuelDetail}</li>
          <li>maxBioFuel: {maxBioFuel}</li>
          <li>hasStartAndStop: {hasStartAndStop}</li>
          <li>cityFuel: {cityFuel}</li>
          <li>cityCarbon: {cityCarbon}</li>
          <li>highwayFuel: {highwayFuel}</li>
          <li>highwayCarbon: {highwayCarbon}</li>
          <li>combinedFuel: {combinedFuel}</li>
          <li>combinedCarbon: {combinedCarbon}</li>
          <li>hasGuzzler: {hasGuzzler}</li>
          <li>annualFuelCost: {annualFuelCost}</li>
          <li>spendOnFiveYears: {spendOnFiveYears}</li>
          <li>feRating: {feRating}</li>
          <li>ghgRating: {ghgRating}</li>
          <li>smogRating: {smogRating}</li>
          <li>ecoScore: {ecoScore}</li>
        </ul>
      </div>
    );
  }
  
  export default DisplayStats;