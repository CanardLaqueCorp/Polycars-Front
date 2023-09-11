import DisplayStats from "./displayStats";

function getAllCarData() {
  //on recupère les données de toutes la voiture correspondant à l'id
}

function AllStatsAboutCar() {
  let idOfCar: string = "36766";
  //on récupère l'id de la voiture dans l'url
  idOfCar = window.location.href.split("/")[4];

  return (
    <div>
      <h1>Stats about car</h1>
      <DisplayStats idOfCar={idOfCar} />
    </div>
  );
}

getAllCarData();
export default AllStatsAboutCar;
