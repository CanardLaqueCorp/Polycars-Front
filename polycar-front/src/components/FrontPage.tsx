import { Link } from "react-router-dom";
import "../styles/frontpage.scss";

function HomePage() {
    return (
        <div className="HomePage">
            <div className="HomePageHeader">
                <h1 className="HomePageTitle">Welcome to PolyCars</h1>
                <p className="HomePageSubtitle">
                    We are here to help you find your dream car!
                </p>
                <hr className="HomePageDivider" />
                <p className="HomePageDescription">
                    We have more than 7 cars in our database And a home-made quizz to help you find the car that suits you the best!
                </p>
                <div className="HomePageButtonContainer">
                <Link to="/cars" className="HomePageButton">
                    See Our Cars
                </Link>
                <Link to="/quizz" className="HomePageButton">
                    Do the Quizz in miniutes!
                </Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;