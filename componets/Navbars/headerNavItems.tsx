import { HamburgerIcon } from "@chakra-ui/icons";
import { Avatar, Button, HStack, useDisclosure } from "@chakra-ui/react";
import DrawerComponent from "./Drawer/drawer";

const HeaderNavItems = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HStack mr="sm" p={2} pb={4} spacing={10}>
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      <Button colorScheme="gray" onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <DrawerComponent isOpen={isOpen} onClose={onClose} />
    </HStack>
  );
};

export default HeaderNavItems;
