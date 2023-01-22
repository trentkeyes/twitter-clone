import TweetAvatar from "./TweetAvatar";
import TweetStats from "./TweetStats";

const Tweet = () => {
  return (
    <div className="flex flex-col gap-2 text-white border-b border-gray-600 border-b-1 mb-2">
      <TweetAvatar />
      <p>
        Well, it’s 12:44pm here right now…and after 10 1/2 months…it’s (big)
        Hardcore History day again. Thanks for your patience. You guys are the
        best. Hopefully it doesn’t suck (but it might! We lose all perspective
        by this point)
      </p>

      <p >
        <span>2:48 a. m. · 16 ene. 2023</span>
      </p>
      <TweetStats />
    </div>
  );
};

export default Tweet;
