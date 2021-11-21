import React from "react";
import Home from "./components/Home/index";
import NavBar from "./components/NavBar";
import Why from "./components/Why";
import OurPlans from "./components/OurPlans";
import MoreInfo from "./components/MoreInfo";

export function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Why />
      <OurPlans />
      <MoreInfo />
    </div>
  );
}
