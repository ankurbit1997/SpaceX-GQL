import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import HomeHero from "../components/HomeHero";
import "../_base.scss";
import Loading from "../components/Loading";

const GET_MAIN = gql`
  {
    company {
      ceo
    }
  }
`;

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  const { loading, error, data } = useQuery(GET_MAIN);

  console.log(loading);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <h1>Error</h1>;
  }
  return (
    <>
      <HomeHero data={data} />
    </>
  );
};

export default Home;
