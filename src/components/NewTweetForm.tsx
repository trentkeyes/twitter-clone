import Image from "next/image";
import {
  PhotoIcon,
  GifIcon,
  ListBulletIcon,
  FaceSmileIcon,
  CalendarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const NewTweetForm = () => {
  return (
    <div className="border-t-1 hidden items-start justify-between border border-gray-600 px-3 py-2 lg:flex">
      <Image
        src="/images/profile.jpg"
        alt="profile pic"
        height={50}
        width={50}
        className="flex-none rounded-full"
      />
      <form action="" className="w-full pl-2">
        <textarea
          className="w-full resize-none bg-black pt-2 indent-1 outline-none"
          placeholder="What's happening?"
        />
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <PhotoIcon className="h-6 w-6 cursor-pointer text-blue-700" />
            <GifIcon className="h-6 w-6 cursor-pointer text-blue-700" />
            <ListBulletIcon className="h-6 w-6 cursor-pointer text-blue-700" />
            <FaceSmileIcon className="h-6 w-6 cursor-pointer text-blue-700" />
            <CalendarIcon className="h-6 w-6 cursor-pointer text-blue-700" />
            <MapPinIcon className="h-6 w-6 cursor-pointer text-blue-700" />
          </div>
          <button className="rounded-2xl bg-blue-700 px-4 py-1 ">Tweet</button>
        </div>
      </form>
    </div>
  );
};

export default NewTweetForm;
