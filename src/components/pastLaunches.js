import React from "react";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";

import "./pastLaunches.scss";

const PastLaunches = ({ data }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="past-launch">
      <Fade bottom>
        <h1>{data.mission_name}</h1>
        <div className="past-launch__gallery">
          <Slider {...settings}>
            {data.links.flickr_images.slice(0, 3).map((image, i) => (
              <img src={image} key={i} alt="" />
            ))}
          </Slider>
        </div>
        <h2>Launch Site : {data.launch_site.site_name_long}</h2>
      </Fade>
      <Fade bottom>
        <p>Rocket Used : {data.rocket.rocket_name}</p>
        <div className="past-launch__links">
          <a href={data.links.article_link} target="_blank" rel="noreferrer">
            Read More
          </a>
          <a href={data.links.video_link} target="_blank" rel="noreferrer">
            Watch Video
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default PastLaunches;
