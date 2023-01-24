import SideNavItem from "./SideNavItem";
import {
  BellAlertIcon,
  Cog6ToothIcon,
  HashtagIcon,
  HomeIcon,
  UserIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

const SideNavBar = () => {
  return (
    <div className="hidden flex-col gap-2 lg:flex">
      <SideNavItem name="Home" Icon={HomeIcon} />
      <SideNavItem name="Trends" Icon={HashtagIcon} />{" "}
      <SideNavItem name="Notification" Icon={BellAlertIcon} />
      <SideNavItem name="Messages" Icon={EnvelopeIcon} />
      <SideNavItem name="Profile" Icon={UserIcon} />
      <SideNavItem name="Settings" Icon={Cog6ToothIcon} />
    </div>
  );
};

export default SideNavBar;
