// import React, { useState, useEffect, useRef } from "react";

// function About() {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   // Handle scroll-based animations
//   useEffect(() => {
//     const handleScroll = () => {
//       if (sectionRef.current) {
//         const rect = sectionRef.current.getBoundingClientRect();
//         const windowHeight = window.innerHeight;

//         // Trigger animation when section is 60% visible
//         const isInView =
//           rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2;
//         setIsVisible(isInView);
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll(); // Check initial position

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const socialLinks = [
//     {
//       name: "GitHub",
//       icon: (
//         <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
//           <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//         </svg>
//       ),
//       url: "https://github.com/pradeepgaud",
//       color: "hover:bg-gray-600",
//     },
//     {
//       name: "Twitter",
//       icon: (
//         <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
//           <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//         </svg>
//       ),
//       url: "https://x.com/gaur25604?t=R9nUBXrTdik6jO95xQhfNw&s=09",
//       color: "hover:bg-blue-500",
//     },
//     {
//       name: "LinkedIn",
//       icon: (
//         <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
//           <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//         </svg>
//       ),
//       url: "https://www.linkedin.com/in/pradeepgaud/",
//       color: "hover:bg-blue-600",
//     },
//     {
//       name: "Instagram",
//       icon: (
//         <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
//           <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//         </svg>
//       ),
//       url: "https://www.instagram.com/_gaur__18?igsh=MTRtbjhzNXM4N3pvMQ==",
//       color: "hover:bg-pink-500",
//     },
//   ];

//   return (
//     <section
//       id="about"
//       ref={sectionRef}
//       className="bg-black text-white py-16 px-4 md:px-16 relative overflow-hidden min-h-screen flex items-center"
//     >
//       {/* Animated background particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full opacity-60 animate-ping"></div>
//         <div
//           className="absolute top-32 right-16 w-3 h-3 bg-pink-500 rounded-full opacity-40 animate-pulse"
//           style={{ animationDelay: "1s" }}
//         ></div>
//         <div
//           className="absolute bottom-20 left-20 w-1 h-1 bg-cyan-400 rounded-full opacity-70 animate-bounce"
//           style={{ animationDelay: "2s" }}
//         ></div>
//         <div
//           className="absolute top-1/2 right-10 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-50 animate-ping"
//           style={{ animationDelay: "3s" }}
//         ></div>
//         <div
//           className="absolute bottom-32 right-32 w-2 h-2 bg-pink-400 rounded-full opacity-60 animate-pulse"
//           style={{ animationDelay: "2.5s" }}
//         ></div>
//       </div>

//       <div className="container mx-auto max-w-6xl relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="space-y-8">
//             {/* Header */}
//             <div
//               className={`transition-all duration-1000 ease-out ${
//                 isVisible
//                   ? "transform translate-x-0 opacity-100"
//                   : "transform -translate-x-16 opacity-0"
//               }`}
//             >
//               <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
//                 LET ME{" "}
//                 <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
//                   INTRODUCE
//                 </span>{" "}
//                 MYSELF
//               </h1>
//             </div>

//             {/* Content Paragraphs */}
//             <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
//               <p
//                 className={`transition-all duration-1000 ease-out delay-300 ${
//                   isVisible
//                     ? "transform translate-x-0 opacity-100"
//                     : "transform -translate-x-16 opacity-0"
//                 }`}
//               >
//                 {/* Hi, I’m Pradeep Gaud I’m a passionate Full Stack Developer with
//                 expertise in the MERN stack MongoDB, Express.js, React.js,
//                 Node.js */}
//                 Hi, I’m Pradeep Gaud, a Full Stack Developer specializing in the
//                 MERN Stack (MongoDB, Express.js, React.js, Node.js). I build
//                 scalable, high-performance web applications with a strong focus
//                 on clean code and user-centric design.
//                 {/* <span className="inline-block ml-2 text-2xl animate-bounce">👑</span> */}
//               </p>

//               <p
//                 className={`transition-all duration-1000 ease-out delay-500 ${
//                   isVisible
//                     ? "transform translate-x-0 opacity-100"
//                     : "transform -translate-x-16 opacity-0"
//                 }`}
//               >
//                 I have successfully completed{" "}
//                 <span className="text-purple-400 font-semibold">1 year</span>,{" "}
//                 of Full Stack Developer training, followed by a{" "}
//                 <span className="text-yellow-400 font-semibold">3-month</span>{" "}
//                 internship, and I’m currently working as a Full-Time Developer
//                 at{" "}
//                 <span className="text-purple-400 font-semibold">
//                   Brandmingo Media Private Limited{" "}
//                 </span>
//                 ,{" "}
//                 {/* <span className="text-purple-400 font-semibold">C++</span>,{" "}
//                 <span className="text-yellow-400 font-semibold">
//                   Javascript
//                 </span>{" "} */}
//                 {/* and <span className="text-blue-400 font-semibold">Go</span>. */}
//               </p>

//               <p
//                 className={`transition-all duration-1000 ease-out delay-700 ${
//                   isVisible
//                     ? "transform translate-x-0 opacity-100"
//                     : "transform -translate-x-16 opacity-0"
//                 }`}
//               >
//                 With 11+ months of real-world industry experience,{" "}
//                 <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold">
//                   I have worked on production-level projects, collaborated with
//                   cross-functional teams,
//                 </span>{" "}
//                 and delivered reliable digital solutions for businesses.{" "}
//                 {/* <span className="text-cyan-400 font-semibold">Blockchain</span>. */}
//               </p>

//               <p
//                 className={`transition-all duration-1000 ease-out delay-900 ${
//                   isVisible
//                     ? "transform translate-x-0 opacity-100"
//                     : "transform -translate-x-16 opacity-0"
//                 }`}
//               >
//                 Alongside MERN development, I also have hands-on experience with{" "}
//                 <span className="text-green-400 font-semibold">Shopify</span>{" "}
//                 and{" "}
//                 <span className="text-green-400 font-semibold">WordPress</span>{" "}
//                 <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold">
//                   creating modern,
//                 </span>{" "}
//                 responsive,{" "}
//                 <span className="text-cyan-400 font-semibold">
//                   conversion-focused
//                 </span>{" "}
//                 and{" "}
//                 <span className="text-green-500 font-semibold">websites</span>.
//               </p>
//             </div>

//             {/* Social Links Section */}
//             <div
//               className={`pt-8 transition-all duration-1000 ease-out delay-1100 ${
//                 isVisible
//                   ? "transform translate-x-0 opacity-100"
//                   : "transform -translate-x-16 opacity-0"
//               }`}
//             >
//               <h3 className="text-2xl md:text-3xl font-bold mb-6">
//                 FIND ME ON
//               </h3>
//               <p className="text-gray-400 mb-6">
//                 Feel free to{" "}
//                 <span className="text-purple-400 font-semibold">connect</span>{" "}
//                 with me
//               </p>

//               {/* Social Icons */}
//               <div className="flex space-x-4">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={social.name}
//                     href={social.url}
//                     className={`
//                       group w-12 h-12 bg-gray-800/50 border border-gray-700
//                       rounded-full flex items-center justify-center
//                       transition-all duration-300 ease-out
//                       hover:scale-110 hover:-translate-y-1 hover:border-purple-500
//                       ${social.color}
//                       ${isVisible ? "animate-bounce" : ""}
//                     `}
//                     style={{
//                       animationDelay: `${1300 + index * 200}ms`,
//                       animationDuration: "0.6s",
//                       animationIterationCount: "1",
//                     }}
//                   >
//                     <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
//                       {social.icon}
//                     </div>

//                     {/* Glow effect */}
//                     <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Avatar/Image */}
//           <div
//             className={`flex justify-center lg:justify-end transition-all duration-1200 ease-out delay-600 ${
//               isVisible
//                 ? "transform translate-x-0 opacity-100"
//                 : "transform translate-x-16 opacity-0"
//             }`}
//           >
//             <div className="relative">
//               {/* Main Avatar Container */}
//               <div className="relative w-80 h-80 md:w-96 md:h-96">
//                 {/* Animated gradient border */}
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 p-1 animate-spin-slow">
//                   <div className="w-full h-full rounded-full bg-black"></div>
//                 </div>

//                 {/* Avatar */}
//                 <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center overflow-hidden">
//                   {/* Cartoon Developer Avatar */}
//                   <div className="w-full h-full bg-gradient-to-br from-purple-300 to-purple-500 rounded-full flex items-center justify-center relative">
//                     {/* Face */}
//                     <div className="absolute top-16 w-32 h-32 bg-yellow-200 rounded-full"></div>

//                     {/* Eyes */}
//                     <div className="absolute top-20 left-1/2 transform -translate-x-1/2 flex space-x-4">
//                       <div className="w-3 h-6 bg-black rounded-full animate-blink"></div>
//                       <div className="w-3 h-6 bg-black rounded-full animate-blink"></div>
//                     </div>

//                     {/* Smile */}
//                     <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-8 h-4 border-b-4 border-black rounded-full"></div>

//                     {/* Hair */}
//                     <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-36 h-20 bg-brown-600 rounded-t-full"></div>

//                     {/* Body - Hoodie */}
//                     <div className="absolute bottom-8 w-40 h-32 bg-gray-800 rounded-t-3xl"></div>

//                     {/* Hoodie Strings */}
//                     <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-4">
//                       <div className="w-1 h-8 bg-gray-600 rounded-full"></div>
//                       <div className="w-1 h-8 bg-gray-600 rounded-full"></div>
//                     </div>

//                     {/* Floating Code Symbols */}
//                     <div className="absolute top-8 left-8 text-yellow-300 text-xl animate-float">
//                       {"<>"}
//                     </div>
//                     <div
//                       className="absolute top-12 right-8 text-cyan-300 text-lg animate-float"
//                       style={{ animationDelay: "1s" }}
//                     >
//                       {"{ }"}
//                     </div>
//                     <div
//                       className="absolute bottom-12 left-4 text-pink-300 text-sm animate-float"
//                       style={{ animationDelay: "2s" }}
//                     >
//                       {"( )"}
//                     </div>
//                     <div
//                       className="absolute bottom-8 right-4 text-purple-300 text-lg animate-float"
//                       style={{ animationDelay: "0.5s" }}
//                     >
//                       {"[]"}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Floating particles around avatar */}
//                 <div className="absolute -top-4 -left-4 w-4 h-4 bg-purple-400 rounded-full opacity-60 animate-ping"></div>
//                 <div
//                   className="absolute -top-2 -right-6 w-3 h-3 bg-pink-400 rounded-full opacity-50 animate-pulse"
//                   style={{ animationDelay: "1s" }}
//                 ></div>
//                 <div
//                   className="absolute -bottom-4 -left-6 w-5 h-5 bg-cyan-400 rounded-full opacity-40 animate-bounce"
//                   style={{ animationDelay: "2s" }}
//                 ></div>
//                 <div
//                   className="absolute -bottom-2 -right-4 w-3 h-3 bg-yellow-400 rounded-full opacity-60 animate-ping"
//                   style={{ animationDelay: "1.5s" }}
//                 ></div>
//               </div>

//               {/* Floating skills badges */}
//               <div
//                 className={`absolute -top-8 -left-12 transition-all duration-1000 ease-out delay-1000 ${
//                   isVisible
//                     ? "transform translate-y-0 opacity-100"
//                     : "transform -translate-y-8 opacity-0"
//                 }`}
//               >
//                 <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 rounded-full text-sm font-semibold animate-float">
//                   React.js
//                 </div>
//               </div>

//               <div
//                 className={`absolute -top-4 -right-16 transition-all duration-1000 ease-out delay-1200 ${
//                   isVisible
//                     ? "transform translate-y-0 opacity-100"
//                     : "transform -translate-y-8 opacity-0"
//                 }`}
//               >
//                 <div
//                   className="bg-gradient-to-r from-green-500 to-blue-500 px-3 py-1 rounded-full text-sm font-semibold animate-float"
//                   style={{ animationDelay: "1s" }}
//                 >
//                   Node.js
//                 </div>
//               </div>

//               <div
//                 className={`absolute -bottom-8 -left-16 transition-all duration-1000 ease-out delay-1400 ${
//                   isVisible
//                     ? "transform translate-y-0 opacity-100"
//                     : "transform translate-y-8 opacity-0"
//                 }`}
//               >
//                 <div
//                   className="bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-1 rounded-full text-sm font-semibold animate-float"
//                   style={{ animationDelay: "2s" }}
//                 >
//                   JavaScript
//                 </div>
//               </div>

//               <div
//                 className={`absolute -bottom-4 -right-20 transition-all duration-1000 ease-out delay-1600 ${
//                   isVisible
//                     ? "transform translate-y-0 opacity-100"
//                     : "transform translate-y-8 opacity-0"
//                 }`}
//               >
//                 <div
//                   className="bg-gradient-to-r from-cyan-500 to-purple-500 px-3 py-1 rounded-full text-sm font-semibold animate-float"
//                   style={{ animationDelay: "0.5s" }}
//                 >
//                   MongoDB
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced ambient lighting effect */}
//       <div
//         className={`absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transition-all duration-2000 ${
//           isVisible ? "animate-pulse scale-110" : "scale-75 opacity-50"
//         }`}
//       ></div>
//       <div
//         className={`absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl transition-all duration-2000 ${
//           isVisible ? "animate-pulse scale-110" : "scale-75 opacity-50"
//         }`}
//         style={{ animationDelay: "2s" }}
//       ></div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-10px) rotate(5deg);
//           }
//         }

//         @keyframes blink {
//           0%,
//           90%,
//           100% {
//             height: 24px;
//           }
//           95% {
//             height: 4px;
//           }
//         }

//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }

//         .animate-blink {
//           animation: blink 4s ease-in-out infinite;
//         }

//         .animate-spin-slow {
//           animation: spin-slow 8s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }

// export default About;

import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Code2,
  Sparkles,
  Zap,
  Award,
} from "lucide-react";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isInView =
          rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/pradeepgaud",
      color: "hover:bg-gray-700",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://x.com/gaur25604?t=R9nUBXrTdik6jO95xQhfNw&s=09",
      color: "hover:bg-blue-500",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/pradeepgaud/",
      color: "hover:bg-blue-600",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://www.instagram.com/_gaur__18?igsh=MTRtbjhzNXM4N3pvMQ==",
      color: "hover:bg-pink-500",
    },
  ];

  const stats = [
    {
      icon: <Code2 className="w-5 h-5" />,
      value: "11+",
      label: "Months Experience",
    },
    {
      icon: <Award className="w-5 h-5" />,
      value: "10+",
      label: "Projects Completed",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      value: "MERN",
      label: "Stack Expert",
    },
  ];

  const skills = [
    { name: "React.js", color: "from-cyan-400 to-blue-500" },
    { name: "Node.js", color: "from-green-400 to-emerald-600" },
    { name: "MongoDB", color: "from-green-500 to-teal-500" },
    { name: "Express.js", color: "from-gray-400 to-gray-600" },
    { name: "Shopify", color: "from-green-400 to-lime-500" },
    { name: "WordPress", color: "from-blue-400 to-indigo-500" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float-delayed"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header with Icon */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible
                  ? "transform translate-x-0 opacity-100"
                  : "transform -translate-x-16 opacity-0"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-yellow-400 animate-pulse" />
                <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">
                  About Me
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Let Me{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Introduce
                </span>
                <br />
                Myself
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-4"></div>
            </div>

            {/* Stats Cards */}
            <div
              className={`grid grid-cols-3 gap-4 transition-all duration-1000 ease-out delay-200 ${
                isVisible
                  ? "transform translate-y-0 opacity-100"
                  : "transform translate-y-8 opacity-0"
              }`}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-purple-400 mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-5 text-gray-300 text-base leading-relaxed">
              <p
                className={`transition-all duration-1000 ease-out delay-300 ${
                  isVisible
                    ? "transform translate-x-0 opacity-100"
                    : "transform -translate-x-16 opacity-0"
                }`}
              >
                Hi, I'm{" "}
                <span className="text-white font-semibold">Pradeep Gaud</span>,
                a Full Stack Developer specializing in the{" "}
                <span className="text-purple-400 font-semibold">
                  MERN Stack
                </span>
                . I build scalable, high-performance web applications with a
                strong focus on clean code and user-centric design.
              </p>

              <p
                className={`transition-all duration-1000 ease-out delay-500 ${
                  isVisible
                    ? "transform translate-x-0 opacity-100"
                    : "transform -translate-x-16 opacity-0"
                }`}
              >
                I have successfully completed{" "}
                <span className="text-purple-400 font-semibold">1 year</span> of
                Full Stack Developer training, followed by a{" "}
                <span className="text-yellow-400 font-semibold">3-month</span>{" "}
                internship, and I'm currently working as a Full-Time Developer
                at{" "}
                <span className="text-purple-400 font-semibold">
                  Brandmingo Media Private Limited
                </span>
                .
              </p>

              <p
                className={`transition-all duration-1000 ease-out delay-700 ${
                  isVisible
                    ? "transform translate-x-0 opacity-100"
                    : "transform -translate-x-16 opacity-0"
                }`}
              >
                With{" "}
                <span className="text-cyan-400 font-semibold">1 Year</span>{" "}
                of real-world industry experience, I have worked on
                production-level projects, collaborated with cross-functional
                teams, and delivered reliable digital solutions for businesses.
              </p>

              <p
                className={`transition-all duration-1000 ease-out delay-900 ${
                  isVisible
                    ? "transform translate-x-0 opacity-100"
                    : "transform -translate-x-16 opacity-0"
                }`}
              >
                Alongside MERN development, I also have hands-on experience with{" "}
                <span className="text-green-400 font-semibold">Shopify</span>{" "}
                and{" "}
                <span className="text-green-400 font-semibold">WordPress</span>,
                creating modern, responsive, and conversion-focused websites.
              </p>
            </div>

            {/* Social Links */}
            <div
              className={`pt-6 transition-all duration-1000 ease-out delay-1100 ${
                isVisible
                  ? "transform translate-x-0 opacity-100"
                  : "transform -translate-x-16 opacity-0"
              }`}
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                Connect With Me
              </h3>
              <p className="text-gray-400 mb-4 text-sm">
                Let's build something amazing together
              </p>

              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:border-purple-500 ${social.color}`}
                    style={{ animationDelay: `${1300 + index * 100}ms` }}
                  >
                    <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {social.icon}
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Skills & Visual */}
          <div
            className={`transition-all duration-1200 ease-out delay-600 ${
              isVisible
                ? "transform translate-x-0 opacity-100"
                : "transform translate-x-16 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-500">
                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                <div className="relative z-10 space-y-6">
                  {/* Profile Section */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center text-3xl font-bold">
                      PG
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Pradeep Gaud</h3>
                      <p className="text-purple-400 text-sm">
                        Full Stack Developer
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                      Tech Stack
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {skills.map((skill, index) => (
                        <div
                          key={index}
                          className="group relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-lg p-3 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`}
                          ></div>
                          <div className="relative flex items-center gap-2">
                            <div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                            ></div>
                            <span className="text-sm font-medium">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience Highlight */}
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-yellow-400 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">
                          Currently Working At
                        </h4>
                        <p className="text-purple-400 font-semibold">
                          Brandmingo Media Pvt. Ltd.
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Building production-level solutions
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Code Elements */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-3 shadow-lg shadow-purple-500/50 animate-float">
                    <Code2 className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Floating Skill Badges */}
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float">
                React Expert
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float-delayed">
                MERN Stack
              </div>
            </div>
          </div>
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

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
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
      `}</style>
    </section>
  );
}

export default About;
