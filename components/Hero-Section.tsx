import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icon";

const HeroSection = () => {
  return (
    <section className="w-full flex h-[calc(100dvh-72px)] overflow-hidden relative">
      <div className="bg-[#121212] blur-[48px] top-[50%] translate-y-[-50%] z-12 absolute left-[-50%] rounded-full aspect-square h-[1480px]"></div>
      <div className="h-full z-5 absolute -right-10">
        <Image
          src={"/images/hero-image.png"}
          height={100}
          width={1000}
          alt="Pastor Elvis"
          className="h-full object-cover"
        />
      </div>
      <div
        className={`absolute z-13 flex flex-col gap-10 w-[520px] left-[96px] leading-[96px] top-[50%] translate-y-[-50%]`}
      >
        <div className="flex tracking-[-2%] text-[96px] flex-col gap-4">
          <div>
            <h1 className="font-bebas">WHERE TRANSFORMATION</h1>
            <div className="w-full">
              <Image
                src={"/designs/highlight.svg"}
                height={100}
                width={1000}
                alt="Pastor Elvis"
                className="h-full object-cover"
              />
            </div>
          </div>

          <h1 className="font-bebas">BEGINS</h1>
          <p className="text-[20px] text-[#dddddd] leading-[32px]">
            We train believers globally in biblical knowledge and equip many for
            ministry
          </p>
        </div>
        <div className="text-[16px]  flex items-center gap-4 tracking-[-2%]">
          <Link
            className="h-[48px] gap-2 rounded-[12px] bg-[#FF1818] w-[192px] flex items-center justify-center"
            href={"/"}
            target="_blank"
          >
            <p>Watch Video</p>
            <Icon size={20} icon="/icons/play-icon.svg" />
          </Link>
          <Link
            className="h-[48px] rounded-[12px] bg-[#282828] w-[192px] flex  items-center justify-center"
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
