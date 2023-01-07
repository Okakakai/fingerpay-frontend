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
        <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
        <DrawerBody>
          <DrawerItems drawerItemDataSet={drawerItemDataSet} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
