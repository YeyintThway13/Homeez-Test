import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

import Planner from "./pages/Planner";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/planner" element={<Planner />} />
      </Routes>
    </Router>
  );
}

export default App;
