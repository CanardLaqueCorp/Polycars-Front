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
    // We check if fuel has more than 10 characters
    if (fuel.length > 10) {
      // We cut the string to 10 characters
      fuel = fuel.substring(0, 9);
    }
    // We check if transmissionType has more than 10 characters
    if (transmissionType.length > 10) {
        // We cut the string to 10 characters
        transmissionType = transmissionType.substring(0, 9);
        }
    return (
      <div>
        <h1>Stats about car</h1>
        <h3>brand: {brand}</h3>
        <h3>model: {model}</h3>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Car Stats</h5>
                <table className="table_card"> 
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
                        <tr>
                            <th scope="row">Strat And Stop</th>
                            <td>{hasStartAndStop ? "true" : "false"}</td>
                        </tr>
                        <tr>
                            <th scope="row">Spend on five years</th>
                            <td>{spendOnFiveYears}</td>
                        </tr>
                        </tbody>
                </table>
            </div>
        </div>
        <div className="Fuel">
            <div className="card-body">
                <h5 className="card-title">Données sur le fuel</h5>
                <table className="table_Fuel">
                <tbody>
                        <tr>
                            <th scope="row">fuel</th>
                            <td>{fuel}</td>
                        </tr>
                        <tr>
                            <th scope="row">max BioFuel</th>
                            <td>{maxBioFuel}</td>
                        </tr>
                        <tr>
                            <th scope ="row">city Fuel</th>
                            <td>{cityFuel}</td>
                        </tr>
                        <tr>
                            <th scope="row">highway Fuel</th>
                            <td>{highwayFuel}</td>
                        </tr>
                        <tr>
                            <th scope="row">combined Fuel</th>
                            <td>{combinedFuel}</td>
                        </tr>
                        <tr>
                            <th scope="row">annual Fuel Cost</th>
                            <td>{annualFuelCost}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <h3>Données sur le carbon</h3>
        <ul>
          <li>cityCarbon: {cityCarbon}</li>
          <li>highwayCarbon: {highwayCarbon}</li>
          <li>combinedCarbon: {combinedCarbon}</li>
          <li>hasGuzzler: 
            {hasGuzzler ? "true" : "false"} </li>
          <li>feRating: {feRating}</li>
          <li>ghgRating: {ghgRating}</li>
          <li>smogRating: {smogRating}</li>
          <li>ecoScore: {ecoScore}</li>
        </ul>
      </div>
    );
  }
  
  export default DisplayStats;