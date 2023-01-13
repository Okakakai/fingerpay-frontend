import { useRouter } from "next/router";
import {
  Card,
  chakra,
  Box,
  Flex,
  Icon,
  Text,
  LinkOverlay,
  textDecoration,
} from "@chakra-ui/react";
import { DrawerItemDataSet } from "./variables/drawerItem";
import { GetServerSideProps } from "next";
import { Link } from "@chakra-ui/react";
import { Underline } from "react-feather";

export const getServerSideProps: GetServerSideProps = async (req) => {
  const path = req.query.path?.[0] ?? null;
  return {
    props: { path },
  };
};
interface Props {
  drawerItemDataSet: DrawerItemDataSet[];
}

export const DrawerItems = (props: Props) => {
  const router = useRouter()
  
  return (
    <div>
      {props.drawerItemDataSet.map((item: DrawerItemDataSet, index) => {
      const isCurrentPage : boolean = router.pathname === `/${item.url}`
        return (
          <Flex
            maxW="lx"
            w="full"
            py={ isCurrentPage ? "1rem" : "0.4rem"}
            px={"1rem"}
            borderRadius={4}
            key={index}
            bgColor={ isCurrentPage ? "rgba(0,107,203,0.19)" : ""}
          >
            <Flex justifyContent="center" alignItems="center" w={12}>
              <Icon
                as={item.icon}
                color={ isCurrentPage ? "rgba(0,0,0,0.7)" : "black"}
                boxSize={8}
                _dark={{ color: "white" }}
              />
            </Flex>
            <Link href={`/${item.url}`}>
              <Box mx={-3} py={2} px={4}>
                <Box mx={3}>
                  <Text
                    color={ isCurrentPage ? "rgba(0,107,203,1)" : "#000000"}
                    _dark={{
                      color: "white.400",
                    }}
                    fontSize="6.3vw"
                    fontWeight={isCurrentPage ? "semibold" : "normal"}
                    letterSpacing={"1px"}
                  >
                    {item.title}
                  </Text>
                </Box>
              </Box>
            </Link>
          </Flex>
        );
      })}
    </div>
  );
};
