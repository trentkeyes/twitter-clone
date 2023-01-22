import TrendingTopic from "./TrendingTopic";

const WhatsHappening = () => {
  return (
    <div className="rounded-xl bg-gray-800 py-2">
      <h2 className="pl-3 pb-2 text-2xl font-bold">Pants on Fire</h2>
      <div>
        <TrendingTopic />
        <TrendingTopic />
        <TrendingTopic />
        <TrendingTopic />
        <TrendingTopic />
      </div>
    </div>
  );
};

export default WhatsHappening;
