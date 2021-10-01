import React from "react";
import Fade from "react-reveal/Fade";

import "./HomeHero.scss";

const HomeHero = ({ data, background }) => {
  return (
    <div
      className="home-hero"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="home-hero__container">
        <Fade bottom>
          <h1>{data?.company?.name}</h1>
          <p>{data?.company?.summary}</p>
        </Fade>
      </div>
    </div>
  );
};

export default HomeHero;
