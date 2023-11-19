import "../styles/displayStats.scss";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';



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
  function DisplayStats({id, brand, model, carType, priceNew, priceUsed, cylinder, transmissionType, gears, driveSystem, fuel, maxBioFuel, hasStartAndStop, cityFuel, cityCarbon, highwayFuel, highwayCarbon, combinedFuel, combinedCarbon, hasGuzzler, annualFuelCost, spendOnFiveYears, feRating, ghgRating,smogRating, ecoScore  }: Props) {
    let imageUrl = "https://claq-dev.com/host/" + id + ".jpg";
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

     // Define radar chart data
    const radarData = [
    {
      subject: 'Math',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
        subject: "Chinese",
        A: 98,
        B: 130,
        fullMark: 150
      },
      {
        subject: "English",
        A: 86,
        B: 130,
        fullMark: 150
      },
      {
        subject: "Geography",
        A: 99,
        B: 100,
        fullMark: 150
      },
      {
        subject: "Physics",
        A: 85,
        B: 90,
        fullMark: 150
      },
      {
        subject: "History",
        A: 65,
        B: 85,
        fullMark: 150
      }
    ];

    return (
    <div className="all">
        <div className="HeaderContainer-data">
            <div className="ImageContainer-data"> <img src={imageUrl}/>  </div>
            <div className="TitleContainer-data">
                <h1>Data about this car</h1>
                <div className="brand">
                <h3>Brand : {brand}</h3>
                <h3>Model : {model}</h3>
                </div>
            </div>
            <div className="ImageContainer-data"> <img className="image_reverse" src={imageUrl}/>  </div>
        </div>
        <div className="TableContainer">
            <div className="Technical table data-body-container">
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
            <div className="Fuel table data-body-container">
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
                                <td>{maxBioFuel} %</td>
                            </tr>
                            <tr>
                                <th scope ="row">City Fuel :</th>
                                <td>{cityFuel} mpg</td>
                            </tr>
                            <tr>
                                <th scope="row">Highway Fuel :</th>
                                <td>{highwayFuel} mpg</td>
                            </tr>
                            <tr>
                                <th scope="row">Combined Fuel :</th>
                                <td>{combinedFuel} mpg</td>
                            </tr>
                            <tr>
                                <th scope="row">Annual Fuel Cost :</th>
                                <td>{annualFuelCost} $</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="Rating table data-body-container">
                <div className="data-body">
                    <h5 className="card-title-data">Ecological data</h5>
                    <table className="table_Rating">
                        <tbody>
                            <tr>
                                <th scope="row">Eco Score :</th>
                                <td>{ecoScore}/100</td>
                            </tr>
                            <tr>
                                <th scope="row">fe Rating :</th>
                                <td>{feRating}/10</td>
                            </tr>
                            <tr>
                                <th scope="row">ghg Rating :</th>
                                <td>{ghgRating}/10</td>
                            </tr>
                            <tr>
                                <th scope="row">smog Rating :</th>
                                <td>{smogRating}/10</td>
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
            <div className="Carbon table data-body-container">
                <div className="data-body">
                    <h5 className="card-title-data">Carbon Data</h5>
                    <table className="table_Carbon">
                        <tbody>
                            <tr>
                                <th scope="row">City Carbon :</th>
                                <td>{cityCarbon} GCO<span style={{fontSize:'0.9rem'}}>2</span>/M</td>
                            </tr>
                            <tr>
                                <th scope="row">Highway Carbon :</th>
                                <td>{highwayCarbon} GCO<span style={{fontSize:'0.9rem'}}>2</span>/M</td>
                            </tr>
                            <tr>
                                <th scope="row">Combined Carbon :</th>
                                <td>{combinedCarbon} GCO<span style={{fontSize:'0.9rem'}}>2</span>/M</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="Price table data-body-container">
                <div className="data-body">
                    <h5 className="card-title-data">Prices and Costs</h5>
                    <table className="table_card"> 
                        <tbody>
                            <tr>
                                <th scope="row">Price New :</th>
                                <td>{priceNew} $</td>
                            </tr>
                            <tr>
                                <th scope="row">Price Used :</th>
                                <td>{priceUsed} $</td>
                            </tr>
                            <tr>
                                <th scope="row">Spend on Five Years :</th>
                                <td>{spendOnFiveYears} $</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className="RadarChartContainer">
            <ResponsiveContainer width="100%" height={400}>
                <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    {/* Add more Radar components for additional data sets if needed */}
                </RadarChart>
            </ResponsiveContainer>
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
