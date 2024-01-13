import { useState, useEffect } from 'react';
import Car from "./Car";
import "../styles/TopCars.scss";
import { CarData } from '../interface/types';

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
                {topCars.map((car: CarData) => (
                    <Car
                        id={car.id}
                        brand={car.brand}
                        model={car.model}
                        carTypeId={car.carTypeId}
                        carType={car.carType}
                        image={`https://claq-dev.com/host/${car.id}.jpg`}
                        priceNew={car.priceNew}
                        priceUsed={car.priceUsed}
                        cylinder={car.cylinder}
                        transmissionTypeId={car.transmissionTypeId}
                        transmissionTypeCode={car.transmissionTypeCode}
                        transmissionType={car.transmissionType}
                        transmission={car.transmission}
                        gears={car.gears}
                        driveSystemId={car.driveSystemId}
                        driveSystemCode={car.driveSystemCode}
                        driveSystem={car.driveSystem}
                        fuelId={car.fuelId}
                        fuelCode={car.fuelCode}
                        fuel={car.fuel}
                        maxBioFuel={car.maxBioFuel}
                        hasStartAndStop={car.hasStartAndStop}
                        cityFuel={car.cityFuel}
                        cityCarbon={car.cityCarbon}
                        highwayFuel={car.highwayFuel}
                        highwayCarbon={car.highwayCarbon}
                        combinedFuel={car.combinedFuel}
                        combinedCarbon={car.combinedCarbon}
                        hasGuzzler={car.hasGuzzler}
                        annualFuelCost={car.annualFuelCost}
                        spendOnFiveYears={car.spendOnFiveYears}
                        feRating={car.feRating}
                        ghgRating={car.ghgRating}
                        smogRating={car.smogRating}
                        ecoScore={car.ecoScore}
                        views={car.views}
                        cityFuelMetric = {car.cityFuelMetric}
                        highwayFuelMetric = {car.highwayFuelMetric}
                        combinedFuelMetric = {car.combinedFuelMetric}
                        cityCarbonMetric = {car.cityCarbonMetric}
                        highwayCarbonMetric = {car.highwayCarbonMetric}
                        combinedCarbonMetric = {car.combinedCarbonMetric}
                        annualFuelCostEuro = {car.annualFuelCostEuro}
                        spendOnFiveYearsEuro = {car.spendOnFiveYearsEuro}
                        unit = {car.unit}
                    />
                ))}
            </div>
        </div>
    );
};

export default TopCars;