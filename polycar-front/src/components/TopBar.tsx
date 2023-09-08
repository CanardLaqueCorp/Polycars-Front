import "../styles/topbar.scss";

function BasicExample() {
  return (
    <div id="TopBar">
      <p onClick={() => window.location.replace("/")} className="TopBarText">
        PolyCars
      </p>
      <p
        onClick={() => window.location.replace("/cars")}
        className="TopBarText"
      >
        Cars
      </p>
    </div>
  );
}

export default BasicExample;
