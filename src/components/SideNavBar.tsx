import NavHome from "./SideNavItems/NavHome";
import NavBell from "./SideNavItems/NavBell";
import NavMail from "./SideNavItems/NavMail";
import NavProfile from "./SideNavItems/NavProfile";
import NavHashtag from "./SideNavItems/NavHashtag";
import NavSettings from "./SideNavItems/NavSettings";

const SideNavBar = () => {
  return (
    <div className="flex flex-col gap-2">
      <NavHome />
      <NavMail />
      <NavBell />
      <NavProfile />
      <NavHashtag />
      <NavSettings />
    </div>
  );
};

export default SideNavBar;
