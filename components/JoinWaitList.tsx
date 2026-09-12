import Image from "next/image";

const JoinWaitList = () => {
  return (
    <section className="h-[339px] relative text-center overflow-hidden bg-[#131313]">
      <Image
        src={"/images/waitlist-background.png"}
        height={1000}
        width={1000}
        alt="background "
        className="w-full"
      />
      <div className="absolute flex items-center flex-col gap-6 top-[50%] left-[50%] translate-[-50%]">
        <div className="flex flex-col gap-4">
          <h1 className="text-[56px] font-bebas tracking-[-2%]">
            JOIN OUR WAITLIST
          </h1>
          <p className="w-[520px]">
            We help believers worldwide grow in biblical knowledge and be
            equipped for ministry
          </p>
        </div>
        <div>
          <button className="text-[16px] h-[48px] w-[154px] bg-[#FF1818] rounded-[12px] flex items-center justify-center">
            Join Waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinWaitList;
