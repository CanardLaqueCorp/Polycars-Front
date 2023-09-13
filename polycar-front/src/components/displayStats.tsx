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
  }
  
  function DisplayStats({ id, brand, model, carType, priceNew, priceUsed, cylinder, transmissionType, gears, driveSystem, fuel, maxBioFuel, hasStartAndStop, cityFuel, cityCarbon, highwayFuel, highwayCarbon, combinedFuel, combinedCarbon, hasGuzzler, annualFuelCost, spendOnFiveYears, feRating, ghgRating,smogRating, ecoScore  }: Props) {
      return (
      <div>
        <h1>Stats about car</h1>
        <h3>brand: {brand}</h3>
        <h3>model: {model}</h3>

        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Car Stats</h5>
                <table className="table"> 
                    <tbody>
                        <tr>
                            <th scope="row">Car Type</th>
                            <td>{carType}</td>
                        </tr>
                        <tr>
                            <th scope="row">Price New</th>
                            <td>{priceNew}</td>
                        </tr>
                        <tr>
                            <th scope="row">Price Used</th>
                            <td>{priceUsed}</td>
                        </tr>
                        <tr>
                            <th scope="row">Cylinder</th>
                            <td>{cylinder}</td> 
                        </tr>
                        <tr>
                            <th scope="row">Transmission Type</th>
                            <td>{transmissionType}</td>
                        </tr>
                        <tr>
                            <th scope="row">Gears</th>
                            <td>{gears}</td>
                        </tr>
                        <tr>
                            <th scope="row">Drive System</th>
                            <td>{driveSystem}</td>
                        </tr>
                        </tbody>
                </table>
            </div>
        </div>
        <ul>
          <li>fuel: {fuel}</li>
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