import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import projectone from "../assets/project/gaur-booking.png";
import projectwo from "../assets/project/baby-care.png";
import EmailMarketing from "../assets/project/EmailMarketing.png";
import BM from "../assets/project/bm.png";
import projectthree from "../assets/project/authentication.png";
import projectfor from "../assets/project/ahency.png";
import syrish from "../assets/project/syrish.png";
import vishalimitations from "../assets/project/vishalimitations.png";
import skininsight from "../assets/project/skininsight.png";
import ayurvital from "../assets/project/ayurvital.png";
import rijovabiotech from "../assets/project/rijovabiotech.png";
import romaninfra from "../assets/project/romaninfra.png";
import syrakaltech from "../assets/project/syrakaltech.png";

function ProductsSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const products = [
    {
      id: 1,
      title: "Gaur-Booking",
      category: "mernstack",
      tagline: "Hotel & Rooms Booking",
      description:
        "A full-stack MERN booking platform where users can create, update, and delete listings, add ratings, and make bookings. Built with JWT authentication, secure login/logout, and role-based access. Admins can manage and even cancel bookings.",
      image: projectone,
      demoUrl: "https://gaur-booking-1.onrender.com/",
      githubUrl: "https://github.com/pradeepgaud/gaur_booking",
    },
    {
      id: 2,
      title: "Email Marketing System",
      category: "mernstack",
      tagline: "Bulk Email Sender & Campaign Tool(not mobile responsive)",
      description:
        "A full-featured Email Marketing application built using the MERN stack, enabling admins to manage and send bulk email campaigns efficiently. Supports HTML, image, and ZIP-based email templates with dynamic sender configuration (custom From Email and Reply-To). Integrated SMTP-based email delivery system with role-based access (Admin/Sub-Admin). Designed for high-volume email sending and campaign management. Note: Currently optimized for desktop view only (not mobile responsive).",
      image: EmailMarketing,
      demoUrl: "https://email-marketing-3rzc.vercel.app/",
      githubUrl: "https://github.com/pradeepgaud/email-marketing",
    },
    {
      id: 3,
      title: "Brandmingo",
      category: "mernstack",
      tagline: "Create, Connect & Convert",
      description:
        "A modern and creative UI-based web application built using React, focused on delivering a clean and engaging user experience. Designed with a responsive layout for all devices, smooth navigation, and visually appealing components for real-world usability.",
      image: BM,
      demoUrl: "https://brandmingo-six.vercel.app/",
      githubUrl: "https://github.com/pradeepgaud/brandmingo",
    },
    {
      id: 6,
      title: "Ahency",
      category: "mernstack",
      tagline: "Marketing Indormative Websites",
      description:
        "A modern and visually appealing agency website built with React, featuring smooth animations, responsive design, and an engaging user interface for clients, Added smooth animations for better user engagement",
      //       image: projectfor",
      image: projectfor,
      demoUrl: "https://ahency.vercel.app/",
      githubUrl: "https://github.com/pradeepgaud/ahency",
    },
    {
      id: 4,
      title: "Baby-Care",
      category: "mernstack",
      tagline: "Baby Care",
      description:
        "A MERN stack Baby-Care management app where admins can create, update, and delete events. Built with MongoDB, Express, React, and Node.js, providing a complete event management system with a secure backend and dynamic frontend",
      image: projectwo,
      demoUrl: "https://baby-care-1sjs.onrender.com/",
      githubUrl: "https://github.com/pradeepgaud/baby-care",
    },
    {
      id: 5,
      title: "Authentication",
      category: "mernstack",
      tagline: "User Authentication ",
      description:
        "A secure MERN stack authentication system with JWT-based login/signup, bcrypt password hashing, and protected routes to ensure safe user access",
      image: projectthree,
      demoUrl: "https://authentication-gaur-tau.vercel.app/",
      githubUrl: "https://github.com/pradeepgaud/authentication",
    },

    {
      id: 7,
      title: "Syrish",
      category: "shopify",
      tagline: "Elevating Fashion Through Seamless Ecommerce",
      description:
        "A modern Shopify-based ecommerce platform built for smooth shopping experiences, secure checkout, and conversion-focused design.",
      image: syrish,
      demoUrl: "https://syrish.com/",
      githubUrl: "#",
    },
    {
      id: 8,
      title: "vishalimitations",
      category: "shopify",
      tagline: "Crafting Elegance in Every Detail",
      description:
        "A premium Shopify jewelry store designed for seamless browsing, secure checkout, and a luxury shopping experience.",
      image: vishalimitations,
      demoUrl: "https://vishalimitations.com/?pb=0",
      githubUrl: "#",
    },
    {
      id: 9,
      title: "ayurvital",
      category: "shopify",
      tagline: "Empowering Wellness Through Nature",
      description:
        "A Shopify-based health and wellness store built for smooth shopping, secure checkout, and high-converting product displays.",
      image: ayurvital,
      demoUrl: "https://ayurvital.co.in/?pb=0",
      githubUrl: "#",
    },
    {
      id: 10,
      title: "skininsight",
      category: "shopify",
      tagline: "Elevating Skincare Through Ecommerce",
      description:
        "A modern Shopify skincare store built for smooth navigation, secure checkout, and a conversion-focused shopping experience.",
      image: skininsight,
      demoUrl: "https://skininsight.in/?pb=0",
      githubUrl: "#",
    },
    {
      id: 11,
      title: "rijovabiotech",
      category: "wordpress",
      tagline: "Driving Innovation in Biotechnology",
      description:
        "A professional WordPress-based corporate website designed to present company information, products, and services with clarity and credibility.",
      image: rijovabiotech,
      demoUrl: "https://rijovabiotech.com/",
      githubUrl: "#",
    },
    {
      id: 12,
      title: "romaninfra",
      category: "wordpress",
      tagline: "Building Strong Digital Foundations",
      description:
        "A professional WordPress corporate website designed to showcase infrastructure projects, services, and company expertise with clarity and trust.",
      image: romaninfra,
      demoUrl: "https://romaninfra.com/",
      githubUrl: "#",
    },
    {
      id: 13,
      title: "syrakaltech",
      category: "wordpress",
      tagline: "Innovating Through Technology",
      description:
        "A professional WordPress corporate website built to showcase IT services, solutions, and company expertise with clarity and credibility.",
      image: syrakaltech,
      demoUrl: "https://syrakaltech.com/",
      githubUrl: "#",
    },
  ];

  const tabs = [
    { id: "all", label: "All Projects" },
    { id: "mernstack", label: "Mernstack" },
    { id: "shopify", label: "Shopify" },
    { id: "wordpress", label: "Wordpress" },
  ];

  const filtered =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category === activeTab);

  // Show only 3 projects at a time
  const displayedProducts = filtered.slice(currentIndex, currentIndex + 3);

  const handleScroll = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prev) => Math.max(0, prev - 3));
    } else {
      const maxIndex = Math.max(0, filtered.length - 3);
      setCurrentIndex((prev) => Math.min(maxIndex, prev + 3));
    }
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setCurrentIndex(0); // Reset to first page when changing tabs
  };

  return (
    <div
      id="projects"
      className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float-delayed"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Our Work,{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Your Success Stories
            </span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our finest projects crafted with strategy, creativity, and
            performance at the core.
          </p>
        </div>

        {/* Tabs and Arrow Buttons Container - Desktop */}
        <div className="hidden sm:flex items-center justify-between gap-6 mb-12">
          {/* Tabs - Centered */}
          <div className="flex flex-wrap justify-center gap-3 flex-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Arrow Buttons - Right End (Desktop) */}
          <div className="flex gap-3">
            <button
              onClick={() => handleScroll("left")}
              disabled={currentIndex === 0}
              className={`w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-blue-500/30 ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => handleScroll("right")}
              disabled={currentIndex >= Math.max(0, filtered.length - 3)}
              className={`w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-purple-500/30 ${
                currentIndex >= Math.max(0, filtered.length - 3)
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Tabs Only - Mobile */}
        <div className="flex sm:hidden flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid - 3 columns, smaller cards with margins */}
        <div className="mx-4 sm:mx-8 lg:mx-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {displayedProducts.map((product, i) => (
              <div
                key={product.id}
                className="group relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-2xl p-5 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-xl"></div>

                <div className="relative z-10">
                  {/* Product Image */}
                  <div className="relative overflow-hidden rounded-xl mb-5 h-44 bg-gradient-to-br from-gray-800 via-gray-900 to-black group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-500">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Product Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-xs font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {product.tagline}
                    </p>
                    <p className="text-gray-300 text-xs leading-relaxed group-hover:text-gray-200 transition-colors duration-300 line-clamp-3">
                      {product.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-3">
                      <a
                        href={product.githubUrl}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600/20 to-blue-500/20 hover:from-blue-600/40 hover:to-blue-500/40 border border-blue-500/30 hover:border-blue-400/50 rounded-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm text-sm"
                      >
                        <Github size={16} />
                        <span className="font-medium">GitHub</span>
                      </a>

                      <a
                        href={product.demoUrl}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/40 hover:to-pink-600/40 border border-purple-500/30 hover:border-pink-400/50 rounded-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 backdrop-blur-sm text-sm"
                      >
                        <ExternalLink size={16} />
                        <span className="font-medium">Demo</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="text-center mt-8 text-gray-400 text-sm">
          {Math.min(currentIndex + 3, filtered.length)} / {filtered.length}
        </div>

        {/* Arrow Buttons - Mobile (Below Cards) */}
        <div className="flex sm:hidden justify-center gap-3 mt-8">
          <button
            onClick={() => handleScroll("left")}
            disabled={currentIndex === 0}
            className={`w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-blue-500/30 ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => handleScroll("right")}
            disabled={currentIndex >= Math.max(0, filtered.length - 3)}
            className={`w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-purple-500/30 ${
              currentIndex >= Math.max(0, filtered.length - 3)
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(5deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-3deg);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .bg-grid-pattern {
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default ProductsSection;
