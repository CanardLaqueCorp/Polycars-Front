//we import the car-list component
import Car from "./components/Car";
import * as CarData from "./data/fakeCarData.json";

import "./App.scss";

function App() {
  const cars = CarData.cars;
  return (
    <>
      {cars.map((car) => (
        <Car
          marque={car.marque}
          modele={car.modele}
          annee={car.annee}
          prixDeBase={car.prixDeBase}
        />
      ))}
    </>
  );
}

export default App;
