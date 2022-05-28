import { SearchIcon } from "@heroicons/react/outline";
import { FC } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

interface IWidgets {}

const Widgets: FC<IWidgets> = (props) => {
  return (
    <div className="px-2 mt-2 col-span-3 hidden lg:inline">
      <div className="flex p-3 mt-2 rounded-full space-x-2 bg-gray-100">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input className="bg-transparent outline-none" type="text" placeholder="Search Twitter" />
      </div>

      <TwitterTimelineEmbed sourceType="profile" screenName="elonmusk" options={{ height: 800 }} />
    </div>
  );
};

export default Widgets;
