import React from "react";

import "./HomeHero.scss";

const HomeHero = ({ data, background }) => {
  return (
    <div
      className="home-hero"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="home-hero__container">
        <h1>{data?.company?.name}</h1>
        <p>{data?.company?.summary}</p>
      </div>
    </div>
  );
};

export default HomeHero;
