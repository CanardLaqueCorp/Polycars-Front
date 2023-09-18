import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";

import App from "./App";
import HomePage from "./components/FrontPage";
import AllStatsAboutCar from "./components/AllStatsAboutCar";
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
              <>
                <HomePage />
              </>
            }
          />
          <Route path="/cars" element={<App />} />
          <Route path="/car/:id" element={<AllStatsAboutCar />} />
        </Routes>
      </Router>
    </>
  );
}

export default RouterApp;
