import React from "react";

import VehicleGrid from "../components/VehicleGrid";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import News from "../components/News";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PremiumBrands from "../components/PremiumBrands";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <VehicleGrid />
      <PremiumBrands />
      <Stats />
      <News />
      <Footer />
    </>
  );
}

export default Home;
