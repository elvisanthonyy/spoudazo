import Link from "next/link";
import Icon from "./Icon";

//footer menu items
const menuItems = [
  { label: "About", link: "/" },
  { label: "YouVersion", link: "/" },
  { label: "Community", link: "/" },
];

//social icons
const socialIcons = [
  { label: "YouTube", link: "/", iconUrl: "/icons/youtube.svg" },
  { label: "Instagram", link: "/", iconUrl: "/icons/instagram.svg" },
];

const Footer = () => {
  return (
    <footer className="h-[237px] flex justify-between px-[96px] pt-[41px] bg-[#121212]">
      <section className="flex flex-col gap-[14px]">
        <h3 className="font-bebas text-[20px]">SPOUDAZO</h3>
        <div className="flex gap-1 flex-col">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              className="text-[14px] text-[#AAAAAA]"
              href={item?.link}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <p className="text-[16px] text-[#AAAAAA]">
          &copy; Spoudazo 2026. All rights reserved
        </p>
      </section>
      <section className="flex flex-col gap-[16px]">
        <h3 className="font-bebas text-[20px]">STAY CONECTED</h3>
        <div className="flex gap-2">
          {socialIcons.map((icon, index) => (
            <Link
              key={index}
              className="h-[44px] flex items-center justify-center aspect-square rounded-full bg-[#222222]"
              href={icon?.link}
            >
              <Icon size={20} icon={icon?.iconUrl} />
            </Link>
          ))}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
