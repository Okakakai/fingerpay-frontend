import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  HStack,
  Radio,
  RadioGroup,
  Stack,
  useDisclosure,
  VStack,
  Image,
  chakra,
  Link,
} from "@chakra-ui/react";

import Header from "../componets/Navbars/header";
import CashCard from "../componets/Cards/cashcard";
import News from "../componets/News/news";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <VStack>
          <CashCard />
          <News />
        </VStack>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
