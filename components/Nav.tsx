"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

//menu items
const menuItems = [
  { label: "About", link: "#about" },
  { label: "Resources", link: "#resources" },
];

const Nav = () => {
  //State to handle opening menu
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <nav className="h-[72px] px-4 md:px-[32px] xl:px-[96px] flex items-center justify-between bg-[#161616] w-full">
      <section className="flex shrink-0 h-[20px]">
        <div className="-ml-1">
          <Image
            className="h-full"
            src={"/icons/logo.svg"}
            height={24}
            width={108}
            alt="/logo"
          />
        </div>
      </section>
      <section
        className={`translate-all gap-2 ease-in-out duration-500 ${isMenuOpen ? "flex z-40 flex-col gap-6 justify-center py-4 absolute w-full top-[72px] bg-[#1f1f1f] left-0 h-[300px]" : "hidden"}  md:flex items-center justify-center`}
      >
        {menuItems.map((item, index) => (
          <Link
            onClick={() => setIsMenuOpen(false)}
            key={index}
            className="px-2 translate-all ease-in-out duration-500 text-[16px] h-[40px] md:hover:px-4 flex items-center justify-center rounded-[32px] md:hover:bg-[#333333] text-[#f1f1f1]"
            href={item?.link}
          >
            {item.label}
          </Link>
        ))}
      </section>
      <section>
        <div className="text-[16px] rounded-[12px] justify-center bg-[#333333] cursor-pointer transition-all ease-in duration-500 hover:rounded-[30px] text-[#f0f0f0] flex items-center h-[40px] w-[168px] md:w-[178px]">
          Join Community
        </div>
      </section>
      <button
        onClick={() =>
          isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
        }
        className="h-[36px] flex flex-col gap-1 items-center justify-center md:hidden bg-[#333333] rounded-[12px] aspect-square"
      >
        <span
          className={`w-[20px] translate-all ease-in-out duration-500  ${isMenuOpen && "rotate-45 translate-y-1.5"} block h-0.5 bg-[#f0f0f0] rounded-2xl`}
        ></span>
        <span
          className={`w-[20px] translate-all ease-in-out duration-500  ${isMenuOpen && "opacity-0"} block h-0.5 bg-[#f0f0f0] rounded-2xl`}
        ></span>
        <span
          className={`w-[20px] translate-all ease-in-out duration-500  ${isMenuOpen && "-rotate-45 -translate-y-1.5"} block h-0.5 bg-[#f0f0f0] rounded-2xl`}
        ></span>
      </button>
    </nav>
  );
};

export default Nav;
