import NewTweetForm from "./NewTweetForm";
import TwitterFeed from "./TwitterFeed";

const CenterColumn = () => {
  return (
    <div className="border-1 border border-gray-600">
      <div>
        <h2 className="text-bold mb-6 ml-3 text-2xl">Start</h2>
        <div className="flex justify-evenly">
          <button className="border-b-4 border-b-blue-600 pb-2">For you</button>
          <button className="border-b-4 border-b-blue-600 pb-2">
            Following
          </button>
        </div>
      </div>
      <NewTweetForm />
      <TwitterFeed />
    </div>
  );
};

export default CenterColumn;
