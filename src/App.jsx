import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { TeamPage } from "./pages/TeamPage";
import { PricingPage } from "./pages/PricingPage";
import { CareerPage } from "./pages/CareerPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/career" element={<CareerPage />} />
    </Routes>
  );
}

export default App;
