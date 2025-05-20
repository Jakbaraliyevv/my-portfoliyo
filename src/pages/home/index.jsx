// import AboutComponents from "../../components/about";
// import Navbar from "../../components/navbar";
// import Showcase from "../../components/showcase";
// import SkillsOrbit from "../../components/skills";

// function Home() {
//   return (
//     <div>
//       <Navbar />
//       <Showcase />
//       <AboutComponents />
//       <SkillsOrbit />
//     </div>
//   );
// }

// export default Home;

import AboutComponents from "../../components/about";
import Navbar from "../../components/navbar";
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
        <div className="text-white text-3xl py-20 text-center">
          Projects bo‘limi
        </div>
      </Element>

      <Element name="contact">
        <div className="text-white text-3xl py-20 text-center">
          Contact bo‘limi
        </div>
      </Element>
    </div>
  );
}

export default Home;
