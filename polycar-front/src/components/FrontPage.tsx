import { Link } from "react-router-dom";
import "../styles/frontpage.scss";

import InfosAboutPolycars from "./InfosAboutPolycars";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function HomePage() {
  return (
    <div className="HomePage">
      <Parallax pages={4}>
        <div className="HomePageTitle">
          <ParallaxLayer offset={0} speed={0.5}>
            <h1>Polycars</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={0.5} speed={0.01}>
            {" "}
            {/* j'ai mis une vitesse lente pour que l'appel a l'action soit plus visible */}
            <h2>Find your next car. Now</h2>
          </ParallaxLayer>
          <ParallaxLayer offset={0.72} speed={0.07}>
            <Link to="/cars" className="HomePageButton">
              Car Library
            </Link>
            <Link to="/quizz" className="HomePageButton">
              Car finder
            </Link>
          </ParallaxLayer>
        </div>
        <ParallaxLayer offset={0.84} speed={0.1}>
          <div className="infosAboutPolycars">
            <InfosAboutPolycars />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default HomePage;
