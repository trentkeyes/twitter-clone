import Image from "next/image";

const TweetAvatar = () => {
  return (
    <div className="flex gap-2">
      <Image
        src="/images/profile.jpg"
        alt="profile pic"
        height={50}
        width={50}
        className="rounded-full"
      />
      <div>
        <p className="text-l font-bold">Trent Keyes</p>
        <p>@TrentKeyes</p>
      </div>
    </div>
  );
};

export default TweetAvatar;
