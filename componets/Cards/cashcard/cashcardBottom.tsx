import { Box, Flex, Text } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { useMemo } from "react";

export const CashcardBottom = () => {
  const price = useMemo(() => faker.commerce.price(), []);
  return (
    <Flex
      zIndex="2"
      position="absolute"
      bottom="0"
      left="50%"
      transform="translateX(-50%)"
      h="56px"
      w="100%"
      bg="white"
      borderBottomRadius="30px"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex flexDir="column" ml="3rem">
        <Text fontSize="xs" fontWeight="semibold">
          残高
        </Text>
        <Flex alignItems="flex-end">
          <Text mt="-5px" fontSize="18px">
            {price}
          </Text>
          <Text fontSize="11px" ml="2px" pb="2px">
            円
          </Text>
        </Flex>
      </Flex>
      <Box borderWidth="1.6px" borderColor="#00C9E8" mr="1.4rem" opacity="0.7">
        <Text
          color="#00C9E8"
          mx="1.2rem"
          my="0.2rem"
          fontSize="12px"
          fontWeight="semibold"
        >
          チャージ
        </Text>
      </Box>
    </Flex>
  );
};
