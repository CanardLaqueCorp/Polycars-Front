interface Props {
  idOfCar: string;
}

function DisplayStats({ idOfCar }: Props) {
  return (
    <div>
      <h1>Id of the car: {idOfCar}</h1>
    </div>
  );
}

export default DisplayStats;
