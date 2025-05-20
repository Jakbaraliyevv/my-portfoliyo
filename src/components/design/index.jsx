import { useState, useEffect } from "react";
import { Laptop, BookOpen, Star } from "lucide-react";
import myImage from "../../assets/my-img.jpg";

export default function PortfolioHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [typing, setTyping] = useState("");
  const textToType = "Azziz Jakbaraliyev";
  const purpleText = "Front-End Developer  ";
  const endText = "...";

  useEffect(() => {
    setIsVisible(true);
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < textToType.length) {
        setTyping((prev) => prev + textToType.charAt(i));
        i++;
        console.log(
          "Current text:",
          typing,
          "Adding:",
          textToType.charAt(i - 1)
        );
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden ">
      <div
        className={`relative flex flex-col md:flex-row items-center justify-center gap-16 transition-all duration-1000 w-full max-w-6xl px-8 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="relative mb-12 md:mb-0 z-10">
          <div className="w-57 h-57 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full overflow-hidden flex items-end justify-center border-2 border-purple-500 shadow-lg shadow-purple-500/30">
            <div className="w-full h-full">
              <img
                src={myImage}
                alt="My Profile"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-40 h-24 bg-gray-300 rounded-t-lg flex items-center justify-center border border-gray-400 shadow-md">
              <div className="w-36 h-20 bg-gray-800 rounded">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-white text-xs opacity-80">
                    <Laptop size={28} className="text-blue-200 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-44 h-3 bg-gray-400 rounded-b-lg shadow-lg"></div>
          </div>

          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white px-5 py-3 rounded-lg text-base flex items-center shadow-xl z-20">
            <span className="font-medium">I am </span>
            <span className="text-purple-600 ml-1 font-bold">Aziz</span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
          </div>
        </div>

        <div className="w-[80%] text-center md:text-left z-10">
          <h1 className="text-5xl md:text-[75px] font-bold text-white mb-4 tracking-tight leading-tight">
            {typing}
            <span className="text-purple-700"> {purpleText}</span>
            <span className="text-white">{endText}</span>
          </h1>

          <div className="mt-8 flex gap-6 justify-center md:justify-start">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50">
              <BookOpen size={20} />
              <span className="font-semibold text-lg">GitHub</span>
            </button>
            <button className="bg-transparent border-2 border-purple-500 text-purple-300 hover:text-white px-8 py-3 rounded-lg flex items-center gap-3 transition-all transform hover:scale-105 hover:bg-purple-900/30">
              <Star size={20} />
              <span className="font-semibold text-lg">Telegram</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating dots */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-green-400 opacity-60 animate-pulse"></div>
      <div className="absolute top-3/4 left-2/3 w-3 h-3 rounded-full bg-purple-400 opacity-50 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/6 w-2 h-2 rounded-full bg-blue-400 opacity-70 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-4 h-4 rounded-full bg-purple-300 opacity-40 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/5 w-2 h-2 rounded-full bg-teal-400 opacity-60 animate-pulse"></div>
    </div>
  );
}
