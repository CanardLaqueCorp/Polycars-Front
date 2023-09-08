import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import "./App.css";

function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/cars" element={<App />} />
      </Routes>
    </Router>
  );
}

export default RouterApp;
