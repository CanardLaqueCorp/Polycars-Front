import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CarProps from "../interface/CarProps";

import "../styles/car.scss";

function Car(props: CarProps) {
  const { marque, modele, annee, prixDeBase, image } = props;
  return (
    <div className="Car">
      <Card>
        <div id="CarContent">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <div id="CarBody">
              <Card.Title>
                <p id="CarMarque">{marque}</p>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <p id="CarModele">{modele}</p>
              </Card.Subtitle>
              <Card.Text>
                <div id="CarAnnee">
                  <p>Commercialisation: {annee}</p>
                </div>
                <div id="CarPrix">
                  <p>Prix de base: {prixDeBase}€</p>
                </div>
              </Card.Text>
              <Button variant="primary">See more</Button>
            </div>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}

export default Car;
