import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import logo from "../../assets/my_logo2.png";
import { useState } from "react";

function Navbar() {
  const [language, setLenguage] = useState(false);

  return (
    <section className="bg-[#1a0b2e] shadow-[0_6px_22px_-3px_rgba(0,0,0,0.1)] top-0 sticky z-50">
      <div className="w-[90%] py-5 m-auto flex items-center justify-between">
        <div
          className="w-[120px] cursor-pointer"
          onClick={() => scroll.scrollToTop({ duration: 800 })}
        >
          <img src={logo} alt="logo" />
        </div>

        <div className="text-[#FFF] text-[19px] font-bold flex items-center gap-[40px]">
          <ScrollLink
            className="cursor-pointer"
            to="about"
            smooth={true}
            duration={800}
            offset={-70}
          >
            About
          </ScrollLink>
          <ScrollLink
            className="cursor-pointer"
            to="skills"
            smooth={true}
            duration={800}
            offset={-70}
          >
            Skills
          </ScrollLink>
          <ScrollLink
            className="cursor-pointer"
            to="projects"
            smooth={true}
            duration={800}
            offset={-70}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            className="cursor-pointer"
            to="contact"
            smooth={true}
            duration={800}
            offset={-70}
          >
            Contact
          </ScrollLink>
        </div>

        <div className="flex items-center gap-5">
          <button
            className={
              language
                ? "text-[19px] w-[60px] h-[30px] font-medium rounded-md text-[#FFF] bg-[#561e8f] flex items-center justify-center"
                : "text-[#FFF] text-[19px] font-medium"
            }
          >
            En
          </button>
          <button
            className={
              language
                ? "text-[#FFF] text-[19px] font-medium"
                : "text-[19px] w-[60px] h-[30px] font-medium rounded-md text-[#FFF] bg-[#561e8f] flex items-center justify-center"
            }
          >
            Uz
          </button>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
