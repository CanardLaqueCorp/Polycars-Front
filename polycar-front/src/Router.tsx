import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import "./App.scss";

function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Home</h1> <a href="/cars">Cars</a>
            </div>
          }
        />
        <Route path="/cars" element={<App />} />
      </Routes>
    </Router>
  );
}

export default RouterApp;
