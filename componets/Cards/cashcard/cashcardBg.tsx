import { Flex, Box } from "@chakra-ui/react";

export const CashcardBg = () => {
  return (
    <Flex h="220px" borderRadius="30px" overflow="hidden">
      <Box w="100%" h="100%" bgGradient="linear(#5DD5E8, #B2FAFF)"></Box>
      <Box w="100%" h="100%" bgGradient="linear(#5DD5E8, #B2FAFF)"></Box>
      <Box w="100%" h="100%" bgGradient="linear(#5DD5E8, #B2FAFF)"></Box>
      <Box w="100%" h="100%" bgGradient="linear(#2ECFE8, #B2FAFF)"></Box>
      <Box w="100%" h="100%" bgGradient="linear(#00C9E8, #B2FAFF)"></Box>
    </Flex>
  );
};
