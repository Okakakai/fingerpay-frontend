import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import Header from "../../../../componets/Navbars/header";
import styles from "../../../../styles/helpful.module.css";

const MapPage = () => {
  const Map = React.useMemo(
    () =>
      dynamic(() => import("../../../../componets/map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Map />
      </div>
    </>
  );
};

export default MapPage;
