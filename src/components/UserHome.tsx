import CenterColumn from "./CenterColumn";
import RightColumn from "./RightColumn";
import SideNavBar from "./SideNavBar";
import { useUserAuth } from "../../provider/AuthProvider";

const UserHome = () => {
  const { logOut } = useUserAuth();
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white">
      <div className="flex justify-center gap-6 p-4 lg:container">
        {/* <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Welcome to LieSocial
          </h1> */}
        <SideNavBar />
        <CenterColumn />
        <RightColumn />
      </div>
    </main>
  );
};

export default UserHome;
