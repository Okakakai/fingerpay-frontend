import { HamburgerIcon } from "@chakra-ui/icons";
import { Avatar, Button, HStack, useDisclosure } from "@chakra-ui/react";
import DrawerComponent from "./Drawer/drawer";

const HeaderNavItems = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HStack p={{ base: "1rem 0 1rem 0", md: "2" }} pb={4} spacing={10}>
      <Avatar size="md" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      <Button colorScheme="gray" onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <DrawerComponent isOpen={isOpen} onClose={onClose} />
    </HStack>
  );
};

export default HeaderNavItems;
