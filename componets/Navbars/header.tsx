import { Flex } from "@chakra-ui/react";
import BreadcrumbComponent from "./breadcrumb";
import HeaderNavItems from "./headerNavItems";

const Header = () => {
  return (
    <Flex justifyContent={"center"} alignItems="center" m="0 auto">
      <BreadcrumbComponent />
      <HeaderNavItems />
    </Flex>
  );
};

export default Header;
