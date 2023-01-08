import { Flex } from "@chakra-ui/react";
import BreadcrumbComponent from "./breadcrumb";
import HeaderNavItems from "./headerNavItems";

const Header = () => {
  return (
    <Flex justifyContent={"center"} px="1rem" alignItems="center" bg="white">
      <BreadcrumbComponent />
      <HeaderNavItems />
    </Flex>
  );
};

export default Header;
