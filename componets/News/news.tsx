import { VStack, Flex, Text, Link } from "@chakra-ui/react";
import { newsListDataSet } from "./variables/newslist";
import { NewsList } from "./newslist";

const News = () => {
  return (
    <>
      <Flex w="100%" p="1rem 2rem" justify="space-between" align="center">
        <Text fontWeight="bold" fontSize="16px">
          NEWS
        </Text>
        <Link href="https://www.ibaraki-ct.ac.jp/?page_id=11132">
          <Text as="u" color="#006bcb" _hover={{ fontWeight: "bold" }}>
            もっと詳しく見る
          </Text>
        </Link>
      </Flex>
      <NewsList newsListDataSet={newsListDataSet} />
    </>
  );
};

export default News;
