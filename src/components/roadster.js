import React from "react";
import { gql, useQuery } from "@apollo/client";

import "./roadster.scss";

const ROADSTER_DATA = gql`
  {
    roadster {
      name
      details
      wikipedia
      speed_mph
      speed_kph
    }
  }
`;

const Roadster = () => {
  const { data } = useQuery(ROADSTER_DATA);
  return (
    <div className="roadster">
      <div className="roadster__video">
        <video
          src="https://www.tesla.com/ns_videos/roadster_videos/roadster-loop-imperial.mp4?20180329"
          playsInline
          autoPlay
          loop
        />
      </div>
      <div className="roadster__details">
        <h1>{data?.roadster?.name}</h1>
        <p>{data?.roadster?.details}</p>
        <a href={data?.roadster?.wikipedia} target="_blank" rel="noreferrer">
          <span>Read More</span>
        </a>
      </div>
    </div>
  );
};

export default Roadster;
