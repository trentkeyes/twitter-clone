import { HashtagIcon } from "@heroicons/react/24/solid";

const NavHashtag = () => {
  return (
    <div className="flex items-center border-2 border-red-600 p-2 text-white">
      <HashtagIcon className="h-6 w-6" />
      <span>Trends</span>
    </div>
  );
};

export default NavHashtag;
