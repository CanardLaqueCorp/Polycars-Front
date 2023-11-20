import '../styles/CarFinder.scss';
import { useState, useEffect } from "react";

//return a list of id and label 
function Recup (path: RequestInfo) {
	const [data, setData] = useState<String [] | null>(null);
	useEffect(() => {
		fetch(path)
		  .then((response) => response.json())
		  .then((data) => setData(data.result))
		  .then(() => console.log(data))
		  .catch((error) => console.error(error));
	}, []);
	var elements=new Array();
	if (data) {
		data.forEach(function (value) {
			console.log(value.id,value.label);
			elements.push({id: value.id, label: value.label});
		});
	}
	return elements;
}

//return the options for the fuel
function RecupFuels() {
	var elements=Recup(`https://cars.poly-api.fr/public/get/fuel`);
	const elementsHTML=elements.map((element) => (<option value={element['id'].toString()}>{element['label']}</option>));
	return(elementsHTML);
}

function RecupBrands() {
	var elements=Recup(`https://cars.poly-api.fr/public/get/brand`);
	const elementsHTML=elements.map((element) => (<option value={element['id'].toString()}>{element['label']}</option>));
	return(elementsHTML);
}

function RecupTypes() {
	var elements=Recup(`https://cars.poly-api.fr/public/get/type`);
	const elementsHTML=elements.map((element) => (<option value={element['id'].toString()}>{element['label']}</option>));
	return(elementsHTML);
}

function RecupSeats() {
  const elements = [1, 2, 3, 4, 5, 6, 7, 8];
  const elementsHTML = elements.map((element) => (
    <option value={element.toString()}>{element}</option>
  ));
  return elementsHTML;
}

function RecupDriveSystems() {
  const elements = Recup(`https://cars.poly-api.fr/public/get/drive/system`);
  const elementsHTML = elements.map((element) => (
    <option value={element["id"].toString()}>{element["label"]}</option>
  ));
  return elementsHTML;
}

function RecupTransmissions() {
  const [transmissionData, setTransmissionData] = useState<String [] | null>(null);
	useEffect(() => {
		fetch(`https://cars.poly-api.fr/public/get/transmission`)
		  .then((response) => response.json())
		  .then((transmissionData) => setTransmissionData(transmissionData.result))
		  .then(() => console.log(transmissionData))
		  .catch((error) => console.error(error));
	}, []);
	var elements=new Array();
	if (transmissionData) {
		transmissionData.forEach(function (value) {
			console.log(value.id,value.label);
			elements.push({id: value.id, label: value.label});
		});
	}
  const elementsHTML = elements.map((element) => (
    <option value={element["id"].toString()}>{element["label"]}</option>
  ));
  return elementsHTML;
}

function RecupCylinders() {
  const elements = [3, 4, 6, 8, 10, 12, 16];
  const elementsHTML = elements.map((element) => (
    <option value={element.toString()}>{element}</option>
  ));
  return elementsHTML;
}

function RecupGears() {
  const elements = [2, 3, 4, 5, 6, 7, 8];
  const elementsHTML = elements.map((element) => (
    <option value={element.toString()}>{element}</option>
  ));
  return elementsHTML;
}

function RecupDrivingWheels() {
  const elements = [2, 3, 4];
  const elementsHTML = elements.map((element) => (
    <option value={element.toString()}>{element}</option>
  ));
  return elementsHTML;
}

function CarFinder() {
  return (
    <>
      <h1>Let's find your dream car !</h1>
      <form method="get">
        <p className="type">
          <abbr title="Everything about the car">🚗</abbr>
          <br />
          <abbr title="The brand of cars">Brand : </abbr>
          <select className="button" name="brand">
            <option value="0">All</option>
            <RecupBrands />;
          </select>
          <br />
          <abbr title="The type of cars">Type of the car : </abbr>
          <select className="button" name="type">
            <option value="0">All</option>
            <RecupTypes />;
          </select>
          <br />
          <abbr title="The number of seats in cars">Number of seats : </abbr>
          <select className="button" name="gear">
            <option value="0">All</option>
            <RecupSeats />;
          </select>
          <br />
          <abbr title="If cars must have a Start and Stop system">
            Start and Stop :{" "}
          </abbr>
          <select className="button" name="startAndStop">
            <option value="0">All</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <br />
          <abbr title="The number of gears of cars">Number of gears : </abbr>
          <select className="button" name="gear">
            <option value="0">All</option>
            <RecupGears />;
          </select>
          <br />
          <br />
          <abbr title="Everything about the price">💰</abbr>
          <br />
          <abbr title="The price of cars">Price : </abbr> Min :{" "}
          <textarea
            className="button"
            maxLength={8}
            name="minPriceNew"
            defaultValue="0"
          />{" "}
          € | Max :{" "}
          <textarea
            className="button"
            maxLength={8}
            name="maxPriceNew"
            defaultValue="99999999"
          />{" "}
          €
          <br />
          <br />
          <abbr title="Everything about fuel">⛽</abbr>
          <br />
          <abbr title="The type of fuel used by cars">Type of fuel : </abbr>
          <select className="button" name="fuel">
            <option value="0">All</option>
            <RecupFuels />;
          </select>
          <br />
          <br />
          <abbr title="Everything about the system">⚙️</abbr>
          <br />
          <abbr title="The type of transmission of cars">
            Type of transmission :{" "}
          </abbr>
          <select className="button" name="transmission">
            <option value="0">All</option>
            <RecupTransmissions />;
          </select>
          <br />
          <abbr title="The tye of drive system of cars">
            Type of drive system :{" "}
          </abbr>
          <select className="button" name="driveSystem">
            <option value="0">All</option>
            <RecupDriveSystems />;
          </select>
          <br />
          <abbr title="The number of cylinders of cars">
            Number of cylinders{" "}
          </abbr>
          <select className="button" name="cylinder">
            <option value="0">All</option>
            <RecupCylinders />;
          </select>
          <br />
          <abbr title="The number of driving wheels of cars">
            Number of driving wheels :{" "}
          </abbr>
          <select className="button" name="drivingWheels">
            <option value="0">All</option>
            <RecupDrivingWheels />;
          </select>
        </p>
        <input className="submit" type="submit" value="Search" name="action" />
      </form>
    </>
  );
}

export default CarFinder;
