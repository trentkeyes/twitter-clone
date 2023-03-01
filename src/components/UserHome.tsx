import CenterColumn from "./CenterColumn";
import RightColumn from "./RightColumn";
import SideNavBar from "./SideNavBar";

const UserHome = () => {
    return (
        <div className="flex justify-center gap-6 p-4 lg:container">
             {/* <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Welcome to LieSocial
          </h1> */}
        <SideNavBar />
        <CenterColumn />
        <RightColumn />
      </div>
    );
  };
  
  export default UserHome;