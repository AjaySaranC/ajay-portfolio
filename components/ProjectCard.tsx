"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { EyeIcon } from '@heroicons/react/24/outline';

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  desc: string;
  githubUrl: string; // Add a prop for the GitHub URL
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, title, desc, githubUrl }) => {
  const handleIconClick = () => {
    window.open(githubUrl, '_self'); // Open the GitHub link in a new tab
  };

  return (
    <motion.div
      className="bg-black bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg overflow-hidden relative group flex flex-col h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="relative">
        <img
          src={imgUrl}
          alt={title}
          className="h-[18rem] w-full object-cover rounded-t-lg transition-opacity duration-300 group-hover:opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-25">
          <div
            className="border-2 border-white rounded-full p-2 opacity-60 hover:opacity-100 cursor-pointer"
            onClick={handleIconClick} // Handle GitHub redirect on click
          >
            <EyeIcon className="text-white h-12 w-12" />
          </div>
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
        <p className="text-left text-white text-sm opacity-75 flex-grow font-light">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

const ProjectGrid: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  const projects = [
    { imgUrl: '/images/crude.jpg', title: 'Crude Oil Price Prediction', desc: 'A machine learning-based system for predicting crude oil prices and stock movements, utilizing historical data and advanced algorithms.', githubUrl: 'https://github.com/AjaySaranC/Crude-Oil-prediction-project' },
    { imgUrl: '/images/heart.jpg', title: 'Heart Disease Diagnosis', desc: 'An AI-driven model to assess the risk of heart disease based on user-provided health parameters, improving diagnostic accuracy.', githubUrl: 'https://github.com/AjaySaranC/Heart-diagnose-system' },
    { imgUrl: '/images/mental.jpg', title: 'Mental Health Chatbot', desc: 'A chatbot application designed to engage users in conversations about mental health, offering relevant advice and solutions.', githubUrl: 'https://github.com/AjaySaranC/MentalIllness-chatbot' },
    { imgUrl: '/images/calorie.jpg', title: 'Calorie Tracker Using Image Recognition', desc: 'A calorie-tracking solution that uses image recognition to analyze meal photos and estimate food items along with their calorie counts.', githubUrl: 'https://github.com/AjaySaranC/Calorie-tracker' },
    { imgUrl: '/images/portfolio.png', title: 'Portfolio Website', desc: 'A personal portfolio website built using Next.js and TypeScript, showcasing various projects and professional experience.', githubUrl: '' },
    { imgUrl: '/images/delivery.jpg', title: 'Food Delivery Backend', desc: 'A robust backend system developed with MySQL, supporting user authentication, restaurant search, food ordering, and delivery management.', githubUrl: 'https://github.com/AjaySaranC/Intern-Training-/tree/main/FoodDelivery%20Backend%20Project' },
  ];
  

  return (
    <div className="max-w-[90rem] mx-auto p-4 m-9" ref={gridRef}>
      <h1 className="text-center text-3xl font-bold text-white mb-[4rem] m-[5rem]"><span className="text-yellow-400">Pro</span>jects</h1>
      {isVisible && (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="h-full"
            >
              <ProjectCard
                imgUrl={project.imgUrl}
                title={project.title}
                desc={project.desc}
                githubUrl={project.githubUrl} // Pass the GitHub URL for each project
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default ProjectGrid;
