import Image from "next/image";

interface ChildProps {
  video: any;
}

const VideoComponenet = async ({ video }: ChildProps) => {
  const link = `https://www.youtube.com/watch?v=${video.id}&list=PLA5YuQWSf2ozlzj_q1oNC9c7suoRD8Kz5&index=1`;
  const thumbnail = `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`;
  return (
    <div className="rounded-[28px] flex items-center justify-center shrink-0 bg-[#efefef] p-3 w-full overflow-hidden ">
      <a
        href={link}
        target="_blank"
        className="h-full relative rounded-[18px] overflow-hidden flex w-full"
      >
        <Image
          src={thumbnail}
          height={1000}
          width={1000}
          alt="image"
          className="h-full w-full object-cover object-top"
        />
        <div className="w-full h-full flex items-end p-3 absolute top-0 left-0">
          {/*<h1 className="text-white truncate w-[60%] text-[14px] leading-[22px] tracking-[-4%]">
            {video?.title?.split("||")[0]}
          </h1>*/}
          <div className="text-white py-1 px-3 flex items-center justify-center rounded-[6px] bg-[#1f1f1f]/80 absolute right-3 bottom-3">
            {video?.duration_text}
          </div>
        </div>
      </a>
    </div>
  );
};

export default VideoComponenet;
