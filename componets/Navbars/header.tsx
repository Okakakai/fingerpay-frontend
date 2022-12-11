import { Flex } from "@chakra-ui/react";
import BreadcrumbComponent from "./breadcrumb";
import NavItems from "./navItems";

const Header = () => {
  return (
    <Flex justifyContent={"center"} alignItems="center" m="0 auto">
      <BreadcrumbComponent />
      <NavItems />
    </Flex>
  );
};

export default Header;
