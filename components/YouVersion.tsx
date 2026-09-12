import Link from "next/link";

const YouVersion = () => {
  return (
    <section className="bg-white gap-10 flex flex-col text-[#262626] w-full p-[96px]">
      <div className="flex flex-col items-between w-full  justify-between">
        <div className="text-[32px] flex flex-col gap-4 font-medium tracking-[-2%] leading-[40px] w-[65%]">
          <h1 className="text-[56px] tracking-[-2%] leading-[56px] font-bebas  text-[#151515]">
            SPOUDAZO X YOU VERSION
          </h1>
          <p className="text-[22px] leading-[30px]">
            Continue your journey through Scripture with Spoudazo on YouVersion.
            Explore Bible-based reading plans and resources designed to help you
            grow in the knowledge of God's Word.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="w-full bg-[#2f2f2f] rounded-[16px] flex gap-4 h-[419px]"></div>
        <Link
          href={"/"}
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
