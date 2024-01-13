import { Link } from "react-router-dom";
import "../styles/frontpage.scss";

import InfosAboutPolycars from "./InfosAboutPolycars";
import TopCars from "./TopCars";
import GetInTouchFormulaire from "./GetInTouchFormulaire";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function HomePage() {
  return (
    <div className="HomePage">
      <Parallax pages={6}>
        <div className="HomePageTitle">
          {/*TOP Parralax layer*/}
          <ParallaxLayer offset={0} speed={1.2} style={{ zIndex: 1 }}>
            <h1>Polycars</h1>
          </ParallaxLayer>
          <ParallaxLayer
            className="photo"
            offset={0.9}
            speed={0.8}
            style={{
              backgroundImage: `url(https://claq-dev.com/host/wpPolycars.jpg)`,
              backgroundSize: "cover",
              width: "20%",
              borderRadius: "50% / 10% 20% 14% 20%",
              zIndex: -1,
            }}
          />

          <ParallaxLayer offset={0.3} speed={0.01}>
            {" "}
            {/* j'ai mis une vitesse lente pour que l'appel a l'action soit plus visible */}
            <h2>Find your next car. Now</h2>
          </ParallaxLayer>
          <ParallaxLayer offset={0.72} speed={0.07} style={{ zIndex: 444 }}>
            <Link to="/cars" className="HomePageButton">
              📚 Car Library
            </Link>
            <Link to="/quizz" className="HomePageButton">
              🔎 Car finder
            </Link>
          </ParallaxLayer>
        </div>
        <ParallaxLayer offset={0.84} speed={0.1}>
          <div className="infosAboutPolycars">
            <InfosAboutPolycars />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.42} speed={0.15}>
          <div className="topCars">
            <TopCars />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.96} speed={0.2}>
          <div className="getInTouchFormulaire">
            <GetInTouchFormulaire />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.1}
          speed={0.3}
          style={{
            backgroundImage: `url(https://claq-dev.com/host/wpBMW.jpg)`,
            backgroundSize: "cover",
            width: "30%",
            marginLeft: "70%",
            borderRadius: "7% 7% 7% 7%",
            zIndex: -1,
          }}
        />
        <ParallaxLayer
          offset={1.1}
          speed={1.9}
          style={{
            backgroundImage: `url(https://claq-dev.com/host/wpCar.jpg)`,
            backgroundSize: "cover",
            width: "60%",
            marginLeft: "-5%",
            borderRadius: "10% 10% 10% 10%",
            zIndex: -1,
          }}
        />
      </Parallax>
    </div>
  );
}

export default HomePage;
