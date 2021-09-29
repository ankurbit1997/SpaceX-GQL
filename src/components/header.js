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
        <h1>SpaceX</h1>
        <nav>
          {data.rockets.map((item, i) => (
            <Link key={i} to={`/rocket/${item.id}`}>
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="header__navigation__menu">
          <span
            onClick={() => setIsShow(!isShow)}
            className={isShow && `active`}
          ></span>
        </div>
      </div>
      <div className={isShow ? `header__flyout active` : `header__flyout`}>
        flyout
      </div>
    </div>
  );
};

export default Header;
