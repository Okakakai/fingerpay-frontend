export interface DrawerItemDataSet {
  title: string;
  icon?: any;
  image?: {
    src: string;
    alt: string;
  };
  description?: string;
}

import { FiUser, FiMap } from "react-icons/fi";
import { AiOutlineMoneyCollect, AiOutlineHome } from "react-icons/ai";

export const drawerItemDataSet: DrawerItemDataSet[] = [
  {
    title: "Home",
    icon: AiOutlineHome,
  },
  {
    title: "User",
    icon: FiUser,
  },
  {
    title: "Map",
    icon: FiMap,
  },
  {
    title: "history",
    icon: AiOutlineMoneyCollect,
  },
];
