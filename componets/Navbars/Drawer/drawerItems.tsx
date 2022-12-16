import { Card, chakra, Box, Flex, Icon, Text } from "@chakra-ui/react";
import { DrawerItemDataSet } from "./variables/drawerItem";
import { FiChevronRight } from "react-icons/fi";

interface Props {
  drawerItemDataSet: DrawerItemDataSet[];
}

export const DrawerItems = (props: Props) => {
  return (
    <div>
      {props.drawerItemDataSet.map((item: DrawerItemDataSet, index) => {
        return (
          <Flex
            maxW="lx"
            w="full"
            mx="auto"
            my="1rem"
            rounded="lg"
            overflow="hidden"
            key={index}
          >
            <Flex justifyContent="center" alignItems="center" w={12}>
              <Icon
                as={item.icon}
                color="black"
                boxSize={8}
                _dark={{ color: "white" }}
              />
            </Flex>
            <Box mx={-3} py={2} px={4}>
              <Box mx={3}>
                <Text
                  color="black.500"
                  _dark={{
                    color: "white.400",
                  }}
                  fontWeight="bold"
                  letterSpacing="0px"
                  fontSize="lg"
                  mb="-2"
                  p="0px"
                >
                  {item.title}
                </Text>
                <Text
                  mt="0"
                  p="0px"
                  color="gray.600"
                  _dark={{
                    color: "gray.200",
                  }}
                  fontSize="md"
                >
                  {/* {item.description} */}
                  "フレーズを入れる"
                </Text>
              </Box>
            </Box>
          </Flex>
        );
      })}
    </div>
  );
};
