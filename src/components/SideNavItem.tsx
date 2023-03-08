import { FunctionComponent } from "react";

type Props = {
  Icon: React.ElementType;
  name: string;
  logOut?: () => void;
};

const SideNavItem: FunctionComponent<Props> = ({ name, Icon, logOut }) => {
  const onClick = () => {
    if (logOut) {
      logOut();
    }
  };
  return (
    <div
      className="flex cursor-pointer items-center gap-2 rounded p-2 text-white hover:bg-gray-600 hover:bg-opacity-50"
      onClick={onClick}
    >
      <Icon className="h-6 w-6" />
      <span>{name}</span>
    </div>
  );
};

export default SideNavItem;
