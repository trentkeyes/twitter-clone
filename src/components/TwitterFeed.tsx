import Tweet from "./Tweet";

const TwitterFeed = () => {
  return (
    <div className="lg:border-1 flex flex-col gap-2 border-gray-600 py-2 lg:border lg:px-3">
      <Tweet />
      <Tweet />
    </div>
  );
};

export default TwitterFeed;
