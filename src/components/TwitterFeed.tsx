import Tweet from "./Tweet";

const TwitterFeed = () => {
  return (
    <div className="flex max-w-[600px] flex-col gap-6">
      <Tweet />
      <Tweet />
    </div>
  );
};

export default TwitterFeed;
