import NewTweetForm from "./NewTweetForm";
import TwitterFeed from "./TwitterFeed";

const CenterColumn = () => {
  return (
    <div className="lg:border-1 border-gray-600 lg:border">
      <div>
        <h2 className="text-bold mb-6 ml-3 hidden text-2xl lg:block">Start</h2>
        <div className="flex justify-evenly">
          <button className="border-b-4 border-b-blue-600 pb-2">For you</button>
          <button className="border-b-4 border-b-blue-600 pb-2">
            Following
          </button>
        </div>
      </div>
      <TwitterFeed />
    </div>
  );
};

export default CenterColumn;
