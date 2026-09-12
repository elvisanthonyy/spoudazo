import Link from "next/link";
import VideoComponenet from "./VideoComponent";
import { videos } from "@/libs/data";

const StartWatchingHere = () => {
  return (
    <section className="bg-white gap-10 flex flex-col text-[#262626] w-full p-[96px]">
      {/*heading and subheadind*/}
      <div className="flex flex-col items-between w-full  justify-between">
        <div className="text-[32px] flex flex-col gap-4 font-medium tracking-[-2%] leading-[40px] w-[65%]">
          <h1 className="text-[56px] tracking-[-2%] leading-[56px] font-bebas  text-[#151515]">
            START WATCHING HERE
          </h1>
          <p className="text-[22px] leading-[30px]">
            Short, practical teachings to help you understand the Christian
            faith and grow in God's Word.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="w-full flex gap-4 h-[256px]">
          {videos.map((video, index) => (
            <VideoComponenet key={index} link={video.link} />
          ))}
        </div>
        <Link
          href={"/"}
          target="_blank"
          className="h-[48px] text-[16px] tracking-[-2%] bg-[#131313] max-w-[224px] flex items-center justify-center rounded-[12px] text-white"
        >
          Watch on Youtube
        </Link>
      </div>
    </section>
  );
};

export default StartWatchingHere;
