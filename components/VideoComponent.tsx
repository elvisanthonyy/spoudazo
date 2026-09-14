import Image from "next/image";

interface ChildProps {
  link: string;
}

const VideoComponenet = ({ link }: ChildProps) => {
  // Get thu
  const pattern =
    /(?:v=|\/shorts\/|\/embed\/|\/v\/|youtu\.be\/|video\/)([a-zA-Z0-9_-]{11})/;
  const match = link.match(pattern);
  const videoId = match && match[1];
  const hqThumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  return (
    <div className="rounded-[28px] flex items-center justify-center shrink-0 md:shrink-1 bg-[#efefef] p-3 h-[256px] w-full md:w-[410px] overflow-hidden">
      {/*<iframe
        className="h-full w-full"
        src={link}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>*/}
      <a
        href={link}
        className="h-full rounded-[18px] overflow-hidden flex w-full"
      >
        <Image
          src={hqThumbnail}
          height={1000}
          width={1000}
          alt="image"
          className="h-full w-full object-cover"
        />
      </a>
    </div>
  );
};

export default VideoComponenet;
