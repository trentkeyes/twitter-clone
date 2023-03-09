import Image from "next/image";
import {
  PhotoIcon,
  GifIcon,
  ListBulletIcon,
  FaceSmileIcon,
  CalendarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { db } from "../../firebase";
import { useUserAuth } from "../../provider/AuthProvider";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import useFetchTweets from "../../hooks/fetchTweets";

import firebase from "firebase/app";

type Tweet = {
  content: string;
  author: string;
};

// async function saveTweet(tweet: Tweet) {
//   const tweetsCollection = collection(db, "tweets");
//   const newTweetRef = doc(tweetsCollection);
//   const newTweet = {
//     ...tweet,
//     id: newTweetRef.id,
//   };
//   await set(newTweetRef, newTweet);
//   return newTweet;
// }

const NewTweetForm = ({ tweets, setTweets }) => {
  const [tweet, setTweet] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { user } = useUserAuth();

  console.log(tweets);

  const handleAddTweet = async (event) => {
    event.preventDefault();
    if (!tweet) {
      setError("Please enter a tweet.");
      return;
    }
    if (tweet.length > 280) {
      setError("Tweet is too long.");
      console.log("tweet.length: ", tweet.length);
      return;
    }
    if (user) {
      const userRef = doc(db, "users", user.uid);
      const newKey =
        Object.keys(tweets).length === 0
          ? 1
          : [Math.max(...Object.keys(tweets)) + 1];
      setTweets({
        ...tweets,
        [newKey]: tweet,
      });
      await setDoc(
        userRef,
        {
          tweets: {
            [newKey]: tweet,
          },
        },
        { merge: true }
      );
      setTweet("");
    }
  };

  return (
    <div className="border-t-1 hidden items-start justify-between border border-gray-600 px-3 py-2 lg:flex">
      <Image
        src="/images/profile.jpg"
        alt="profile pic"
        height={50}
        width={50}
        className="flex-none rounded-full"
      />
      <div className="w-full pl-2">
        <textarea
          className="w-full resize-none bg-black pt-2 indent-1 outline-none"
          placeholder="What's happening?"
          onChange={(e) => setTweet(e.target.value)}
        />
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <PhotoIcon className="h-6 w-6 cursor-pointer text-blue-700" />
            <GifIcon className="h-6 w-6 cursor-pointer text-blue-700" />
            <ListBulletIcon className="h-6 w-6 cursor-pointer text-blue-700" />
            <FaceSmileIcon className="h-6 w-6 cursor-pointer text-blue-700" />
            <CalendarIcon className="h-6 w-6 cursor-pointer text-blue-700" />
            <MapPinIcon className="h-6 w-6 cursor-pointer text-blue-700" />
          </div>
          {/* <button
            onClick={() => getCollections()}
            className="rounded-2xl bg-blue-700 px-4 py-1 "
          >
            Tweet
          </button> */}
        </div>
        <button
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={handleAddTweet}
          className="rounded-2xl bg-blue-700 px-4 py-1 "
        >
          Tweet
        </button>
        {tweets && Object.values(tweets)}
      </div>{" "}
    </div>
  );
};

export default NewTweetForm;
