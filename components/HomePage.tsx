"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HomePage = () => {
  // Function to handle scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="py-[9rem]">
      <div className="text-6xl flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:mr-10 text-center lg:text-left"
        >
          {/* Center text on small and medium screens */}
          <div className="lg:mt-12 ml-5 p-6">
            <span className="block text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-custom-gwhite to-white">
              Hello{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-custom-pink to-custom-yellow">
                I'm
              </span>
              , <br />
            </span>
            <div className="mt-[20px] h-[200px]">
              <span className="text-[4rem] lg:text-8xl font-extrabold text-white mt-4 sm:text-7xl">
                <TypeAnimation
                  sequence={[
                    "Ajay Saran",
                    1000,
                    "Computer Engineer",
                    1000,
                    "Web Designer",
                    1000,
                    "Graphic Designer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </div>
            <div>
              <p className="text-[#dfdede] text-base sm:text-lg sm:mt-3 mb-6 lg:text-xl lg:mt-4">
                I'm a Computer Science Engineer with a passion for technology
                and innovation.
              </p>
            </div>

            {/* Button Section */}
            <div className="flex flex-col sm:flex-row mt-6 gap-4">
  {/* Download CV Button */}
  <a
    href="https://drive.google.com/drive/folders/1P6_4CMA4nBOYUogcrSlbhsxm2-Q-1WoY"
    className="bg-black bg-opacity-30 backdrop-blur-md text-white py-1 px-1 rounded-md text-sm text-center w-full sm:w-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-opacity-10"
    download
  >
    Download CV
  </a>

  {/* Hire Me Button */}
  <button
    onClick={scrollToContact}
    className="bg-black bg-opacity-30 backdrop-blur-md text-white py-1 px-1 rounded-md text-sm text-center w-full sm:w-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-opacity-10"
  >
    Hire Me
  </button>
</div>

          </div>
        </motion.div>

        <div className="flex justify-center mt-8 lg:mt-0 lg:pr-[100px] lg:pt-[50px]">
          <div className="rounded-full bg-gradient-to-br from-[#f9b631] to-[#ff7070] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/character.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
