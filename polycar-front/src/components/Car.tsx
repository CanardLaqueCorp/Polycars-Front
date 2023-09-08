import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CarProps from "../interface/CarProps";

import "../styles/car.scss";

function Car(props: CarProps) {
  const { marque, modele, annee, prixDeBase } = props;
  return (
    <div className="Car">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>
            <p id="CarMarque">{marque}</p>
          </Card.Title>
          <Card.Text>
            {modele} {annee} {prixDeBase}
          </Card.Text>
          <Button variant="primary">See more</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Car;
