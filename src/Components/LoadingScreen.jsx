// import React, { useState, useEffect } from "react";
// import { Code2, Zap, Sparkles, Loader2 } from "lucide-react";

// function LoadingScreen() {
//   const [loading, setLoading] = useState(true);
//   const [progress, setProgress] = useState(0);
//   const [currentStep, setCurrentStep] = useState(0);

//   const steps = [
//     { icon: Code2, text: "Loading...", delay: 500 },
//     { icon: Zap, text: "Loading Components...", delay: 800 },
//     { icon: Sparkles, text: "Almost Ready...", delay: 1200 },
//   ];

//   useEffect(() => {
//     // Simulate loading progress
//     const progressInterval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(progressInterval);
//           setTimeout(() => setLoading(false), 500);
//           return 100;
//         }
//         return prev + Math.random() * 15;
//       });
//     }, 100);

//     // Step progression
//     const stepInterval = setInterval(() => {
//       setCurrentStep((prev) => {
//         if (prev >= steps.length - 1) {
//           clearInterval(stepInterval);
//           return prev;
//         }
//         return prev + 1;
//       });
//     }, 800);

//     return () => {
//       clearInterval(progressInterval);
//       clearInterval(stepInterval);
//     };
//   }, []);

//   if (!loading) return null;

//   const CurrentIcon = steps[currentStep]?.icon || Code2;

//   return (
//     <div className="fixed inset-0 z-[10000] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
//         <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float-delayed"></div>
//         <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
//       </div>

//       {/* Grid pattern overlay */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

//       <div className="relative z-10 text-center">
//         {/* Main Loading Icon */}
//         <div className="relative mb-8">
//           {/* Outer rotating ring */}
//           <div className="w-32 h-32 mx-auto relative">
//             <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
//             <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin"></div>

//             {/* Inner icon container */}
//             <div className="absolute inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-sm border border-blue-500/30 flex items-center justify-center">
//               <CurrentIcon
//                 className="w-12 h-12 text-blue-400 animate-pulse"
//                 strokeWidth={1.5}
//               />
//             </div>
//           </div>

//           {/* Floating particles */}
//           <div className="absolute inset-0 pointer-events-none">
//             {[...Array(8)].map((_, i) => (
//               <div
//                 key={i}
//                 className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-ping"
//                 style={{
//                   left: `${50 + Math.cos((i * Math.PI) / 4) * 60}%`,
//                   top: `${50 + Math.sin((i * Math.PI) / 4) * 60}%`,
//                   animationDelay: `${i * 200}ms`,
//                   animationDuration: "2s",
//                 }}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Brand/Title */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-white mb-2">
//             <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//               Portfolio
//             </span>
//           </h1>
//           <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full animate-pulse"></div>
//         </div>

//         {/* Loading Steps */}
//         <div className="mb-8 h-8 flex items-center justify-center">
//           <div className="flex items-center gap-3 text-gray-300">
//             <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
//             <span className="text-sm font-medium animate-pulse">
//               {steps[currentStep]?.text || "Loading..."}
//             </span>
//           </div>
//         </div>

//         {/* Progress Bar */}
//         <div className="w-80 mx-auto mb-6">
//           <div className="flex justify-between text-xs text-gray-400 mb-2">
//             <span>Loading</span>
//             <span>{Math.round(progress)}%</span>
//           </div>
//           <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
//             <div className="relative h-full bg-gray-700 rounded-full">
//               <div
//                 className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
//                 style={{ width: `${Math.min(progress, 100)}%` }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Loading Dots */}
//         <div className="flex justify-center gap-2">
//           {[...Array(3)].map((_, i) => (
//             <div
//               key={i}
//               className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
//               style={{
//                 animationDelay: `${i * 0.2}s`,
//                 animationDuration: "1.4s",
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
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

//         @keyframes shimmer {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(100%);
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
//         .animate-shimmer {
//           animation: shimmer 2s ease-in-out infinite;
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
//       `}</style>
//     </div>
//   );
// }

// export default LoadingScreen;

import React, { useState, useEffect } from "react";
import { Code2, Zap, Sparkles, Loader2, Cpu, Globe } from "lucide-react";

function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  // Steps ko thoda aur detailed banaya hai
  const steps = [
    { icon: Cpu, text: "Initializing Systems...", color: "text-blue-400" },
    { icon: Globe, text: "Connecting to Server...", color: "text-indigo-400" },
    { icon: Zap, text: "Loading Components...", color: "text-purple-400" },
    {
      icon: Sparkles,
      text: "Finalizing Experience...",
      color: "text-pink-400",
    },
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setLoading(false), 800); // Thoda extra delay smooth transition ke liye
          return 100;
        }
        // Smooth incremental logic
        const diff = Math.random() * 10;
        return Math.min(prev + diff, 100);
      });
    }, 150);

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 1200);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, []);

  if (!loading) return null;

  const ActiveStep = steps[currentStep];
  const Icon = ActiveStep.icon;

  return (
    <div className="fixed inset-0 z-[10000] bg-[#030712] flex items-center justify-center overflow-hidden font-sans">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Grid Pattern with Fade */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)]"></div>

      <div className="relative z-10 w-full max-w-md px-6">
        {/* Central Visual Hub */}
        <div className="relative flex justify-center mb-12">
          {/* Pulsing Outer Ring */}
          <div className="absolute w-32 h-32 rounded-full border border-blue-500/20 animate-[ping_3s_linear_infinite]" />

          {/* Rotating Gradient Ring */}
          <div className="relative w-28 h-28 rounded-full p-[2px] bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 animate-spin-slow">
            <div className="w-full h-full rounded-full bg-[#030712] flex items-center justify-center backdrop-blur-xl">
              <Icon
                className={`w-10 h-10 ${ActiveStep.color} transition-all duration-500 transform hover:scale-110`}
                style={{ filter: "drop-shadow(0 0 8px currentColor)" }}
              />
            </div>
          </div>

          {/* Orbiting Orbs */}
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full blur-[1px]"
              style={{
                offsetPath:
                  "path('M 50,0 A 50,50 0 1 1 50,100 A 50,50 0 1 1 50,0')",
                animation: `orbit 4s linear infinite`,
                animationDelay: `-${i * 1.3}s`,
              }}
            />
          ))}
        </div>

        {/* Branding */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-black tracking-tighter text-white mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-gray-400">
              PORTFOLIO
            </span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs font-medium tracking-[0.2em] text-blue-400/60 uppercase">
            <span className="w-8 h-[1px] bg-blue-500/30"></span>
            Creative Developer
            <span className="w-8 h-[1px] bg-blue-500/30"></span>
          </div>
        </div>

        {/* Progress Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-end px-1">
            <div className="flex items-center gap-2 group">
              <Loader2 className="w-3 h-3 animate-spin text-blue-400" />
              <span className="text-xs font-medium text-gray-400 transition-all duration-300">
                {ActiveStep.text}
              </span>
            </div>
            <span className="text-sm font-mono text-blue-400">
              {Math.round(progress)}%
            </span>
          </div>

          {/* Custom Progress Bar */}
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px]">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 rounded-full transition-all duration-500 ease-out relative"
              style={{
                width: `${progress}%`,
                boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
              }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit {
          from {
            offset-distance: 0%;
          }
          to {
            offset-distance: 100%;
          }
        }
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .bg-grid-white {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
}

export default LoadingScreen;
