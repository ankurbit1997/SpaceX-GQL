import React from "react";

import "./rocket.scss";

const Rocket = ({ data, id }) => {
  console.log(data, id);
  const imgStyle = {
    backgroundImage: "url(../assets/" + id + ".jpg)",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    height: "100vh",
  };
  return (
    <div className="rocket">
      <div className="rocket__header" style={imgStyle}>
        <h1>{data?.rocket?.name}</h1>
        <p>{data?.rocket?.description}</p>
        <a href={data?.rocket?.wikipedia} target="_blank" rel="noreferrer">
          {" "}
          Read More
        </a>
      </div>
    </div>
  );
};

export default Rocket;
