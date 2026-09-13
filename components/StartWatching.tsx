import Image from "next/image";

const StartWatching = () => {
  return (
    <section className="relative">
      <div className="w-full overflow-hidden">
        <Image
          src={"/designs/semi-globe.svg"}
          height={1000}
          width={1000}
          alt="circle"
          className="w-[105%]"
        />
      </div>
      <div className="absolute w-full px-[96px] flex flex-col gap-[36px] top-[258px] left-0">
        <h1 className="text-[56px] font-bebas leading-[56px] tracking-[-2%]">
          START WATCHING HERE
        </h1>
        <div className="overflow-hidden w-full h-[400px] rounded-[16px]">
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
