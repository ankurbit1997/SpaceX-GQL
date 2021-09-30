import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import useOnClickOutside from "../hooks/useOnClickOutside";

import "./header.scss";
import { Link } from "react-router-dom";

const NAVIGATION_DATA = gql`
  {
    rockets(offset: 1) {
      id
      name
      boosters
      wikipedia
    }
  }
`;

const Header = () => {
  const { data, loading, error } = useQuery(NAVIGATION_DATA);

  const [isShow, setIsShow] = useState(false);
  const ref = React.useRef();
  useOnClickOutside(ref, () => setIsShow(false));

  if (loading) {
    return <div></div>;
  }
  if (error) {
    return <div>error</div>;
  }
  return (
    <div className="header" ref={ref}>
      <div className="header__navigation">
        <Link to="/">
          <h1>SpaceX</h1>
        </Link>
        <nav>
          {data.rockets.map((item, i) => (
            <Link key={i} to={`/rocket/${item.id}`}>
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="header__navigation__menu">
          <span onClick={() => setIsShow(!isShow)}>
            <div className={isShow ? `bar-1 active` : `bar-1`}></div>
            <div className={isShow ? `bar-2 active` : `bar-2`}></div>
            <div className={isShow ? `bar-3 active` : `bar-3`}></div>
          </span>
        </div>
      </div>
      <div className={isShow ? `header__flyout active` : `header__flyout`}>
        <div className="header__flyout__links">
          <Link to="/launches">Past Launches</Link>
          {data.rockets.map((item, i) => (
            <Link key={i} to={`/rocket/${item.id}`}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
