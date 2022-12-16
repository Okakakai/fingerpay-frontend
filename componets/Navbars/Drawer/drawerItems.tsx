import { Card, chakra, Box, Flex, Icon } from "@chakra-ui/react";
import { DrawerItemDataSet, drawerItemDataSet } from "./variables/drawerItem";

export const DrawerItems = () => {
  return (
    <div>
      {drawerItemDataSet.map((item: DrawerItemDataSet, i) => {
        return (
          <Flex
            maxW="md"
            w="full"
            mx="auto"
            my="1rem"
            rounded="lg"
            overflow="hidden"
          >
            <Flex justifyContent="center" alignItems="center" w={12}>
              <Icon
                as={item.icon}
                color="black"
                boxSize={6}
                _dark={{ color: "white" }}
              />
            </Flex>
            <Box mx={-3} py={2} px={4}>
              <Box mx={3}>
                <chakra.span
                  color="green.500"
                  _dark={{
                    color: "green.400",
                  }}
                  fontWeight="bold"
                >
                  {item.title}
                </chakra.span>
                <chakra.p
                  color="gray.600"
                  _dark={{
                    color: "gray.200",
                  }}
                  fontSize="sm"
                >
                  {item.description}
                </chakra.p>
              </Box>
            </Box>
          </Flex>
        );
      })}
    </div>
  );
};
