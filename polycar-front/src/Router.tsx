import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";

import App from "./App";
import HomePage from "./components/FrontPage";
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
        </Routes>
      </Router>
    </>
  );
}

export default RouterApp;
