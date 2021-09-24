import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import HomeHero from "../components/HomeHero";
import "../_base.scss";
import Loading from "../components/Loading";

import background from "../images/starship.jpg";

const GET_MAIN = gql`
  {
    company {
      name
      summary
    }
  }
`;

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  const { loading, error, data } = useQuery(GET_MAIN);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return (
      <div>
        <h1>Could not Fetch</h1>
      </div>
    );
  }
  return (
    <>
      <HomeHero data={data} background={background} />
    </>
  );
};

export default Home;
