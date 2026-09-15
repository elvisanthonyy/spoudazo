import Image from "next/image";

const StartWatching = () => {
  return (
    <section className="relative pb-10 md:pb-0 pt-[128px] md:pt-[256px] h-fit md:h-[872px] bg-cover bg-top bg-[url('/designs/semi-globe.svg')]">
      <div className="w-full px-[16px] md:px-[32px] xl:px-[96px] flex flex-col gap-[24px] md:gap-[36px]  left-0">
        <h1 className="text-[28px] leading-[28px] md:text-[56px] font-bebas md:leading-[56px] tracking-[-2%]">
          START WATCHING HERE
        </h1>
        <div className="overflow-hidden w-full h-[300px] md:h-[400px] rounded-[16px]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Fp_tt4--QKM?si=KfB0bWRZK8aENuMC"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default StartWatching;
