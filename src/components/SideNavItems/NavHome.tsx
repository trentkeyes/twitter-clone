import { HomeIcon } from "@heroicons/react/24/solid";

const NavHome = () => {
  return (
    <div className="flex items-center border-2 border-red-600 p-2 text-white">
      <HomeIcon className="h-6 w-6" />
      <span>Home</span>
    </div>
  );
};

export default NavHome;
