import AboutComponents from "../../components/about";
import ContactSection from "../../components/contact";
import Navbar from "../../components/navbar";
import FeaturedProjects from "../../components/projects";
import Showcase from "../../components/showcase";
import SkillsOrbit from "../../components/skills";
import { Element } from "react-scroll";

function Home() {
  return (
    <div>
      <Navbar />
      <Showcase />

      <Element name="about">
        <AboutComponents />
      </Element>

      <Element name="skills">
        <SkillsOrbit />
      </Element>

      <Element name="projects">
        <FeaturedProjects />
      </Element>

      <Element name="contact">
        <ContactSection />
      </Element>
    </div>
  );
}

export default Home;
