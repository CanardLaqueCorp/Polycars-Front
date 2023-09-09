import { Link } from "react-router-dom";
import "../styles/frontpage.scss";

const carImageList = [
    "https://claq.fr/host/random-car.jpg",
    "https://claq.fr/host/random-car2.jpg",
    "https://claq.fr/host/random-car3.jpg"
];

function changeBackground() {
    const carImage = document.querySelector(".HomePageBackground") as HTMLDivElement;
    carImage.style.backgroundImage = `url(${carImageList[Math.floor(Math.random() * carImageList.length)]})`;
}

function HomePage() {
    const randomIndex = Math.floor(Math.random() * carImageList.length);
    const randomImage = carImageList[randomIndex];
    return (
        <div className="HomePage">
            <div className="HomePageBackground" style={{ backgroundImage: `url(${randomImage})` }}></div>
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
setInterval(changeBackground, 5000);

export default HomePage;