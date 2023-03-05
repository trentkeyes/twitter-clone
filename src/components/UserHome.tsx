import CenterColumn from "./CenterColumn";
import RightColumn from "./RightColumn";
import SideNavBar from "./SideNavBar";
import { useUserAuth } from "../../provider/AuthProvider";

const UserHome = () => {
  const { logOut } = useUserAuth();
  return (
    <div className="flex justify-center gap-6 p-4 lg:container">
      {/* <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Welcome to LieSocial
          </h1> */}
      <h2
        className="cursor-pointer select-none duration-300 hover:pl-2"
        onClick={() => {
          logOut();
        }}
      >
        Logout
      </h2>
      <SideNavBar />
      <CenterColumn />
      <RightColumn />
    </div>
  );
};

export default UserHome;
