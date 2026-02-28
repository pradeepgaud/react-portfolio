// import React, { useState } from "react";
// import { Github, ExternalLink, Code, MessageSquare, Edit3, ChevronDown, ChevronUp } from "lucide-react";
// import projectone from "../assets/project/gaur-booking.png";
// import projectwo from "../assets/project/baby-care.png";
// import projectthree from "../assets/project/authentication.png";
// import projectfor from "../assets/project/ahency.png";

// function Project() {
//   const [showAllProjects, setShowAllProjects] = useState(false);

//   const projects = [
//     {
//       title: "Gaur-Booking",
//       description:
//         "A full-stack MERN booking platform where users can create, update, and delete listings, add ratings, and make bookings. Built with JWT authentication, secure login/logout, and role-based access. Admins can manage and even cancel bookings.",
//       image: projectone,
//       githubUrl: "https://github.com/pradeepgaud/gaur_booking",
//       demoUrl: "https://gaur-booking-1.onrender.com/",
//       icon: <MessageSquare className="w-6 h-6" />,
//       gradient: "from-blue-500/20 to-purple-600/20",
//     },
//     {
//       title: "Baby-Care",
//       description:
//         "A MERN stack Baby-Care management app where admins can create, update, and delete events. Built with MongoDB, Express, React, and Node.js, providing a complete event management system with a secure backend and dynamic frontend",
//        image: projectwo,
//       githubUrl: "https://github.com/pradeepgaud/baby-care",
//       demoUrl: "https://baby-care-1sjs.onrender.com/",
//       icon: <Code className="w-6 h-6" />,
//       gradient: "from-green-500/20 to-blue-600/20",
//     },
//     {
//       title: "Authentication",
//       description:
//         "A secure MERN stack authentication system with JWT-based login/signup, bcrypt password hashing, and protected routes to ensure safe user access",
//       image: projectthree,
//       githubUrl: "https://github.com/pradeepgaud/authentication",
//       demoUrl: "https://authentication-gaur-tau.vercel.app/",
//       icon: <Edit3 className="w-6 h-6" />,
//       gradient: "from-purple-500/20 to-pink-600/20",
//     },
//     {
//       title: "Ahency",
//       description:
//         "A modern and visually appealing agency website built with React, featuring smooth animations, responsive design, and an engaging user interface for clients, Added smooth animations for better user engagement",
//       image: projectfor,
//       githubUrl: "https://github.com/pradeepgaud/ahency",
//       demoUrl: "https://ahency.vercel.app/",
//       icon: <Edit3 className="w-6 h-6" />,
//       gradient: "from-purple-500/20 to-pink-600/20",
//     },
//     // Add more projects here when you have them
//     // {
//     //   title: "E-Commerce Store",
//     //   description:
//     //     "A full-featured e-commerce platform with shopping cart, payment integration, user authentication, and admin dashboard for managing products and orders.",
//     //   image: "/public/project/ecommerce.png",
//     //   githubUrl: "https://github.com/pradeepgaud/ecommerce",
//     //   demoUrl: "https://ecommerce-demo.vercel.app/",
//     //   icon: <Code className="w-6 h-6" />,
//     //   gradient: "from-orange-500/20 to-red-600/20",
//     // },
//     // {
//     //   title: "Task Management",
//     //   description:
//     //     "A collaborative task management application with real-time updates, team collaboration features, and progress tracking built with React and Socket.io",
//     //   image: "/public/project/taskmanager.png",
//     //   githubUrl: "https://github.com/pradeepgaud/taskmanager",
//     //   demoUrl: "https://taskmanager-demo.vercel.app/",
//     //   icon: <MessageSquare className="w-6 h-6" />,
//     //   gradient: "from-teal-500/20 to-green-600/20",
//     // }
//   ];

//   // Show only first 3 projects initially
//   const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

//   return (
//     <div
//       id="projects"
//       className="min-h-screen bg-black text-white relative overflow-hidden"
//     >
//       {/* Enhanced Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float sm:-top-20 sm:-right-16 sm:w-48 sm:h-48"></div>
//         <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float-delayed sm:-bottom-20 sm:-left-16 sm:w-48 sm:h-48"></div>
//         <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow sm:top-20 sm:left-20 sm:w-40 sm:h-40"></div>
//         <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-bounce-slow sm:w-32 sm:h-32"></div>
//       </div>

//       {/* Grid pattern overlay */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

//       <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-16">
//         {/* Enhanced Header with animated elements */}
//         <div className="text-center mb-12 sm:mb-20 relative">
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
//           </div>
//           <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-4 sm:mb-6 relative animate-fade-in-up">
//             My Recent{" "}
//             <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
//               Works
//             </span>
//           </h1>
//           <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4 rounded-full animate-fade-in"></div>
//           <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delayed px-4">
//             Here are a few projects I've worked on recently. Each one represents
//             hours of passion, creativity, and problem-solving.
//           </p>
//         </div>

//         {/* Enhanced Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 max-w-7xl mx-auto">
//           {displayedProjects.map((project, index) => (
//             <div
//               key={index}
//               className="group relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-blue-500/25 animate-fade-in-up"
//               style={{ animationDelay: `${index * 0.2}s` }}
//             >
//               {/* Animated border effect */}
//               <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
//               <div className="absolute inset-[1px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-xl"></div>

//               <div className="relative z-10">
//                 {/* Enhanced Project Image */}
//                 <div className="relative overflow-hidden rounded-xl sm:rounded-2xl mb-6 sm:mb-8 bg-gradient-to-br from-gray-800 via-gray-900 to-black h-40 sm:h-52 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-500">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     onError={(e) => {
//                       // Fallback to icon if image fails to load
//                       e.target.style.display = "none";
//                       e.target.nextSibling.style.display = "flex";
//                     }}
//                   />

//                   {/* Fallback icon display (hidden by default) */}
//                   <div className="absolute inset-0 hidden items-center justify-center">
//                     <div
//                       className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
//                     ></div>
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
//                     <div className="relative z-10 text-white/80 transform group-hover:scale-110 transition-transform duration-500 drop-shadow-lg">
//                       {React.cloneElement(project.icon, {
//                         className: "w-8 h-8 sm:w-12 sm:h-12",
//                       })}
//                     </div>
//                   </div>

//                   {/* Image overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//                   {/* Floating particles effect */}
//                   <div className="absolute inset-0 overflow-hidden">
//                     {[...Array(8)].map((_, i) => (
//                       <div
//                         key={i}
//                         className="absolute w-1 h-1 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000"
//                         style={{
//                           left: `${Math.random() * 100}%`,
//                           top: `${Math.random() * 100}%`,
//                           animationDelay: `${i * 0.1}s`,
//                         }}
//                       ></div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Enhanced Project Content */}
//                 <div className="space-y-4 sm:space-y-6">
//                   <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
//                     {project.title}
//                   </h3>

//                   <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
//                     {project.description}
//                   </p>

//                   {/* Enhanced Action Buttons */}
//                   <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
//                     <a
//                       href={project.githubUrl}
//                       className="flex items-center justify-center sm:justify-start gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 hover:from-blue-600/40 hover:to-blue-500/40 border border-blue-500/30 hover:border-blue-400/50 rounded-lg sm:rounded-xl text-white transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm text-sm sm:text-base"
//                     >
//                       <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
//                       <span className="font-medium">GitHub</span>
//                     </a>

//                     <a
//                       href={project.demoUrl}
//                       className="flex items-center justify-center sm:justify-start gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/40 hover:to-pink-600/40 border border-purple-500/30 hover:border-pink-400/50 rounded-lg sm:rounded-xl text-white transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 backdrop-blur-sm text-sm sm:text-base"
//                     >
//                       <ExternalLink
//                         size={16}
//                         className="sm:w-[18px] sm:h-[18px]"
//                       />
//                       <span className="font-medium">Demo</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* Enhanced Hover Glow Effect */}
//               <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//             </div>
//           ))}
//         </div>

//         {/* Enhanced Bottom CTA - Show/Hide More Projects Button */}
//         <div className="text-center mt-12 sm:mt-20">
//           <button
//             onClick={() => setShowAllProjects(!showAllProjects)}
//             className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full text-white font-semibold hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 animate-bounce-gentle backdrop-blur-sm border border-white/10 text-sm sm:text-base"
//           >
//             <Github size={18} className="sm:w-[22px] sm:h-[22px]" />
//             <span>
//               {showAllProjects ? 'Show Less Projects' : 'View More Projects'}
//             </span>
//             {showAllProjects ? (
//               <ChevronUp size={18} className="sm:w-[22px] sm:h-[22px]" />
//             ) : (
//               <ChevronDown size={18} className="sm:w-[22px] sm:h-[22px]" />
//             )}
//           </button>
//         </div>
//       </div>

//       <style jsx>{`
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }

//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }

//         @keyframes float-delayed {
//           0%,
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-25px) rotate(5deg);
//           }
//         }

//         @keyframes float-slow {
//           0%,
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-15px) rotate(-3deg);
//           }
//         }

//         @keyframes bounce-slow {
//           0%,
//           100% {
//             transform: translateY(0px) scale(1);
//           }
//           50% {
//             transform: translateY(-10px) scale(1.05);
//           }
//         }

//         @keyframes twinkle {
//           0%,
//           100% {
//             opacity: 0.2;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 1;
//             transform: scale(1.2);
//           }
//         }

//         @keyframes twinkle-delayed {
//           0%,
//           100% {
//             opacity: 0.3;
//             transform: scale(1) rotate(0deg);
//           }
//           50% {
//             opacity: 0.8;
//             transform: scale(1.3) rotate(180deg);
//           }
//         }

//         @keyframes twinkle-slow {
//           0%,
//           100% {
//             opacity: 0.1;
//           }
//           50% {
//             opacity: 0.6;
//           }
//         }

//         @keyframes gradient-x {
//           0%,
//           100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }

//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fade-in-up-delayed {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fade-in {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes bounce-gentle {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-5px);
//           }
//         }

//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-float-delayed {
//           animation: float-delayed 8s ease-in-out infinite;
//         }
//         .animate-float-slow {
//           animation: float-slow 10s ease-in-out infinite;
//         }
//         .animate-bounce-slow {
//           animation: bounce-slow 4s ease-in-out infinite;
//         }
//         .animate-twinkle {
//           animation: twinkle 3s ease-in-out infinite;
//         }
//         .animate-twinkle-delayed {
//           animation: twinkle-delayed 4s ease-in-out infinite;
//         }
//         .animate-twinkle-slow {
//           animation: twinkle-slow 5s ease-in-out infinite;
//         }
//         .animate-gradient-x {
//           animation: gradient-x 3s ease-in-out infinite;
//           background-size: 200% 200%;
//         }
//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//           opacity: 0;
//         }
//         .animate-fade-in-up-delayed {
//           animation: fade-in-up-delayed 1s ease-out 0.3s forwards;
//           opacity: 0;
//         }
//         .animate-fade-in {
//           animation: fade-in 1s ease-out 0.5s forwards;
//           opacity: 0;
//         }
//         .animate-bounce-gentle {
//           animation: bounce-gentle 3s ease-in-out infinite;
//         }

//         .bg-grid-pattern {
//           background-image: linear-gradient(
//               rgba(255, 255, 255, 0.1) 1px,
//               transparent 1px
//             ),
//             linear-gradient(
//               90deg,
//               rgba(255, 255, 255, 0.1) 1px,
//               transparent 1px
//             );
//           background-size: 50px 50px;
//         }

//         @keyframes pulse {
//           0%,
//           100% {
//             opacity: 0.2;
//           }
//           50% {
//             opacity: 0.4;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Project;

import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import projectone from "../assets/project/gaur-booking.png";
import projectwo from "../assets/project/baby-care.png";
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
    <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 relative overflow-hidden">
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
