export interface Tweet extends TweetBody {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "tweet";

  blockedTweet: boolean;
}

export type TweetBody = {
  text: string;
  username: string;
  profileImage: string;
  image?: string;
};
