"use client";
import React from 'react';
import Image from "next/image";
import GithubIcon from "../public/icons/github-icon.svg";
import LinkedinIcon from "../public/icons/linkedin-icon.svg";
import { Copyright } from 'lucide-react';

interface SocialLink {
  name: string;
  icon: string; // Image path for the icons
  url: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://www.linkedin.com/in/ajay-saran-989b67265/' },
    { name: 'Github', icon: GithubIcon, url: 'https://github.com/AjaySaranC' },
  ];

  return (
    <footer className="sm:w-full lg:mt-12 border-t border-dashed">
      <div className=" mx-auto ">
        <div className="bg-black bg-opacity-50 lg:bg-opacity-30 lg:bg-transparent p-[2rem] lg:p-[5rem]">
          <div className="flex flex-wrap lg:px-4 justify-between items-center space-y-4">
            {/* Left: Logo */}
            <div>
              <Image src="/images/logo.png" alt="Logo" width={60} height={60} />
            </div>

            {/* Center: Social Icons */}
            <div className="flex space-x-4 lg:ml-50">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transform transition-transform duration-300 hover:scale-150"
                  aria-label={link.name}
                >
                  <Image
                    src={link.icon}
                    alt={link.name}
                    width={40}
                    height={40}
                  />
                </a>
              ))}
            </div>

            {/* Right: Copyright Information */}
            <div className="flex lg:px-6 items-center lg:text-lg text-gray-300">
              <Copyright size={20} className="mr-1" />
              <span>{currentYear} Ajay Saran. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
