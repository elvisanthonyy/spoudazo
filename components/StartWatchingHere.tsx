import Link from "next/link";
import VideoComponenet from "./VideoComponent";
import { getPlaylistVideos } from "@/libs/getVideos";
import Icon from "./Icon";

const StartWatchingHere = async () => {
  const data = await getPlaylistVideos("PLA5YuQWSf2ozlzj_q1oNC9c7suoRD8Kz5");

  return (
    <section
      id="resources"
      className="bg-white justify-center md:pb-0 gap-6 md:gap-10 flex flex-col text-[#262626] py-[40px] w-full px-[16px] md:px-[32px] xl:p-[100px]"
    >
      {/*heading and subheadind*/}
      <div className="flex flex-col items-between w-full  justify-between">
        <div className="text-[32px] flex flex-col gap-4 font-medium tracking-[-2%] leading-[40px] w-full md:w-[65%]">
          <h1 className="text-[36px] md:text-[56px] tracking-[-2%] leading-[36px] md:leading-[56px] font-bebas  text-[#151515]">
            START WATCHING
          </h1>
          <p className="text-[14px] leading-[20px] md:text-[22px] md:leading-[30px]">
            Short, practical teachings to help you understand the Christian
            faith and grow in God's Word.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 md:gap-10">
        <div className="w-full md:pb-2 h-fit md:gap-x-4 justify-start flex md:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 h-[256px]">
          {data.map((video: any, index: number) => (
            <VideoComponenet index={index} key={index} video={video} />
          ))}
        </div>
        <Link
          href={
            "https://www.youtube.com/watch?v=uUIXgH9hGA8&list=PLA5YuQWSf2ozlzj_q1oNC9c7suoRD8Kz5&index=119"
          }
          target="_blank"
          className="h-[48px] translate-all ease-in-out duration-500 md:hover:opacity-60 gap-2 text-[16px] tracking-[-2%] bg-[#131313] max-w-[224px] font-medium flex items-center justify-center rounded-[12px] text-white"
        >
          Watch on Youtube
          <Icon size={20} icon="/icons/play-icon.svg" />
        </Link>
      </div>
    </section>
  );
};

export default StartWatchingHere;
