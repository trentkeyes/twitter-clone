import Tweet from "./Tweet";

const TwitterFeed = () => {
  return (
    <div className="border-1 flex max-w-[600px] flex-col gap-2 border border-gray-600 px-3 py-2">
      <Tweet />
      <Tweet />
    </div>
  );
};

export default TwitterFeed;
