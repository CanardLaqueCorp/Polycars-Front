import "../styles/displayStats.scss";

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

  function DisplayStats({brand, model, carType, priceNew, priceUsed, cylinder, transmissionType, gears, driveSystem, fuel, maxBioFuel, hasStartAndStop, cityFuel, cityCarbon, highwayFuel, highwayCarbon, combinedFuel, combinedCarbon, hasGuzzler, annualFuelCost, spendOnFiveYears, feRating, ghgRating,smogRating, ecoScore  }: Props) {
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
        <div className="HeaderContainer-data">
            <div className="ImageContainer-data"> <img src="https://picsum.photos/200"/>  </div>
            <div className="TitleContainer-data">
                <h1>Data about this car</h1>
                <div className="brand">
                <h3>Brand : {brand}</h3>
                <h3>Model : {model}</h3>
                </div>
            </div>
            <div className="ImageContainer-data"> <img className="image_reverse" src="https://picsum.photos/200"/>  </div>
        </div>
        <div className="TableContainer">
            <div className="Technical table">
                    <div className="data-body">
                    <h5 className="card-title-data">Car data</h5>
                    <table className="table_Car">
                        <tbody>
                            <tr>
                                <th scope="row">Car Type :</th>
                                <td>{carType}</td>
                            </tr>
                            <tr>
                                <th scope="row">Cylinder :</th>
                                <td>{cylinder}</td>
                            </tr>
                            <tr>
                                <th scope="row">Gears :</th>
                                <td>{gears}</td>
                            </tr>
                            <tr>
                                <th scope="row">Drive System :</th>
                                <td>{driveSystem}</td>
                            </tr>
                            <tr>
                                <th scope="row">Transmission Type :</th>
                                <td>{transmissionType}</td>
                            </tr>
                            <tr>
                                <th scope="row">Has Start And Stop :</th>
                                <td>{hasStartAndStop ? "true" : "false"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="Fuel table">
                <div className="data-body">
                    <h5 className="card-title-data">Fuel data</h5>
                    <table className="table_Fuel">
                        <tbody>
                            <tr>
                                <th scope="row">Fuel :</th>
                                <td>{fuel}</td>
                            </tr>
                            <tr>
                                <th scope="row">Max BioFuel :</th>
                                <td>{maxBioFuel}</td>
                            </tr>
                            <tr>
                                <th scope ="row">City Fuel :</th>
                                <td>{cityFuel}</td>
                            </tr>
                            <tr>
                                <th scope="row">Highway Fuel :</th>
                                <td>{highwayFuel}</td>
                            </tr>
                            <tr>
                                <th scope="row">Combined Fuel :</th>
                                <td>{combinedFuel}</td>
                            </tr>
                            <tr>
                                <th scope="row">Annual Fuel Cost :</th>
                                <td>{annualFuelCost}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="Rating table">
                <div className="data-body">
                    <h5 className="card-title-data">Ecological data</h5>
                    <table className="table_Rating">
                        <tbody>
                            <tr>
                                <th scope="row">Eco Score :</th>
                                <td>{ecoScore}</td>
                            </tr>
                            <tr>
                                <th scope="row">fe Rating :</th>
                                <td>{feRating}</td>
                            </tr>
                            <tr>
                                <th scope="row">ghg Rating :</th>
                                <td>{ghgRating}</td>
                            </tr>
                            <tr>
                                <th scope="row">smog Rating :</th>
                                <td>{smogRating}</td>
                            </tr>
                            <tr>
                                <th scope="row">Has Guzzler :</th>
                                <td>{hasGuzzler ? "true" : "false"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className="dataContainer">
            <div className="Carbon table">
                <div className="data-body">
                    <h5 className="card-title-data">Carbon Data</h5>
                    <table className="table_Carbon">
                        <tbody>
                            <tr>
                                <th scope="row">City Carbon :</th>
                                <td>{cityCarbon}</td>
                            </tr>
                            <tr>
                                <th scope="row">Highway Carbon :</th>
                                <td>{highwayCarbon}</td>
                            </tr>
                            <tr>
                                <th scope="row">Combined Carbon :</th>
                                <td>{combinedCarbon}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="Price table">
                <div className="data-body">
                    <h5 className="card-title-data">Prices and Costs</h5>
                    <table className="table_card"> 
                        <tbody>
                            <tr>
                                <th scope="row">Price New :</th>
                                <td>{priceNew}</td>
                            </tr>
                            <tr>
                                <th scope="row">Price Used :</th>
                                <td>{priceUsed}</td>
                            </tr>
                            <tr>
                                <th scope="row">Spend on Five Years :</th>
                                <td>{spendOnFiveYears}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <button className="btn-data btn-primary"
        onClick={() => window.location.replace("/cars")}
        >
            Return to cars list
        </button>
    </div>
    );
  }
  
  export default DisplayStats;