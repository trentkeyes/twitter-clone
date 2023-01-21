import { FunctionComponent } from "react";

type Props = {
  Icon: React.ElementType;
  name: string;
};

const SideNavItem: FunctionComponent<Props> = ({ name, Icon }) => {
  return (
    <div className="flex cursor-pointer items-center gap-2 rounded p-2 text-white hover:bg-gray-600 hover:bg-opacity-50">
      <Icon className="h-6 w-6" />
      <span>{name}</span>
    </div>
  );
};

export default SideNavItem;
