import { useState, useEffect } from "react";
import axios from "axios";
import { VStack } from "@chakra-ui/react";
import Header from "../../../../componets/Navbars/header";
import styles from "../../../../styles/helpful.module.css";
import { HistoryList } from "../../../../componets/Cards/history/historylist";

const HistoryPage = () => {
  return (
    <>
      <Header />
      <div
        className={`${styles.container_padding_bg_gray} ${styles.container_bg_gray} ${styles.container_dengerous_height_assign}`}
      >
        <HistoryList />
      </div>
    </>
  );
};

export default HistoryPage;
