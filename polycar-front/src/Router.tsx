import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";

import App from "./App";
import "./App.scss";

function RouterApp() {
  return (
    <>
      <TopBar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>PolyCars</h1> <a href="/cars">See Our Cars!</a>
              </div>
            }
          />
          <Route path="/cars" element={<App />} />
        </Routes>
      </Router>
    </>
  );
}

export default RouterApp;
