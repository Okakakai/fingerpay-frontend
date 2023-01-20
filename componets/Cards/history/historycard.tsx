import { VStack, HStack, Icon, Flex, Text } from "@chakra-ui/react";
import { HistoryDataSet } from "./variables/historydata";
import { faker } from "@faker-js/faker";
import { useMemo } from "react";

interface Props {
  historyData: HistoryDataSet;
}

{
  /* <VStack
          boxShadow="md"
          p="25px"
          gap="1rem"
          bg="white"
          borderRadius="6px"
        >
        </VStack> */
}

export const HistoryCard = (props: Props) => {
  const price = useMemo(() => faker.commerce.price(100, 999, 0), []);
  return (
    <div>
      {
        <Flex
          boxShadow="md"
          p="1rem"
          mb="0.75rem"
          gap="1rem"
          bg="white"
          borderRadius="6px"
          justify="flex-start"
          h="8rem"
        >
          <Flex w="100%" justify="space-between">
            <Icon
              mt="0.25rem"
              ml="1rem"
              as={props.historyData.icon}
              boxSize={8}
              _dark={{ color: "white" }}
            />
            <Flex flexDir="column" ml="-4rem">
              <HStack w="100%">
                <Text opacity="0.7" fontSize="0.9rem" fontWeight="bold">
                  {props.historyData.title}にお支払い
                </Text>
              </HStack>
              <Text opacity="0.5" fontWeight="light" fontSize="xs">
                {props.historyData.title}
              </Text>
              <Text fontSize="xs" mt="auto">
                決済番号 {faker.finance.routingNumber()}
              </Text>
            </Flex>
            <Flex mt="-0.5rem">
              <Text fontSize={"lg"} fontWeight="bold" ml="auto" mr="0">
                {price}
              </Text>
              <Text ml="0.1rem" pt="0.5rem" fontSize={"xs"} fontWeight="bold">
                円
              </Text>
            </Flex>
          </Flex>
        </Flex>
      }
    </div>
  );
};
