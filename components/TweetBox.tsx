import React, { FC, useState } from "react";

import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";

interface ITweetBox {}

const TweetBox: FC<ITweetBox> = (props) => {
  const [input, setInput] = useState<string>("");

  return (
    <div className="flex space-x-2 p-5 border-b">
      <img
        className="w-14 h-14 object-cover rounded-full mt-4"
        src="https://links.papareact.com/gll"
        alt="Profile Picture"
      />
      <div className="flex flex-1 pl-2">
        <form className="flex flex-1 flex-col">
          <textarea
            value={input}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
            className="outline-none h-24 mb-3 w-full text-xl placeholder:text-xl"
            placeholder="What's Happening?"
          />
          <div className="flex items-center">
            <div className="flex  flex-1 space-x-2 text-twitter">
              <PhotographIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-125" />
              <SearchCircleIcon className="h-5 w-5" />
              <EmojiHappyIcon className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
              <LocationMarkerIcon className="h-5 w-5" />
            </div>
            <button
              disabled={!input}
              className="bg-twitter transition-opacity duration-200 text-white py-2 px-5 rounded-full font-bold disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetBox;
