import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import logo from "../../assets/my_logo2.png";
import { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

function Navbar() {
  const [language, setLanguage] = useState(false);
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

  // Home tugmasi uchun scroll funktsiyasi - aniq usulda eng tepaga qaytish
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Asosiy Navbar */}
      <header
        id="main-navbar"
        className={`bg-[#1a0b2e] shadow-md sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="w-[90%] max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div
            className="w-[100px] md:w-[120px] cursor-pointer hover:opacity-80 transition-opacity"
            onClick={scrollToTop}
          >
            <img src={logo} alt="logo" className="w-full h-auto" />
          </div>

          {/* Desktop Navigation (faqat katta ekranlarda) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <ScrollLink
              className="cursor-pointer flex items-center gap-2 group text-white text-base lg:text-[18px] font-medium px-3 py-2 rounded-lg hover:bg-[#2d1152] transition-all"
              to="about"
              smooth={true}
              duration={800}
              offset={-80}
            >
              <span>Men haqimda</span>
            </ScrollLink>

            <ScrollLink
              className="cursor-pointer flex items-center gap-2 group text-white text-base lg:text-[18px] font-medium px-3 py-2 rounded-lg hover:bg-[#2d1152] transition-all"
              to="skills"
              smooth={true}
              duration={800}
              offset={-80}
            >
              <span>Ko'nikmalar</span>
            </ScrollLink>

            <ScrollLink
              className="cursor-pointer flex items-center gap-2 group text-white text-base lg:text-[18px] font-medium px-3 py-2 rounded-lg hover:bg-[#2d1152] transition-all"
              to="projects"
              smooth={true}
              duration={800}
              offset={-80}
            >
              <span>Loyihalar</span>
            </ScrollLink>

            {/* Contact linki qo'shildi */}
            <ScrollLink
              className="cursor-pointer flex items-center gap-2 group text-white text-base lg:text-[18px] font-medium px-3 py-2 rounded-lg hover:bg-[#2d1152] transition-all"
              to="contact"
              smooth={true}
              duration={800}
              offset={-80}
            >
              <span>Bog'lanish</span>
            </ScrollLink>
          </nav>

          {/* Til almashtirish tugmalari */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage(true)}
              className={`px-3 py-1 rounded-md text-sm md:text-base transition-all ${
                language ? "text-white bg-[#561e8f]" : "text-gray-300"
              }`}
            >
              En
            </button>
            <span className="text-gray-400 hidden md:inline">|</span>
            <button
              onClick={() => setLanguage(false)}
              className={`px-3 py-1 rounded-md text-sm md:text-base transition-all ${
                !language ? "text-white bg-[#561e8f]" : "text-gray-300"
              }`}
            >
              Uz
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Footer (faqat kichik ekranlarda) */}
      <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-[#1a0b2e] py-3 z-40 border-t border-[#2d1152] shadow-lg">
        <div className="flex justify-around items-center">
          {/* Home linki - native JavaScript scroll */}
          <button
            onClick={scrollToTop}
            className="flex flex-col items-center text-white text-xs px-2 py-1 rounded-lg active:bg-[#2d1152] transition-all focus:outline-none"
            type="button"
          >
            <FaHome className="text-lg mb-1 text-purple-400" />
            <span>Bosh</span>
          </button>

          {/* About linki */}
          <ScrollLink
            className="flex flex-col items-center text-white text-xs px-2 py-1 rounded-lg active:bg-[#2d1152] transition-all"
            to="about"
            smooth={true}
            duration={800}
            offset={-80}
          >
            <FaUser className="text-lg mb-1 text-purple-400" />
            <span>Haqimda</span>
          </ScrollLink>

          {/* Skills linki */}
          <ScrollLink
            className="flex flex-col items-center text-white text-xs px-2 py-1 rounded-lg active:bg-[#2d1152] transition-all"
            to="skills"
            smooth={true}
            duration={800}
            offset={-80}
          >
            <FaCode className="text-lg mb-1 text-purple-400" />
            <span>Ko'nikma</span>
          </ScrollLink>

          {/* Projects linki */}
          <ScrollLink
            className="flex flex-col items-center text-white text-xs px-2 py-1 rounded-lg active:bg-[#2d1152] transition-all"
            to="projects"
            smooth={true}
            duration={800}
            offset={-80}
          >
            <FaProjectDiagram className="text-lg mb-1 text-purple-400" />
            <span>Loyiha</span>
          </ScrollLink>

          {/* Contact linki */}
          <ScrollLink
            className="flex flex-col items-center text-white text-xs px-2 py-1 rounded-lg active:bg-[#2d1152] transition-all"
            to="contact"
            smooth={true}
            duration={800}
            offset={-80}
          >
            <FaEnvelope className="text-lg mb-1 text-purple-400" />
            <span>Aloqa</span>
          </ScrollLink>
        </div>
      </footer>
    </>
  );
}

export default Navbar;
