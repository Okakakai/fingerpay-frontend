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
      size={"lg"}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
        <DrawerBody>
          <Flex
            w="full"
            bg="#edf3f8"
            _dark={{
              bg: "#3e3e3e",
            }}
            p={50}
            alignItems="center"
            justifyContent="center"
          >
            <Flex
              maxW="sm"
              w="full"
              mx="auto"
              bg="white"
              _dark={{
                bg: "gray.800",
              }}
              shadow="md"
              rounded="lg"
              overflow="hidden"
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                w={12}
                bg="blue.500"
              >
                {/* <Icon as={IoMdAlert} color="white" boxSize={6} /> */}
              </Flex>

              <Box mx={-3} py={2} px={4}>
                <Box mx={3}>
                  <chakra.span
                    color="blue.500"
                    _dark={{
                      color: "blue.400",
                    }}
                    fontWeight="bold"
                  >
                    Info
                  </chakra.span>
                  <chakra.p
                    color="gray.600"
                    _dark={{
                      color: "gray.200",
                    }}
                    fontSize="sm"
                  >
                    This channel archived by the owner!{" "}
                  </chakra.p>
                </Box>
              </Box>
            </Flex>
          </Flex>
          ;
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
