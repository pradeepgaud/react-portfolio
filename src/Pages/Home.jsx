import React from "react";
import profileImg from "../../public/home.jpg"; // replace with your image path
import Skills from "../Components/Skills";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <section
        id="home"
        className=" bg-black text-white min-h-screen flex items-center justify-center px-4 md:px-16"
      >
        <div className="container mx-auto max-w-6xl">
          {/* Mobile Layout */}
          <div className="block md:hidden text-center space-y-6">
            {/* Profile Image - Top on mobile */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 p-1 ">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                {/* Decorative elements for mobile */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full opacity-60"></div>
                <div className="absolute -bottom-3 -left-3 w-3 h-3 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full opacity-40"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold leading-tight">
                FULL STACK <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  DEVELOPER
                </span>
              </h1>
              <p className="text-gray-300 text-sm leading-relaxed px-2">
                Full Stack Web Developer | Specializing in the MERN Stack to
                Build Scalable & Modern Web Applications
              </p>

              {/* Mobile Layout Buttons */}
              <div className="flex gap-3 pt-2">
                {/* First Button - gradient bg */}
                <button className="bg-gradient-to-r from-purple-400 to-pink-500 hover:opacity-90 transition-all duration-300 flex-1 py-3 rounded-md font-semibold text-sm text-white">
                  Get In Touch
                </button>

                {/* Second Button - gradient border, hover -> gradient bg */}
                <button className="relative group flex-1 py-3 rounded-md font-semibold text-sm text-white overflow-hidden">
                  {/* Gradient Border */}
                  <span className="absolute inset-0 rounded-md p-[2px] bg-gradient-to-r from-purple-400 to-pink-500">
                    {/* Inner Background (changes on hover) */}
                    <span className="block w-full h-full rounded-md bg-black group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300"></span>
                  </span>

                  {/* Button Text */}
                  <span className="relative z-10">Download CV</span>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-2 items-center gap-12">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                FULL STACK <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  DEVELOPER
                </span>
              </h1>
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
                Full Stack Web Developer | Specializing in the MERN Stack to
                Build Scalable & Modern Web Applications
              </p>

              <div className="flex gap-5 pt-4">
                {/* First Button - gradient bg */}
                <button className="bg-gradient-to-r from-purple-400 to-pink-500 hover:opacity-90 transition-all duration-300 px-8 py-3 rounded-md font-semibold text-lg text-white">
                  Get In Touch
                </button>

                {/* Second Button - gradient border, hover -> gradient bg */}
                <button className="relative group px-8 py-3 rounded-md font-semibold text-lg text-white overflow-hidden">
                  {/* Gradient Border */}
                  <span className="absolute inset-0 rounded-md p-[2px] bg-gradient-to-r from-purple-400 to-pink-500">
                    {/* Inner Background (changes on hover) */}
                    <span className="block w-full h-full rounded-md bg-black group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300"></span>
                  </span>

                  {/* Button Text */}
                  <span className="relative z-10">Download CV</span>
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500  p-2">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About id="about" />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
