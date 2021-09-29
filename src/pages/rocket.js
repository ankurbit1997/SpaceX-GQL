import React from "react";
import { gql, useQuery } from "@apollo/client";
import Loading from "../components/Loading";

const ROCKET_DATA = gql`
  query GET_ROCKET_INFO($rocketId: ID!) {
    rocket(id: $rocketId) {
      name
      height {
        feet
        meters
      }
    }
  }
`;

const RocketPage = ({ match }) => {
  //   console.log(match.params.id);
  const rocketId = match.params.id;
  const { data, loading, error } = useQuery(ROCKET_DATA, {
    variables: { rocketId },
  });

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
      <h1>hi from {data?.rocket?.name}</h1>
    </div>
  );
};

export default RocketPage;
