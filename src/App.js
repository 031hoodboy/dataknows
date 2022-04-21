import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
