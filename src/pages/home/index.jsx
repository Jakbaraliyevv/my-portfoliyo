import { useState } from "react";
import AboutComponents from "../../components/about";
import ContactSection from "../../components/contact";
import Navbar from "../../components/navbar";
import FeaturedProjects from "../../components/projects";
import Showcase from "../../components/showcase";
import SkillsOrbit from "../../components/skills";
import { Element } from "react-scroll";

function Home() {
  const [til, setTil] = useState("uz");

  return (
    <>
      <div>
        <Navbar setTil={setTil} />
        <Showcase til={til} />

        <Element name="about">
          <AboutComponents til={til} />
        </Element>

        <Element name="skills">
          <SkillsOrbit til={til} />
        </Element>

        <Element name="projects">
          <FeaturedProjects til={til} />
        </Element>

        <Element name="contact">
          <ContactSection til={til} />
        </Element>
      </div>
    </>
  );
}

export default Home;
