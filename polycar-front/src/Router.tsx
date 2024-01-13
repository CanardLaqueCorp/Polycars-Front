import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";

import App from "./App";
import HomePage from "./components/FrontPage";
import AllStatsAboutCar from "./components/AllStatsAboutCar";
import CarFinder from "./components/CarFinder";
import "./App.scss";

function RouterApp() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<App />} />
        <Route path="/car/:id" element={<AllStatsAboutCar />} />
        <Route path="/quizz" element={<CarFinder />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default RouterApp;