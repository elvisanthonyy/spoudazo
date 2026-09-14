import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";

const HeroSection = () => {
  return (
    <section className="w-full flex h-[calc(100dvh-72px)] overflow-hidden relative">
      <div className="bg-[rgb(18,18,18)] -bottom-30 blur-[32px] md:blur-[48px] md:top-[50%] md:translate-y-[-50%] z-12 absolute md:left-[-50%] md:translate-x-0 rounded-full aspect-square md:w-full md:h-[1480px] h-[80%] left-[50%] translate-x-[-50%]"></div>
      <div className="h-[55%] flex items-start md:h-full z-5 absolute -right-10">
        <Image
          src={"/images/hero-image.png"}
          height={100}
          width={1000}
          alt="Pastor Elvis"
          className="h-full object-cover object-top"
        />
      </div>
      <div
        className={`absolute h-fit z-13 flex flex-col bottom-4 px-[16px] md:px-0 gap-[28px] md:gap-10 w-full md:w-[520px] xl:left-[96px] md:left-[32px] md:top-[50%] md:translate-y-[-50%]`}
      >
        <div className="flex tracking-[-2%] md:leading-[96px] leading-[48px] text-[48px] md:text-[96px] flex-col gap-4">
          <div>
            <h1 className="font-bebas">
              WHERE <br />
              TRANSFORMATION
            </h1>
            <div className="w-[80%] md:w-full">
              <Image
                src={"/designs/highlight.svg"}
                height={100}
                width={1000}
                alt="line"
                className="w-full object-cover"
              />
            </div>
            <h1 className="font-bebas">BEGINS</h1>
          </div>

          <p className="text-[14px] leading-[24px] w-[70%] md:text-[20px] text-[#dddddd] md:leading-[32px]">
            We train believers globally in biblical knowledge and equip many for
            ministry
          </p>
        </div>
        <div className="text-[16px] w-full md:flex-row flex-col flex items-center gap-4 tracking-[-2%]">
          <Link
            className="h-[48px] translate-all ease-in-out duration-500 md:hover:opacity-70 gap-2 rounded-[12px] w-full bg-[#FF1818] md:w-[192px] flex items-center justify-center"
            href={
              "https://www.youtube.com/watch?v=uUIXgH9hGA8&list=PLA5YuQWSf2ozlzj_q1oNC9c7suoRD8Kz5&index=119"
            }
            target="_blank"
          >
            <p className="font-medium">Watch Video</p>
            <Icon size={20} icon="/icons/play-icon.svg" />
          </Link>
          <Link
            className="h-[48px] translate-all ease-in-out duration-500 md:hover:opacity-60 rounded-[12px] bg-[#282828] w-full md:w-[192px] flex font-medium items-center justify-center"
            href={"/"}
            target="_blank"
          >
            {" "}
            Join Community{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
