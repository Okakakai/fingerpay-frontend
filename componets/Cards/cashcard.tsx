import {
  Box,
  chakra,
  Flex,
  Grid,
  HStack,
  Stack,
  GridItem,
  Text,
  Icon,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { FiRefreshCw } from "react-icons/fi";
import styled from "@emotion/styled";

const CashCard = () => {
  return (
    <Flex
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        w="sm"
        mx="auto"
      >
        <Stack h="220px" w="356px" position="relative">
          <Flex
            h="144px"
            w="100%"
            zIndex="2"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            flexDir="column"
            alignItems="center"
          >
            <Flex flexDir="row" alignItems="center" gap="3rem">
              <Image
                src="https://res.cloudinary.com/dk9lw5vg4/image/upload/q_100/v1673091769/FINGERPAY/ic_round-fingerprint_ng3vvq.webp"
                alt="FingerPrintIcon"
                height="65px"
                width="50px"
              />
              <CardTitle>FINGER PAY</CardTitle>
            </Flex>
            <Text mt="2rem" fontSize="16px">
              1234 1234 1234 1234
            </Text>
          </Flex>
          <Flex h="220px" borderRadius="30px" overflow="hidden">
            <Box w="100%" h="100%" bgGradient="linear(#5DD5E8, #B2FAFF)"></Box>
            <Box w="100%" h="100%" bgGradient="linear(#5DD5E8, #B2FAFF)"></Box>
            <Box w="100%" h="100%" bgGradient="linear(#5DD5E8, #B2FAFF)"></Box>
            <Box w="100%" h="100%" bgGradient="linear(#2ECFE8, #B2FAFF)"></Box>
            <Box w="100%" h="100%" bgGradient="linear(#00C9E8, #B2FAFF)"></Box>
          </Flex>
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
              <Text>残高</Text>
              <Text>1320 円</Text>
            </Flex>
            <Icon as={FiRefreshCw} color="black" boxSize={7} mr="3rem" />
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
};

const CardTitle = styled.p`
  font-weight: normal;
  color: #006bcb;
  font-size: 32px;
  text-shadow: rgba(0, 0, 0, 0.3) 0px 6px 4px;
`;

export default CashCard;
