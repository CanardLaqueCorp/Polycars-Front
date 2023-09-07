import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CarProps from "../interface/CarProps";

function Car(props: CarProps) {
  const { marque, modele, annee, prixDeBase } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{marque}</Card.Title>
        <Card.Text>
          {modele} {annee} {prixDeBase}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Car;
