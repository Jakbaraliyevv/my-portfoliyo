import { useState, useEffect, useRef } from "react";
import { Laptop } from "lucide-react";
import { GithubOutlined } from "@ant-design/icons";
import { BsTelegram } from "react-icons/bs";
import myImage from "../../assets/my-img.jpg";

export default function PortfolioHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [typing, setTyping] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const textToType = "Aziz Jakbaraliyev";
  const purpleText = "Front-End Developer  ";
  const endText = "...";
  const typingRef = useRef("");

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    let i = 0;
    typingRef.current = "";

    const typeInterval = setInterval(() => {
      if (i < textToType.length) {
        typingRef.current += textToType.charAt(i);
        setTyping(typingRef.current);
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  const getTitleFontSize = () => {
    if (windowWidth <= 320) return "text-2xl";
    if (windowWidth <= 480) return "text-3xl";
    if (windowWidth <= 768) return "text-4xl";
    if (windowWidth <= 1024) return "text-5xl";
    return "text-6xl";
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className={`relative flex flex-col items-center md:flex-row md:items-center justify-center gap-6 lg:gap-16 xl:gap-24 transition-all duration-1000 w-full max-w-7xl px-4 sm:px-8 lg:px-12 z-10 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="relative mb-8 md:mb-0 mt-12 sm:mt-0">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-96 lg:h-96 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full overflow-hidden flex items-end justify-center border-2 border-purple-500 shadow-lg shadow-purple-500/30">
            <div className="w-full h-full">
              <img
                src={myImage}
                alt="My Profile"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div
            className={`absolute -bottom-6 sm:-bottom-8 lg:-bottom-10 left-1/2 transform -translate-x-1/2 ${
              windowWidth <= 320 ? "scale-75" : "scale-100"
            }`}
          >
            <div className="w-32 sm:w-40 lg:w-48 h-16 sm:h-24 lg:h-28 bg-gray-300 rounded-t-lg flex items-center justify-center border border-gray-400 shadow-md">
              <div className="w-28 sm:w-36 lg:w-44 h-12 sm:h-20 lg:h-24 bg-gray-800 rounded">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-white text-xs opacity-80">
                    <Laptop
                      size={
                        windowWidth <= 320 ? 20 : windowWidth <= 768 ? 28 : 32
                      }
                      className="text-blue-200 animate-pulse"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-36 sm:w-44 lg:w-52 h-2 sm:h-3 lg:h-4 bg-gray-400 rounded-b-lg shadow-lg"></div>
          </div>

          <div
            className={`absolute -top-8 sm:-top-10 lg:-top-12 left-1/2 transform -translate-x-1/2 bg-white px-3 sm:px-5 lg:px-6 py-2 sm:py-3 lg:py-4 rounded-lg text-xs sm:text-base lg:text-lg flex items-center shadow-xl z-20 ${
              windowWidth <= 320 ? "text-xs" : ""
            }`}
          >
            <span className="font-medium">I am </span>
            <span className="text-purple-600 ml-1 font-bold">Aziz</span>
            <div className="absolute -bottom-2 lg:-bottom-3 left-1/2 transform -translate-x-1/2 w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 bg-white rotate-45"></div>
          </div>
        </div>

        <div className="w-full sm:w-[90%]  md:w-[80%] lg:w-[70%] text-center md:text-left z-10 px-4 lg:px-0">
          <h1
            className={`
    text-3xl      
    sm:text-4xl   
    md:text-5xl   
    lg:text-[77px] 
    font-bold text-white 
    mb-4           
    sm:mb-5        
    md:mb-6        
    lg:mb-8        
    xl:mb-10       
    tracking-tight leading-tight
    ${getTitleFontSize()} 
  `}
          >
            {typing}
            <span className="text-purple-700"> {purpleText}</span>
            <span className="text-white">{endText}</span>
          </h1>

          <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center md:justify-start">
            <a
              href="https://github.com/Jakbaraliyevv"
              target="_blank"
              className="w-full sm:w-auto"
            >
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-4 rounded-lg flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50">
                <GithubOutlined className="text-xl sm:text-2xl lg:text-3xl" />
                <span className="font-semibold text-sm sm:text-lg lg:text-xl">
                  GitHub
                </span>
              </button>
            </a>

            <a
              href="https://t.me/Jakbaraliyev29"
              target="_blank"
              className="w-full sm:w-auto"
            >
              <button className="w-full bg-transparent border-2 border-purple-500 text-purple-300 hover:text-white px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-4 rounded-lg flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 transition-all transform hover:scale-105 hover:bg-purple-900/30">
                <BsTelegram
                  size={windowWidth <= 320 ? 18 : windowWidth <= 768 ? 24 : 28}
                />
                <span className="font-semibold text-sm sm:text-lg lg:text-xl">
                  Telegram
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-green-400 opacity-60 animate-pulse"></div>
      <div className="absolute top-3/4 left-2/3 w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-purple-400 opacity-50 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/6 w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-blue-400 opacity-70 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-purple-300 opacity-40 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/5 w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-teal-400 opacity-60 animate-pulse"></div>
    </div>
  );
}
