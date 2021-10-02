import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import Loading from "../components/Loading";
import Rocket from "../components/rocket";
import Header from "../components/header";
import Footer from "../components/footer";

const ROCKET_DATA = gql`
  query GET_ROCKET_INFO($rocketId: ID!) {
    rocket(id: $rocketId) {
      name
      description
      wikipedia
      height {
        feet
        meters
      }
    }
  }
`;

const RocketPage = ({ match }) => {
  const rocketId = match.params.id;
  const { data, loading, error } = useQuery(ROCKET_DATA, {
    variables: { rocketId },
  });
  const title = data?.rocket?.name;
  useEffect(() => {
    document.title = title;
  }, [title]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Could not fetch </div>;
  }
  if (data.rocket === null) {
    return <h1 style={{ textAlign: "center" }}>rocket does not exist</h1>;
  }
  //   console.log(data);
  return (
    <div>
      <Header />
      <Rocket data={data} id={rocketId} />
      <Footer />
    </div>
  );
};

export default RocketPage;
