import React from "react";

import { Hero } from "../components/Hero/Hero";
import { Contact } from "../components/Contact/Contact";
import { Barbers } from "../components/Barbers/Barbers";
import { Gallery } from "../components/Gallery/Gallery";

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <Barbers />
      <Gallery />
      <Contact />
    </main>
  );
};

export default LandingPage;
