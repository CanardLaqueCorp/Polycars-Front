import * as CarData from "../data/car-data-updated.json";
//we import the css
import "../styles/InfosAboutPolycars.scss";

//the following function is used to get the stats about the data
//in the future, we'll do it in the backend, and this function will be replaced by an API call
function getStatsAboutData() {
  //we get the data from the json file
  const cars = CarData.result;
  //we create an empty object that will contain the stats
  let numberOfBrands = 0;
  const brandArray: string[] = [];
  let numberOfModels = 0;
  const modelArray: string[] = [];
  let numberOfCarTypes = 0;
  const carTypeArray: string[] = [];
  //we loop through the data
  for (let i = 0; i < cars.length; i++) {
    //we get the brand of the car
    const brand = cars[i].brand;
    //we check if the brand is already in the array
    if (!brandArray.includes(brand)) {
      //if not, we add it to the array
      brandArray.push(brand);
      //and we increment the number of brands
      numberOfBrands++;
    }
    //we get the model of the car
    const model = cars[i].model;
    //we check if the model is already in the array
    if (!modelArray.includes(model)) {
      //if not, we add it to the array
      modelArray.push(model);
      //and we increment the number of models
      numberOfModels++;
    }
    //we get the car type of the car
    const carType = cars[i].carType;
    //we check if the car type is already in the array
    if (!carTypeArray.includes(carType)) {
      //if not, we add it to the array
      carTypeArray.push(carType);
      //and we increment the number of car types
      numberOfCarTypes++;
    }
  }
  console.log("numberOfBrands", numberOfBrands);
  console.log("numberOfModels", numberOfModels);
  console.log("numberOfCarTypes", numberOfCarTypes);
  console.log("brandArray", brandArray);
  console.log("modelArray", modelArray);
  console.log("carTypeArray", carTypeArray);

  return (
    <>
      <h1 className="bddInfosH1">🗂️ We have in our Database: 🗃️</h1>
      <div className="infosAboutBdd">
        <p> 🚗 {numberOfBrands} brands </p>
        <p> 🚙 {numberOfModels} models</p>
        <p> 🚘 {numberOfCarTypes} types of cars</p>
      </div>
    </>
  );
}

//we call the function
getStatsAboutData();

export default getStatsAboutData;
