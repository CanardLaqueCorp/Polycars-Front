import "../styles/topbar.scss";
import { useEffect, useState } from "react";

function BasicExample() {

  return (
    <div id="TopBar">
      <p onClick={() => window.location.replace("/")} className="TopBarText">
        PolyCars
      </p>
      <p
        onClick={() => window.location.replace("/cars")}
        className="TopBarTextSmall"
      >
        Cars Library
      </p>
      <p
        onClick={() => window.location.replace("/quizz")}
        className="TopBarTextSmall"
      >
        Car Finder
      </p>
      <div>
      </div>
    </div>
  );
}

export default BasicExample;
