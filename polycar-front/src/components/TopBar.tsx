import { Link } from "react-router-dom";
import "../styles/topbar.scss";

function BasicExample() {
  return (
    <div id="TopBar">
      <Link to="/" className="TopBarText">
        <p>Polycars</p>
      </Link>
      <Link to="/cars" className="TopBarTextSmall">
        <p>_Car Library</p>
      </Link>
      <Link to="/quizz" className="TopBarTextSmall">
        <p>_Car Finder</p>
      </Link>
      <div></div>
    </div>
  );
}

export default BasicExample;
