import { Cog6ToothIcon } from "@heroicons/react/24/solid";

const NavSettings = () => {
  return (
    <div className="flex items-center border-2 border-red-600 p-2 text-white">
      <Cog6ToothIcon className="h-6 w-6" />
      <span>Settings</span>
    </div>
  );
};

export default NavSettings;
