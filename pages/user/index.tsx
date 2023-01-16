import { Box, Flex, Icon, Text, VStack } from "@chakra-ui/react";
import {
  FiLogIn,
  FiUser,
  FiCreditCard,
  FiHelpCircle,
  FiMessageSquare,
  FiSettings,
  FiFileText,
  FiChevronRight,
} from "react-icons/fi";
import Header from "../../componets/Navbars/header";
import styles from "../../styles/Home.module.css";

const UserPage = () => {
  return (
    <>
      <Header />
      <div
        className={`${styles.container} ${styles.container_bg_gray} ${styles.container_padding_bg_gray} ${styles.container_dengerous_height_assign}`}
      >
        <VStack
          boxShadow="base"
          p="25px"
          gap="1rem"
          bg="white"
          borderRadius="6px"
        >
          <Flex width="100%" pb="20px" borderBottom="dotted 2px #cecccd">
            <Icon as={FiLogIn} color="black" boxSize={7} mr="3rem" />
            <Text>ログイン情報</Text>
            <Icon ml="auto" as={FiChevronRight} color="black" boxSize={6} />
          </Flex>
          <Flex
            width="100%"
            pb="20px"
            borderBottom="dotted 2px #cecccd"
            opacity={"0.6"}
          >
            <Icon as={FiUser} color="black" boxSize={7} mr="3rem" />
            <Text>お客様情報</Text>
            <Icon ml="auto" as={FiChevronRight} color="black" boxSize={6} />
          </Flex>
          <Flex width="100%" opacity={"0.6"}>
            <Icon as={FiCreditCard} color="black" boxSize={7} mr="3rem" />
            <Text>お支払い情報</Text>
            <Icon ml="auto" as={FiChevronRight} color="black" boxSize={6} />
          </Flex>
        </VStack>
        <VStack
          boxShadow="base"
          mt="2rem"
          p="25px"
          gap="1rem"
          bg="white"
          borderRadius="6px"
        >
          <Flex
            width="100%"
            pb="20px"
            borderBottom="dotted 2px #cecccd"
            opacity={"0.6"}
          >
            <Icon as={FiHelpCircle} color="black" boxSize={7} mr="3rem" />
            <Text>よくあるご質問</Text>
            <Icon ml="auto" as={FiChevronRight} color="black" boxSize={6} />
          </Flex>
          <Flex width="100%" opacity={"0.6"}>
            <Icon as={FiMessageSquare} color="black" boxSize={7} mr="3rem" />
            <Text>お問い合わせ</Text>
            <Icon ml="auto" as={FiChevronRight} color="black" boxSize={6} />
          </Flex>
        </VStack>
        <VStack
          boxShadow="base"
          mt="2rem"
          p="25px"
          gap="1rem"
          bg="white"
          borderRadius="6px"
        >
          <Flex width="100%" opacity={"0.6"}>
            <Icon as={FiSettings} color="black" boxSize={7} mr="3rem" />
            <Text>設定</Text>
            <Icon ml="auto" as={FiChevronRight} color="black" boxSize={6} />
          </Flex>
        </VStack>
        <VStack
          boxShadow="base"
          mt="2rem"
          p="25px"
          gap="1rem"
          bg="white"
          borderRadius="6px"
        >
          <Flex width="100%" opacity={"0.6"}>
            <Icon as={FiFileText} color="black" boxSize={7} mr="3rem" />
            <Text>利用規約・同意書一覧</Text>
            <Icon ml="auto" as={FiChevronRight} color="black" boxSize={6} />
          </Flex>
        </VStack>
      </div>
    </>
  );
};

export default UserPage;
