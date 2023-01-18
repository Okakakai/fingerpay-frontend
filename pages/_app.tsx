import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

import { useAuth } from "../lib/auth";

type Props = {
  children: JSX.Element;
};

const Auth = ({ children }: Props): JSX.Element => {
  const isLoading = useAuth();

  return isLoading ? <p>Loading... </p> : children;
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <Auth>
          <Component {...pageProps} />
        </Auth>
      </RecoilRoot>
    </ChakraProvider>
  );
};

export default App;
