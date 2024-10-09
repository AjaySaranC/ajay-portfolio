import React from 'react';
import Image from "next/image";
import Navbar from './components/navbar';
import HomePage from "../components/HomePage";
import ProjectCard from "../components/ProjectCard";
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { AboutPage } from "../components/AboutPage";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Link from "next/link";
import { SignupFormDemo } from '@/components/SignupFormDemo';
import  Footer  from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <BackgroundGradientAnimation>
        <div className="absolute overflow-auto min-h-screen z-10 inset-0 text-white">
          <Navbar />
          <div>
            <section id="home">
              <HomePage />
            </section>
            <section id="about">
              <AboutPage />
            </section>
            <section id="projects">
              <ProjectCard />
            </section>
            <section id="contact">
              <SignupFormDemo />
            </section>
            <section id='footer'>
              <Footer />
            </section>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </main>
  );
}