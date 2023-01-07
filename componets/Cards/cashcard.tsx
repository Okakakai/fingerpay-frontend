import {
  Box,
  chakra,
  Flex,
  Grid,
  HStack,
  Stack,
  GridItem,
} from "@chakra-ui/react";

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
        <Stack h="220px" w="356px">
          {/* <Grid w="100%" h="100%" templateColumns="repeat(5, 1fr)">
            <GridItem
              w="100%"
              bgGradient="linear(red.100 0%, yellow.500)"
            ></GridItem>
            <GridItem></GridItem>
            <GridItem></GridItem>
            <GridItem></GridItem>
            <GridItem></GridItem>
          </Grid> */}
          <Flex h="220px" borderRadius="30px" overflow="hidden">
            <Box w="100%" h="100%" bgGradient="linear(#5DD5E8, #B2FAFF)"></Box>
            <Box w="100%" h="100%" bgGradient="linear(#5DD5E8, #B2FAFF)"></Box>
            <Box w="100%" h="100%" bgGradient="linear(#5DD5E8, #B2FAFF)"></Box>
            <Box w="100%" h="100%" bgGradient="linear(#2ECFE8, #B2FAFF)"></Box>
            <Box
              w="100%"
              h="100%"
              bgGradient="linear(#00C9E8, #2ecfe857)"
            ></Box>
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default CashCard;
