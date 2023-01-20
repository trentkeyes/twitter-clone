import { UserIcon } from "@heroicons/react/24/solid";

const NavProfile = () => {
  return (
    <div className="flex items-center border-2 border-red-600 p-2 text-white">
      <UserIcon className="h-6 w-6" />
      <span>Profile</span>
    </div>
  );
};

export default NavProfile;
