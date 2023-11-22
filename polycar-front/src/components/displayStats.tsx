<<<<<<< HEAD
=======
import "../styles/displayStats.scss";
import { CarProps } from "../interface/props";
import { useEffect, useState } from "react";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
function DisplayStats({
  id,
  brand,
  model,
  carType,
  priceNew,
  priceUsed,
  cylinder,
  transmissionType,
  gears,
  driveSystem,
  fuel,
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
  views,
}: CarProps) {
  const imageUrl = "https://claq-dev.com/host/" + id + ".jpg";
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
  const Carbon = [
    {
      subject: "cityCarbon",
      A: 154,
      B: 1135,
    },
    {
      subject: "highwayCarbon",
      A: 158,
      B: 788,
    },
    {
      subject: "combinedCarbon",
      A: 155,
      B: 979,
    },
  ];

  const Ecological = [
    {
      subject: "ecoScore",
      A: 7.3,
      B: 2.1,
    },
    {
      subject: "feRating",
      A: 9,
      B: 1,
    },
    {
      subject: "ghgRating",
      A: 9,
      B: 1,
    },
    {
      subject: "smogRating",
      A: 7,
      B: 1,
    },
  ];

  const Fuel = [
    {
      subject: "maxBioFuel",
      A: 15,
      B: 0,
    },
    {
      subject: "cityFuel",
      A: 57,
      B: 7.76,
    },
    {
      subject: "highwayFuel",
      A: 56,
      B: 11.24,
    },
    {
      subject: "combinedFuel",
      A: 57,
      B: 9.02,
    },
  ];

  return (
    <div className="all">
      <div className="HeaderContainer-data">
        <div className="ImageContainer-data">
          {" "}
          <img src={imageUrl} />{" "}
        </div>
        <div className="TitleContainer-data">
          <h1>Data about this car:</h1>
          <div className="brand">
            <h3>Brand : {brand}</h3>
            <h3>Model : {model}</h3>
          </div>
        </div>
        <div className="ImageContainer-data">
          {" "}
          <img className="image_reverse" src={imageUrl} />{" "}
        </div>
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
      <div className="TableContainer">
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
                  <th scope="row">City Fuel :</th>
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
        <div className="FuelChart">
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart
              cx={300}
              cy={170}
              outerRadius={150}
              width={600}
              height={325}
              data={Fuel}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Fuel"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Radar
                name="Max Fuel"
                dataKey="B"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="TableContainer">
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
        <div className="EcologicalChart">
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart
              cx={300}
              cy={170}
              outerRadius={150}
              width={600}
              height={325}
              data={Ecological}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Ecological"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Radar
                name="Max Ecological"
                dataKey="B"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="TableContainer">
        <div className="Carbon table data-body-container">
          <div className="data-body">
            <h5 className="card-title-data">Carbon Data</h5>
            <table className="table_Carbon">
              <tbody>
                <tr>
                  <th scope="row">City Carbon :</th>
                  <td>
                    {cityCarbon} GCO
                    <span style={{ fontSize: "0.9rem" }}>2</span>/M
                  </td>
                </tr>
                <tr>
                  <th scope="row">Highway Carbon :</th>
                  <td>
                    {highwayCarbon} GCO
                    <span style={{ fontSize: "0.9rem" }}>2</span>/M
                  </td>
                </tr>
                <tr>
                  <th scope="row">Combined Carbon :</th>
                  <td>
                    {combinedCarbon} GCO
                    <span style={{ fontSize: "0.9rem" }}>2</span>/M
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="CarbonChart">
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart
              cx={300}
              cy={200}
              outerRadius={150}
              width={600}
              height={325}
              data={Carbon}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Carbon"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Radar
                name="Max Carbon"
                dataKey="B"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <button
        className="btn-data btn-primary"
        onClick={() => window.location.replace("/cars")}
      >
        Back to cars
      </button>
    </div>
  );
}

export default DisplayStats;
>>>>>>> 3c2a33b (view count in allcarlist)
