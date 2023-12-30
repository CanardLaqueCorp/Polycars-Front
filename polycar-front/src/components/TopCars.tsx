import React, { useState, useEffect } from 'react';
import Car from './Car';
import "../styles/TopCars.scss";

const TopCars = () => {
    const [topCars, setTopCars] = useState([]);

    useEffect(() => {
        fetch('https://cars.poly-api.fr/public/get/top/cars')
            .then(response => response.json())
            .then(data => {
                setTopCars(data.result.slice(0, 6));
            })
            .catch(error => console.error('Erreur:', error));
    }, []);

    return (
        <div className="TopCars">
            <h1 className="TopCarsHeader">🎖️ Most Viewed Cars 🎖️</h1>
            <h2 className="TopCarsSubHeader">The 6 most viewed cars on our website</h2>
            <div className="TopCarsList">
                {topCars.map((car) => (
                    <Car
                        key={car.id}
                        id={car.id}
                        brand={car.brand}
                        model={car.model}
                        fuel={car.fuel}
                        carType={car.carType}
                        image={`https://claq-dev.com/host/${car.id}.jpg`}
                        ecoScore={car.ecoScore}
                        annualFuelCost={car.annualFuelCost}
                        views={car.views}
                    />
                ))}
            </div>
        </div>
    );
};

export default TopCars;
