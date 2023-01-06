import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import Header from "../../componets/Navbars/header";
import styles from "../../styles/Home.module.css";

const MapPage = () => {
  const Map = React.useMemo(
    () =>
      dynamic(() => import("../../componets/map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return (
    <div className={styles.container}>
      <Header></Header>
      <Map />
    </div>
  );
};

export default MapPage;
