import React from "react";

const SpoudazoFor = () => {
  return (
    <section
      id="about"
      className="bg-white py-[40px] px-[16px] text-[#262626] w-full md:p-[32px] xl:p-[96px]"
    >
      <div className="flex gap-[20px] lg:gap-0 flex-col lg:flex-row items-between w-full  justify-between">
        <h1 className="text-[48px] tracking-[-2%] leading-[48px] font-bebas w-[228px] text-[#151515]">
          WHO IS SPOUDAZO FOR?
        </h1>
        <div className="text-[18px] md:text-[32px] flex flex-col gap-8 font-medium tracking-[-2%] leading-[28px] md:leading-[40px] w-full lg:w-[65%]">
          <p>
            SPOUDAZO Global exists to help believers around the world grow in
            the knowledge of God’s Word and be thoroughly equipped for a life of
            faithful ministry.
          </p>
          <p>
            Founded by Pastor Elvis Okhifo, our mission is to make sound
            biblical teaching accessible through clear, systematic, and
            Christ-centered discipleship.
          </p>
          <p>
            Every resource is designed to deepen your understanding of
            Scripture, strengthen your faith, and empower you to live out the
            gospel with confidence and conviction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpoudazoFor;
