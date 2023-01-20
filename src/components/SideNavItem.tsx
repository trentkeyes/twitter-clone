import { HomeIcon } from "@heroicons/react/24/solid";

const SideNavItem = () => {
  return (
    <div className="flex items-center p-2 text-white border-red-600 border-2">
      <HomeIcon className="h-6 w-6" />
      <span>Home</span>
    </div>
  );
};

export default SideNavItem;