import React from "react";
import NavLink from "./navlink";

interface Link {
  title: string;
  path: string;
}

interface MenuOverlayProps {
  links: Link[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center backdrop-filter backdrop-blur-md backdrop-opacity-90">
      {links.map((link, index: number) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
