import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import HomeHero from "../components/HomeHero";
import "../_base.scss";
import Loading from "../components/Loading";

import background from "../images/starship.jpg";
import Header from "../components/header";
import Footer from "../components/footer";
import Roadster from "../components/roadster";

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
      <Header />
      <HomeHero data={data} background={background} />
      <Roadster />
      <Footer />
    </>
  );
};

export default Home;
