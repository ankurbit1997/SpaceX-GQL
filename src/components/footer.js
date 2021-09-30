import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const links = [
  {
    social: "twitter",
    link: "https://twitter.com/spacex",
  },
  {
    social: "youtube",
    link: "https://www.youtube.com/spacex",
  },
  {
    social: "instagram",
    link: "https://www.instagram.com/spacex/",
  },
  {
    social: "linkedin",
    link: "https://www.linkedin.com/company/spacex",
  },
];

const Footer = () => {
  return (
    <footer>
      <div>
        <Link to="/">SpaceX</Link>
        {links.map((item, i) => (
          <a key={i} href={item.link} target="_blank" rel="noreferrer">
            {item.social}{" "}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
