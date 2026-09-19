import Link from "next/link";

const YouVersion = () => {
  return (
    <section
      id="you-version"
      className="bg-white gap-6 md:gap-10 flex flex-col text-[#262626] w-full p-[16px] py-[40px] md:px-[32px] xl:px-[96px] md:p-[96px]"
    >
      <div className="flex flex-col items-between w-full  justify-between">
        <div className="text-[32px] flex flex-col gap-4 font-medium tracking-[-2%] leading-[40px] w-full md:w-[65%]">
          <h1 className="text-[36px] leading-[36px] md:text-[56px] tracking-[-2%] md:leading-[56px] font-bebas  text-[#151515]">
            SPOUDAZO X YOU VERSION
          </h1>
          <p className="text-[14px] md:text-[22px] leading-[20px] md:leading-[30px]">
            Continue your journey through Scripture with Spoudazo on YouVersion.
            Explore Bible-based reading plans and resources designed to help you
            grow in the knowledge of God's Word.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 md:gap-10">
        <div className="w-full bg-[#2f2f2f] rounded-[16px] flex gap-4 h-[419px]"></div>
        <Link
          href={"https://www.bible.com/organizations/14e0e5af-c000-4463-9901-a05893773f67?utm_source=yvapp&utm_medium=share&utm_content=partner-page"}
          target="_blank"
          className="h-[48px] text-[16px] tracking-[-2%] bg-[#131313] max-w-[224px] flex items-center justify-center rounded-[12px] text-white"
        >
          Explore on YouVersion
        </Link>
      </div>
    </section>
  );
};

export default YouVersion;
