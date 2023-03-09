import Tweet from "./Tweet";
import useFetchTweets from "../../hooks/fetchTweets";
import NewTweetForm from "./NewTweetForm";

const TwitterFeed = () => {
  const { tweets, setTweets, loading, error } = useFetchTweets();

  console.log("twitter feed ", tweets);

  return (
    <div className="lg:border-1 flex flex-col gap-2 border-gray-600 py-2 lg:border lg:px-3">
      <NewTweetForm tweets={tweets} setTweets={setTweets} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {tweets && Object.values(tweets)}
      {/* {tweets &&
        Object.values(tweets).map((tweet, index) => (
          <Tweet key={index} tweet={tweet} />
        ))} */}
      <Tweet />
      <Tweet />
    </div>
  );
};

export default TwitterFeed;
