import {
  Card,
  chakra,
  Box,
  Flex,
  Icon,
  Text,
  LinkOverlay,
} from "@chakra-ui/react";
import { NewsListDataSet } from "./variables/newslist";
import { Link } from "@chakra-ui/react";

interface Props {
  newsListDataSet: NewsListDataSet[];
}

export const NewsList = (props: Props) => {
  return (
    <Box px="1rem">
      {props.newsListDataSet.map((item: NewsListDataSet, index) => {
        return (
          <Box borderBottom="1px" borderColor="#006bcb" key={index}>
            <Link href={`${item.url}`}>
              <Box mx={-3} py={2} px={4}>
                <Box mx={3}>
                  <Flex gap="4rem">
                    <Text
                      color="#006bcb"
                      _dark={{
                        color: "white.400",
                      }}
                      letterSpacing="0px"
                      fontSize="16px"
                      mb="-2"
                      p="0px"
                    >
                      {item.date}
                    </Text>
                    <Text
                      color="#006bcb"
                      opacity="0.7"
                      _dark={{
                        color: "white.400",
                      }}
                      fontSize="16px"
                    >
                      {item.category}
                    </Text>
                  </Flex>
                  <Text
                    mt="0"
                    p="0px"
                    color="black"
                    opacity="0.9"
                    _dark={{
                      color: "gray.200",
                    }}
                    fontSize="16px"
                  >
                    {item.title}
                  </Text>
                </Box>
              </Box>
            </Link>
          </Box>
        );
      })}
    </Box>
  );
};
