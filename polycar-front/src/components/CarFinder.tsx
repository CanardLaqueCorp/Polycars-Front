import '../styles/CarFinder.scss';

//return the options for the fuel
function RecupFuels() {
	const elements= [{id: 1, label: "gasoline"}, {id: 2, label: "diesel"}]; //getById(fuels,"all");
	const elementsHTML=elements.map((element) => (<option value={element['id'].toString()}>{element['label']}</option>));
	return(elementsHTML);
}

function RecupBrands() {
	const elements= [{id: 1, label: "Toyota"}, {id: 2, label: "Mercedes"}]; //getById(brands,"all");
	const elementsHTML=elements.map((element) => (<option value={element['id'].toString()}>{element['label']}</option>));
	return(elementsHTML);
}

function RecupTypes() {
	const elements= [{id: 1, label: "Midsize Cars"}, {id: 2, label: "Compact Cars"}]; //getById(carTypes,"all");
	const elementsHTML=elements.map((element) => (<option value={element['id'].toString()}>{element['label']}</option>));
	return(elementsHTML);
}

function RecupDriveSystems() {
	const elements= [{id: 1, label: "Mechanical"}, {id: 2, label: "Hydraulic"}]; //getById(driveSystems,"all");
	const elementsHTML=elements.map((element) => (<option value={element['id'].toString()}>{element['label']}</option>));
	return(elementsHTML);
}

function RecupTransmissions() {
	const elements= [{id: 1, label: "Auto"}, {id: 2, label: "Manual"}]; //getById(transmissions,"all");
	const elementsHTML=elements.map((element) => (<option value={element['id'].toString()}>{element['label']}</option>));
	return(elementsHTML);
}

function RecupCylinders() {
	const elements= [3,4,6,8,10,12,16];
	const elementsHTML=elements.map((element) => (<option value={element.toString()}>{element}</option>));
	return(elementsHTML);
}

function RecupGears() {
	const elements= [2,3,4,5,6,7,8];
	const elementsHTML=elements.map((element) => (<option value={element.toString()}>{element}</option>));
	return(elementsHTML);
}

function CarFinder() {
  return (
  <>
	<form method="get">
		<p className="box">
	      	<p className="type">⛽<br/>
				Type of fuel : <select className="button" name="fuel">
      				<option value="0">All</option>
      				<RecupFuels/>;
      			</select><br/>
      			Max Anual fuel cost : <textarea className="button" maxLength={4} name="maxAnualFuelCost" defaultValue="9999"/> $
			</p>

      		<p className="type">🚗<br/>
				Brand : <select className="button" name="brand">
      				<option value="0">All</option>
      				<RecupBrands/>;
      			</select><br/>
				Type of car : <select className="button" name="type">
      				<option value="0">All</option>
      				<RecupTypes/>;
      			</select><br/>
				Star and stop : <select className="button" name="startAndStop">
      				<option value="0">All</option>
					<option value="yes">Yes</option>
					<option value="no">No</option>
      			</select><br/>
				Number of gears <select className="button" name="gear">
					<option value="0">All</option>
					<RecupGears/>;
				</select>
			</p>
      	</p>

      	<p className="box">
      		<p className="type">⚙️ <br/>
				Type of drive system : <select className="button" name="driveSystem">
      				<option value="0">All</option>
      				<RecupDriveSystems/>;
      			</select><br/>
      			Type of transmission : <select className="button" name="transmission">
      				<option value="0">All</option>
      				<RecupTransmissions/>;
      			</select><br/>
				Number of cylinders <select className="button" name="cylinder">
					<option value="0">All</option>
					<RecupCylinders/>;
				</select>
			</p>

      		<p className="type">💰<br/>
				Minimal price (New) : <textarea className="button" maxLength={8} name="minPriceNew" defaultValue="0" /> $<br/>
      			Maximal price (New) : <textarea className="button" maxLength={8} name="maxPriceNew" defaultValue="99999999" /> $<br/>
				Minimal price (Used) : <textarea className="button" maxLength={8} name="minPriceUsed" defaultValue="0" /> $<br/>
      			Maximal price (Used) : <textarea className="button" maxLength={8} name="maxPriceUsed" defaultValue="99999999" /> $
			</p>
      	</p>
		  <p className="box">
      		<p className="type">🌍<br/>
				Minimal eco score : <textarea className="button" maxLength={3} name="minEcoScore" defaultValue="0" /><br/>
				Max Carbon (city) : <textarea className="button" maxLength={7} name="maxCarbonCity" defaultValue="999" /> g/100 miles<br/>
				Max Carbon (highway) : <textarea className="button" maxLength={7} name="maxHighwayCity" defaultValue="999" /> g/100 miles<br/>
				Max Carbon (combined) : <textarea className="button" maxLength={7} name="maxCombinedCity" defaultValue="999" /> g/100 miles
			</p>
      	</p>
      	<input className="submit" type="submit" value="Search" name="action"/>
	</form>
	</>
	);
}

export default CarFinder;