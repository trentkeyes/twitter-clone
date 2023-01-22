import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2 rounded-2xl bg-gray-800 px-3 py-1">
      <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer text-white" />
      <input
        type="text"
        placeholder="Search LieSocial"
        className="bg-gray-800 p-1 indent-1 placeholder-white outline-none"
      />
    </div>
  );
};

export default SearchBar;
