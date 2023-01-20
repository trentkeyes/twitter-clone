import { EnvelopeIcon } from "@heroicons/react/24/solid";

const NavMail = () => {
  return (
    <div className="flex items-center border-2 border-red-600 p-2 text-white">
      <EnvelopeIcon className="h-6 w-6" />
      <span>Mail</span>
    </div>
  );
};

export default NavMail;
