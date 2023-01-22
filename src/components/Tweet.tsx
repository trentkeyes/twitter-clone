import TweetAvatar from "./TweetAvatar";
import TweetStats from "./TweetStats";
import Image from "next/image";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const Tweet = () => {
  return (
    <div className="border-b-1 flex items-start gap-2 border-b border-gray-600 py-3 text-white">
      <Image
        src="/images/profile.jpg"
        alt="profile pic"
        height={50}
        width={50}
        className="rounded-full"
      />
      <div>
        <div className="flex items-center gap-1">
          <p className="text-l font-bold">Trent Keyes</p>
          <CheckBadgeIcon className="h-5 w-5 text-blue-700" />
          <p>@TrentKeyes</p>
        </div>
        <p>
          Well, it’s 12:44pm here right now…and after 10 1/2 months…it’s (big)
          Hardcore History day again. Thanks for your patience. You guys are the
          best. Hopefully it doesn’t suck (but it might! We lose all perspective
          by this point)
        </p>

        <p>
          <span>2:48 a. m. · 16 ene. 2023</span>
        </p>
        <TweetStats />
      </div>
    </div>
  );
};

export default Tweet;
