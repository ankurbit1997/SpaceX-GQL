import React from "react";
import { gql, useQuery } from "@apollo/client";

import "./header.scss";
import { Link } from "react-router-dom";

const NAVIGATION_DATA = gql`
  {
    rockets(offset: 1) {
      id
      boosters
      wikipedia
    }
  }
`;

const Header = () => {
  const { data, loading, error } = useQuery(NAVIGATION_DATA);

  console.log(data);

  if (loading) {
    return <div></div>;
  }
  if (error) {
    return <div>error</div>;
  }
  return (
    <div className="header">
      <div className="header__navigation">
        <h1>SpaceX</h1>
        <nav>
          {data.rockets.map((item, i) => (
            <Link key={i} to={`/rocket/${item.id}`}>
              {item.id}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
