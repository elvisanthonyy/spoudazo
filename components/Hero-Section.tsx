import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";

const HeroSection = () => {
  return (
    <section className="w-full flex h-[calc(100dvh-72px)] overflow-hidden relative">
      <div className="bg-[rgb(18,18,18)] -bottom-33 blur-[32px] md:blur-[48px] lg:top-[50%] lg:translate-y-[-50%] z-12 absolute md:left-[-48%] md:translate-x-0 rounded-full aspect-square md:w-full md:h-[1550px] h-[80%] w-[120%] translate-x-[-18%]"></div>
      <div className="h-[55%] md:h-[70%] flex items-start lg:h-full z-5 absolute -right-10">
        <Image
          src={"/images/hero-image.png"}
          height={100}
          width={1000}
          alt="Pastor Elvis"
          className="h-full object-cover object-top"
        />
      </div>
      <div
        className={`absolute h-fit z-13 flex flex-col bottom-8 px-[16px] md:px-0 gap-[28px] md:gap-10 w-full md:w-[520px] xl:left-[96px] md:left-[32px] lg:top-[50%] lg:translate-y-[-50%]`}
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
                className="w-[200px] md:w-full object-cover"
              />
            </div>
            <h1 className="font-bebas">BEGINS</h1>
          </div>

          <p className="text-[16px] max-w-[420px] leading-[24px] w-[90%] md:text-[20px] text-[#dddddd] md:leading-[32px]">
            We train believers globally in biblical knowledge and equip many for
            ministry
          </p>
        </div>
        <div className="text-[16px] w-full md:flex-row flex-col flex items-start gap-4 tracking-[-2%]">
          <Link
            className="h-[56px] md:h-[48px] translate-all ease-in-out duration-500 md:hover:opacity-70 max-w-[420px] gap-2 rounded-[12px] w-full bg-[#FF1818] md:w-[192px] flex items-center justify-center"
            href={
              "https://www.youtube.com/watch?v=uUIXgH9hGA8&list=PLA5YuQWSf2ozlzj_q1oNC9c7suoRD8Kz5&index=119"
            }
            target="_blank"
          >
            <p className="font-medium">Watch Video</p>
            <Icon size={20} icon="/icons/play-icon.svg" />
          </Link>
          <Link
            className="h-[56px] md:h-[48px] translate-all ease-in-out duration-500 md:hover:opacity-60 max-w-[420px] rounded-[12px] bg-[#282828] w-full md:w-[192px] flex font-medium items-center justify-center"
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
