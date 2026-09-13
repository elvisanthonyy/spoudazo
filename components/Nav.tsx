import Image from "next/image";
import Link from "next/link";

//menu items
const menuItems = [
  { label: "About", link: "/" },
  { label: "Resources", link: "/" },
];

const Nav = () => {
  return (
    <nav className="h-[72px] px-4 md:px-[96px] flex items-center justify-between bg-[#161616] w-full">
      <section className="flex shrink-0 h-[20px]">
        <div>
          <Image
            className="h-full"
            src={"/icons/logo.svg"}
            height={24}
            width={108}
            alt="/logo"
          />
        </div>
      </section>
      <section className="hidden md:flex items-center justify-center">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            className="px-2 text-[16px] text-[#f1f1f1]"
            href={item?.link}
          >
            {item.label}
          </Link>
        ))}
      </section>
      <section>
        <div className="text-[14px] ]md:text-[16px] rounded-[12px] justify-center bg-[#333333] text-[#f0f0f0] flex items-center h-[40px] w-[140px] md:w-[178px]">
          Join Community
        </div>
      </section>
      <section className="h-[40px] md:hidden bg-[#333333] rounded-[16px] aspect-square"></section>
    </nav>
  );
};

export default Nav;
