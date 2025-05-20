// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
// import logo from "../../assets/my_logo2.png";
// import { useState } from "react";

// function Navbar() {
//   const [language, setLanguage] = useState(false);

//   return (
//     <section className="bg-[#1a0b2e] shadow-[0_6px_22px_-3px_rgba(0,0,0,0.1)] top-0 sticky z-50">
//       <div className="w-[90%] py-5 m-auto flex items-center justify-between">
//         <div
//           className="w-[120px] cursor-pointer hover:opacity-80 transition-opacity"
//           onClick={() => scroll.scrollToTop({ duration: 800 })}
//         >
//           <img src={logo} alt="logo" className="w-full h-auto" />
//         </div>

//         <div className="text-[#FFF] text-[19px] font-bold flex items-center gap-[40px]">
//           <ScrollLink
//             className="cursor-pointer relative group"
//             to="about"
//             smooth={true}
//             duration={800}
//             offset={-70}
//           >
//             About
//             <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
//           </ScrollLink>
//           <ScrollLink
//             className="cursor-pointer relative group"
//             to="skills"
//             smooth={true}
//             duration={800}
//             offset={-70}
//           >
//             Skills
//             <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
//           </ScrollLink>
//           <ScrollLink
//             className="cursor-pointer relative group"
//             to="projects"
//             smooth={true}
//             duration={800}
//             offset={-70}
//           >
//             Projects
//             <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
//           </ScrollLink>
//           <ScrollLink
//             className="cursor-pointer relative group"
//             to="contact"
//             smooth={true}
//             duration={800}
//             offset={-70}
//           >
//             Contact
//             <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
//           </ScrollLink>
//         </div>

//         <div className="flex items-center gap-5">
//           <button
//             onClick={() => setLanguage(true)}
//             className={
//               language
//                 ? "text-[19px] w-[60px] h-[30px] font-medium rounded-md text-[#FFF] bg-[#561e8f] flex items-center justify-center transition-colors"
//                 : "text-[#FFF] text-[19px] font-medium transition-colors"
//             }
//           >
//             En
//           </button>
//           <button
//             onClick={() => setLanguage(false)}
//             className={
//               language
//                 ? "text-[#FFF] text-[19px] font-medium transition-colors"
//                 : "text-[19px] w-[60px] h-[30px] font-medium rounded-md text-[#FFF] bg-[#561e8f] flex items-center justify-center transition-colors"
//             }
//           >
//             Uz
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Navbar;

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import logo from "../../assets/my_logo2.png";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [language, setLanguage] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`bg-[#1a0b2e] shadow-[0_6px_22px_-3px_rgba(0,0,0,0.1)] sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="w-[90%] max-w-7xl mx-auto flex items-center justify-between">
        <div
          className="w-[100px] md:w-[120px] cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => {
            scroll.scrollToTop({ duration: 800 });
            handleNavClick();
          }}
        >
          <img src={logo} alt="logo" className="w-full h-auto" />
        </div>

        <button
          className="md:hidden text-white text-2xl z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <ScrollLink
            className="cursor-pointer relative group text-white text-base lg:text-[19px] font-medium"
            to="about"
            smooth={true}
            duration={800}
            offset={-70}
          >
            Men haqimda
            <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </ScrollLink>
          <ScrollLink
            className="cursor-pointer relative group text-white text-base lg:text-[19px] font-medium"
            to="skills"
            smooth={true}
            duration={800}
            offset={-70}
          >
            Ko'nikmalar
            <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </ScrollLink>
          <ScrollLink
            className="cursor-pointer relative group text-white text-base lg:text-[19px] font-medium"
            to="projects"
            smooth={true}
            duration={800}
            offset={-70}
          >
            Loyihalar
            <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </ScrollLink>
          <ScrollLink
            className="cursor-pointer relative group text-white text-base lg:text-[19px] font-medium"
            to="contact"
            smooth={true}
            duration={800}
            offset={-70}
          >
            Bog'lanish
            <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </ScrollLink>
        </nav>

        <div className="hidden md:flex items-center gap-2 ml-4">
          <button
            onClick={() => setLanguage(true)}
            className={`px-3 py-1 rounded-md text-sm md:text-base transition-all duration-300 ${
              language
                ? "text-white bg-[#561e8f]"
                : "text-gray-300 hover:text-white"
            }`}
          >
            En
          </button>
          <span className="text-gray-400">|</span>
          <button
            onClick={() => setLanguage(false)}
            className={`px-3 py-1 rounded-md text-sm md:text-base transition-all duration-300 ${
              !language
                ? "text-white bg-[#561e8f]"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Uz
          </button>
        </div>

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-[#1a0b2e] shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex flex-col h-full pt-20 px-6">
            <nav className="flex flex-col gap-6">
              <ScrollLink
                className="cursor-pointer relative group text-white text-lg font-medium py-2"
                to="about"
                smooth={true}
                duration={800}
                offset={-70}
                onClick={handleNavClick}
              >
                Men haqimda
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </ScrollLink>
              <ScrollLink
                className="cursor-pointer relative group text-white text-lg font-medium py-2"
                to="skills"
                smooth={true}
                duration={800}
                offset={-70}
                onClick={handleNavClick}
              >
                Ko'nikmalar
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </ScrollLink>
              <ScrollLink
                className="cursor-pointer relative group text-white text-lg font-medium py-2"
                to="projects"
                smooth={true}
                duration={800}
                offset={-70}
                onClick={handleNavClick}
              >
                Loyihalar
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </ScrollLink>
              <ScrollLink
                className="cursor-pointer relative group text-white text-lg font-medium py-2"
                to="contact"
                smooth={true}
                duration={800}
                offset={-70}
                onClick={handleNavClick}
              >
                Bog'lanish
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </ScrollLink>
            </nav>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => {
                  setLanguage(true);
                  setIsMenuOpen(false);
                }}
                className={`px-4 py-2 rounded-md text-white transition-all duration-300 ${
                  language ? "bg-[#561e8f]" : "bg-[#2d1152]"
                }`}
              >
                English
              </button>
              <button
                onClick={() => {
                  setLanguage(false);
                  setIsMenuOpen(false);
                }}
                className={`px-4 py-2 rounded-md text-white transition-all duration-300 ${
                  !language ? "bg-[#561e8f]" : "bg-[#2d1152]"
                }`}
              >
                O'zbekcha
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
