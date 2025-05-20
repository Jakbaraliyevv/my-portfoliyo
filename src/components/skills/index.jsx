// import { useState, useEffect } from "react";
// export default function EnhancedSkillsOrbit() {
//   const [rotation, setRotation] = useState(0);
//   const [hoveredSkill, setHoveredSkill] = useState(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   const topSkills = [
//     {
//       name: "HTML",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
//     },
//     {
//       name: "CSS",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
//     },
//     {
//       name: "SASS",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
//     },
//     {
//       name: "Bootstrap",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
//     },
//     {
//       name: "Material-UI",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
//     },
//   ];

//   const bottomSkills = [
//     {
//       name: "JavaScript",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
//     },
//     {
//       name: "TypeScript",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
//     },
//     {
//       name: "Node.js",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//     },
//     {
//       name: "Next.js",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
//     },
//     // {
//     //   name: "React",
//     //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//     // },
//     {
//       name: "Vercel",
//       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setRotation((prev) => (prev + 0.1) % 360);
//     }, 50);

//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (isHovering) {
//         setMousePosition({
//           x: (e.clientX / window.innerWidth) * 2 - 1,
//           y: (e.clientY / window.innerHeight) * 2 - 1,
//         });
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, [isHovering]);

//   return (
//     <div
//       className="flex flex-col items-center justify-center w-full text-white py-20 relative overflow-hidden"
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//       style={{
//         background: "linear-gradient(to bottom, #0f0514, #1a0933, #140726)",
//         minHeight: "800px",
//       }}
//     >
//       {/* Background stars */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(100)].map((_, i) => (
//           <div
//             key={`star-${i}`}
//             className="absolute rounded-full bg-white"
//             style={{
//               width: Math.random() * 3 + 1 + "px",
//               height: Math.random() * 3 + 1 + "px",
//               top: Math.random() * 100 + "%",
//               left: Math.random() * 100 + "%",
//               opacity: Math.random() * 0.7 + 0.3,
//               animation: `twinkle ${
//                 Math.random() * 5 + 3
//               }s infinite ease-in-out alternate`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Styling for animations */}
//       <style jsx>{`
//         @keyframes pulse {
//           0% {
//             opacity: 0.7;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 1;
//             transform: scale(1.05);
//           }
//           100% {
//             opacity: 0.7;
//             transform: scale(1);
//           }
//         }

//         @keyframes glow {
//           0% {
//             box-shadow: 0 0 25px 8px rgba(159, 122, 234, 0.6);
//           }
//           50% {
//             box-shadow: 0 0 40px 12px rgba(159, 122, 234, 0.8);
//           }
//           100% {
//             box-shadow: 0 0 25px 8px rgba(159, 122, 234, 0.6);
//           }
//         }

//         @keyframes float {
//           0% {
//             transform: translateY(0px);
//           }
//           100% {
//             transform: translateY(-18px);
//           }
//         }

//         @keyframes twinkle {
//           0% {
//             opacity: 0.3;
//           }
//           100% {
//             opacity: 1;
//           }
//         }

//         @keyframes orbit {
//           0% {
//             transform: rotateZ(0deg);
//           }
//           100% {
//             transform: rotateZ(360deg);
//           }
//         }

//         @keyframes particle {
//           0% {
//             transform: translateY(0) translateX(0);
//             opacity: 0;
//           }
//           25% {
//             opacity: 1;
//           }
//           75% {
//             opacity: 0.5;
//           }
//           100% {
//             transform: translateY(-100px) translateX(50px);
//             opacity: 0;
//           }
//         }
//       `}</style>

//       {/* Header text with animated gradient */}
//       <div className="relative mb-16 z-10">
//         <h1 className="text-5xl font-bold text-center">
//           <span className="inline-block relative">
//             <span className="relative z-10">Skills & Expertise</span>
//             <span
//               className="absolute -inset-1 blur-lg bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-600 opacity-70"
//               style={{ animation: "pulse 3s infinite" }}
//             ></span>
//           </span>
//         </h1>
//         <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto mt-4"></div>
//       </div>

//       {/* Main orbit container */}
//       <div
//         className="relative w-full h-[600px] max-w-6xl"
//         style={{
//           perspective: "1000px",
//           transformStyle: "preserve-3d",
//         }}
//       >
//         {/* 3D Orbital Ring - moved to left side */}
//         <div
//           className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]"
//           style={{
//             transformStyle: "preserve-3d",
//             transform: `rotateX(70deg) rotateY(${rotation / 2}deg)`,
//           }}
//         >
//           {/* Orbital rings */}
//           {[...Array(3)].map((_, i) => (
//             <div
//               key={`ring-${i}`}
//               className="absolute top-1/2 left-1/2 rounded-full border border-purple-600"
//               style={{
//                 width: `${480 - i * 40}px`,
//                 height: `${480 - i * 40}px`,
//                 transform: "translate(-50%, -50%)",
//                 opacity: 0.4 - i * 0.1,
//                 boxShadow: `0 0 ${15 - i * 3}px rgba(159, 122, 234, ${
//                   0.3 - i * 0.05
//                 })`,
//               }}
//             />
//           ))}

//           {[...Array(24)].map((_, i) => (
//             <div
//               key={`particle-${i}`}
//               className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-purple-400"
//               style={{
//                 transform: `translate(-50%, -50%) rotate(${
//                   i * 15
//                 }deg) translateX(${220 + (i % 3) * 25}px)`,
//                 opacity: 0.6,
//                 boxShadow: "0 0 5px 2px rgba(159, 122, 234, 0.6)",
//                 animation: `pulse ${2 + (i % 3)}s infinite ease-in-out`,
//               }}
//             />
//           ))}
//         </div>

//         <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-20">
//           <div className="relative flex items-center justify-center">
//             <div
//               className="absolute w-64 h-64 rounded-full bg-purple-800 opacity-20"
//               style={{
//                 filter: "blur(15px)",
//                 animation: "pulse 4s infinite ease-in-out",
//               }}
//             />
//             <div
//               className="absolute w-56 h-56 rounded-full bg-purple-700 opacity-25"
//               style={{
//                 filter: "blur(12px)",
//                 animation: "pulse 3s infinite ease-in-out",
//                 animationDelay: "0.5s",
//               }}
//             />
//             <div
//               className="absolute w-48 h-48 rounded-full bg-purple-600 opacity-30"
//               style={{
//                 filter: "blur(9px)",
//                 animation: "pulse 2s infinite ease-in-out",
//               }}
//             />

//             {/* <div
//               className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-900 to-fuchsia-800 flex items-center justify-center z-10"
//               style={{
//                 boxShadow:
//                   "0 0 40px 12px rgba(159, 122, 234, 0.7), inset 0 0 25px rgba(255, 255, 255, 0.2)",
//                 animation: "glow 3s infinite ease-in-out",
//                 transform: isHovering
//                   ? `translate(${mousePosition.x * 5}px, ${
//                       mousePosition.y * 5
//                     }px)`
//                   : "none",
//                 transition: "transform 0.3s ease-out",
//               }}
//             >
//               <span
//                 className="w-32 h-32 overflow-hidden rounded-full flex items-center justify-center"
//                 style={{
//                   border: "3px solid rgba(255, 255, 255, 0.2)",
//                   boxShadow: "inset 0 0 15px rgba(255, 255, 255, 0.3)",
//                 }}
//               >
//                 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="Profile" className="w-[60%] " />
//               </span>
//             </div> */}

//             <div
//               className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-900 to-fuchsia-800 flex items-center justify-center z-10"
//               style={{
//                 boxShadow:
//                   "0 0 40px 12px rgba(159, 122, 234, 0.7), inset 0 0 25px rgba(255, 255, 255, 0.2)",
//                 animation: "glow 3s infinite ease-in-out",
//                 transform: isHovering
//                   ? `translate(${mousePosition.x * 5}px, ${
//                       mousePosition.y * 5
//                     }px)`
//                   : "none",
//                 transition: "transform 0.3s ease-out",
//               }}
//             >
//               <span
//                 className="w-32 h-32 overflow-hidden rounded-full flex items-center justify-center"
//                 style={{
//                   border: "3px solid rgba(255, 255, 255, 0.2)",
//                   boxShadow: "inset 0 0 15px rgba(255, 255, 255, 0.3)",
//                   animation: "spin 6s linear infinite", // Aylanish animatsiyasi
//                 }}
//               >
//                 <img
//                   src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
//                   alt="Profile"
//                   className="w-[60%]"
//                 />
//               </span>
//             </div>
//             <div className="absolute w-full h-full">
//               {[...Array(36)].map((_, i) => (
//                 <div
//                   key={`ray-${i}`}
//                   className="absolute top-1/2 left-1/2 bg-gradient-to-b from-purple-500 to-transparent"
//                   style={{
//                     width: i % 6 === 0 ? "3px" : i % 3 === 0 ? "2px" : "1px",
//                     height: 250 + (i % 5) * 50,
//                     opacity: 0.05 + (i % 5) * 0.02,
//                     transform: `translate(-50%, -50%) rotate(${i * 10}deg)`,
//                     transformOrigin: "center",
//                     filter: "blur(1px)",
//                     animation: `pulse ${4 + (i % 3)}s infinite ease-in-out`,
//                   }}
//                 />
//               ))}
//             </div>

//             {[...Array(10)].map((_, i) => (
//               <div
//                 key={`float-particle-${i}`}
//                 className="absolute rounded-full bg-purple-400"
//                 style={{
//                   width: 3 + (i % 3) * 2 + "px",
//                   height: 3 + (i % 3) * 2 + "px",
//                   top: "50%",
//                   left: "50%",
//                   opacity: 0,
//                   boxShadow: "0 0 5px 2px rgba(159, 122, 234, 0.6)",
//                   animation: `particle ${2 + i * 0.5}s infinite linear`,
//                   animationDelay: `${i * 0.3}s`,
//                 }}
//               />
//             ))}
//           </div>
//         </div>

//         <div className="absolute top-16 right-0 w-2/3 flex justify-center">
//           {topSkills.map((skill, index) => {
//             const position = index - (topSkills.length - 1) / 2;
//             const isHovered = hoveredSkill === `top-${index}`;

//             return (
//               <div
//                 key={skill.name}
//                 className="absolute flex flex-col items-center"
//                 style={{
//                   left: `calc(50% + ${position * 110}px)`,
//                   transform: `translateY(${
//                     Math.sin((rotation * Math.PI) / 180 + index * 0.5) * 15
//                   }px)`,
//                   transition: "transform 0.5s ease-out, opacity 0.3s ease",
//                   zIndex: isHovered ? 50 : 10,
//                 }}
//                 onMouseEnter={() => setHoveredSkill(`top-${index}`)}
//                 onMouseLeave={() => setHoveredSkill(null)}
//               >
//                 <div
//                   className="flex items-center justify-center w-20 h-20 rounded-full bg-purple-900 bg-opacity-40"
//                   style={{
//                     boxShadow: isHovered
//                       ? "0 0 30px 10px rgba(159, 122, 234, 0.8)"
//                       : "0 0 22px 4px rgba(138, 43, 226, 0.5)",
//                     transform: isHovered ? "scale(1.25)" : "scale(1)",
//                     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                     animation: "pulse 3s infinite",
//                     animationDelay: `${index * 0.2}s`,
//                   }}
//                 >
//                   <img
//                     src={skill.icon}
//                     className="w-12 h-12"
//                     alt={skill.name}
//                   />
//                 </div>

//                 <span
//                   className={`mt-3 text-sm font-medium bg-purple-900 bg-opacity-80 px-3 py-1 rounded-full text-purple-100 shadow-md`}
//                   style={{
//                     textShadow: isHovered
//                       ? "0 0 8px rgba(255, 255, 255, 0.6)"
//                       : "none",
//                     transform: isHovered ? "scale(1.1)" : "scale(1)",
//                     transition: "all 0.3s ease",
//                   }}
//                 >
//                   {skill.name}
//                 </span>

//                 <div
//                   className="absolute w-1 bg-gradient-to-b from-purple-600 to-transparent"
//                   style={{
//                     height: isHovered ? "180px" : "150px",
//                     top: "100%",
//                     opacity: isHovered ? 0.9 : 0.7,
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     filter: "blur(0.5px)",
//                     transition: "all 0.3s ease",
//                   }}
//                 />
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom row of skills with enhanced effects */}
//         <div className="absolute bottom-16 right-0 w-2/3 flex justify-center">
//           {bottomSkills.map((skill, index) => {
//             const position = index - (bottomSkills.length - 1) / 2;
//             const isHovered = hoveredSkill === `bottom-${index}`;

//             return (
//               <div
//                 key={skill.name}
//                 className="absolute flex flex-col items-center"
//                 style={{
//                   left: `calc(50% + ${position * 110}px)`,
//                   transform: `translateY(${
//                     Math.sin(((rotation + 180) * Math.PI) / 180 + index * 0.5) *
//                     15
//                   }px)`,
//                   transition: "transform 0.5s ease-out, opacity 0.3s ease",
//                   zIndex: isHovered ? 50 : 10,
//                 }}
//                 onMouseEnter={() => setHoveredSkill(`bottom-${index}`)}
//                 onMouseLeave={() => setHoveredSkill(null)}
//               >
//                 <div
//                   className="absolute w-1 bg-gradient-to-t from-purple-600 to-transparent"
//                   style={{
//                     height: isHovered ? "180px" : "150px",
//                     bottom: "100%",
//                     opacity: isHovered ? 0.9 : 0.7,
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     filter: "blur(0.5px)",
//                     transition: "all 0.3s ease",
//                   }}
//                 />

//                 <div
//                   className="flex items-center justify-center w-20 h-20 rounded-full bg-purple-900 bg-opacity-40"
//                   style={{
//                     boxShadow: isHovered
//                       ? "0 0 30px 10px rgba(159, 122, 234, 0.8)"
//                       : "0 0 22px 4px rgba(138, 43, 226, 0.5)",
//                     transform: isHovered ? "scale(1.25)" : "scale(1)",
//                     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                     animation: "pulse 3s infinite",
//                     animationDelay: `${index * 0.2}s`,
//                   }}
//                 >
//                   <img
//                     src={skill.icon}
//                     className="w-12 h-12"
//                     alt={skill.name}
//                   />
//                 </div>

//                 <span
//                   className={`mt-3 text-sm font-medium bg-purple-900 bg-opacity-80 px-3 py-1 rounded-full text-purple-100 shadow-md`}
//                   style={{
//                     textShadow: isHovered
//                       ? "0 0 8px rgba(255, 255, 255, 0.6)"
//                       : "none",
//                     transform: isHovered ? "scale(1.1)" : "scale(1)",
//                     transition: "all 0.3s ease",
//                   }}
//                 >
//                   {skill.name}
//                 </span>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";

export default function EnhancedSkillsOrbit() {
  const [rotation, setRotation] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const topSkills = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "SASS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Material-UI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
  ];

  const bottomSkills = [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Vercel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRotation((prev) => (prev + 0.1) % 360);
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isHovering) {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: (e.clientY / window.innerHeight) * 2 - 1,
        });
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [isHovering]);

  return (
    <div
      className="flex flex-col items-center justify-center w-full text-white py-20 relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        background: "linear-gradient(to bottom, #0f0514, #1a0933, #140726)",
        minHeight: isMobile ? "100vh" : "800px",
      }}
    >
      {/* Background stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${
                Math.random() * 5 + 3
              }s infinite ease-in-out alternate`,
            }}
          />
        ))}
      </div>

      {/* Styling for animations */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            opacity: 0.7;
            transform: scale(1);
          }
        }

        @keyframes glow {
          0% {
            box-shadow: 0 0 25px 8px rgba(159, 122, 234, 0.6);
          }
          50% {
            box-shadow: 0 0 40px 12px rgba(159, 122, 234, 0.8);
          }
          100% {
            box-shadow: 0 0 25px 8px rgba(159, 122, 234, 0.6);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-18px);
          }
        }

        @keyframes twinkle {
          0% {
            opacity: 0.3;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes orbit {
          0% {
            transform: rotateZ(0deg);
          }
          100% {
            transform: rotateZ(360deg);
          }
        }

        @keyframes particle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          75% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Mobile styles */
        @media (max-width: 768px) {
          .skill-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 0 20px;
          }

          .skill-group {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 16px;
            margin: 20px 0;
          }

          .skill-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: transform 0.3s ease;
          }

          .skill-item:hover {
            transform: scale(1.1);
          }

          .skill-icon {
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: rgba(138, 75, 226, 0.3);
            box-shadow: 0 0 15px 4px rgba(138, 43, 226, 0.5);
            margin-bottom: 10px;
            animation: pulse 3s infinite;
          }

          .orbit-container {
            position: relative;
            width: 100%;
            max-width: 300px;
            height: 300px;
            margin: 30px auto;
          }
        }
      `}</style>

      {/* Header text with animated gradient */}
      <div className={`relative ${isMobile ? "mb-8" : "mb-16"} z-10`}>
        <h1
          className={`${
            isMobile ? "text-4xl" : "text-5xl"
          } font-bold text-center`}
        >
          <span className="inline-block relative">
            <span className="relative z-10">Skills & Expertise</span>
            <span
              className="absolute -inset-1 blur-lg bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-600 opacity-70"
              style={{ animation: "pulse 3s infinite" }}
            ></span>
          </span>
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto mt-4"></div>
      </div>

      {/* Desktop vs Mobile View */}
      {!isMobile ? (
        // DESKTOP VIEW - Keep exactly as it was
        <div
          className="relative w-full h-[600px] max-w-6xl"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
        >
          {/* 3D Orbital Ring - moved to left side */}
          <div
            className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateX(70deg) rotateY(${rotation / 2}deg)`,
            }}
          >
            {/* Orbital rings */}
            {[...Array(3)].map((_, i) => (
              <div
                key={`ring-${i}`}
                className="absolute top-1/2 left-1/2 rounded-full border border-purple-600"
                style={{
                  width: `${480 - i * 40}px`,
                  height: `${480 - i * 40}px`,
                  transform: "translate(-50%, -50%)",
                  opacity: 0.4 - i * 0.1,
                  boxShadow: `0 0 ${15 - i * 3}px rgba(159, 122, 234, ${
                    0.3 - i * 0.05
                  })`,
                }}
              />
            ))}

            {[...Array(24)].map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-purple-400"
                style={{
                  transform: `translate(-50%, -50%) rotate(${
                    i * 15
                  }deg) translateX(${220 + (i % 3) * 25}px)`,
                  opacity: 0.6,
                  boxShadow: "0 0 5px 2px rgba(159, 122, 234, 0.6)",
                  animation: `pulse ${2 + (i % 3)}s infinite ease-in-out`,
                }}
              />
            ))}
          </div>

          <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative flex items-center justify-center">
              <div
                className="absolute w-64 h-64 rounded-full bg-purple-800 opacity-20"
                style={{
                  filter: "blur(15px)",
                  animation: "pulse 4s infinite ease-in-out",
                }}
              />
              <div
                className="absolute w-56 h-56 rounded-full bg-purple-700 opacity-25"
                style={{
                  filter: "blur(12px)",
                  animation: "pulse 3s infinite ease-in-out",
                  animationDelay: "0.5s",
                }}
              />
              <div
                className="absolute w-48 h-48 rounded-full bg-purple-600 opacity-30"
                style={{
                  filter: "blur(9px)",
                  animation: "pulse 2s infinite ease-in-out",
                }}
              />

              <div
                className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-900 to-fuchsia-800 flex items-center justify-center z-10"
                style={{
                  boxShadow:
                    "0 0 40px 12px rgba(159, 122, 234, 0.7), inset 0 0 25px rgba(255, 255, 255, 0.2)",
                  animation: "glow 3s infinite ease-in-out",
                  transform: isHovering
                    ? `translate(${mousePosition.x * 5}px, ${
                        mousePosition.y * 5
                      }px)`
                    : "none",
                  transition: "transform 0.3s ease-out",
                }}
              >
                <span
                  className="w-32 h-32 overflow-hidden rounded-full flex items-center justify-center"
                  style={{
                    border: "3px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "inset 0 0 15px rgba(255, 255, 255, 0.3)",
                    animation: "spin 6s linear infinite",
                  }}
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="Profile"
                    className="w-[60%]"
                  />
                </span>
              </div>
              <div className="absolute w-full h-full">
                {[...Array(36)].map((_, i) => (
                  <div
                    key={`ray-${i}`}
                    className="absolute top-1/2 left-1/2 bg-gradient-to-b from-purple-500 to-transparent"
                    style={{
                      width: i % 6 === 0 ? "3px" : i % 3 === 0 ? "2px" : "1px",
                      height: 250 + (i % 5) * 50,
                      opacity: 0.05 + (i % 5) * 0.02,
                      transform: `translate(-50%, -50%) rotate(${i * 10}deg)`,
                      transformOrigin: "center",
                      filter: "blur(1px)",
                      animation: `pulse ${4 + (i % 3)}s infinite ease-in-out`,
                    }}
                  />
                ))}
              </div>

              {[...Array(10)].map((_, i) => (
                <div
                  key={`float-particle-${i}`}
                  className="absolute rounded-full bg-purple-400"
                  style={{
                    width: 3 + (i % 3) * 2 + "px",
                    height: 3 + (i % 3) * 2 + "px",
                    top: "50%",
                    left: "50%",
                    opacity: 0,
                    boxShadow: "0 0 5px 2px rgba(159, 122, 234, 0.6)",
                    animation: `particle ${2 + i * 0.5}s infinite linear`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="absolute top-16 right-0 w-2/3 flex justify-center">
            {topSkills.map((skill, index) => {
              const position = index - (topSkills.length - 1) / 2;
              const isHovered = hoveredSkill === `top-${index}`;

              return (
                <div
                  key={skill.name}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: `calc(50% + ${position * 110}px)`,
                    transform: `translateY(${
                      Math.sin((rotation * Math.PI) / 180 + index * 0.5) * 15
                    }px)`,
                    transition: "transform 0.5s ease-out, opacity 0.3s ease",
                    zIndex: isHovered ? 50 : 10,
                  }}
                  onMouseEnter={() => setHoveredSkill(`top-${index}`)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div
                    className="flex items-center justify-center w-20 h-20 rounded-full bg-purple-900 bg-opacity-40"
                    style={{
                      boxShadow: isHovered
                        ? "0 0 30px 10px rgba(159, 122, 234, 0.8)"
                        : "0 0 22px 4px rgba(138, 43, 226, 0.5)",
                      transform: isHovered ? "scale(1.25)" : "scale(1)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      animation: "pulse 3s infinite",
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <img
                      src={skill.icon}
                      className="w-12 h-12"
                      alt={skill.name}
                    />
                  </div>

                  <span
                    className={`mt-3 text-sm font-medium bg-purple-900 bg-opacity-80 px-3 py-1 rounded-full text-purple-100 shadow-md`}
                    style={{
                      textShadow: isHovered
                        ? "0 0 8px rgba(255, 255, 255, 0.6)"
                        : "none",
                      transform: isHovered ? "scale(1.1)" : "scale(1)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {skill.name}
                  </span>

                  <div
                    className="absolute w-1 bg-gradient-to-b from-purple-600 to-transparent"
                    style={{
                      height: isHovered ? "180px" : "150px",
                      top: "100%",
                      opacity: isHovered ? 0.9 : 0.7,
                      left: "50%",
                      transform: "translateX(-50%)",
                      filter: "blur(0.5px)",
                      transition: "all 0.3s ease",
                    }}
                  />
                </div>
              );
            })}
          </div>

          <div className="absolute bottom-16 right-0 w-2/3 flex justify-center">
            {bottomSkills.map((skill, index) => {
              const position = index - (bottomSkills.length - 1) / 2;
              const isHovered = hoveredSkill === `bottom-${index}`;

              return (
                <div
                  key={skill.name}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: `calc(50% + ${position * 110}px)`,
                    transform: `translateY(${
                      Math.sin(
                        ((rotation + 180) * Math.PI) / 180 + index * 0.5
                      ) * 15
                    }px)`,
                    transition: "transform 0.5s ease-out, opacity 0.3s ease",
                    zIndex: isHovered ? 50 : 10,
                  }}
                  onMouseEnter={() => setHoveredSkill(`bottom-${index}`)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div
                    className="absolute w-1 bg-gradient-to-t from-purple-600 to-transparent"
                    style={{
                      height: isHovered ? "180px" : "150px",
                      bottom: "100%",
                      opacity: isHovered ? 0.9 : 0.7,
                      left: "50%",
                      transform: "translateX(-50%)",
                      filter: "blur(0.5px)",
                      transition: "all 0.3s ease",
                    }}
                  />

                  <div
                    className="flex items-center justify-center w-20 h-20 rounded-full bg-purple-900 bg-opacity-40"
                    style={{
                      boxShadow: isHovered
                        ? "0 0 30px 10px rgba(159, 122, 234, 0.8)"
                        : "0 0 22px 4px rgba(138, 43, 226, 0.5)",
                      transform: isHovered ? "scale(1.25)" : "scale(1)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      animation: "pulse 3s infinite",
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <img
                      src={skill.icon}
                      className="w-12 h-12"
                      alt={skill.name}
                    />
                  </div>

                  <span
                    className={`mt-3 text-sm font-medium bg-purple-900 bg-opacity-80 px-3 py-1 rounded-full text-purple-100 shadow-md`}
                    style={{
                      textShadow: isHovered
                        ? "0 0 8px rgba(255, 255, 255, 0.6)"
                        : "none",
                      transform: isHovered ? "scale(1.1)" : "scale(1)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        // MOBILE VIEW - Completely different layout
        <div className="skill-container">
          {/* Mobile React Logo */}
          <div className="orbit-container">
            <div className="relative flex items-center justify-center h-full">
              {/* Background circles */}
              <div
                className="absolute w-64 h-64 rounded-full bg-purple-800 opacity-20"
                style={{
                  filter: "blur(15px)",
                  animation: "pulse 4s infinite ease-in-out",
                }}
              />
              <div
                className="absolute w-56 h-56 rounded-full bg-purple-700 opacity-25"
                style={{
                  filter: "blur(12px)",
                  animation: "pulse 3s infinite ease-in-out",
                  animationDelay: "0.5s",
                }}
              />
              <div
                className="absolute w-48 h-48 rounded-full bg-purple-600 opacity-30"
                style={{
                  filter: "blur(9px)",
                  animation: "pulse 2s infinite ease-in-out",
                }}
              />

              {/* React Logo */}
              <div
                className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-900 to-fuchsia-800 flex items-center justify-center z-10"
                style={{
                  boxShadow:
                    "0 0 40px 12px rgba(159, 122, 234, 0.7), inset 0 0 25px rgba(255, 255, 255, 0.2)",
                  animation: "glow 3s infinite ease-in-out",
                }}
              >
                <span
                  className="w-32 h-32 overflow-hidden rounded-full flex items-center justify-center"
                  style={{
                    border: "3px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "inset 0 0 15px rgba(255, 255, 255, 0.3)",
                    animation: "spin 6s linear infinite",
                  }}
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                    className="w-[60%]"
                  />
                </span>
              </div>

              {/* Rays */}
              <div className="absolute w-full h-full">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={`ray-${i}`}
                    className="absolute top-1/2 left-1/2 bg-gradient-to-b from-purple-500 to-transparent"
                    style={{
                      width: i % 5 === 0 ? "3px" : i % 3 === 0 ? "2px" : "1px",
                      height: 150 + (i % 5) * 20,
                      opacity: 0.05 + (i % 5) * 0.02,
                      transform: `translate(-50%, -50%) rotate(${i * 18}deg)`,
                      transformOrigin: "center",
                      filter: "blur(1px)",
                      animation: `pulse ${4 + (i % 3)}s infinite ease-in-out`,
                    }}
                  />
                ))}
              </div>

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={`float-particle-${i}`}
                  className="absolute rounded-full bg-purple-400"
                  style={{
                    width: 3 + (i % 3) * 2 + "px",
                    height: 3 + (i % 3) * 2 + "px",
                    top: "50%",
                    left: "50%",
                    opacity: 0,
                    boxShadow: "0 0 5px 2px rgba(159, 122, 234, 0.6)",
                    animation: `particle ${2 + i * 0.5}s infinite linear`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Mobile Skills Groups */}
          <div className="w-full px-4">
            <h3 className="text-xl font-semibold text-center mt-8 mb-4 text-purple-200">
              <span className="inline-block relative">
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500"></span>
              </span>
            </h3>

            {/* Top Skills */}
            <div className="skill-group">
              {topSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-item"
                  style={{
                    animation: `float ${
                      2 + index * 0.2
                    }s infinite alternate ease-in-out`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div
                    className="skill-icon"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8"
                    />
                  </div>
                  <span className="text-sm font-medium bg-purple-900 bg-opacity-80 px-3 py-1 rounded-full text-purple-100 shadow-md">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-center mt-10 mb-4 text-purple-200">
              <span className="inline-block relative">
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500"></span>
              </span>
            </h3>

            {/* Bottom Skills */}
            <div className="skill-group">
              {bottomSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-item"
                  style={{
                    animation: `float ${
                      2 + index * 0.2
                    }s infinite alternate ease-in-out`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div
                    className="skill-icon"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8"
                    />
                  </div>
                  <span className="text-sm font-medium bg-purple-900 bg-opacity-80 px-3 py-1 rounded-full text-purple-100 shadow-md">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Background particles for mobile */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <div
                key={`mobile-particle-${i}`}
                className="absolute rounded-full bg-purple-400"
                style={{
                  width: 4 + (i % 3) * 2 + "px",
                  height: 4 + (i % 3) * 2 + "px",
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: 0,
                  boxShadow: "0 0 5px 2px rgba(159, 122, 234, 0.6)",
                  animation: `particle ${3 + i * 0.7}s infinite linear`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
