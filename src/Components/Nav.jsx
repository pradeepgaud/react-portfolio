import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full shadow-md z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl shadow-purple-500/10' 
          : 'bg-black/80 backdrop-blur-sm'
      }`}>
        
        {/* Animated gradient border at bottom */}
        <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-pink-500 transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-60'
        }`}></div>

        <div className="container mx-auto flex items-center justify-between py-4 px-6 relative">
          
          {/* Logo / Name with enhanced styling */}
          <div className="text-2xl font-bold tracking-wide relative group">
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent cursor-pointer hover:from-purple-300 hover:to-pink-400 transition-all duration-300"
            >
              Pradeep Gaud
              {/* Animated underline */}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-500"></div>
            </Link>
            
            {/* Logo glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </div>

          {/* Desktop Menu with enhanced styling */}
          <ul className="hidden md:flex space-x-8 text-sm font-semibold">
            <li className="relative group">
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-70}
                className="text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent cursor-pointer transition-all duration-300 px-3 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 relative z-10"
              >
                HOME
              </Link>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </li>
            <li className="relative group">
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                className="text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent cursor-pointer transition-all duration-300 px-3 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 relative z-10"
              >
                ABOUT
              </Link>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </li>
            <li className="relative group">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                offset={-70}
                className="text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent cursor-pointer transition-all duration-300 px-3 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 relative z-10"
              >
                SKILLS
              </Link>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </li>
            <li className="relative group">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent cursor-pointer transition-all duration-300 px-3 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 relative z-10"
              >
                PROJECTS
              </Link>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </li>
            <li className="relative group">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent cursor-pointer transition-all duration-300 px-3 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 relative z-10"
              >
                CONTACT
              </Link>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </li>
          </ul>

          {/* Mobile Menu Button with enhanced styling */}
          <button 
            className="md:hidden text-2xl relative p-2 rounded-lg border border-purple-500/30 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group" 
            onClick={toggleMenu}
          >
            <div className="relative">
              {isOpen ? (
                <FaTimes className="text-white group-hover:text-pink-400 transition-colors duration-300" />
              ) : (
                <FaBars className="text-white group-hover:text-purple-400 transition-colors duration-300" />
              )}
            </div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </button>
        </div>

        {/* Mobile Menu with enhanced styling */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl px-6 pb-4 border-t border-purple-500/20 shadow-xl shadow-purple-500/10">
            <ul className="flex flex-col space-y-4 text-sm font-semibold">
              <li className="relative group">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={toggleMenu}
                  className="cursor-pointer text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 block px-4 py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/20 relative z-10"
                >
                  HOME
                </Link>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </li>
              <li className="relative group">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={toggleMenu}
                  className="cursor-pointer text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 block px-4 py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/20 relative z-10"
                >
                  ABOUT
                </Link>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </li>
              <li className="relative group">
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={toggleMenu}
                  className="cursor-pointer text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 block px-4 py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/20 relative z-10"
                >
                  SKILLS
                </Link>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </li>
              <li className="relative group">
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={toggleMenu}
                  className="cursor-pointer text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 block px-4 py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/20 relative z-10"
                >
                  PROJECTS
                </Link>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </li>
              <li className="relative group">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={toggleMenu}
                  className="cursor-pointer text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 block px-4 py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/20 relative z-10"
                >
                  CONTACT
                </Link>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </li>
            </ul>
          </div>
        )}
      </nav>
      

    </>
  );
}

export default Nav;