import React from "react";
import profileImg from "../assets/project/home.jpg";
// Resume को import करें
import resumePDF from "../assets/resume/pradeep_gaud.pdf";
import Skills from "../Components/Skills";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "../Components/Footer";

function Home() {
  // Handle CV download - Method 1: Using import
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "pradeep_gaud.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
// dummy 
  // Alternative Method 2: Using public folder (अगर public/resume/pradeep_gaud.pdf में file है)
  const handleDownloadCVAlternative = () => {
    const link = document.createElement("a");
    link.href = "/resume/pradeep_gaud.pdf"; // public folder से relative path
    link.download = "pradeep_gaud.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle get in touch
  const handleGetInTouch = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        id="home"
        className=" bg-black text-white flex items-center justify-center py-[80px] px-4 md:px-16 h-auto md:min-h-screen
"
      >
        <div className="container mx-auto max-w-6xl">
          {/* Mobile Layout */}
          <div className="block md:hidden text-center space-y-4">
            {/* Profile Image - Top on mobile */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-40 h-40 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 p-1 ">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzc0MTUxIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIyNSIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNNjAgMTYwYzAtMjIuMDkxIDE3LjkwOS00MCA0MC00MGgyMGMyMi4wOTEgMCA0MCAxNy45MDkgNDAgNDB2MjBINjB2LTIweiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K";
                    }}
                  />
                </div>
                {/* Decorative elements for mobile */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full opacity-60"></div>
                <div className="absolute -bottom-3 -left-3 w-3 h-3 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full opacity-40"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3">
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
              <div className="flex gap-3 pt-1">
                {/* First Button - gradient bg */}
                <button
                  onClick={handleGetInTouch}
                  className="bg-gradient-to-r from-purple-400 to-pink-500 hover:opacity-90 transition-all duration-300 flex-1 py-3 rounded-md font-semibold text-sm text-white hover:shadow-lg hover:shadow-purple-500/25"
                >
                  Get In Touch
                </button>

                {/* Second Button - gradient border, hover -> gradient bg */}
                <button
                  onClick={handleDownloadCV}
                  className="relative group flex-1 py-3 rounded-md font-semibold text-sm text-white overflow-hidden hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
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
                <button
                  onClick={handleGetInTouch}
                  className="bg-gradient-to-r from-purple-400 to-pink-500 hover:opacity-90 transition-all duration-300 px-8 py-3 rounded-md font-semibold text-lg text-white hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
                >
                  Get In Touch
                </button>

                {/* Second Button - gradient border, hover -> gradient bg */}
                <button
                  onClick={handleDownloadCV}
                  className="relative group px-8 py-3 rounded-md font-semibold text-lg text-white overflow-hidden hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
                >
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
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzc0MTUxIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIyNSIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNNjAgMTYwYzAtMjIuMDkxIDE3LjkwOS00MCA0MC00MGgyMGMyMi4wOTEgMCA0MCAxNy45MDkgNDAgNDB2MjBINjB2LTIweiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K";
                    }}
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



      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
