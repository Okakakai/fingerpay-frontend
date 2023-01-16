import { useState, useEffect } from "react";
import { Box, Flex, Icon, Text, VStack } from "@chakra-ui/react";
import Header from "../../componets/Navbars/header";
import styles from "../../styles/Home.module.css";

import { Data } from "../api/hello";

const HistoryPage = () => {
  const [history, setHistory] = useState<Data>({ name: "unknown" });
  useEffect(() => {
    const fetchHitory = async () => {
      const response = await fetch("/api/hello");
      const data = await response.json();
      setHistory(data.history);
    };
    fetchHitory();
  });
  return (
    <>
      <Header />
      <div
        className={`${styles.container_padding_bg_gray} ${styles.container_bg_gray} ${styles.container_dengerous_height_assign}`}
      >
        <VStack
          boxShadow="md"
          p="25px"
          gap="1rem"
          bg="white"
          borderRadius="6px"
        >
          <div>{history.name}</div>
        </VStack>
      </div>
    </>
  );
};

export default HistoryPage;
