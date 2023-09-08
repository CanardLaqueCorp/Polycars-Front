import "../styles/topbar.scss";

function BasicExample() {
  return (
    <div id="TopBar" onClick={() => window.location.replace("/")}>
      <p>PolyCars</p>
    </div>
  );
}

export default BasicExample;
