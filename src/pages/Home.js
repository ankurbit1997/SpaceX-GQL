import React, { useEffect } from "react";
import HomeHero from "../components/HomeHero";

import "../_base.scss";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <HomeHero data="test" />
    </>
  );
};

export default Home;
