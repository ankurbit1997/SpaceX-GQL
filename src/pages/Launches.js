import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

import Footer from "../components/footer";
import Header from "../components/header";
import PastLaunches from "../components/pastLaunches";
import Loading from "../components/Loading";
const GET_LAUNCHES_QUERY = gql`
  {
    launchesPast(limit: 10) {
      mission_name
      launch_site {
        site_name_long
      }
      links {
        article_link
        flickr_images
        video_link
      }
      rocket {
        rocket_name
      }
      id
    }
  }
`;

const Launches = () => {
  useEffect(() => {
    document.title = "Past Launches";
  }, []);
  const { data, loading, error } = useQuery(GET_LAUNCHES_QUERY);

  if (loading) return <Loading />;
  if (error) return <h1>Could not fetch</h1>;

  const launches = data.launchesPast.filter(
    (launch) =>
      launch.links.article_link && launch.links.flickr_images.length > 0
  );

  return (
    <>
      <Header />
      {launches.map((launch, i) => (
        <PastLaunches key={i} data={launch} />
      ))}
      <Footer />
    </>
  );
};

export default Launches;
