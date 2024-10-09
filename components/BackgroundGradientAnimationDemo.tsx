import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import HomePage from "../components/HomePage";
import { AboutPage } from "./AboutPage";

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute overflow-auto min-h-screen z-10 inset-0 text-white">
        <div className="mt-20">
        <HomePage />

        </div>
        
        <AboutPage />
      </div>
    </BackgroundGradientAnimation>
  );
}