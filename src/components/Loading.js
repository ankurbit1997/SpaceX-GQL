import React from "react";
import Lottie from "react-lottie";
import lottiedata from "../animation/rocket-in-space.json";
import "./loading.scss";

const Loading = () => {
  return (
    <div>
      <Animation lotti={lottiedata} height={600} />
    </div>
  );
};

const Animation = ({ lotti, width, height }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="rocket-loader">
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
};

export default Loading;
