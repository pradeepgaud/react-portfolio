import React from "react";
import { Phone, ArrowUp, Heart, Code } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-black text-white py-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl opacity-25"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side - Created By */}
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-sm">Created By</span>
              <div className="flex items-center gap-2 text-white font-semibold">
                <Code className="w-4 h-4 text-blue-400" />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Pradeep Gaud
                </span>
              </div>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            </div>
          </div>

          {/* Center - Phone Number */}
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-full border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-medium tracking-wider">
                +91 8824626379
              </span>
            </div>
          </div>

          {/* Right Side - Copyright & Scroll to Top */}
          <div className="flex items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-300 text-sm flex items-center gap-1">
              <span>©</span>
              <span>Copyright 2025</span>
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 group"
            >
              <ArrowUp className="w-5 h-5 text-white group-hover:animate-bounce" />
            </button>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
