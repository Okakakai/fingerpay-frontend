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
import { CashcardBottom } from "./cashcard/cashcardBottom";
import { CashcardBg } from "./cashcard/cashcardBg";
import { CashcardTop } from "./cashcard/cashcardTop";
import { FiRefreshCw } from "react-icons/fi";
import { GrRefresh } from "react-icons/gr";

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
      position="relative"
    >
      <Icon
        as={GrRefresh}
        color="black"
        boxSize={6}
        mr="1rem"
        position="absolute"
        top="75px"
        right="25px"
        zIndex="10"
        opacity="0.6"
      />
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        w="sm"
        mx="auto"
      >
        <Stack h="220px" w="356px" position="relative">
          <CashcardTop />
          <CashcardBg />
          <CashcardBottom />
        </Stack>
      </Flex>
    </Flex>
  );
};

export default CashCard;
