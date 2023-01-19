import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FiRefreshCcw } from "react-icons/fi";
import { GrRefresh } from "react-icons/gr";
import { faker } from "@faker-js/faker";

export const CashcardTop = () => {
  return (
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
        {faker.finance.creditCardNumber("63[7-9]#-####-####-###L")}
      </Text>
    </Flex>
  );
};

const CardTitle = styled.p`
  font-weight: normal;
  color: #006bcb;
  font-size: 32px;
  text-shadow: rgba(0, 0, 0, 0.3) 0px 6px 4px;
`;
