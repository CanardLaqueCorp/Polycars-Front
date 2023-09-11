import { Link } from "react-router-dom";
import "../styles/frontpage.scss";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="HomePageTitle">
        <h1>Polycars</h1>
        <h2>Find your next car</h2>
      </div>
      <Link to="/cars" className="HomePageButton">
        Car Library
      </Link>
      <Link to="/quizz" className="HomePageButton">
        Car finder
      </Link>
    </div>
  );
}

export default HomePage;
