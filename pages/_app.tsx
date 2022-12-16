import { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ChakraProvider
        theme={extendTheme({
          fonts: {
            heading: "Inter, sans-serif;",
            body: "Inter, sans-serif;",
          },
        })}
      >
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
