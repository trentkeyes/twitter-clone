import Image from "next/image";

const SideNavItem = () => {
  return (
    <div className="flex items-center p-2 text-white bg-pink-300">
      <Image
        src="/icons/home_FILL0_wght400_GRAD0_opsz48.svg"
        alt="home icon"
        height={25}
        width={25}
        className="text-white"
      />
      <span>Home</span>
    </div>
  );
};

export default SideNavItem;
