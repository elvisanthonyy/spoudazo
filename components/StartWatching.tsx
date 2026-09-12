import Image from "next/image";

const StartWatching = () => {
  return (
    <section>
      <div className="w-full overflow-hidden">
        <Image
          src={"/designs/semi-globe.svg"}
          height={1000}
          width={1000}
          alt="circle"
          className="w-[105%]"
        />
      </div>
    </section>
  );
};

export default StartWatching;
