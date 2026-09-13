import Image from "next/image";
interface ChildProps {
  icon: string;
  size: number;
}

const Icon = ({ icon, size }: ChildProps) => {
  return (
    <div style={{ height: size, width: size }}>
      <Image
        src={icon}
        height={50}
        width={50}
        alt="background "
        className="w-full"
      />
    </div>
  );
};

export default Icon;
