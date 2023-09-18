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
      			Max Anual fuel cost : <textarea className="button" maxLength={4} name="maxAnualFuelCost" defaultValue="9999"/> €
			</p>
      		<p className="type">🚗<br/>
				Brand : <select className="button" name="brand">
      				<option value="0">All</option>
      				<RecupBrands/>;
      			</select><br/>
				Type of car : <select className="button" name="type">
      				<option value="0">All</option>
      				<RecupTypes/>;
      			</select>
			</p>
      	</p>
      	<p className="box">
      		<p className="type">⚙️ <br/>
				Type of drive system: <select className="button" name="driveSystem">
      				<option value="0">All</option>
      				<RecupDriveSystems/>;
      			</select><br/>
      			Type of transmission : <select className="button" name="transmission">
      				<option value="0">All</option>
      				<RecupTransmissions/>;
      			</select>
			</p>
      		<p className="type">💰<br/>
				Minimal price : <textarea className="button" maxLength={9} name="minPrice" defaultValue="0" /> €<br/>
      			Maximal price : <textarea className="button" maxLength={9} name="maxPrice" defaultValue="999999999" /> €
			</p>
      	</p>
      	<input className="submit" type="submit" value="Search" name="action"/>
	</form>
	</>
	);
}

export default CarFinder;