import { RefreshIcon } from "@heroicons/react/outline";
import { FC } from "react";
import TweetBox from "./TweetBox";

interface IFeed {}

const Feed: FC<IFeed> = (props) => {
  return (
    <div className="col-span-7 lg:col-span-4  border-x">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 font-bold">Home</h1>
        <RefreshIcon className="w-8 h-8 cursor-pointer text-twitter mr-5 mt-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-75" />
      </div>
      <div>
        <TweetBox />
      </div>
    </div>
  );
};

export default Feed;
