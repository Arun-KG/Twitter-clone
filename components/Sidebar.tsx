import { FC } from "react";
import Image from "next/image";

import SideBarRow from "./SideBarRow";

import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from "@heroicons/react/outline";

interface ISidebar {}

const Sidebar: FC<ISidebar> = (props) => {
  return (
    <div className="flex flex-col col-span-2 px-4 items-center md:items-start">
      <img
        className="m-3 h-11 w-11 p-1 transition-colors cursor-pointer duration-200 rounded-full hover:bg-gray-100"
        src={"https://links.papareact.com/drq"}
        alt="Twitter Logo"
      />

      <SideBarRow Icon={HomeIcon} Title="Home" />
      <SideBarRow Icon={HashtagIcon} Title="Explore" />
      <SideBarRow Icon={BellIcon} Title="Notifications" />
      <SideBarRow Icon={MailIcon} Title="Messages" />
      <SideBarRow Icon={BookmarkIcon} Title="Bookmarks" />
      <SideBarRow Icon={CollectionIcon} Title="Lists" />
      <SideBarRow Icon={UserIcon} Title="Sign in" />
      <SideBarRow Icon={DotsHorizontalIcon} Title="More" />
    </div>
  );
};

export default Sidebar;
