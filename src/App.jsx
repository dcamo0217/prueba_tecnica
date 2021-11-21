import React from "react";
import Home from "./components/Home/index";
import NavBar from "./components/NavBar";
import Why from "./components/Why";
import OurPlans from "./components/OurPlans";
import Club from "./components/Club";
import Form from "./components/Form";
import Social from "./components/Social";

export function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Why />
      <OurPlans />
      <Club />
      <Form />
      <Social />
    </div>
  );
}
