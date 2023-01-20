import { BellAlertIcon } from "@heroicons/react/24/solid";

const NavMail = () => {
  return (
    <div className="flex items-center border-2 border-red-600 p-2 text-white">
      <BellAlertIcon className="h-6 w-6" />
      <span>Notifications</span>
    </div>
  );
};

export default NavMail;
