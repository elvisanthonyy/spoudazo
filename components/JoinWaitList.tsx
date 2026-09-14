import Image from "next/image";

const JoinWaitList = () => {
  return (
    <section className="md:h-[339px] py-[36px] bg-cover bg-center bg-[url('/images/waitlist-background.png')] h-fit flex items-center justify-center relative text-center overflow-hidden bg-[#131313]">
      <div></div>

      <div className="flex items-center flex-col gap-6 top-[50%] ">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-[28px] md:text-[56px] font-bebas tracking-[-2%]">
            JOIN OUR WAITLIST
          </h1>
          <p className="w-[80%] text-center text-[14px] md:text-[20px] md:leading-[28px] md:w-[560px]">
            We help believers worldwide grow in biblical knowledge and be
            equipped for ministry
          </p>
        </div>
        <div>
          <button className="text-[14px] md:text-[16px] h-[48px] w-[154px] bg-[#FF1818] rounded-[12px] flex font-medium items-center justify-center">
            Join Waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinWaitList;
