import Image from "next/image";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
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
        <DrawerHeader
          borderBottomWidth="1px"
          backgroundColor={"#FFFFFF"}
          px="1rem"
        >
          <Image
            src="/FINGERPAY_LOGO_TRANSPARENT.png"
            alt="FingerPay LOGO"
            width={"170px"}
            height="49.3px"
          ></Image>
        </DrawerHeader>
        <DrawerBody px={2}>
          <DrawerItems drawerItemDataSet={drawerItemDataSet} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
