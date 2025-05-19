import { useState, useEffect } from "react";

import {
  CloudOutlined,
  FireOutlined,
  GlobalOutlined,
  PlayCircleOutlined,
  LinkedinOutlined,
  GithubOutlined,
  EditOutlined,
  DribbbleOutlined,
} from "@ant-design/icons";

export default function SkillsOrbit() {
  const topSkills = [
    {
      name: "HTML",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      name: "CSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
      name: "SASS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
    },
    {
      name: "Tailwind",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    },
    {
      name: "Material-UI",
      icon: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg",
    },
  ];

  const bottomSkills = [
    {
      name: "JavaScript",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      name: "TypeScript",
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    },
    {
      name: "Node.js",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    },
    {
      name: "React",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
  ];

  const leftSideIcons = [
    { name: "LinkedIn", icon: <LinkedinOutlined /> },
    { name: "GitHub", icon: <GithubOutlined /> },
    { name: "CodePen", icon: <EditOutlined /> }, // CodePen uchun eng yaqin o‘xshashi
    { name: "Dribbble", icon: <DribbbleOutlined /> },
  ];

  const rightSideIcons = [
    { name: "Vercel", icon: <PlayCircleOutlined /> }, // "Deploy/start" ma'nosida
    { name: "Netlify", icon: <GlobalOutlined /> }, // "Global hosting" ramzi
    { name: "Firebase", icon: <FireOutlined /> }, // "Fire" belgisi bilan
    { name: "AWS", icon: <CloudOutlined /> }, // "Cloud services" ramzi
  ];

  const [rotation, setRotation] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setRotation((prev) => (prev + 0.1) % 360);
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full  bg-black text-white py-[120px]">
      {/* Header text */}
      <h1 className="text-[40px] font-bold mb-[60px]  text-center ">Skills</h1>

      {/* Styling for animations */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes glow {
          0% {
            box-shadow: 0 0 20px 5px rgba(159, 122, 234, 0.6);
          }
          50% {
            box-shadow: 0 0 30px 8px rgba(159, 122, 234, 0.8);
          }
          100% {
            box-shadow: 0 0 20px 5px rgba(159, 122, 234, 0.6);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-15px);
          }
        }
      `}</style>

      <div className="relative w-full max-w-4xl h-96 mt-[40px]">
        <div className="absolute top-0 left-0 w-full flex justify-center">
          {topSkills.map((skill, index) => {
            const position = index - (topSkills.length - 1) / 2;
            const isHovered = hoveredSkill === `top-${index}`;
            return (
              <div
                key={skill.name}
                className="absolute flex flex-col items-center"
                style={{
                  top: "0px",
                  left: `calc(50% + ${position * 85}px)`,
                  transform: `translateY(${
                    Math.sin((rotation * Math.PI) / 180) * 12
                  }px)`,
                  transition: "transform 0.5s ease-out, opacity 0.3s ease",
                  zIndex: isHovered ? 50 : 10,
                }}
                onMouseEnter={() => setHoveredSkill(`top-${index}`)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-opacity-40 bg-purple-900 shadow-lg shadow-purple-500/50"
                  style={{
                    boxShadow: isHovered
                      ? "0 0 25px 8px rgba(159, 122, 234, 0.8)"
                      : "0 0 18px 3px rgba(138, 43, 226, 0.5)",
                    transform: isHovered ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    animation: "pulse 3s infinite",
                  }}
                >
                  {/* <span className="text-2xl">{skill.icon}</span> */}
                  <img src={skill.icon} className="w-[50px] h-[55px]" alt="" />
                </div>

                <span className="mt-2 text-sm font-medium bg-purple-900 bg-opacity-80 px-3 py-1 rounded-full text-purple-100 shadow-md shadow-purple-900/30">
                  {skill.name}
                </span>

                <div
                  className="absolute w-1 h-40 bg-gradient-to-b from-purple-600 to-transparent"
                  style={{
                    top: "100%",
                    opacity: 0.7,
                    left: "50%",
                    transform: "translateX(-50%)",
                    filter: "blur(0.5px)",
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Center icon with enhanced purple glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex items-center justify-center">
            {/* Animated outer glowing rings */}
            <div
              className="absolute w-48 h-48 rounded-full bg-purple-800 opacity-15 animate-pulse"
              style={{
                filter: "blur(10px)",
                animation: "pulse 4s infinite ease-in-out",
              }}
            ></div>
            <div
              className="absolute w-40 h-40 rounded-full bg-purple-700 opacity-20 animate-pulse"
              style={{
                animationDelay: "0.5s",
                filter: "blur(8px)",
                animation: "pulse 3s infinite ease-in-out",
              }}
            ></div>
            <div
              className="absolute w-36 h-36 rounded-full bg-purple-600 opacity-25"
              style={{
                filter: "blur(5px)",
                animation: "pulse 2s infinite ease-in-out",
              }}
            ></div>

            {/* Main circle */}
            <div
              className="w-28 h-28 rounded-full bg-purple-900 flex items-center justify-center z-10"
              style={{
                boxShadow:
                  "0 0 30px 10px rgba(159, 122, 234, 0.7), inset 0 0 20px rgba(255, 255, 255, 0.2)",
                animation: "glow 3s infinite ease-in-out",
              }}
            >
              <span
                className="text-white text-5xl font-light"
                style={{ textShadow: "0 0 15px rgba(255, 255, 255, 0.9)" }}
              >
                Σ
              </span>
            </div>

            {/* Glowing rays - more sophisticated */}
            <div className="absolute w-full h-full">
              {[...Array(48)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 bg-gradient-to-b from-purple-500 to-transparent"
                  style={{
                    width: i % 6 === 0 ? "3px" : i % 3 === 0 ? "2px" : "1px",
                    height: 250 + (i % 5) * 30,
                    opacity: 0.05 + (i % 5) * 0.02,
                    transform: `translateX(-50%) rotate(${i * 7.5}deg)`,
                    transformOrigin: "top",
                    filter: "blur(1px)",
                    animation: `pulse ${4 + (i % 3)}s infinite ease-in-out`,
                  }}
                ></div>
              ))}
            </div>

            {/* Orbit paths */}
            <div
              className="absolute w-full h-full rounded-full border border-purple-800 opacity-20"
              style={{
                transform: "scale(2.2, 0.9)",
                animation: "pulse 8s infinite ease-in-out",
              }}
            ></div>
            <div
              className="absolute w-full h-full rounded-full border border-purple-700 opacity-15"
              style={{
                transform: "scale(2.4, 1)",
                animation: "pulse 12s infinite ease-in-out",
                animationDelay: "1s",
              }}
            ></div>
            <div
              className="absolute w-full h-full rounded-full border border-purple-600 opacity-10"
              style={{
                transform: "scale(2.6, 1.1)",
                animation: "pulse 16s infinite ease-in-out",
                animationDelay: "2s",
              }}
            ></div>
          </div>
        </div>

        {/* Bottom row of skills */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center">
          {bottomSkills.map((skill, index) => {
            const position = index - (bottomSkills.length - 1) / 2;
            const isHovered = hoveredSkill === `bottom-${index}`;
            return (
              <div
                key={skill.name}
                className="absolute flex flex-col items-center"
                style={{
                  bottom: "0px",
                  left: `calc(50% + ${position * 85}px)`,
                  transform: `translateY(${
                    Math.sin(((rotation + 180) * Math.PI) / 180) * 12
                  }px)`,
                  transition: "transform 0.5s ease-out, opacity 0.3s ease",
                  zIndex: isHovered ? 50 : 10,
                }}
                onMouseEnter={() => setHoveredSkill(`bottom-${index}`)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div
                  className="absolute w-1 h-40 bg-gradient-to-t from-purple-600 to-transparent"
                  style={{
                    bottom: "100%",
                    opacity: 0.7,
                    left: "50%",
                    transform: "translateX(-50%)",
                    filter: "blur(0.5px)",
                  }}
                ></div>

                <div
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-opacity-40 bg-purple-900 shadow-lg shadow-purple-500/50"
                  style={{
                    boxShadow: isHovered
                      ? "0 0 25px 8px rgba(159, 122, 234, 0.8)"
                      : "0 0 18px 3px rgba(138, 43, 226, 0.5)",
                    transform: isHovered ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    animation: "pulse 3s infinite",
                  }}
                >
                  {/* <span className="text-2xl">{skill.icon}</span> */}
                  <img src={skill.icon} className="w-[40px] h-[45px]" alt="" />
                </div>

                <span className="mt-2 text-sm font-medium bg-purple-900 bg-opacity-80 px-3 py-1 rounded-full text-purple-100 shadow-md shadow-purple-900/30">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Left side icons */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <div className="relative">
            {leftSideIcons.map((icon, i) => (
              <div
                key={`left-${i}`}
                className="absolute w-14 h-14 rounded-full bg-opacity-30 bg-purple-900 flex items-center justify-center"
                style={{
                  left: i * 40,
                  transform: `translateY(${
                    Math.sin(((rotation + i * 45) * Math.PI) / 180) * 20
                  }px)`,
                  opacity: 0.8 - i * 0.1,
                  boxShadow: "0 0 15px 2px rgba(138, 43, 226, 0.4)",
                  transition: "transform 0.3s ease",
                  animation: `float ${
                    3 + i * 0.5
                  }s infinite ease-in-out alternate`,
                }}
              >
                <span className="text-2xl">{icon.icon}</span>
                <span className="absolute -bottom-6 text-xs font-medium bg-purple-900 bg-opacity-70 px-2 py-0.5 rounded-full text-purple-100">
                  {icon.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side icons */}
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <div className="relative">
            {rightSideIcons.map((icon, i) => (
              <div
                key={`right-${i}`}
                className="absolute w-14 h-14 rounded-full bg-opacity-30 bg-purple-900 flex items-center justify-center"
                style={{
                  right: i * 40,
                  transform: `translateY(${
                    Math.sin(((rotation + i * 45 + 90) * Math.PI) / 180) * 20
                  }px)`,
                  opacity: 0.8 - i * 0.1,
                  boxShadow: "0 0 15px 2px rgba(138, 43, 226, 0.4)",
                  transition: "transform 0.3s ease",
                  animation: `float ${
                    3 + i * 0.5
                  }s infinite ease-in-out alternate-reverse`,
                }}
              >
                <span className="text-2xl">{icon.icon}</span>
                <span className="absolute -bottom-6 text-xs font-medium bg-purple-900 bg-opacity-70 px-2 py-0.5 rounded-full text-purple-100">
                  {icon.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
