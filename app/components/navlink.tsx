import Link from "next/link";
import React from "react";

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Link href={href} onClick={handleScroll} className="group relative block py-2 pl-3 pr-4 text-[#ffffff] sm:text-xl rounded md:p-0 hover:text-white">
      {title}
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

export default NavLink;
