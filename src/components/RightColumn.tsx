import SearchBar from "./SearchBar";
import WhatsHappening from "./WhatsHappening";

const RightColumn = () => {
  return (
    <div className="flex flex-col gap-3">
      <SearchBar />
      <WhatsHappening />
    </div>
  );
};

export default RightColumn;
