interface CarProps {
  id : string;
  brand: string;
  model: string;
  priceNew: number;
  priceUsed: number;
  cylinder: number;
  transmission: string;
  gears: number;
  maxBioFuel: number;
  hasStartStop: boolean;
  cityFuel: number;
  cityCarbon: number;
  highwayFuel: number;
  highwayCarbon: number;
  combinedFuel: number;
  combinedCarbon: number;
  hasGuzzler: boolean;
  annualFuelCost: number;
  spendOnFiveYears: number;
  feRating: number;
  ghgRating: number;
  smogRating: number;
  image: string;
}

export default CarProps;
