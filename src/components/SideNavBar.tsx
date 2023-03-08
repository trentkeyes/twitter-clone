import SideNavItem from "./SideNavItem";
import {
  BellAlertIcon,
  Cog6ToothIcon,
  HashtagIcon,
  HomeIcon,
  UserIcon,
  EnvelopeIcon,
  ArrowLongLeftIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/solid";
import {
  ArrowLeftIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useUserAuth } from "../../provider/AuthProvider";

const SideNavBar = () => {
  const { logOut } = useUserAuth();
  return (
    <div className="hidden flex-col gap-2 lg:flex">
      <SideNavItem name="Home" Icon={HomeIcon} />
      <SideNavItem name="Trends" Icon={HashtagIcon} />{" "}
      <SideNavItem name="Notification" Icon={BellAlertIcon} />
      <SideNavItem name="Messages" Icon={EnvelopeIcon} />
      <SideNavItem name="Profile" Icon={UserIcon} />
      <SideNavItem name="Settings" Icon={Cog6ToothIcon} />
      <SideNavItem name="Sign Out" Icon={ArrowLeftCircleIcon} logOut={logOut} />
    </div>
  );
};

export default SideNavBar;
