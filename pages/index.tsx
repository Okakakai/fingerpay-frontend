import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

import styles from "../styles/introduction.module.css";
import { useUser, login, logout } from "../lib/auth";
import { Box, VStack, HStack, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const user = useUser();
  const router = useRouter();

  const handleLogin = (): void => {
    login().catch((error) => {
      console.error(error);
      return <div>予期せぬerrorを検知しました。私の技術不足です</div>;
    });
  };

  useEffect(() => {
    if (user !== null) {
      const userUID = user.uid;
      router.push(`/users/${userUID}/`);
    }
  }, []);

  return (
    <div className={styles.introduction_bg}>
      <Head>
        <title>Finger Pay</title>
      </Head>
      <div>
        {user !== null ? (
          <></>
        ) : (
          <VStack>
            <Box mb="30vh" />
            <Image
              src="/FINGERPAY_LOGO_TRANSPARENT.png"
              alt="finger pay logo"
              height="80px"
              width="300px"
            />
            <HStack gap="2rem">
              <Button onClick={handleLogin}>新規 ユーザー の方</Button>
              <Button onClick={handleLogin}>ログイン</Button>
            </HStack>
          </VStack>
        )}
      </div>
    </div>
  );
};

export default Home;
