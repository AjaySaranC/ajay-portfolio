"use client";
import React from "react";
import Image from "next/image";

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* About Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center h-screen w-full">
        {/* Left side with image */}
        <div className="w-full lg:w-1/2 p-4 flex justify-center">
          <Image
            src="/images/about.jpg" // Update with the correct image path
            alt="Your Image"
            width={500} // Set the appropriate width
            height={500} // Set the appropriate height
            className="rounded-lg shadow-lg xl:ml-[5rem]"
          />
        </div>
        {/* Right side with text */}
        <div className="w-full lg:w-1/2 p-4 text-center lg:text-left">
          <h1 className="text-3xl font-bold mb-4 flex justify-center lg:justify-start">
            About <span className="text-orange-400"> Me</span>
          </h1>
          <p
  className="text-center text-lg lg:pr-9 lg:text-left lg:leading-relaxed"
  style={{ fontWeight: 300 }}
>
  I&apos;m Ajay Saran, a Computer Science Engineer with a strong passion for web and graphic design. With expertise in vector art, poster design, video editing, and web development, I bring creativity and technical skills to every project. Currently, I am seeking job opportunities and freelance work where I can apply my talents in graphic design, web design, and digital art. Let&apos;s collaborate to create something impactful!
</p>

        </div>
      </div>

      {/* New Section: Technical Skills */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:h-screen mt-10 lg:mt-0">
        {/* Left side with text and icons */}
        <div className="w-full lg:w-1/2 p-4 text-center">
          <h1 className="text-3xl font-bold mb-6 p-9">
            <span className="text-purple-300">Tech</span>nical S
            <span className="text-red-500">kill</span>s
          </h1>
          <div className="grid grid-cols-4 gap-4 justify-items-center">
            {[
              { src: "/icons/java.svg", alt: "Java" },
              { src: "/icons/python.svg", alt: "Python" },
              { src: "/icons/sql.svg", alt: "SQL" },
              { src: "/icons/react.svg", alt: "React" },
              { src: "/icons/nextjs.svg", alt: "Next.js" },
              { src: "/icons/html.svg", alt: "HTML" },
              { src: "/icons/css.svg", alt: "CSS" },
              { src: "/icons/canva.svg", alt: "Canva" },
              { src: "/icons/tailwind.svg", alt: "Tailwind CSS" },
              { src: "/icons/blender.svg", alt: "Blender" },
              { src: "/icons/adobe-illustrator.svg", alt: "Adobe Illustrator" },
              { src: "/icons/figma.svg", alt: "Figma" },
            ].map((icon, index) => (
              <div key={index} className="relative group inline-block">
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={50}
                  height={50}
                  className="transform transition-transform duration-100 hover:scale-110 hover:shadow-lg shadow-md shadow-white"
                />
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 backdrop-blur-md text-white text-sm p-1 rounded">
                  {icon.alt}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side with image */}
        <div className="w-full lg:w-1/2 p-4 flex justify-center">
          <Image
            src="/images/skills.jpg" // Update with the correct image path
            alt="Skills Image"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:w-[80rem] mt-10">
  {/* Left side: Experience */}
  <div className="w-full lg:w-1/2 p-4 text-center lg:text-left">
    <h1 className="text-3xl font-bold mb-6 flex items-center">
      <div className="h-12 border-l-4 border-white mr-4"></div>
      <span className="text-yellow-400">Ex</span>perience
    </h1>
    <div className="grid grid-cols-1 gap-4">
      {[
        {
          title: "Internship 1",
          description: "Node js and Javascript Internship",
        },
        {
          title: "Internship 2",
          description: "Virtual internship on Web development",
        },
        {
          title: "Freelance",
          description:
            "Done Freelancing for Poster design and Vector Arts",
        },
      ].map((experience, index) => (
        <div
          key={index}
          className=" bg-opacity-30 backdrop-blur-lg p-4 rounded-lg shadow-lg hover:bg-black hover:bg-opacity-30"
        >
          <p className="text-lg">{experience.title}</p>
          <p className="text-sm" style={{ fontWeight: 300 }}>
            {experience.description}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* Right side: Courses */}
  <div className="w-full lg:w-1/2 p-4 text-center lg:text-left">
    <h1 className="text-3xl font-bold mb-6 flex items-center">
      <div className="h-12 border-l-4 border-white mr-4"></div>
      <span className="text-orange-400">Cour</span>ses
    </h1>
    <div className="grid grid-cols-2 gap-4">
      {[
        { title: "Python for Data Science", description: "from NPTEL" },
        {
          title: "Python 3.x - Hands-on",
          description: "from Skill Rack",
        },
        { title: "Big Data", description: "from Naan Mudhalvan" },
        {
          title: "Introduction to Networks",
          description: "from CISCO via Naan Mudhalvan",
        },
        {
          title: "Google Cloud Career Readiness",
          description: "from GOOGLE",
        },
      ].map((course, index) => (
        <div
          key={index}
          className="bg-opacity-30 backdrop-blur-lg p-4 rounded-lg shadow-lg hover:bg-black hover:bg-opacity-30"
        >
          <p className="text-lg">{course.title}</p>
          <p className="text-sm" style={{ fontWeight: 300 }}>
            {course.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
};
