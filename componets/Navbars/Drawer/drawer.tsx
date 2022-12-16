import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  useDisclosure,
  chakra,
} from "@chakra-ui/react";
import { drawerItemDataSet } from "./variables/drawerItem";

import { FiUser } from "react-icons/fi";
import { DrawerItems } from "./drawerItems";
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const DrawerComponent = (props: Props) => {
  return (
    <Drawer
      placement={"left"}
      onClose={props.onClose}
      isOpen={props.isOpen}
      size={{ base: "xs", md: "md" }}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
        <DrawerBody>
          {/* <Flex
            maxW="md"
            w="full"
            mx="auto"
            my="1rem"
            rounded="lg"
            overflow="hidden"
          >
            <Flex justifyContent="center" alignItems="center" w={12}>
              <Icon
                as={FiUser}
                color="black"
                boxSize={6}
                _dark={{ color: "white" }}
              />
            </Flex>
            <Box mx={-3} py={2} px={4}>
              <Box mx={3}>
                <chakra.span
                  color="green.500"
                  _dark={{
                    color: "green.400",
                  }}
                  fontWeight="bold"
                >
                  Success
                </chakra.span>
                <chakra.p
                  color="gray.600"
                  _dark={{
                    color: "gray.200",
                  }}
                  fontSize="sm"
                >
                  Your account was registered!
                </chakra.p>
              </Box>
            </Box>
          </Flex> */}
          <DrawerItems drawerItemDataSet={drawerItemDataSet} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
