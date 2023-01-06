export interface DrawerItemDataSet {
  title: string;
  icon?: any;
  image?: {
    src: string;
    alt: string;
  };
  description?: string;
  url: string;
}

import { FiUser, FiMap } from "react-icons/fi";
import { AiOutlineMoneyCollect, AiOutlineHome } from "react-icons/ai";

export const drawerItemDataSet: DrawerItemDataSet[] = [
  {
    title: "Home",
    icon: AiOutlineHome,
    url: "#",
  },
  {
    title: "hello",
    icon: AiOutlineHome,
    url: "hello",
  },
  {
    title: "User",
    icon: FiUser,
    url: "user",
  },
  {
    title: "Map",
    icon: FiMap,
    url: "map",
  },
  {
    title: "history",
    icon: AiOutlineMoneyCollect,
    url: "history",
  },
];
