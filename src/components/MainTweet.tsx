import TweetAvatar from "./TweetAvatar";
import TweetStats from "./TweetStats";

const MainTweet = () => {
  return (
    <div className="border-b-1 flex flex-col gap-2 border-b border-gray-600 py-3 text-white">
      <TweetAvatar />
      <p>
        Well, it’s 12:44pm here right now…and after 10 1/2 months…it’s (big)
        Hardcore History day again. Thanks for your patience. You guys are the
        best. Hopefully it doesn’t suck (but it might! We lose all perspective
        by this point)
      </p>

      <p>
        <span>2:48 a. m. · 16 ene. 2023</span>
      </p>
      <TweetStats />
    </div>
  );
};

export default MainTweet;
