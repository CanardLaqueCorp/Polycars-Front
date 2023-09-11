import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";

import App from "./App";
import HomePage from "./components/FrontPage";
import AllCarStats from "./components/AllCarStats";
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
          <Route path="/carStats/356" element={<AllCarStats />} />
        </Routes>
      </Router>
    </>
  );
}

export default RouterApp;
