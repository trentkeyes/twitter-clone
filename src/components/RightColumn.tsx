import SearchBar from "./SearchBar";
import WhatsHappening from "./WhatsHappening";

const RightColumn = () => {
  return (
    <div className="hidden flex-col gap-3 lg:flex">
      <SearchBar />
      <WhatsHappening />
    </div>
  );
};

export default RightColumn;
