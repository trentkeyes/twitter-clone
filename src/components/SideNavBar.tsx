import SideNavItem from "./SideNavItem";

const SideNavBar = () => {
  return (
    <div className="flex flex-col gap-2">
      <SideNavItem />
      <SideNavItem />
      <SideNavItem />
      <SideNavItem />
    </div>
  );
};

export default SideNavBar;
