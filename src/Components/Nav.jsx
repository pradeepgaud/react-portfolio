import React, { useState } from "react";
import { Link } from "react-scroll"; // 👈 react-scroll import
import { FaBars, FaTimes } from "react-icons/fa";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo / Name */}
        <div className="text-2xl font-bold tracking-wide">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-gray-400 cursor-pointer"
          >
            Pradeep Gaud
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-semibold">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-gray-400 cursor-pointer"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-gray-400 cursor-pointer"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-gray-400 cursor-pointer"
            >
              SKILLS
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-gray-400 cursor-pointer"
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-gray-400 cursor-pointer"
            >
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-sm font-semibold">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={toggleMenu}
                className="cursor-pointer"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={toggleMenu}
                className="cursor-pointer"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={toggleMenu}
                className="cursor-pointer"
              >
                SKILLS
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={toggleMenu}
                className="cursor-pointer"
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={toggleMenu}
                className="cursor-pointer"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
